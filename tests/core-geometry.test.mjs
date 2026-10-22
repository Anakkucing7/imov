import test from "node:test";
import assert from "node:assert/strict";
import { createCrystalGeometry, createOrbitalBand } from "../src/lib/core-geometry.ts";

test("crystal is elongated, faceted and closed with finite outward normals", () => {
  const geometry = createCrystalGeometry();
  geometry.computeBoundingBox();
  const bounds = geometry.boundingBox;
  assert.ok(bounds.max.z - bounds.min.z > 1);
  assert.ok(bounds.max.y - bounds.min.y > (bounds.max.x - bounds.min.x) * 1.4);
  assert.ok(Math.abs(bounds.max.x + bounds.min.x) < 1e-6);
  const positions = geometry.attributes.position;
  assert.ok(Array.from(positions.array).every(Number.isFinite));
  assert.equal(positions.count / 3, 16);
  assert.ok(Array.from(geometry.attributes.normal.array).every(Number.isFinite));
  const edges = new Map();
  let volume = 0;
  for (let i = 0; i < positions.count; i += 3) {
    const triangle = [0, 1, 2].map(offset => [positions.getX(i + offset), positions.getY(i + offset), positions.getZ(i + offset)]);
    const [a, b, c] = triangle;
    volume += a[0] * (b[1] * c[2] - b[2] * c[1]) + a[1] * (b[2] * c[0] - b[0] * c[2]) + a[2] * (b[0] * c[1] - b[1] * c[0]);
    triangle.forEach((point, index) => {
      const key = [point.join(","), triangle[(index + 1) % 3].join(",")].sort().join("|");
      edges.set(key, (edges.get(key) || 0) + 1);
    });
  }
  assert.ok(volume > 0, "facets face outward");
  assert.ok([...edges.values()].every(count => count === 2), "each seam joins exactly two facets");
  geometry.dispose();
});

test("orbital ribbon preserves its central void and deliberate open seam", () => {
  const arc = Math.PI * 1.7;
  const geometry = createOrbitalBand(2.05, .12, arc);
  const positions = geometry.attributes.position;
  assert.ok(Array.from(positions.array).every(Number.isFinite));
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i), y = positions.getY(i), angle = (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
    assert.ok(Math.hypot(x, y) > 1.9, "ribbon must not fill its center");
    assert.ok(angle <= arc + .04 || angle >= Math.PI * 2 - .04, "open seam must not be triangulated shut");
  }
  geometry.dispose();
});
