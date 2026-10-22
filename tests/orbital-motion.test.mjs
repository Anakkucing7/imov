import test from "node:test";
import assert from "node:assert/strict";
import { createOrbitPose, dragOrbit, coastOrbit } from "../src/lib/orbital-motion.ts";

test("orbital drag bounds pitch and release speed even for extreme input", () => {
  const pose = createOrbitPose();
  dragOrbit(pose, 5000, -5000, 0);
  assert.equal(pose.pitch, -.65);
  assert.equal(pose.velocityX, 1.4);
  assert.equal(pose.velocityY, -.8);
  assert.ok(Object.values(pose).every(value => typeof value !== "number" || Number.isFinite(value)));
});

test("inertia decays consistently across frame rates and never runs during dragging", () => {
  const a = { ...createOrbitPose(), velocityX: 1, velocityY: .4 };
  const b = { ...a };
  for (let i = 0; i < 60; i++) coastOrbit(a, 1 / 60);
  for (let i = 0; i < 120; i++) coastOrbit(b, 1 / 120);
  assert.ok(Math.abs(a.yaw - b.yaw) < 1e-10);
  assert.ok(a.velocityX < .02 && a.yaw > 0);
  const held = { ...a, dragging: true };
  coastOrbit(a, 10);
  assert.ok(a.yaw - held.yaw < .002, "resuming after background time must not jump");
  const before = { ...held };
  coastOrbit(held, .05);
  assert.deepEqual(held, before);
});
