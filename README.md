# IMOV Rebuild — Phase 1 Kickoff Kit

Status: **Proposed foundation / v0.1** — product assumptions are intentionally editable. Created 2026-10-21.

## Intent

A new IMOV project, not a redesign or migration of the previous codebase. Build a premium, credible marketing landing page (`/`) that opens into a useful platform-entry experience (`/explore`). The initial experience should be visually distinctive and technically clean, without pretending that marketplace transactions, AI tools, or live user counts are already operational.

**Direction:** Adaptive Premium — cinematic dark marketing, functional light platform (with room for a real dark theme later).

## Contents

- `AGENTS.md`: persistent Codex rules, kept intentionally concise.
- `docs/01-product-foundation.md`: positioning, users, priorities, truthfulness rules.
- `docs/02-experience-architecture.md`: sitemap, journeys, content structure, CTAs.
- `docs/03-creative-direction.md`: visual language, tokens, interaction and asset plan.
- `docs/04-engineering-blueprint.md`: Next.js approach, architecture, QA, security.
- `docs/05-milestones.md`: integrated product/design/engineering milestones.
- `docs/06-decisions-and-open-questions.md`: what is fixed versus tentative.
- `prompts/01-codex-kickoff.md`: ready-to-paste first Codex task.

## Start on Windows (PowerShell)

1. Start with a **new folder and new repository**, not the legacy IMOV files.
2. Install a supported Node.js LTS version, Git and npm. Verify `node -v`, `npm -v`, `git --version`.
3. In a parent development directory, initialize the application using the Next.js CLI:

   ```powershell
   npx create-next-app@latest imov-rebuild --ts --tailwind --eslint --app --src-dir --use-npm
   cd imov-rebuild
   ```

   If the CLI offers extra options, prefer current official stable defaults; check compatibility.
4. **Copy the contents of this kickoff kit** (the `AGENTS.md`, `docs`, and `prompts` directories) into the newly created `imov-rebuild` project root. Do not replace Next.js generated application files. `AGENTS.md` must be at repository root.
5. Open that folder in Codex desktop or VS Code/Codex. Paste `prompts/01-codex-kickoff.md` into Codex. Ask it to first inspect the repo, then implement *only the first vertical slice*.
6. Run `npm run dev`, open `http://localhost:3000`, and review the mobile and desktop experience before advancing.

If Codex can inspect and set up the environment autonomously, it may execute steps 1–4 **when explicitly authorized**, but should not delete existing work. There is no need to install a database in this milestone.

## Plugin policy

Use existing Codex plugins/skills **only if they are available in this Codex environment**; a plugin displayed in another application is not proof that it is usable in the current agent. Ponytail guides simplicity, frontend/taste skills guide visual quality, and 21st.dev provides curated references/components; manually review imported dependencies and licenses. OpenDesign is out of scope due to token constraints. No plugin is essential for completing the first vertical slice.

## Definition of a good first result

A real, responsive Next.js site with an original premium hero on `/`, functional `/explore` with honest product previews, and a short `/vision` page; clear navigation, accessibility basics, stable styling, no fake metrics, and passing lint/build/typecheck plus appropriate smoke tests. Not a finished marketplace.

## Sources

- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- Next.js route groups: https://nextjs.org/docs/app/api-reference/file-conventions/route-groups
- shadcn/ui installation: https://ui.shadcn.com/docs/installation/next
- Codex AGENTS.md workflow: https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex
- Web Vitals: https://web.dev/articles/vitals
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
