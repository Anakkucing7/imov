"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Color, MathUtils, Mesh, MeshBasicMaterial, PCFShadowMap, PlaneGeometry, PMREMGenerator, Scene, type Group } from "three";
import { createRibbonGeometry, updateRibbonGeometry, SCULPTURE_ROTATION } from "@/lib/ribbon-geometry";
import { useSculptureMotion } from "./sculpture-motion";

type SceneProps = {
  motion: ReturnType<typeof useSculptureMotion>;
  onReady: () => void; onFailure: () => void; onDispose: () => void;
};

function Sculpture({ motion, onReady, onFailure, onDispose }: SceneProps) {
  const { gl, scene, camera, size, invalidate } = useThree();
  const mobile = size.width < 480;
  const object = useRef<Group>(null), elapsed = useRef(0), prepared = useRef(false);
  const geometry = useMemo(() => createRibbonGeometry(mobile ? 160 : 256, mobile ? 32 : 64), [mobile]);

  useEffect(() => () => geometry.dispose(), [geometry]);
  useEffect(() => {
    const studio = new Scene(); studio.background = new Color("#151b24");
    const panelGeometry = new PlaneGeometry(1, 1);
    const panels = [
      { position: [-3, 4, 5], scale: [5, 3], color: "#eef2f7", energy: 5 },
      { position: [4, 1, 2], scale: [1.5, 5], color: "#e0e0df", energy: 3.5 },
      { position: [-2, -3, 1], scale: [3, 1], color: "#aeb6bf", energy: 2 },
      { position: [1, .5, 6], scale: [3, 4], color: "#eeeeed", energy: 2.5 },
    ].map(panel => {
      const material = new MeshBasicMaterial({ color: new Color(panel.color).multiplyScalar(panel.energy) });
      const mesh = new Mesh(panelGeometry, material);
      mesh.position.set(...panel.position as [number, number, number]); mesh.scale.set(panel.scale[0], panel.scale[1], 1);
      mesh.lookAt(0, 0, 0); studio.add(mesh); return mesh;
    });
    const generator = new PMREMGenerator(gl), environment = generator.fromScene(studio, .04, .1, 100, { size: 128 });
    /* eslint-disable react-hooks/immutability -- Attach Three.js renderer resources only within this effect. */
    scene.environment = environment.texture; scene.environmentIntensity = 1.05;
    generator.dispose(); panelGeometry.dispose(); panels.forEach(panel => panel.material.dispose()); invalidate();
    return () => { scene.environment = null; environment.dispose(); };
    /* eslint-enable react-hooks/immutability */
  }, [gl, scene, invalidate]);
  useEffect(() => {
    const lost = (event: Event) => { event.preventDefault(); onFailure(); };
    gl.domElement.addEventListener("webglcontextlost", lost);
    return () => gl.domElement.removeEventListener("webglcontextlost", lost);
  }, [gl, onFailure]);
  useEffect(() => {
    let cancelled = false;
    gl.compileAsync(scene, camera).then(() => {
      if (cancelled) return;
      gl.render(scene, camera); prepared.current = true; onReady(); invalidate();
    }).catch(() => { if (!cancelled) onFailure(); });
    return () => { cancelled = true; prepared.current = false; onDispose(); };
  }, [gl, scene, camera, geometry, invalidate, onReady, onFailure, onDispose]);

  useFrame((_, delta) => {
    if (!prepared.current) return;
    if (motion.reduced) {
      elapsed.current = 0;
      updateRibbonGeometry(geometry, 0);
      object.current!.rotation.set(...SCULPTURE_ROTATION);
      object.current!.position.y = 0;
      return;
    }
    if (!motion.running) return;
    elapsed.current += Math.min(delta, .05);
    const time = elapsed.current, pointer = motion.progress.current;
    updateRibbonGeometry(geometry, time);
    object.current!.rotation.x = MathUtils.damp(object.current!.rotation.x, SCULPTURE_ROTATION[0] + pointer.y * .06, 3, delta);
    object.current!.rotation.y = MathUtils.damp(object.current!.rotation.y, SCULPTURE_ROTATION[1] + Math.sin(time * .08) * .08 + pointer.x * .1, 3, delta);
    object.current!.rotation.z = SCULPTURE_ROTATION[2] + Math.sin(time * .07) * .025;
    object.current!.position.y = Math.sin(time * .3) * .035;
  });

  return <>
    <ambientLight intensity={.3} />
    <directionalLight position={[-3, 5, 4]} color="#edf2f8" intensity={2.4} castShadow
      shadow-mapSize={[512, 512]} shadow-camera-left={-3} shadow-camera-right={3} shadow-camera-top={3} shadow-camera-bottom={-3} shadow-normalBias={.03} />
    <directionalLight position={[4, 1, -2]} color="#d1d5d9" intensity={2.2} />
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.25, 0]} receiveShadow>
      <planeGeometry args={[8, 8]} /><shadowMaterial transparent opacity={.11} />
    </mesh>
    <group ref={object} rotation={[...SCULPTURE_ROTATION]}>
      <mesh geometry={geometry} castShadow frustumCulled={false}>
        <meshPhysicalMaterial color="#77797b" metalness={.96} roughness={.25} clearcoat={.15} clearcoatRoughness={.3} />
      </mesh>
    </group>
  </>;
}

function Quality() {
  const { size, setDpr } = useThree();
  useEffect(() => { setDpr(size.width < 480 ? 1 : Math.min(devicePixelRatio, 1.5)); }, [size.width, setDpr]);
  return null;
}

export default function SculptureScene(props: SceneProps) {
  return <Canvas camera={{ position: [0, .15, 7.6], fov: 42 }} dpr={[1, 1.5]} shadows={{ type: PCFShadowMap }}
    frameloop={props.motion.running ? "always" : "demand"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    onCreated={({ gl }) => gl.domElement.setAttribute("aria-hidden", "true")}>
    <Quality /><Sculpture {...props} />
  </Canvas>;
}
