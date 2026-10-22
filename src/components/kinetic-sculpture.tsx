import { Euler, Matrix4, PerspectiveCamera, Vector3 } from "three";
import { createRibbonGeometry, SCULPTURE_ROTATION } from "@/lib/ribbon-geometry";
import { SculptureMotion } from "./sculpture-motion";
import { SculptureViewport } from "./sculpture-viewport";

function fallbackFaces() {
  const camera = new PerspectiveCamera(42, 8 / 7, .1, 100);
  camera.position.set(0, .15, 7.6); camera.lookAt(0, 0, 0); camera.updateMatrixWorld();
  const rotation = new Matrix4().makeRotationFromEuler(new Euler(...SCULPTURE_ROTATION));
  const faces: { path: string; depth: number; shade: number }[] = [];
  const light = new Vector3(-3, 5, 4).normalize();
  const geometry = createRibbonGeometry(80, 24), position = geometry.attributes.position;
  for (let u = 0; u < 80; u++) for (let v = 0; v < 24; v++) {
    const indices = [u * 24 + v, u * 24 + (v + 1) % 24, ((u + 1) % 80) * 24 + (v + 1) % 24, ((u + 1) % 80) * 24 + v];
    const points = indices.map(index => new Vector3().fromBufferAttribute(position, index).applyMatrix4(rotation));
    const normal = new Vector3().subVectors(points[1], points[0]).cross(new Vector3().subVectors(points[3], points[0])).normalize();
    if (normal.dot(new Vector3().subVectors(camera.position, points[0])) <= 0) continue;
    const depth = points.reduce((sum, point) => sum + point.z, 0) / 4;
    const shade = Math.round(45 + Math.max(0, normal.dot(light)) * 105);
    const path = points.map((point, index) => {
      point.project(camera); return `${index ? "L" : "M"}${((point.x + 1) * 400).toFixed(1)},${((1 - point.y) * 350).toFixed(1)}`;
    }).join("") + "Z";
    faces.push({ path, depth, shade });
  }
  geometry.dispose();
  return faces.sort((a, b) => a.depth - b.depth);
}

export function KineticSculpture() {
  return <SculptureMotion>
    <figure>
      <SculptureViewport>
        <svg viewBox="0 0 800 700" fill="none" aria-hidden="true">
          {fallbackFaces().map((face, index) => <path key={index} d={face.path} fill={`rgb(${face.shade} ${face.shade + 6} ${face.shade + 12})`} stroke={`rgb(${face.shade} ${face.shade + 6} ${face.shade + 12})`} strokeWidth=".5" />)}
        </svg>
      </SculptureViewport>
      <figcaption><span>IMOV in motion</span><span>Concept artwork · Connected possibilities</span></figcaption>
    </figure>
  </SculptureMotion>;
}
