import { BufferAttribute, BufferGeometry, DynamicDrawUsage, Sphere, Vector3 } from "three";

const center = new Vector3(), before = new Vector3(), after = new Vector3();
const tangent = new Vector3(), radial = new Vector3(), binormal = new Vector3();
export const SCULPTURE_ROTATION = [.32, -.32, -.55] as const;

function flowEnvelope(angle: number, time: number) {
  const wave = .5 + .5 * Math.sin(angle - time * .42 + .35 * Math.sin(2 * angle - time * .13));
  return wave * wave;
}

function centerAt(target: Vector3, angle: number, time: number) {
  const outward = flowEnvelope(angle, time);
  const radius = 1.42 + .46 * Math.cos(3 * angle) + .09 * Math.cos(angle + .5)
    - .04 * Math.sin(2 * angle + .8) + .16 * outward - .05 + .035 * Math.sin(4 * angle - time * .38);
  const turn = 2 * angle + .07 * Math.sin(2 * angle + time * .21);
  target.set(radius * Math.cos(turn), radius * Math.sin(turn),
    .75 * Math.sin(3 * angle) + .12 * Math.sin(5 * angle - time * .32)
      + .18 * Math.sin(2 * angle - time * .65) + .28 * outward - .08);
}

export function createRibbonGeometry(segments: number, sides: number) {
  const geometry = new BufferGeometry();
  geometry.userData = { segments, sides };
  geometry.setAttribute("position", new BufferAttribute(new Float32Array(segments * sides * 3), 3).setUsage(DynamicDrawUsage));
  geometry.setAttribute("normal", new BufferAttribute(new Float32Array(segments * sides * 3), 3).setUsage(DynamicDrawUsage));
  const indices: number[] = [];
  for (let u = 0; u < segments; u++) for (let v = 0; v < sides; v++) {
    const a = u * sides + v, b = ((u + 1) % segments) * sides + v;
    const c = u * sides + (v + 1) % sides, d = ((u + 1) % segments) * sides + (v + 1) % sides;
    indices.push(a, c, b, c, d, b);
  }
  geometry.setIndex(indices);
  geometry.boundingSphere = new Sphere(new Vector3(), 3);
  updateRibbonGeometry(geometry, 0);
  return geometry;
}

export function updateRibbonGeometry(geometry: BufferGeometry, time: number) {
  const { segments, sides } = geometry.userData;
  const positions = geometry.attributes.position;
  const normals = geometry.attributes.normal;
  for (let u = 0; u < segments; u++) {
    const angle = u / segments * Math.PI * 2 + time * .13;
    centerAt(center, angle, time);
    centerAt(before, angle - .001, time);
    centerAt(after, angle + .001, time);
    tangent.subVectors(after, before).normalize();
    radial.set(Math.cos(2 * angle), Math.sin(2 * angle), 0).addScaledVector(tangent, -tangent.dot(radial)).normalize();
    binormal.crossVectors(tangent, radial).normalize();
    const twist = angle + .45 * Math.sin(3 * angle) + .3 * Math.sin(4 * angle - time * .35) + .11 * Math.cos(7 * angle + time * .13);
    // Couple the advancing bulge and narrowing return, rather than breathing the whole body.
    const outward = flowEnvelope(angle, time);
    const width = .32 + .31 * outward;
    const thickness = .13 + .20 * outward;
    const ct = Math.cos(twist), st = Math.sin(twist);
    for (let v = 0; v < sides; v++) {
      const cross = v / sides * Math.PI * 2;
      const groove = Math.cos(cross) * Math.PI * 5 + 2 * angle - time * .9;
      const ridge = .5 + .5 * Math.cos(groove), fold = ridge * ridge;
      const wide = Math.cos(cross) * width;
      const thin = Math.sin(cross) * thickness * (1 - .24 * fold) + .055 * Math.sin(3 * angle - time * .29);
      const r = wide * ct - thin * st, b = wide * st + thin * ct;
      const x = center.x + radial.x * r + binormal.x * b;
      const y = center.y + radial.y * r + binormal.y * b;
      const z = center.z + radial.z * r + binormal.z * b;
      const inner = Math.exp(-(x * x + y * y) / 1.2), scale = 1 - .82 * inner;
      positions.setXYZ(u * sides + v, x * scale, y * scale, z - .24 * inner);
      const dw = -Math.sin(cross) * width;
      const df = 5 * Math.PI * ridge * Math.sin(groove) * Math.sin(cross);
      const dh = thickness * (Math.cos(cross) * (1 - .24 * fold) - Math.sin(cross) * .24 * df);
      const dr = dw * ct - dh * st, db = dw * st + dh * ct;
      const dx = radial.x * dr + binormal.x * db, dy = radial.y * dr + binormal.y * db;
      const dz = radial.z * dr + binormal.z * db;
      // Transform the section tangent with the funnel so reflections follow the narrowed cavity.
      const gradient = 2 * (x * dx + y * dy) / 1.2 * inner;
      normals.setXYZ(u * sides + v, dx * scale + x * .82 * gradient,
        dy * scale + y * .82 * gradient, dz + .24 * gradient);
    }
  }
  positions.needsUpdate = true;
  // Exact cross-section derivatives avoid reflection banding at the lower mobile mesh resolution.
  for (let u = 0; u < segments; u++) for (let v = 0; v < sides; v++) {
    before.fromBufferAttribute(positions, ((u + 1) % segments) * sides + v);
    after.fromBufferAttribute(positions, ((u + segments - 1) % segments) * sides + v);
    tangent.subVectors(before, after);
    radial.fromBufferAttribute(normals, u * sides + v).cross(tangent).normalize();
    normals.setXYZ(u * sides + v, radial.x, radial.y, radial.z);
  }
  normals.needsUpdate = true;
}
