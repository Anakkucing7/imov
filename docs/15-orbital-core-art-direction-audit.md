# Orbital Core art-direction audit — implementation paused

2026-10-22. The current crystal-and-ring design is preserved as an engineering checkpoint, **not an approved visual direction**. The founder finds it game-like and structurally undisciplined. No visual implementation may resume until a static design is approved and implementation is explicitly resumed. This audit records the current state; it does not prescribe or implement a replacement design.

## Evidence and scope

Read `orbital-scene.tsx`, `core-geometry.ts`, `orbital-motion.ts`, `orbital-viewport.tsx`, `core-motion.tsx`, `imov-core.tsx` and `hero.css`. Examined the current rendered desktop/mobile and startup captures. Verified Fiber's camera/look-at and color-management defaults in the installed package. Current evidence is in `C:/Users/Al Fath/.codex/visualizations/2026/10/21/01a15e78-cb53-7981-bae9-15640cebb5a2/crystal-core/`, outside Git.

The page, routes, CTA, navigation and existing tests are working. Functional acceptance does not constitute visual approval. This document supersedes the visual approval assumptions in documents 12–14; those documents remain historical records.

## Existing nucleus geometry

`createCrystalGeometry()` constructs a custom closed bipyramid with an eight-point belt in local Z=0. Belt vertices, in order:

`(0,1.3,0), (.6,.7,0), (.86,0,0), (.5,-.7,0), (0,-1.3,0), (-.6,-.7,0), (-.86,0,0), (-.6,.7,0)`.

Front apex: `(0,.04,.65)`; rear apex: `(0,-.06,-.45)`. Each belt edge joins both apices, producing 16 flat triangular faces. Nominal dimensions are 1.72 wide × 2.6 high × 1.1 deep, with slight shoulder asymmetry. There is no bevel on this crystal. EdgesGeometry uses a 25° threshold and cyan line opacity .24. A .74-scale luminous copy sits inside the physical outer shell. The whole nucleus has XYZ Euler rotation `(.1,-.32,-.18)` radians, approximately `(5.7°,-18.3°,-10.3°)`.

The wordmark is a 512×256 canvas texture on a .5×.25 plane at `(0,-.63,.37)`, rotated .48 radians around X. It is a separate plane rather than a conformal marking on the exact facet surface.

**Art-direction finding:** pointed ends, triangular color patches, an inset emissive gem and illuminated edges collectively read as a game collectible/crystal. This is a visual judgment supported by the render and founder feedback, not a geometry failure. The form currently communicates “energy gemstone” more clearly than an IMOV platform or product system. It must not be treated as a settled brand asset.

## Existing ring geometry and hierarchy

All three are open annular sectors, not paths with a defined mechanical connection to the nucleus. The generator extrudes .045 depth with .01 bevel thickness/size, two bevel segments and 96 curve segments. Bevels extend the nominal widths by roughly .02, disproportionately affecting the two narrow rings. A separate emissive inner-edge tube adds another visible contour: radius `R−width`, tube .006, offset local Z=.03.

All values below are world units/radians. The array order is diagonal, support, background.

| Role/domain | Radius / nominal width | Visible arc / open gap | Plane tilt X,Y; outer Z rotation | Center XYZ | Starting phase | Drift |
|---|---|---|---|---|---|---|
| Dominant diagonal / Digital Products | 2.00 / .075 | 338.4° / 21.6° | 1.00,.05; −.48 (−27.5°) | 0,0,0 | .25 | +360° / 140s |
| Lower support / Developer Services | 1.62 / .035 | 333° / 27° | 1.40,.05; .12 (+6.9°) | 0,−.55,.25 | −.40 | −360° / 180s |
| Background / Future AI | 2.22 / .025 | 342° / 18° | .55,−.15; .15 (+8.6°) | 0,.10,−.45 | .10 | +360° / 220s |

Exact transform order is `translation × Rz(outer angle) × Rxyz(tilt X, tilt Y, 0) × Rz(phase + elapsed×speed)`. This nested order matters; entering these angles as a single XYZ Euler rotation would produce a different composition. The orbit planes do not continuously precess: rotating each open sector within its plane moves its seam and its waypoint.

### Intersections and structural discipline

- **Projected crossings are the main visible issue.** The diagonal and supporting foreground bands cross the nucleus silhouette. The lower band can cut across the lower facets/wordmark region; the larger and diagonal contours converge near the sides. Extra inner-edge tubes, shadows, environmental arcs and leader curves increase the number of apparent paths beyond the three physical bands.
- **“Background” is a role label, not a depth guarantee.** Its center is at Z=−.45, but the tilted circle extends toward and away from the camera. It is not constrained wholly behind the nucleus. Three.js depth testing determines local occlusion; array order does not establish a front/back visual hierarchy.
- **Visible overlap does not prove mesh collision.** A read-only audit sampled 1,025 centerline points per open sector in the initial pose. Approximate nearest distances were .2933 (diagonal/support), .2658 (diagonal/background), and .7076 (support/background). Conservative sums of the corresponding ribbon cross-section radii were .1001, .0971 and .0821. These measurements suggest initial separation; they are not triangle-level collision tests or a guarantee across all moving seams/interaction states. Raw results are in `geometry-audit.json` alongside the captures.
- There is no enforced projected clearance, hierarchy mask or protected facet/wordmark region. Ring dimensions, center offsets and camera were adjusted independently, without a single approved proportion system.
- The three paths do not establish meaningful hubs, bearings, attachment points or a common construction rule beyond circles around the center. Changing material richness cannot solve that structural ambiguity.

## Camera, framing and grounding

Perspective camera position `(0,.15,7.1)`, vertical FOV 42°, default up +Y, looking at the origin through Fiber's installed default. This is only about 1.2° above the origin: depth separation is conveyed largely by ellipse compression, surface contrast and occlusion, rather than a strong elevated view. Camera roll is zero; ring and nucleus rotations provide the apparent roll. No distinct mobile camera is configured; aspect ratio changes the crop of the same composition.

The art viewport is 112% of its column, offset −6%, aspect 8:7. A separate decorative SVG uses similar oversizing. This intentional bleed contributes to the inspector's asymmetric-media-margin warning even though tested document widths do not overflow. The left copy and navigation retain their layout.

A horizontal shadow-receiving plane sits at Y=−1.65 with opacity .18; a 5×3 translucent halo plane at Y=−1.66 adds iris floor illumination at opacity .15. One faint SVG ellipse supplies a further floor contour. These are not a physically reflected object or a unified designed support surface. The world floor stays fixed while the core floats/rotates, so contact relationships depend on the interaction state. The core is suspended above it rather than touching it.

## Materials and lighting

| Surface | Current settings |
|---|---|
| Outer crystal | Physical material #8CAAC7, metalness .12, roughness .12, transmission .72, thickness .65, IOR 1.5, attenuation #273D78 at distance 1.6, clearcoat .8 / roughness .2, flat shading |
| Inner crystal | Standard material #324D91, metalness .45, roughness .25, emissive #6478FF at .85 ± .08, flat shading |
| Bands | #30445E; background #17263C; active #526C91; metalness .85, roughness .26, clearcoat .65 / roughness .2 |
| Band edge tubes | Domain colors, opacity .35 idle / .75 active, tone mapping disabled |
| Waypoints | Metallic capsule .05 radius / .14 body length, inset emissive box .14×.025×.045; emission .8 idle / 1.4 active; active box scales 1.25× |

Ambient .18; key directional at `(−3,5,4)`, #E5EDFF, 2.2; cyan rim directional `(4,1,−3)`, 2.8; iris point `(−1,−.5,2)`, 2.5. The key casts 512px PCF shadows, ±3 shadow camera bounds, normal bias .025. Three generated reflection softboxes use positions `(−3,4,5)`, `(4,1,−2)`, `(−1,−3,2)`, HDR energies 5/3/1.2 and PMREM size 128. Environment intensity is 1.2. Fiber defaults to ACES filmic tone mapping and sRGB output; the scene does not specify an independent exposure grade.

A 3.4-unit iris additive sprite behind the core has opacity .28. CSS adds radial atmosphere; a decorative SVG contributes an upper guide arc. There is no full-screen bloom pass. DPR is capped at 1.5 and transmission is rendered at half resolution.

**Art-direction finding:** faceted flat-shaded color regions, emissive seams, reflective black hoops and halo lighting combine into a sci-fi/game vocabulary. The metallic rings, glass nucleus, luminous inner copy and overlay linework do not yet share an approved material hierarchy or exposure reference. More glow or more facets would not resolve that lack of a common reference.

## Animation and interaction transforms

| Layer | Existing behavior | Approval concern |
|---|---|---|
| Orbit sectors | Independent 140/180/220s phase drift; fixed plane normals | Seam and waypoint locations move independently; every permitted state needs to retain hierarchy |
| Shared system | Float `sin(t×.36)×.035`, period ≈17.45s | Float should be assessed relative to ground clearance and shadow |
| Energy | `.85 + sin(t×π/4)×.08`, 8s period | Brightness should be judged after a static material/exposure lock |
| Pointer | Adds at most .025 rad pitch / .04 rad yaw, damped at 7 | This changes projected crossings despite small angular values |
| Drag | .006 rad per input pixel; yaw unrestricted, pitch limited ±.65 before .62 yaw / .65 pitch application | Unlimited yaw can expose unapproved rear silhouettes and the separate flat wordmark plane |
| Release | Velocity bounds ±1.4 yaw / ±.8 pitch; exponential decay 4; frame step capped .05s | Inertia extends the view beyond the direct drag endpoint |
| Keyboard | Arrow steps use the same drag calculation; Home resets input pose | Home does not reset elapsed orbital phase; it is not a deterministic return to the initial composition |
| Scroll | Whole system scales toward 1.1; nucleus separately scales toward .88; CSS scene shifts down up to 28px and scales toward .97 | Nucleus-to-ring hierarchy changes during scroll; approval must cover this or disallow it |
| Motion gate | Stops ambient updates when paused, offscreen or document hidden; reduced motion omits WebGL | Preserve this working accessibility/performance behavior |

The native satellite links and SVG leaders are projected each frame from actual waypoint positions. Leaders use cubic curves to fixed SVG X endpoints 44/298/589 at Y=700; they are not a designed physical feature of the core. Their .2-opacity crossings add apparent orbit geometry. The nucleus occlusion check is an approximate radial threshold (`z<.6` and XY radius<1.08), not raycasting against the crystal. Future silhouette changes would require reviewing that assumption.

## Initial load: working engineering and remaining visual limitation

The server SVG is a separate hand-authored approximation of the prism and ellipse hierarchy. It now has no orbit/arrival animation and no pointer/scale transforms. The lit Three.js scene is warmed with `compileAsync(scene,camera)` and rendered explicitly before readiness; ambient time starts afterward. There is no overlapping SVG/WebGL crossfade. This fixes the previous assembly/settling behavior.

It does **not** make the two representations identical: facet colors, projected perspective, ring contour thickness, seam/waypoint placement, inner glow and shadow differ. A stable loading illustration can still produce an aesthetic change at handoff. The next static approval must cover a canonical poster/fallback as well as the final render; current startup tests prove stability, not visual matching or design quality.

## Parameters to lock before implementation resumes

No new values are proposed here. Record owner-approved values and reference frames in the static design brief, then treat them as constraints rather than tuning each independently in code.

| Lock | Required decision / approval evidence |
|---|---|
| Identity and metaphor | What the nucleus represents; which qualities make it specifically IMOV; explicit rejection/acceptance of gemstone, machinery and energy-object associations |
| Nucleus construction | Silhouette, aspect ratios, facet/edge count, symmetry, bevel policy, depth, front/rear definition, wordmark placement; front and side static views |
| Shared construction system | Common center or justified offset centers; radius ratios, nominal/actual cross-sections, depth/bevel ratios, open-gap policy; simple construction drawing |
| Ring roles and occlusion | Exactly which sections are behind/in front, acceptable crossing locations, protected nucleus/wordmark regions, minimum projected gaps and physical clearances; annotated overlap map |
| Camera and crop | Position, target, up/roll, FOV or projection type, framing and artwork-to-copy ratio at desktop/tablet/mobile; fixed viewports and camera values |
| Initial pose | Exact nucleus rotation, ring planes, starting phases, gap positions and waypoint coordinates; one approved time-zero frame |
| Materials and exposure | Named surface roles, dark/light proportions, roughness, metalness/transmission, facet contrast, emission budget, key/rim balance and exposure; static neutral and final-light renders |
| Grounding/environment | Floating clearance, shadow size/softness/density, reflection policy, permitted guide-line count and contrast; floor and background included in static approval |
| Ecosystem semantics | Which waypoint belongs to each domain, marker form, label alignment, leader policy and fallback/mobile behavior; no unanchored decorative cues |
| Interaction envelope | Permitted yaw/pitch bounds, approved extremes, back-face visibility, reset definition; no free rotation beyond approved views by default |
| Ambient/scroll motion | What may move after static approval, amplitude/speed, phase relationships, allowed changes in core-to-ring scale, and clearances across the full envelope |
| First visible artwork | Approved fallback/poster and final-frame matching tolerance, readiness/failure/reduced-motion behavior, no assembly pose or double exposure |
| Accessibility/performance | Readable contrast, 44px links, keyboard/focus, pause/reduced motion, DPR/render cost budget and device acceptance; preserve working behavior |

## Static approval sequence

1. Review a construction sheet with nucleus silhouette, the three ring centerlines, camera values and a front/back occlusion map. No animation or lighting effects should be needed to explain the structure.
2. Review a single static final-light desktop composition and its mobile composition, including labels, environment and ground. Check a small thumbnail as well as full size.
3. Approve a matching first-visible fallback/poster and record the parameter locks above.
4. Only after explicit approval/resumption, implement that design and then review restrained motion within the approved envelope. Do not use further procedural iteration as a substitute for static approval.

## Checkpoint verification and limits

Immediately before the pause: lint, standalone TypeScript and production build passed; all 9 repository tests passed. Playwright passed 12 responsive layout checks and 7 interaction groups with no application errors. Delayed-renderer startup checks at 1440/375px recorded zero pixel change while waiting, first-pose movement of ≈1.58/.76px over 200ms, and two successful refreshes per viewport. The initial keyboard assertion measured only one node near the rotation axis and was corrected to check all projections. Early mobile pixel comparisons repeatedly auto-scrolled the artwork; fixed-viewport captures corrected that test artifact. These are engineering results, not approval of the visuals.

Taste's rendered inspection returned 0 failures / 3 warnings: existing font-size range, decorative artwork bleed and low DOM-motion count. The motion warning does not justify adding motion against the founder's request. Its source scan has 9 previously documented design-policy flags (gradients, hover/focus shadows, hairlines); no clean policy-scan pass is claimed. Existing Fiber/Three deprecation, software shader precision, intentional context-loss disposal and Node test-import warnings remain. Real devices, Safari/Firefox, full geometry collision envelopes and pixel-identical SVG/WebGL handoff have not been verified.

This repository had no commits before the requested checkpoint. The checkpoint will include the current application, dependency lockfile, repository tests, planning documents and this audit. It excludes generated builds, installed dependencies, environment files and external browser screenshots/runners. Nothing is pushed or deployed. After the pause request, only documentation and read-only audit evidence were created; application code is unchanged.
