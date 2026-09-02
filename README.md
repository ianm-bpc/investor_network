# Jarvis Investor Network Prototype

This is a local, dependency-free full-stack prototype for firmwide investor-network coverage.

Run it from this directory:

```powershell
npm start
```

Then open `http://localhost:4321`.

The server automatically loads `.env` from this directory before reading `PORT`, `LLM_API_KEY`, `LLM_MODEL`, or `LLM_BASE_URL`. Shell environment variables take precedence over `.env` values.

## What It Includes

- Seeded graph from the infrastructure pod's investor-firm list.
- Entity search across firms, BPC owners, relevant peer investors, and portfolio signals.
- Graph scopes for priority firms, all firms, and owner-specific coverage.
- Detail panels for warm intro paths, firm contacts, assigned owners, and known portfolio companies.
- Natural-language query patterns for warm introductions, co-investors, owner coverage, priority names, stale coverage, and firm portfolios.
- Portfolio refresh workflow: paste a copied portfolio page, diff against current known companies, then add net-new companies into the server-backed local store.
- Quick touch logging so coverage freshness can be tracked without editing a spreadsheet.

## Architecture

- `index.html`, `styles.css`, `app.js`: browser frontend.
- `server/index.js`: plain Node HTTP server, static asset server, and API router.
- `backend/store.js`: file-backed repository for touchpoints and portfolio additions.
- `backend/graph.js`: graph construction, search, connectivity, priority, and freshness logic.
- `backend/query.js`: deterministic natural-language graph query patterns.
- `backend/llm.js`: optional OpenAI-compatible language model synthesis.
- `data/seed-firms.psv`: seed table derived from the pod's one-time mapping.
- `data/store.json`: generated local persistence for interactions and added portfolio companies.

## API Endpoints

- `GET /api/health`
- `GET /api/bootstrap`
- `GET /api/graph?scope=priority|all|owner&owner=AB`
- `GET /api/search?q=Flare`
- `GET /api/firms/:firmName`
- `GET /api/connectivity/company/:companyName`
- `GET /api/connectivity/owner/:owner`
- `GET /api/interactions?firm=TenEleven&owner=AB`
- `POST /api/interactions`
- `POST /api/portfolio-refresh/diff`
- `POST /api/portfolio-refresh/add`
- `POST /api/ask`

Example touchpoint payload:

```json
{
  "owner": "IM",
  "firm": "TenEleven",
  "type": "Catch-up",
  "date": "2026-08-03",
  "note": "Discussed security infrastructure pipeline."
}
```

Example graph question payload:

```json
{
  "question": "What warm introductions could we leverage to get in touch with Mattermost?"
}
```

## Language Model Setup

`POST /api/ask` always returns a deterministic graph answer. To add model-written synthesis, populate `.env`:

```env
LLM_API_KEY=<your key>
LLM_MODEL=<model name>
LLM_BASE_URL=https://api.openai.com/v1
```

Then restart the server with `npm start`.

The model receives only the graph-derived answer and evidence bundle, not arbitrary CRM data.

Run the live OpenAI integration check with:

```powershell
npm run test:openai
```

This command makes real API requests using `.env`; it does not print the API key. Failures are reported as auth, model lookup, quota, network, or upstream API errors where possible.

## Data Model For Jarvis

Core entities:

- `Firm`: name, type, location, priority scores, firmwide priority flag.
- `Person`: peer investor contact, title hints, firm affiliation.
- `InternalOwner`: BPC team member or pod owner.
- `Company`: portfolio company, candidate target, must-meet, or pipeline company.
- `Interaction`: date, owner, firm, interaction type, brief note, optional next step.
- `EvidenceSource`: portfolio URL, calendar event, email metadata, conference list, or manual submission.

Core edges:

- `InternalOwner -> covers -> Firm`
- `InternalOwner -> knows -> Person`
- `Person -> works_at -> Firm`
- `Firm -> invested_in -> Company`
- `Interaction -> touched -> Firm`
- `Company -> warm_path -> InternalOwner/Firm/Person`

## Practical Constraints

LinkedIn should not be treated as a programmatic source of truth. Portfolio pages also need a human-in-the-loop ingestion path because firm websites are heterogeneous, often JavaScript-rendered, and rarely expose clean structured data.

The highest-leverage Jarvis version should reduce logging effort:

- Use calendar attendance and email headers as opt-in relationship signals, without ingesting private message content.
- Push weekly owner-specific review prompts with suggested stale firms instead of asking the team to browse a master sheet.
- Let users confirm, dismiss, or reassign suggested coverage in one click.
- Track portfolio page snapshots and show only diffs for review.
- Treat manually confirmed data as higher-confidence than passive signals.
