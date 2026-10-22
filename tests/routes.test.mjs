import test from "node:test";
import assert from "node:assert/strict";

const base = process.env.TEST_BASE_URL || "http://localhost:3000";

test("home renders the primary entry point", async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="en"/);
  assert.match(html, /<main[^>]*id="main"/);
  assert.match(html, /<h1/);
  assert.match(html, /IMOV/i);
  assert.match(html, /href="\/explore"/);
  assert.match(html, /href="\/vision"/);
});

test("Explore distinguishes planned products from AI vision", async () => {
  const response = await fetch(`${base}/explore`);
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const id of ["digital-products", "development-services", "ai-building"]) {
    assert.ok(html.includes(`id="${id}"`), `missing category ${id}`);
  }
  assert.match(html, /In development/);
  assert.match(html, /Future vision/);
  assert.match(html, /Illustrative use-cases/);
  assert.match(html, /No catalog or downloads are available yet/);
});

test("hero serves its concept artwork and honest copy before hydration", async () => {
  const html = await (await fetch(base)).text();
  assert.match(html, /IMOV in motion/);
  assert.match(html, /Intertwined flowing metal ribbons surrounding an open center/);
  assert.doesNotMatch(html, /IMOV Orbital Core|core-satellite|orbital-label|core-connections/);
  assert.match(html, /Concept artwork/);
  assert.match(html, /An ecosystem in development/);
  assert.match(html, /href="#ecosystem-title"/);
  assert.match(html, /Pause motion/);
});

test("Vision renders the three proposed stages without launch promises", async () => {
  const response = await fetch(`${base}/vision`);
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const id of ["discovery", "creators", "assistance"]) assert.ok(html.includes(`id="${id}"`));
  assert.match(html, /not a launch schedule/);
  assert.match(html, /Where we are today/);
});

test("all rendered internal links and anchors resolve", async () => {
  const pages = new Map();
  for (const route of ["/", "/explore", "/vision"]) pages.set(route, await (await fetch(`${base}${route}`)).text());
  for (const [route, html] of pages) {
    for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const destination = new URL(href, `${base}${route}`);
      assert.equal(destination.origin, new URL(base).origin);
      assert.ok(pages.has(destination.pathname), `unimplemented route: ${href}`);
      if (destination.hash) assert.ok(pages.get(destination.pathname).includes(`id="${destination.hash.slice(1)}"`), `missing anchor: ${href}`);
    }
  }
});
