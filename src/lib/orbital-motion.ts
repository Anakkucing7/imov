export type OrbitPose = {
  yaw: number; pitch: number; velocityX: number; velocityY: number; dragging: boolean;
};

export function createOrbitPose(): OrbitPose {
  return { yaw: 0, pitch: 0, velocityX: 0, velocityY: 0, dragging: false };
}

export function dragOrbit(pose: OrbitPose, dx: number, dy: number, seconds: number) {
  const duration = Math.max(.008, Math.min(.1, seconds));
  pose.yaw += dx * .006;
  pose.pitch = Math.max(-.65, Math.min(.65, pose.pitch + dy * .006));
  pose.velocityX = Math.max(-1.4, Math.min(1.4, dx * .006 / duration));
  pose.velocityY = Math.max(-.8, Math.min(.8, dy * .006 / duration));
}

export function coastOrbit(pose: OrbitPose, seconds: number) {
  if (pose.dragging) return;
  const dt = Math.max(0, Math.min(.05, seconds));
  const decay = Math.exp(-4 * dt);
  pose.yaw += pose.velocityX * (1 - decay) / 4;
  pose.pitch = Math.max(-.65, Math.min(.65, pose.pitch + pose.velocityY * (1 - decay) / 4));
  pose.velocityX *= decay;
  pose.velocityY *= decay;
}
