# Premium orbital energy core

2026-10-22. Pending visual approval. This supersedes M1.7's small cube and three equal-status circular hoops.

## Art direction

The nucleus must lead. Build one substantial, canted, chamfered square module with a recessed luminous wafer and a frosted glass face. A blue-black metal chassis, polished bevels and restrained cyan/periwinkle seams should read as different materials. Remove the round logo badge and the exposed cube silhouette. Keep the existing wordmark as a quiet surface marking.

Use two broad, open orbital bands with related but unequal inclinations, radii and depths. They form a supporting equatorial enclosure around the large nucleus, rather than three crossing electron paths. Replace spherical satellite beads with small inset capsule guide points. Three guide points continue to represent Digital Products, Developer Services and Future AI; two can share a band. Keep their native links and keyboard equivalence.

Preserve midnight #0B1120, iris #6478FF, cyan #8BE4E8, cloud #F7F9FC, action #8190FF, Jakarta/Inter and the left copy/CTA composition. Arrange domain labels as an aligned legend beneath the object, matching the guide-point accents; hover/focus highlights the matching physical marker and band. This removes arbitrary floating text positions and protects the object silhouette. Mobile keeps descriptions visible in a vertical list.

## Material, lighting and motion

- Generate a compact studio reflection environment from three deliberate softbox panels; no downloaded environment. Use dark physical metals with clearcoat and a rough transmissive inner pane. Keep depth writing and physical occlusion appropriate to each surface.
- Soft key, cool rim and restrained internal light separate the front, bevel and sidewalls. Use a small local energy halo for soft emissive radiance instead of adding a full-screen bloom dependency. Add an actual receiving shadow plane under the suspended object and a modest shadow map; no giant glow field or decorative particle effects.
- Slow band drift to roughly 90/120 seconds, subtle vertical suspension and an eight-second lighting breath. Preserve bounded drag/inertia, pointer lean, keyboard rotation/reset, pause, hidden/offscreen suspension and the native scroll handoff. Reduce input sensitivity if the larger object needs it; no automatic whole-object spinning.
- Update the server-rendered static SVG to match the new dominant nucleus and two-band silhouette. Loading, reduced motion, absent WebGL, context loss and no JavaScript remain complete experiences. Existing controls/routes must continue working.

## Scope and acceptance

Change orbital-scene.tsx, the SVG in imov-core.tsx, home-only hero.css, reference-independent geometry if needed, this spec and the decision log. Reuse OrbitalViewport/CoreMotion and the existing dependencies. No unrelated pages or new services.

Inspect desktop/mobile screenshots, including a static/reduced view. Run lint, standalone types, production build, nine available tests and the browser acceptance suite for layouts, navigation, drag/keyboard, native satellite links, pause, scroll and failure recovery. Confirm the core is visually dominant and labels no longer float arbitrarily. Stop for visual review.

## Skills and tools

Apply Ponytail (reuse interaction infrastructure, no added dependency), Taste and Frontend Design (silhouette, hierarchy, material contrast and screenshot critique). 21st.dev catalog search was called and failed again; no component or paid retrieval is adopted. Context7 is consulted for physical transmission, lighting and shadow behavior. The existing Playwright/Chrome runtime is accessible; Browser plugin/skill is absent. OpenDesign remains prohibited. Explicit IMOV art direction supersedes generic no-gradient/photography prescriptions.

## Implementation and verification

Implemented the original beveled chassis, open aperture, recessed wafer, transmissive face and two extruded ribbons in the existing isolated Three.js scene. Capsule markers replace bead-shaped satellites. The existing viewport, native links, bounded drag/inertia, keyboard controls, motion gate and scroll controller are reused. No dependency, navigation, left-column copy or CTA changes. The supplied Ink Orbit reference remains an engineering reference for direct manipulation and continuous frame updates; its sculpture, morphing, SaaS layout and branding are not adopted. New geometry, studio/material treatment and two-band composition are original IMOV work.

Actual tool contributions: Ponytail kept the scope to existing interaction infrastructure plus one geometry module; Taste and Anthropic Frontend Design informed core-first hierarchy, asymmetrical bands and the aligned domain key. Context7 verified Three.js physical transmission, its reduced-resolution pass and shadow receivers. The 21st.dev `cinematic 3d glass hero` component search returned `catalog search failed`; no component source was retrieved. Bundled Playwright/Chrome provided functional and responsive verification because the Browser plugin is unavailable. OpenDesign was not invoked.

Commands and results on 2026-10-22:

- `npm run lint`: exit 0.
- `npm run typecheck`: exit 0, run separately after the production build.
- `npm run build`: exit 0; homepage, Explore and Vision remain statically prerendered.
- `$env:TEST_BASE_URL='http://localhost:3006'; npm test`: 9 passed, 0 failed. Includes new geometry checks for finite depth, the genuine frame aperture and the ribbon's open seam.
- `premium-check.mjs` against the production server: 12 responsive layout checks (home 360–1920px plus Explore/Vision), 7 interaction groups passed, no application errors. Covers genuine 3D projection/motion, drag/release/keyboard/reset/cancel, GPU suspension on pause/offscreen/simulated hidden state, scroll handoff, native links/focus/CTA, touch navigation, live reduced motion, no JavaScript, unavailable WebGL and context loss. The first run failed the old 25px drag assertion; deliberately restrained rotation measured 24.65px on rerun. The assertion now verifies greater than 10px of real projected motion, with inertia and keyboard checks retained.
- `premium-loading-check.mjs`: passed. The 3D chunk is 924,753 decoded / 244,725 compressed bytes, loaded only by the enhanced homepage. Explore and cold reduced-motion visits avoid it. These are local transfer observations, not field performance measurements.
- Taste rendered inspector at 1440/768/390: 0 failures, 1 existing warning (12 responsive/page-wide font sizes). Its source scan reports 8 policy flags: four atmospheric gradients, two button hover/focus shadows and two hairline separators. Retained under the explicit Adaptive Premium direction and accessibility/focus requirements; this is not a clean source-policy pass. Inspector allowances cover gradients, hairlines, photography/footage and eyebrow copy, rather than replacing this original 3D concept with photographs.

Opened and critiqued desktop/tablet/mobile fold and page sheets, the mobile full page, static fallback and scroll handoff. The nucleus now dominates the local silhouette, reflections distinguish bevels from the glass face, two unequal open ribbons support it, and labels share an aligned edge. Review judgment: design 8/10, usability 8/10, creativity 7/10, content 8/10; the visual remains subject to owner approval. Hero changes preserve the existing secondary section and its transition.

Artifacts and browser scripts are in `C:/Users/Al Fath/.codex/visualizations/2026/10/21/01a15e78-cb53-7981-bae9-15640cebb5a2/premium-core/` and its parent. Review URL: `http://localhost:3006/`. No deployment.

Remaining limits: upstream Fiber/Three Clock deprecation, headless PMREM precision and deliberate context-loss disposal warnings; Node's direct TypeScript test-import module-type warning. Safari, Firefox, physical-device GPU performance and real background-tab throttling were not tested. Shadows use supported PCF filtering; radiance is a local additive halo, not a full-screen postprocessing bloom pass. Stop here for visual approval.
