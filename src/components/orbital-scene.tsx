"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { AdditiveBlending, CanvasTexture, Color, EdgesGeometry, MathUtils, Mesh, MeshBasicMaterial, PCFShadowMap, PlaneGeometry, PMREMGenerator, Scene, SRGBColorSpace, Vector3, type Group, type MeshStandardMaterial } from "three";
import { coastOrbit, type OrbitPose } from "@/lib/orbital-motion";
import { createCrystalGeometry, createOrbitalBand } from "@/lib/core-geometry";
import { useCoreMotion } from "./core-motion";

type SceneProps = {
  motion: ReturnType<typeof useCoreMotion>;
  pose: React.RefObject<OrbitPose>;
  links: React.RefObject<(HTMLAnchorElement | null)[]>;
  guides: React.RefObject<(SVGPathElement | null)[]>;
  onReady: () => void; onFailure: () => void; onDispose: () => void;
};

const bands = [
  { radius: 2.0, width: .075, arc: Math.PI * 1.88, tilt: [1.0, .05, -.48], position: [0, 0, 0], phase: .25, speed: Math.PI * 2 / 140 },
  { radius: 1.62, width: .035, arc: Math.PI * 1.85, tilt: [1.4, .05, .12], position: [0, -.55, .25], phase: -.4, speed: -Math.PI * 2 / 180 },
  { radius: 2.22, width: .025, arc: Math.PI * 1.9, tilt: [.55, -.15, .15], position: [0, .1, -.45], phase: .1, speed: Math.PI * 2 / 220 },
] as const;
const nodes = [
  { kind: "products", band: 0, angle: 2.4, color: "#9ba9ff" },
  { kind: "developers", band: 1, angle: .15, color: "#8be4e8" },
  { kind: "ai", band: 2, angle: 4.85, color: "#b7c7e6" },
] as const;

function System({ motion, pose, links, guides, onReady, onDispose, onFailure }: SceneProps) {
  const { gl, scene, camera, invalidate } = useThree();
  const system = useRef<Group>(null), nucleus = useRef<Group>(null);
  const rotors = useRef<(Group | null)[]>([]), satellites = useRef<(Group | null)[]>([]);
  const coreMaterial = useRef<MeshStandardMaterial>(null), elapsed = useRef(0);
  const presented = useRef(false);
  const projected = useMemo(() => new Vector3(), []);
  const geometry = useMemo(() => {
    const crystal = createCrystalGeometry();
    return { crystal, edge: new EdgesGeometry(crystal, 25), bands: bands.map(band => createOrbitalBand(band.radius, band.width, band.arc)) };
  }, []);
  const wordmark = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512; canvas.height = 256;
    const context = canvas.getContext("2d")!;
    context.font = `700 108px ${getComputedStyle(document.body).getPropertyValue("--font-jakarta") || "sans-serif"}`;
    context.textBaseline = "middle";
    const x = (512 - context.measureText("imov.").width) / 2;
    context.fillStyle = "#f7f9fc"; context.fillText("imov", x, 128);
    context.fillStyle = "#8be4e8"; context.fillText(".", x + context.measureText("imov").width, 128);
    const texture = new CanvasTexture(canvas); texture.colorSpace = SRGBColorSpace;
    return texture;
  }, []);
  const halo = useMemo(() => {
    const canvas = document.createElement("canvas"); canvas.width = canvas.height = 128;
    const context = canvas.getContext("2d")!;
    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, "rgba(255,255,255,.6)"); gradient.addColorStop(.4, "rgba(255,255,255,.16)"); gradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = gradient; context.fillRect(0, 0, 128, 128);
    return new CanvasTexture(canvas);
  }, []);

  useEffect(() => () => {
    geometry.crystal.dispose(); geometry.edge.dispose();
    geometry.bands.forEach(band => band.dispose()); wordmark.dispose(); halo.dispose();
  }, [geometry, wordmark, halo]);
  useEffect(() => {
    const lost = (event: Event) => { event.preventDefault(); onFailure(); };
    gl.domElement.addEventListener("webglcontextlost", lost);
    return () => gl.domElement.removeEventListener("webglcontextlost", lost);
  }, [gl, onFailure]);
  useEffect(() => {
    const studio = new Scene(); studio.background = new Color("#080f1d");
    const panelGeometry = new PlaneGeometry(1, 1);
    const panels = [
      { position: [-3, 4, 5], scale: [4, 2], color: "#e5edff", energy: 5 },
      { position: [4, 1, -2], scale: [1, 4], color: "#8be4e8", energy: 3 },
      { position: [-1, -3, 2], scale: [3, 1], color: "#6478ff", energy: 1.2 },
    ].map(panel => {
      const material = new MeshBasicMaterial({ color: new Color(panel.color).multiplyScalar(panel.energy) });
      const mesh = new Mesh(panelGeometry, material);
      mesh.position.set(...panel.position as [number, number, number]); mesh.scale.set(panel.scale[0], panel.scale[1], 1); mesh.lookAt(0, 0, 0); studio.add(mesh);
      return mesh;
    });
    const generator = new PMREMGenerator(gl);
    const environment = generator.fromScene(studio, .04, .1, 100, { size: 128 });
    /* eslint-disable react-hooks/immutability -- Three.js owns mutable renderer state; attach and detach only in this effect. */
    scene.environment = environment.texture; scene.environmentIntensity = 1.2;
    generator.dispose(); panelGeometry.dispose(); panels.forEach(panel => panel.material.dispose()); invalidate();
    return () => { scene.environment = null; environment.dispose(); };
    /* eslint-enable react-hooks/immutability */
  }, [gl, scene, invalidate]);
  useEffect(() => {
    let cancelled = false;
    gl.compileAsync(scene, camera).then(() => {
      if (cancelled) return;
      gl.render(scene, camera);
      presented.current = true;
      onReady();
      invalidate();
    }).catch(() => { if (!cancelled) onFailure(); });
    return () => { cancelled = true; presented.current = false; onDispose(); };
  }, [gl, scene, camera, invalidate, onReady, onDispose, onFailure]);

  useFrame(({ camera, size }, delta) => {
    const dt = Math.min(.05, delta), progress = motion.progress.current;
    if (motion.running && presented.current) {
      elapsed.current += dt; coastOrbit(pose.current, dt);
      const object = system.current!;
      object.rotation.x = MathUtils.damp(object.rotation.x, pose.current.pitch * .65 + progress.y * .025, 7, dt);
      object.rotation.y = MathUtils.damp(object.rotation.y, pose.current.yaw * .62 + progress.x * .04, 7, dt);
      object.position.y = Math.sin(elapsed.current * .36) * .035;
      object.scale.setScalar(MathUtils.damp(object.scale.x, 1 + progress.scroll * .1, 5, dt));
      nucleus.current!.scale.setScalar(1 - progress.scroll * .12);
      coreMaterial.current!.emissiveIntensity = .85 + Math.sin(elapsed.current * Math.PI / 4) * .08;
      bands.forEach((band, index) => { rotors.current[index]!.rotation.z = band.phase + elapsed.current * band.speed; });
    }
    system.current!.updateMatrixWorld(true);
    satellites.current.forEach((satellite, index) => {
      const link = links.current[index]; if (!satellite || !link) return;
      satellite.getWorldPosition(projected);
      const obscured = projected.z < .6 && Math.hypot(projected.x, projected.y) < 1.08;
      projected.project(camera);
      link.style.transform = `translate(${(projected.x * .5 + .5) * size.width}px, ${(-projected.y * .5 + .5) * size.height}px) translate(-50%, -50%)`;
      link.style.visibility = obscured && link !== document.activeElement ? "hidden" : "visible";
      const guide = guides.current[index];
      if (guide) {
        const x = (projected.x * .5 + .5) * 800, y = (-projected.y * .5 + .5) * 700;
        const outside = x < 400 ? Math.min(x - 28, 210) : Math.max(x + 28, 630);
        const end = [44, 298, 589][index];
        guide.setAttribute("d", `M${x} ${y} C${outside} ${y + 50} ${end} 630 ${end} 700`);
        guide.style.visibility = link.style.visibility;
      }
    });
  });

  return <>
    <ambientLight intensity={.18} />
    <directionalLight position={[-3, 5, 4]} color="#e5edff" intensity={2.2} castShadow
      shadow-mapSize={[512, 512]} shadow-camera-left={-3} shadow-camera-right={3} shadow-camera-top={3} shadow-camera-bottom={-3} shadow-normalBias={.025} shadow-radius={4} />
    <directionalLight position={[4, 1, -3]} color="#8be4e8" intensity={2.8} />
    <pointLight position={[-1, -.5, 2]} color="#6478ff" intensity={2.5} decay={2} />
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.65, 0]} receiveShadow>
      <planeGeometry args={[8, 8]} /><shadowMaterial transparent opacity={.18} />
    </mesh>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.66, 0]}>
      <planeGeometry args={[5, 3]} /><meshBasicMaterial map={halo} color="#6478ff" transparent opacity={.15} depthWrite={false} />
    </mesh>
    <group ref={system}>
      <sprite position={[0, .05, -.8]} scale={[3.4, 3.4, 1]}>
        <spriteMaterial map={halo} color="#6478ff" transparent opacity={.28} blending={AdditiveBlending} depthWrite={false} />
      </sprite>
      <group ref={nucleus} rotation={[.1, -.32, -.18]}>
        <mesh geometry={geometry.crystal} scale={.74}>
          <meshStandardMaterial ref={coreMaterial} color="#324d91" metalness={.45} roughness={.25} emissive="#6478ff" emissiveIntensity={.85} flatShading />
        </mesh>
        <mesh geometry={geometry.crystal} castShadow>
          <meshPhysicalMaterial color="#8caac7" metalness={.12} roughness={.12} transmission={.72} thickness={.65} ior={1.5}
            attenuationColor="#273d78" attenuationDistance={1.6} clearcoat={.8} clearcoatRoughness={.2} flatShading />
        </mesh>
        <lineSegments geometry={geometry.edge}>
          <lineBasicMaterial color="#8be4e8" transparent opacity={.24} />
        </lineSegments>
        <mesh position={[0, -.63, .37]} rotation={[.48, 0, 0]}>
          <planeGeometry args={[.5, .25]} /><meshBasicMaterial map={wordmark} transparent toneMapped={false} depthWrite={false} />
        </mesh>
      </group>
      {bands.map((band, bandIndex) => {
        const active = nodes.some(node => node.band === bandIndex && motion.activeDomain === node.kind);
        return <group key={bandIndex} rotation={[0, 0, band.tilt[2]]} position={[...band.position]}>
          <group rotation={[band.tilt[0], band.tilt[1], 0]}>
          <group ref={element => { rotors.current[bandIndex] = element; }} rotation={[0, 0, band.phase]}>
            <mesh geometry={geometry.bands[bandIndex]} castShadow>
              <meshPhysicalMaterial color={active ? "#526c91" : bandIndex === 2 ? "#17263c" : "#30445e"} metalness={.85} roughness={.26} clearcoat={.65} clearcoatRoughness={.2} />
            </mesh>
            <mesh position={[0, 0, .03]}>
              <torusGeometry args={[band.radius - band.width, .006, 6, 96, band.arc]} />
              <meshBasicMaterial color={nodes[bandIndex].color} transparent opacity={active ? .75 : .35} toneMapped={false} />
            </mesh>
            {nodes.map((node, index) => node.band === bandIndex && <group key={node.kind} ref={element => { satellites.current[index] = element; }}
              position={[Math.cos(node.angle) * (band.radius - band.width / 2), Math.sin(node.angle) * (band.radius - band.width / 2), .055]} rotation={[0, 0, node.angle]}>
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <capsuleGeometry args={[.05, .14, 4, 8]} /><meshPhysicalMaterial color="#263d54" metalness={.8} roughness={.2} />
              </mesh>
              <mesh position={[0, 0, .027]} scale={motion.activeDomain === node.kind ? 1.25 : 1}>
                <boxGeometry args={[.14, .025, .045]} /><meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={motion.activeDomain === node.kind ? 1.4 : .8} />
              </mesh>
            </group>)}
          </group>
          </group>
        </group>;
      })}
    </group>
  </>;
}

export default function OrbitalScene(props: SceneProps) {
  return <Canvas camera={{ position: [0, .15, 7.1], fov: 42 }} dpr={[1, 1.5]} shadows={{ type: PCFShadowMap }}
    frameloop={props.motion.running ? "always" : "demand"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    fallback={null} onCreated={({ gl }) => { gl.domElement.setAttribute("aria-hidden", "true"); gl.transmissionResolutionScale = .5; }}>
    <System {...props} />
  </Canvas>;
}
