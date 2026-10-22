# M1.5 — IMOV CORE: art and motion specification

2026-10-21 · Implementation direction, pending visual approval.

## Audit and decision

The first hero uses two flat isometric plates, equal-weight labels and a simple vertical entrance. There is little surface lighting, physical depth or connection between the artwork and the following section. Its routes, truthful disclosures, typography and palette are sound and stay in place.

Make the three ecosystem directions a single suspended architectural object: **IMOV CORE**. Three graphite frames have substantial sidewalls, chamfered illuminated edges and a shared light axis. The lower foundation represents digital products, the middle connection represents development services, and the upper open frame represents future AI. This is explicitly concept artwork, not a screenshot or released feature.

70% cinematic minimalism / 30% interactive futurism: one monumental object, generous quiet space, restrained captions and an editorial handoff. Avoid orbit rings, floating chips, particle fields and feature-card piles. The first proposal of adding more satellites was rejected: it would embellish the previous generic motif rather than change its composition.

## Composition and tokens

Keep midnight `#0B1120`, cloud `#F7F9FC`, iris `#6478FF`, cyan `#8BE4E8` and accessible action fill `#8190FF`. Add only local material tones: graphite `#131C30` and edge silver `#A9B6D2`. Plus Jakarta Sans remains display; Inter remains body/UI.

Desktop: left-aligned two-line headline occupies roughly 45%, the dimensional object the right 55%. A soft off-axis iris light field is confined behind the object; the copy sits on quiet midnight. The object has a contact shadow and directional metallic shading, rather than a glow around every edge.

```text
wordmark                                  Explore / Vision / action

Build what's                 suspended open frame / future vision
next.                          connected frame / services
description                       foundation / products
primary + secondary              IMOV CORE · Concept artwork
development disclosure                      motion control

                 light axis → useful ecosystem directions
Less searching.                         explanatory copy
More building.                          three existing category links
```

Phone: copy and actions first, then a deliberately compact object with readable captions underneath rather than labels over geometry. No pointer effects. Tablet retains the same content hierarchy and generous control targets. The next section remains a short editorial introduction and real category links.

## Motion contract

- Navigation settles first (400ms); headline (650ms), description (550ms), actions/disclosure (500ms) follow at 80–120ms intervals. Translation is 8–18px; essential content is visible throughout. No hydration-dependent hidden state.
- CORE assembles along its shared axis: foundation settles first, connection frame second, future frame last, within 1.3s. Nested groups keep assembly, ambient movement, pointer orientation and scroll transforms independent.
- Ambient movement is a slow 8–10s, 4–7px separation/settling cycle; illumination breathes gently with it. It represents the relationship between the layers, not random wandering. Only transform/opacity animate; gradients and lighting are static paint.
- Desktop fine-pointer parallax is limited to about 3 degrees and 8px, scheduled at most once per animation frame. Reset on pointer leave. It is optional, never an input requirement.
- Scrolling away lets the object recede at most 28px and 3% in scale; a short illuminated seam hands attention to the next section. No pinning, scroll hijack, delayed content reveal or full-screen fade. The next section is readable without JavaScript.
- Pause/play control stops ambient and interactive movement. CSS animations also pause when the object is offscreen or the document is hidden. Scroll/pointer work is event-driven, not a continuous JavaScript render loop.
- Reduced motion removes entrance, ambient, parallax and scroll displacement. Changing the preference live resets displacement. The full shaded static composition, copy, links and focus states remain available, including without JavaScript. Without JavaScript, CSS motion is disabled until enhancement is ready.
- Buttons get a precise iris surface response, small arrow movement and clear focus/pressed feedback. Effects are scoped to the home page; Explore and Vision retain their current surfaces and behavior.

## Scope and acceptance

Home page, replacement centerpiece, one isolated interaction component, home-only CSS, minimal route assertions and this spec. Remove obsolete illustration/motion CSS rather than layering contradictory overrides. No dependency, backend, unrelated page, paid tool, new plugin or deployment.

The installed Next.js development server appends agent rules to AGENTS.md by default. Set the supported `agentRules: false` configuration and restore the original instruction file so running the project preserves the founder's planning documents.
The root HTML declares the existing smooth-scroll behavior to Next.js, allowing the router to suppress it during route changes while retaining smooth in-page navigation and the reduced-motion override.

Verify the three routes and all internal links, mobile menu with Enter/Tab/Escape and touch, CTA journeys, focus visibility, hover/pressed states, pointer limits/reset, pause/resume, scroll handoff, live reduced-motion changes, no-JavaScript fallback, zero horizontal overflow at 360/375/768/1024/1440/1920, console health, lint, strict types, production build and available tests. Capture desktop/mobile and static reduced-motion screenshots.

## Tools

Ponytail, Frontend Design/Taste and bundled Playwright are available; 21st.dev search/retrieval tools are exposed. No external component fits this original artwork, so no code or paid credits are consumed. Browser plugin is absent; bundled Playwright/Chrome is the fallback. CSS/SVG and native event scheduling are sufficient, so no Motion package is added. The explicit M1.5 request supersedes Taste's generic bans on gradients/lighting and its photography quota.
