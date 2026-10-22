import test from "node:test";
import assert from "node:assert/strict";
import { createRibbonGeometry, updateRibbonGeometry } from "../src/lib/ribbon-geometry.ts";

test("ribbons are closed indexed surfaces with finite unit normals and no duplicate seam", () => {
  const geometry = createRibbonGeometry(80, 8), edges = new Map();
  assert.equal(geometry.attributes.position.count, 640);
  const indices = geometry.index.array;
  for (let i = 0; i < indices.length; i += 3) for (let edge = 0; edge < 3; edge++) {
    const pair = [indices[i + edge], indices[i + (edge + 1) % 3]].sort((a,b) => a-b).join(":");
    edges.set(pair, (edges.get(pair) || 0) + 1);
  }
  assert.ok([...edges.values()].every(count => count === 2));
  const normals = geometry.attributes.normal;
  for (let i = 0; i < normals.count; i++) assert.ok(Math.abs(Math.hypot(normals.getX(i),normals.getY(i),normals.getZ(i))-1)<1e-5);
  geometry.dispose();
});

test("propagating waves change pairwise distances, proving non-rigid surface deformation", () => {
  const geometry = createRibbonGeometry(80, 8), before = geometry.attributes.position.array.slice();
  const distance = (array,a,b) => Math.hypot(...[0,1,2].map(axis=>array[a*3+axis]-array[b*3+axis]));
  const initialVersion = geometry.attributes.normal.version;
  updateRibbonGeometry(geometry, 6);
  const after = geometry.attributes.position.array;
  let changed = 0;
  for (let i = 0; i < 600; i += 17) if (Math.abs(distance(before,i,i+25)-distance(after,i,i+25))>.01) changed++;
  assert.ok(changed>10, "rigid rotation cannot change these distances");
  assert.ok(geometry.attributes.normal.version>initialVersion);
  geometry.dispose();
});

test("all ribbons preserve the hollow opening and bounded smooth geometry across sampled motion", () => {
    const geometry = createRibbonGeometry(160,32);
    for (let time=0;time<=40;time+=2) {
      updateRibbonGeometry(geometry,time);
      const positions=geometry.attributes.position;
      assert.ok(Array.from(positions.array).every(Number.isFinite));
      for(let i=0;i<positions.count;i++) {
        assert.ok(Math.hypot(positions.getX(i),positions.getY(i))>.04,"narrow funnel aperture stays open");
        assert.ok(Math.hypot(positions.getX(i),positions.getY(i),positions.getZ(i))<3,"fixed culling bound stays valid");
      }
    }
    geometry.dispose();
});

test("mobile mesh uses fewer vertices and time-zero updates are deterministic", () => {
  const mobile=createRibbonGeometry(160,32),desktop=createRibbonGeometry(256,64);
  assert.ok(mobile.attributes.position.count<desktop.attributes.position.count/2);
  const before=mobile.attributes.position.array.slice();
  updateRibbonGeometry(mobile,9);updateRibbonGeometry(mobile,0);
  assert.deepEqual(mobile.attributes.position.array,before);
  mobile.dispose();desktop.dispose();
});

test("outward flow swells locally, contracts into a neck and travels asymmetrically", () => {
  const geometry = createRibbonGeometry(192,32);
  const sections = () => {
    const p = geometry.attributes.position;
    return Array.from({length:192},(_,u)=>Math.hypot(
      p.getX(u*32)-p.getX(u*32+16),p.getY(u*32)-p.getY(u*32+16),p.getZ(u*32)-p.getZ(u*32+16)));
  };
  const start=sections();
  assert.ok(Math.max(...start)/Math.min(...start)>1.9,"local swelling remains distinct from narrow return");
  const repetition=start.reduce((sum,width,u)=>sum+Math.abs(width-start[(u+64)%192]),0)/192;
  assert.ok(repetition>.2,"three lobes must not repeat the same width profile");
  updateRibbonGeometry(geometry,5);
  const later=sections();
  const peak=values=>values.indexOf(Math.max(...values));
  assert.ok(Math.abs(peak(start)-peak(later))>20,"bulge advances along the body");
  assert.ok(start.some((width,u)=>width-later[u]>.35),"a former bulge contracts rather than scaling the whole object");
  geometry.dispose();
});
