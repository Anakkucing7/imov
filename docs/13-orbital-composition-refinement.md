# Orbital composition refinement

2026-10-22. Pending visual review. Preserve the premium nucleus, current copy, CTAs and shared interaction infrastructure.

Add a finer, larger third open band at a distinct inclination and depth, with a 160-second reverse drift. Give each ecosystem domain its own physical waypoint and band. Keep the existing readable domain key; lightly drawn leaders connect projected waypoints to that key on desktop. The leader lines follow the same projection as the native satellite links, with no React state updates per frame. Mobile keeps the clear vertical key and matching waypoint colors rather than squeezing technical connectors into a small scene.

Behind the object add two partial guide arcs and a narrow atmospheric wash. Add a soft, flattened base illumination and a faint floor arc beneath the real contact shadow. These are local artwork details, never page-wide grids, particles or HUD panels. Preserve IMOV's navy, iris, cyan, Inter/Jakarta and left-column contrast. The nucleus remains the dominant object.

Affected files: orbital-scene.tsx, orbital-viewport.tsx, imov-core.tsx, hero.css, the artwork route assertion and this specification/decision log. No dependency or unrelated page changes. Reuse verified Three.js APIs; no new API documentation verification is needed. Keep SVG/reduced/no-JavaScript/WebGL-failure artwork coherent with three bands. Retain focus, touch targets, pause and offscreen suspension.

Acceptance: desktop/mobile screenshot critique, navigation and motion/fallback regression suite, no horizontal overflow, lint, standalone types, production build and repository tests. Apply Ponytail for bounded scope, Taste and Frontend Design for hierarchy/spacing; inspect 21st catalog metadata without paid retrieval. Use bundled Playwright because the Browser plugin remains unavailable. Do not use OpenDesign. Preserve the documented Adaptive Premium exceptions to Taste's generic gradient/linework bans. Stop for visual review.

## Implemented and verified

- Preserved the nucleus and both original bands. Added a finer 2.12-radius open band at a distinct inclination with a 160-second reverse drift, versus the existing 90/120-second paths. The first preview made this band too dominant; its radius and vertical extent were reduced before final verification.
- Each band now carries one larger inset capsule waypoint. Native 44px target links, keyboard focus, category highlighting and existing routes remain intact. Desktop leader curves share the waypoint projection and terminate at the corresponding colored label key. Mobile retains the clear vertical key and matching accents, without connector lines.
- Added two faint environmental guide paths, a local radial wash, low floor illumination and a restrained partial floor arc alongside the real contact shadow. No particles, new UI panels, effects dependencies or backend. The server-rendered SVG has three bands and three guide points for reduced motion/no JavaScript/WebGL failures.
- Ponytail informed reuse of the existing renderer, projection loop and motion gate. Taste and Anthropic Frontend Design informed core-first hierarchy, subtle connective detail and screenshot critique. The actual 21st.dev search `orbital hero connected nodes` returned `catalog search failed`; no component was retrieved or adopted. Context7 was not invoked this pass: all APIs reuse the preceding verified implementation. Bundled Playwright/Chrome was actually run; Browser plugin remains unavailable. OpenDesign was not used.

Verification on 2026-10-22, production preview `http://localhost:3006/`:

- `npm run lint`: exit 0.
- `npm run build`: exit 0, all existing pages statically prerendered.
- `npm run typecheck`: exit 0, separately after build.
- `$env:TEST_BASE_URL='http://localhost:3006'; npm test`: 9 passed, 0 failed.
- `richness-check.mjs`: 12 responsive layout checks and 7 interaction groups passed; zero application errors. Added a geometric check that all three SVG leader origins coincide with their projected native waypoint centers within 2 CSS pixels. Retested moving projections, drag/inertia/reset, pointer cancellation, keyboard, focus/descriptors, primary CTA/category journeys, touch/menu, scroll transition, pause/resume with no GPU draw calls while paused, offscreen/simulated hidden suspension, live reduced motion, no-JavaScript, unavailable WebGL and context-loss recovery. No browser assertion failures this pass.
- Taste rendered inspection at 1440/768/390: 0 failures, 2 warnings. The existing 12 responsive/page-wide font sizes remain; the decorative artwork SVG extends beyond the content grid, triggering an off-centre media warning. Text/navigation margins remain aligned and all tested widths have no horizontal document overflow. Taste source scan: exit 1, 9 policy flags (five requested atmospheric gradients, two button hover/focus shadows, two label/section hairlines). These are documented IMOV/user-direction exceptions, not a claimed clean policy scan.

Opened desktop/tablet/mobile folds and page sheets plus the static fallback. The central module still leads; the third band increases vertical layering without replacing its identity; background arcs and the floor cue fill the surrounding space while leaving the left copy clear. Design review judgment: design 8/10, usability 8/10, creativity 7/10, content 8/10, pending owner approval.

Screenshots, Taste report and browser results: `C:/Users/Al Fath/.codex/visualizations/2026/10/21/01a15e78-cb53-7981-bae9-15640cebb5a2/orbital-richness/`. Runner: `richness-check.mjs` in its parent directory. No new dependency, deployment or unrelated page changes.

Remaining limitations: Chromium/headless software rendering only; Safari, Firefox, physical-device GPU performance and real background-tab throttling remain unchecked. Existing Fiber/Three Clock deprecation, software PMREM precision, intentional context-loss disposal and Node direct-TypeScript import warnings remain. Stop for visual review.
