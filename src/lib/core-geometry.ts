import { BufferGeometry, ExtrudeGeometry, Float32BufferAttribute, Shape } from "three";

export function createCrystalGeometry() {
  const belt = [[0, 1.3, 0], [.6, .7, 0], [.86, 0, 0], [.5, -.7, 0], [0, -1.3, 0], [-.6, -.7, 0], [-.86, 0, 0], [-.6, .7, 0]];
  const positions: number[] = [];
  belt.forEach((point, index) => {
    const next = belt[(index + 1) % belt.length];
    positions.push(0, .04, .65, ...next, ...point);
    positions.push(0, -.06, -.45, ...point, ...next);
  });
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

export function createOrbitalBand(radius: number, width: number, arc: number) {
  const shape = new Shape();
  shape.absarc(0, 0, radius, 0, arc, false);
  shape.lineTo(Math.cos(arc) * (radius - width), Math.sin(arc) * (radius - width));
  shape.absarc(0, 0, radius - width, arc, 0, true);
  shape.closePath();
  const geometry = new ExtrudeGeometry(shape, { depth: .045, bevelEnabled: true, bevelThickness: .01, bevelSize: .01, bevelSegments: 2, curveSegments: 96, steps: 1 });
  geometry.translate(0, 0, -.0225);
  return geometry;
}
