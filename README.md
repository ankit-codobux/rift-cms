# RIFT CMS (Payload + Next.js)

This project rebuilds the original single-page RIFT site into a proper Payload CMS setup with SQLite and block-driven page content.

## What was converted

The old browser-Babel site (`index.html + app.jsx + services.jsx + extras.jsx + case-studies.jsx + style.css`) is now modeled into reusable Payload blocks and rendered by Next.js:

- `Hero`
- `Stats`
- `Process`
- `Chat`
- `Services`
- `Statement`
- `Differentiators`
- `Approach`
- `CaseStudies`
- `Tech`
- `Team`
- `Cta`
- `Footer`

All core copy was seeded from the original source so `/` renders real RIFT content on first run.

## Tech stack

- Payload CMS `3.84.1`
- Next.js `16`
- SQLite via `@payloadcms/db-sqlite`

## Local setup

1. Clone the repo
2. Install dependencies

```bash
npm install
```

3. Copy env file

```bash
cp .env.example .env
```

4. Start development server

```bash
npm run dev
```

5. Open:
- Frontend: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`

On first run, the app seeds a `home` page automatically through `onInit` in `payload.config.ts`.

## Content model

- Collection: `pages`
- Fields:
  - `title`
  - `slug`
  - `layout` (blocks)

Block configs live in:

- `src/blocks/*/config.ts`

Frontend block components live in:

- `src/blocks/*.tsx`

Server-side block rendering:

- `src/app/(frontend)/render-blocks.tsx`

## Notes on SQLite + schema

- Local development uses schema push automatically.
- If you change block schema significantly and hit local SQLite mismatch issues, delete local DB and restart:

```bash
rm -f rift-cms.db rift-cms.db-journal
npm run dev
```

## AI workflow (bonus)

High-level workflow used for this conversion:

1. Parsed all original source files and mapped sections/components.
2. Extracted content shape and created block schemas for reusable sections.
3. Implemented Next.js block components using original class names and copied CSS.
4. Wired `pages` collection + block renderer for slug-based homepage fetch.
5. Seeded real homepage content from original source in `onInit`.
6. Regenerated Payload types/import map.
7. Verified with TypeScript and production build.

Useful commands run during implementation:

```bash
npm run generate:types
npm run generate:importmap
npx tsc --noEmit
npx next build --webpack
```

## Client-facing collaboration log (you + AI)

This section documents how the project was built from your instructions, step by step.

### 1) Project framing from you

You asked for a rebuild of the existing RIFT single-page React/Babel site into a proper Payload CMS project with:

- SQLite database
- Reusable block-based page model
- Preserved copy/structure/layout feel from the original source
- Seeded real homepage content on first run
- Setup docs for cloning and local run

### 2) Your source-driven workflow

You provided source files incrementally and asked to:

- extract structure first
- map sections to block schema
- avoid implementation until schema direction was clear

Then you moved the task from analysis to implementation block-by-block.

### 3) Key requests you gave (chronological)

1. `Understand page structure from index.html + app.jsx`
2. `Extract Services content + schema`
3. `Define Hero block schema`
4. `Implement Hero + Services React components`
5. `Create Pages collection with layout blocks`
6. `Fix module resolution/import path issues`
7. `Create homepage that fetches slug=home and renders blocks`
8. `Resolve layout/hydration and Payload admin runtime issues`
9. `Match original layout/CSS/behavior using full provided source set`
10. `Include AI workflow/client visibility in README`
11. UI parity fixes you requested after review:
    - missing `CodeStream`
    - Hero rotating word animation mismatch
    - missing third chat bubble sequence after typing indicator
    - missing `B2B Platform`, `SaaS Platform`, `Corporate Site` tabs in case studies
    - missing tech tile icons + random hide/reveal animation
    - missing founder initials in team placeholder portraits
    - restore 12 tech items from original design

### 4) What AI implemented in response

- Built a `pages` collection with `layout` blocks
- Added reusable block configs + React renderers for the site sections
- Wired frontend to fetch and render Payload `home` page dynamically
- Seeded full RIFT homepage content via `onInit` (create/update behavior)
- Copied/used original styling system for visual parity
- Iteratively fixed parity gaps based on your QA feedback
- Regenerated Payload types/import map and validated with build/typecheck

### 5) Issues encountered and how they were resolved

- Admin context/hydration architecture conflicts were resolved by using correct route-group layout structure.
- Import path mismatches were corrected against actual file structure.
- SQLite schema mismatch occurred after block changes; resolved by aligning schema, regenerating types, and handling local DB reset flow.
- Tech section insert error (`id` collision in array row schema) was fixed by removing conflicting custom `id` field.

### 6) Current state after your feedback loop

- Homepage content is block-driven from Payload (`slug: home`)
- Original design intent is preserved and iteratively matched
- Missing sections/animations you flagged were implemented
- Build and typecheck pass

If needed for client handoff, this section can be copied verbatim into `docs/ai-workflow.md` as an audit trail.

## Current status

- Build passes (`next build`)
- Admin route is configured at `/admin`
- Homepage renders from Payload page `slug = home`

## GitHub repo link

No git remote is configured in this workspace yet, so there is currently no publishable GitHub URL.

To publish:

```bash
git remote add origin <your-repo-url>
git add .
git commit -m "Rebuild RIFT site as Payload block-based CMS"
git push -u origin main
```
