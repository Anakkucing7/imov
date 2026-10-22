# IMOV — Codex project instructions

Build a new IMOV platform, starting with a credible premium landing page and a useful `/explore` gateway. Treat `docs/01-product-foundation.md` through `docs/06-decisions-and-open-questions.md` as the current source of truth. The previous IMOV codebase/PRD is not authoritative.

## Operating rules

- Start each milestone by stating a short plan; identify affected files and acceptance criteria. Implement the smallest complete, testable increment; summarize changes and verification afterward.
- Don't fabricate users, sellers, clients, investor endorsements, transactions, product inventory, security guarantees, or released AI capabilities. Label demonstrations/previews accurately.
- Stay within current milestone scope. No payment flow, auth, Prisma, Supabase, AI backend, or admin panel during first vertical slice unless explicitly approved.
- Keep architecture simple: Next.js App Router, TypeScript, Tailwind, modular components. Prefer server components; client components only where interaction requires them. Avoid premature abstractions and dependencies.
- Follow the Adaptive Premium design rules in `docs/03-creative-direction.md`: cinematic dark marketing, light functional product entry, original composition, and excellent mobile UX. Avoid generic SaaS card/glow templates.
- Accessibility and performance are product features: semantic HTML, real links, keyboard access, visible focus, image alt text, reduced-motion, contrast, no layout shift from media.
- Follow the mandatory frontend workflow below. Don't spend paid credits or install additional plugins without approval.
- Never hardcode or print secrets. Use `.env.example` for non-sensitive templates; no client-exposed secrets. Don't execute destructive commands, publish/deploy, or create paid resources without explicit approval.
- After implementation: run lint, TypeScript check, production build, and relevant tests. Report commands and exact outcomes, including failures; never claim a pass without running it.
- If key brand/product decisions are unresolved, make a clearly labeled, reversible assumption in `docs/06-decisions-and-open-questions.md` rather than inventing facts.

## Mandatory frontend milestone workflow

Apply this workflow to every relevant frontend milestone, including hero redesigns, motion, UI/UX and responsive refinements. It applies to the upcoming IMOV Orbital Core redesign/refinement; begin its implementation with these steps rather than treating earlier tool listings or test runs as completion of this workflow.

### Before implementation

- Verify which required skills, plugins and testing tools are actually accessible in the current session. Read their relevant instructions before using them. Report unavailable or blocked capabilities, the reason where known, and the fallback used; never pretend they were invoked.
- Read the current implementation and relevant product/design documents. State affected files, scope and acceptance criteria.
- Establish a brief art direction and interaction specification in `docs/` before designing or changing application code. Cover composition, typography, palette, motion, responsive behavior, accessibility and reduced-motion/static fallbacks. Update the decision log for reversible assumptions.

### Required skills and tools

1. **Ponytail:** Apply its engineering and code-quality guidance. Prefer the smallest complete change, existing components and platform capabilities; preserve validation, accessibility and error handling.
2. **Taste Skill:** Read and apply its art direction and visual-quality guidance before designing. Use its relevant visual review guidance to assess the rendered result.
3. **Frontend Design Skills:** Read and apply the relevant UI/UX and frontend design instructions. Resolve conflicts according to the user's instructions, these project rules and IMOV's documented Adaptive Premium design system; do not silently replace IMOV's direction with a skill's generic defaults. Record material deviations and their reasons.
4. **21st.dev:** When accessible, actually inspect relevant available components and design patterns through its tools. Evaluate their fit with IMOV before deciding whether to integrate them. Review code, licensing, accessibility, dependencies and performance before adoption. Integration is selective, not mandatory: explain when original implementation or an existing component serves the experience better. Do not retrieve paid code or consume paid credits without approval.
5. **Context7:** Consult current documentation through Context7 when framework, library or API behavior needs verification. If unavailable, disclose that and use current official documentation as the fallback. If verification is unnecessary for the milestone, state that rather than claiming a consultation.
6. **Playwright:** When available, run browser-based functional and responsive tests against the implemented app. Cover the affected user journeys, CTA/navigation behavior, keyboard/focus, relevant pointer/touch interactions, reduced motion, console errors and mobile/desktop overflow. Capture desktop/mobile screenshots for visual changes. Disclose unavailable automation and checks still requiring manual review.

Installing, discovering or listing a tool is not proof of using it. Reading a skill is preparation; claiming it was applied requires explaining the decision or check it informed. Claim a plugin invocation only when its tool was actually called, and distinguish successful results from failed attempts.

### During implementation

- Prioritize IMOV's design-system consistency and original composition; avoid generic SaaS templates, mismatched component collections and unnecessary dependencies.
- Preserve existing routes and working functionality within the milestone's scope. Keep the app predominantly server-rendered and isolate client interactions.
- Preserve accessibility, responsiveness and performance, including visible focus, readable contrast, reduced-motion support, stable media layout and appropriate touch targets.
- **Do not use OpenDesign. Its usage quota is exhausted.** Do not invoke it for concepts, implementation or review.

### After implementation

- Report which skills were actually applied and which plugin/tool calls were actually made, explaining each contribution. Identify unavailable tools, failed attempts, conditional steps not needed and fallbacks without overstating usage.
- Run the required lint, standalone TypeScript check, production build and relevant tests. Report exact commands and outcomes, including failures; do not infer a pass from tool availability or a previous milestone's results.
- Summarize changes, browser/visual verification and unresolved issues or untested behavior. Stop at the milestone's requested review boundary.

This instruction update does not authorize application changes; the Orbital Core implementation must follow the workflow when work resumes.

