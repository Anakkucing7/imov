# Kinetic liquid metal hero

2026-10-22. The founder explicitly cancelled the Orbital Core and authorized this replacement, superseding the static-approval pause for that cancelled concept. Checkpoint: commit `97c1376`, annotated tag `imov-pre-kinetic-metal`.

## Direction before implementation

IMOV's connected creative ecosystem becomes a continuous woven metal volume with ribbon-like folds and a central opening. The sculpture is one coherent folded mass, not a nucleus with orbiting components. Propagate low-frequency curvature, width, thickness and twist waves through the mesh. Preserve the hollow silhouette throughout motion. Overall rotation is a very slow restrained lean, secondary to actual vertex deformation. No crystal, box, circular orbital paths, satellites, HUD, neon seams, particle effects or generated image/video assets.

Retain the left headline, supporting copy, navigation, CTAs, routes, Inter/Jakarta and Adaptive Premium tokens. The art uses neutral satin titanium / dark chrome, broad studio reflections and a quiet ground shadow. Spend the visual complexity on the sculpture only. No new page sections. Caption is modest, honest concept-art copy; ecosystem meaning remains in the existing next section rather than labels attached to the object.

Use the existing Fiber/Three foundation. Build indexed, closed procedural BufferGeometry with periodically sampled longitudinal and transverse coordinates; update positions directly and recompute smooth normals. Shared seam indices avoid normal discontinuities. Mobile receives fewer samples and a lower DPR; paused, offscreen, hidden and reduced-motion views stop animation. Reduced motion shows the same 3D form at time zero. A native static SVG fallback is computed from the same geometry for loading/no-JavaScript/unsupported-WebGL use only; it is not an image asset or a replacement for the live component. Reserve the same layout box throughout hydration. Prepare shaders and render a complete frame before revealing WebGL.

Pointer response is a bounded smooth lean; drag/inertia and old satellite interactions are removed. Retain a real keyboard-accessible pause control and visibility gating. No motion-related React state changes inside the frame loop.

## Scope and cleanup

### Supplied image refinement

The three- and five-surface constructions below record intermediate decisions. Both are superseded by the single-body construction in the final section.

The founder subsequently supplied `codex-clipboard-fe2cf931-710c-41d6-b00d-296e5050135f.png`, which was opened and inspected. It supersedes the initial broad-hole interpretation: target a compact, rounded triangular woven knot with wide parallel metallic lamellae, substantial depth and a smaller central aperture. Use a three-lobed, two-turn closed centerline with three adjacent continuous ribbon surfaces, rather than three independently undulating loops. Keep deformation restrained around this recognizable woven silhouette. The image is reference only; do not import it, generate assets or substitute it for live geometry. Exact photographic equivalence is not claimed.

The founder then requested an asymmetric anomaly-like morph with surfaces appearing and receding. Apply bounded harmonic waves with different temporal frequencies to curvature, depth, width and twist, including slight per-strand phase differences. Apparent emergence/recession comes from real folds and occlusion, without opacity popping, per-frame randomness, teleporting vertices or aggressive spikes. Retain the central aperture and coherent reference-like body. Context7 also verified the built-in anisotropy/UV derivative frame; anisotropy was tried but removed after visible derivative striping in the render. Surface normals now use smooth central derivatives on the closed mesh instead of triangulation-weighted normals.

The clearer reference `codex-clipboard-cf2117a7-f147-4bcc-9beb-a2846e988996.png` was also opened. It calls for a dense woven mass with a small inner aperture, not separate plates. Use five adjoining continuous surfaces on the shared knot construction. The latest clarification requests forward-flowing symbiote-like volume: advect mesh samples along the closed path and propagate rounded thickness/width pulses, so swelling folds visibly advance and recede through the weave. This is deforming volume, not rigid rotation, alpha disappearance or an actual fluid simulation. No horror imagery or spikes.

Replace imov-core/orbital-scene/orbital-viewport with kinetic-sculpture/sculpture-scene/sculpture-viewport. Refactor the useful visibility, pointer and pause logic from core-motion into sculpture-motion; remove its exclusive domain/highlight behavior. Replace core-geometry with ribbon-geometry and tests. Delete orbital-motion and its tests after checking all references. Remove the old hero's SVG paths, labels, guide arcs, materials and exclusive CSS. Update only the homepage component import and relevant route artwork assertions. Preserve all historical documentation and unrelated components.

## Workflow and acceptance

Read/applied Ponytail, Taste and Anthropic Frontend Design instructions; reviewed current implementation and design/engineering docs. No image was visible in the initial request; the founder subsequently supplied references, which were inspected as recorded above. 21st.dev metadata search `three js deforming ribbon mesh` failed (`catalog search failed`), so no code adoption or paid retrieval. Context7 resolved and queried Three.js and React Three Fiber for dynamic attributes, normal recomputation, mutable useFrame updates and demand rendering. Browser plugin remains absent; bundled Playwright/Chrome is available. No OpenDesign.

Validate finite, closed geometry, smooth seam normals, genuine non-rigid deformation and protected opening at sampled times. Test initial/refresh frames, desktop/mobile layouts, pointer/pause, reduced motion, offscreen/hidden suspension, WebGL failure, navigation and absence of all old centerpiece UI. Run lint, standalone types, build and repository/browser tests. Inspect screenshots and deformation over time; screenshots alone cannot establish real-time animation. Stop for visual review; do not deploy.

### Final construction after clarification

The founder rejected the mechanical look of parallel individual strips. Replace those intermediate meshes with one watertight swept body whose broad ribbon folds are joined. Its cross-section has five subdued longitudinal channels, rounded thickness that swells and recedes, and a two-turn three-lobed centerline. Samples advance at .13 radians/second while independent waves change path curvature, width, depth and twist. Normals use an exact cross-section derivative and a periodic longitudinal derivative, avoiding triangulation and coarse mobile reflection banding. Desktop uses 256×64 vertices, mobile 160×32, with DPR capped at 1.5/1 respectively. This is procedural shape deformation, not a Navier–Stokes fluid simulation or topology-changing surface fusion. Reference silhouette/material fidelity remains a visual approval question; no 100% match is asserted.

## Verification and handoff

### Asymmetric outward-flow refinement — specification

The founder approved the improved base but requested an asymmetric body with a swelling outward advance and a narrow inward return. Change only geometry, its tests and this specification. Preserve camera, lighting, typography, palette, routes, controls, quality tiers and static/reduced-motion behavior. A single broad traveling envelope couples outward centerline displacement with increased width and thickness; its return contracts all three into a neck. Unequal low-frequency offsets break the threefold repetition without random frame-to-frame jumps. Retain bounded curvature and an open center. Verify local section expansion/contraction and propagation, then inspect several animation phases on desktop/mobile and rerun required checks. No dependency or external component is needed for this mathematical refinement.

The founder then approved the asymmetric base but found the advance still read mostly as size variation. The newly inspected `codex-clipboard-ab2b1f7d-b86e-4ef9-bd6d-ea03e4cae695.png` emphasizes broad, closely layered flowing crests. Keep the connected volume, but deepen its five integrated channels and propagate their phase along the body, so actual ridges travel rather than just changing highlights. Couple this to a stronger bounded forward/receding depth wave. Keep the same material/camera and avoid separate plates or added rings. This is a geometric surface change, not texture scrolling.

The founder next requested a much smaller central cavity. Apply a smooth radial funnel to the existing surface: contract inner vertices strongly while leaving outer vertices nearly unchanged, and recede the inner surface slightly in depth. Transform the exact cross-section derivative with the same funnel Jacobian so lighting remains correct. Keep the aperture open, connected mesh topology, flow, material and camera; do not add a central object. Validate the smaller opening and recheck browser/mobile behavior.

Final current-code checks on 2026-10-22:

- `npm run lint`: exit 0.
- `npm run typecheck`: exit 0.
- `npm run build`: exit 0; `/`, `/explore` and `/vision` statically prerendered.
- `$env:TEST_BASE_URL='http://localhost:3006'; npm test`: 9 passed, 0 failed. Geometry tests cover closed manifold edges, finite unit normals, non-rigid deformation, sampled aperture/bounds, mobile quality and deterministic initial geometry.
- Bundled Playwright/Chrome: 12 responsive route/layout checks and four interaction groups passed, with no application errors. Verified Explore/Vision navigation, keyboard/touch navigation, pointer response, keyboard pause/resume, reduced motion, offscreen and simulated hidden-document suspension, no-JavaScript/unsupported-WebGL fallback and context-loss recovery. GPU instrumentation recorded 297 position-buffer uploads and 100 distinct pairwise-distance signatures, confirming real deformation rather than rigid rotation alone.
- First-load checks at 1440px and 375px passed cold load and two refreshes each. Loading fallback stayed stable, the first revealed WebGL frame was nonblank, and the reserved artwork box did not change dimensions.
- Source search found no orbital/nucleus/satellite/crystal implementation references in `src`. Render assertions reject the old centerpiece classes. `git diff --check` passed, with only Git line-ending conversion warnings.

Taste browser inspection at 1440/768/390 completed with 0 failures and one warning about inherited responsive/page-wide font-size variety. Desktop, tablet and mobile fold/page captures were opened and inspected. Explicit inspection exceptions retain IMOV's existing atmospheric gradients, section hairline, small concept-art eyebrow, button shadows, and lack of photographs/video. The DOM-only still-page detector cannot see WebGL deformation; the GPU test above supplies that evidence. The source style scanner still flags seven retained gradient/shadow/hairline rules; these are documented design-system exceptions, not a claimed clean source scan.

Actual guidance contribution: Ponytail kept existing dependencies and reused visibility/pause behavior while deleting exclusive legacy code; Taste and Frontend Design informed composition, material restraint and screenshot review; React guidance kept frame mutations outside React state; Context7 verified mutable geometry attributes, normal updates, frame-loop and demand-rendering APIs. 21st.dev search failed, so no component was obtained or adopted. Browser plugin was unavailable; bundled Playwright was used instead. OpenDesign was not used. No new dependencies, generated assets, deployment or paid resources.

Changed implementation: `src/app/page.tsx`, `src/app/hero.css`, the four new kinetic/sculpture components, `src/lib/ribbon-geometry.ts`, route tests and geometry tests. Removed the six exclusively orbital component/library files and their two tests. Updated this document and the decision log; historical planning documents are preserved. Pre-change checkpoint remains `97c1376` / `imov-pre-kinetic-metal`; refinement changes are left uncommitted for review.

Review artifacts are under `C:/Users/Al Fath/.codex/visualizations/2026/10/21/01a15e78-cb53-7981-bae9-15640cebb5a2/kinetic-metal/`, including `hero-1440.png`, mobile screenshots, `morph-a-1440.png`, `morph-b-1440.png`, startup/fallback captures and browser/startup result JSON. Production review server: `http://localhost:3006/`.

Remaining limitations: the visual is a procedural approximation and still needs founder approval against the reference. Apparent merging is continuous deformation and occlusion, not topology-changing fluid fusion. Physical mobile hardware, Safari/Firefox, field performance and a real background-tab lifecycle were not tested. Headless Chrome emitted upstream Three.Clock deprecation, PMREM shader precision and intentional renderer-disposal extension warnings; application errors were absent. Stop here for visual review.
