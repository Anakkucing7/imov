# Local development

The application is initialized directly in this root. Original planning documents remain the project contract.

Use Node.js 24 LTS and npm. Run `npm ci`, then `npm run dev` and open http://localhost:3000.

Checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npm test`.
The HTTP tests require the local server running (`npm start` or `npm run dev`); override its URL with `TEST_BASE_URL` if needed. They verify the three routes, status disclosures, and every rendered internal link/anchor.
For production-mode local review: `npm run build`, then `npm start`.

Fonts are bundled locally through Fontsource (Inter and Plus Jakarta Sans, SIL OFL); no runtime font service is needed. No environment variables or credentials are required for this slice.

The README's original nested-folder instructions describe the kickoff kit; the current task explicitly supersedes them. No planning files were moved or replaced.

## Optional Titi asset briefs (not required for this slice)

- Hero: 2400×1350, 16:9 opaque midnight `#0B1120` background. One precise modular orbital structure suggesting products, developers and future assisted creation, concentrated in the right 55%; left 45% quiet for HTML copy. Iris `#6478FF`, restrained ice cyan `#8BE4E8`, no text, logos, fake UI or stock objects. Keep the subject inside a safe central crop for mobile. The existing local SVG remains the working fallback.
- Ecosystem artwork, for a later approved milestone: 1600×1200, 4:3, transparent background. Three connected structural modules in the same perspective and palette, no words or invented product screens. Keep all modules within the central 80% for cropping.
