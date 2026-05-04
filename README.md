# ClarityQ SDR Home Assignment — ICP Demo Dashboard

A fully interactive prospecting dashboard built as part of the ClarityQ SDR home assignment. It demonstrates my approach to account selection, persona research, signal-based outreach, and AI-assisted email generation — all wrapped in a working product that mirrors how I'd actually run outbound.

**Live demo:** [https://eilamc193.github.io/ClarityQ-home-assignment/](https://eilamc193.github.io/ClarityQ-home-assignment/)

> No setup required to explore the live demo — all emails are pre-generated and served from cache. Hunter.io and Claude API keys are only needed if you run it locally and want live lookups.

---

## What It Does

The dashboard walks through a complete SDR workflow across 6 modules:

| Module | What it shows |
|---|---|
| **ICP Scanner** | 5 researched target accounts with tools stack, funding stage, and source links |
| **Signal Feed** | Buying triggers per company — hiring, product launches, funding events |
| **Persona Finder** | 18 real decision-makers with confirmed/estimated emails via Hunter.io |
| **Email Composer** | AI-generated emails: 3 types × 3 tones, via Claude Sonnet or served from cache |
| **Pipeline Board** | 7-stage Kanban to track outreach progress per prospect |
| **A/B Insights** | Win rate analytics by tone, persona title, platform, and email type |

---

## The ICP Research

I screened Israeli-founded B2B companies (100–5000 employees) with a strong data and analytics footprint. The five accounts I selected:

| Company | Why targeted |
|---|---|
| **AppsFlyer** | Marketing measurement platform drowning in attribution data — ClarityQ surfaces patterns they're missing across millions of attribution events |
| **Play Perfect** | Mobile gaming studio scaling fast; data-heavy growth loops need faster, self-serve decision-making |
| **Lightricks** | Creator apps (Facetune, Videoleap) generate massive behavioral data across a global user base — underutilized analytically |
| **Oddity (Il Makiage)** | Publicly traded beauty tech with explicit analytics investment push in earnings calls; CFO projected 35% revenue growth requiring "data infrastructure" |
| **Wix** | 200M+ user platform with enterprise analytics needs; recently acquired Base44 (AI app builder), signaling a push into deeper product analytics |

### Personas (19 total)

Each persona was chosen for role-to-product fit, not just seniority. The Persona Finder shows a written "why target" rationale for each. A few examples:

- **Gilad Ben David** (Play Perfect, Head of Data Analytics) — Direct buyer; builds the dashboards ClarityQ would replace or augment
- **Rachael Spencer** (Oddity, VP Growth Marketing) — Cited in earnings calls as driving data-led expansion across markets
- **Deborah Baruc** (AppsFlyer, Head of Pricing) — Pricing decisions require exactly the competitive analytics ClarityQ provides
- **Nicky Kamins** (Lightricks, Head of Facetune Data) — Single owner of product analytics for their flagship app, 100M+ users

**Email verification status:**
- 🟢 **Confirmed** — all 18 emails verified (Hunter.io or direct confirmation)
- 🔗 **LinkedIn DM only** — Lior Sassy (Lightricks): no email found, flagged for alternative channel

### Buying Signals

Each company has 3 curated signals. "Hot" signals (🔥) surface first in the Signal Feed and are automatically included in email generation prompts. Each signal includes a "Why this matters for ClarityQ" note tied to the product's core value prop — not just a news item copy-paste. Examples:

- AppsFlyer Q1 2025 earnings: management cited "measurement fragmentation" — verbatim pain point language
- Play Perfect job post requiring "dbt + Looker + Python" — signals they're building analytics infra and will hit scaling limits
- Oddity investor day: CFO projected 35% growth requiring "data infrastructure investment" — explicit spend signal

---

## AI Email Generation

The Email Composer generates emails along two axes:

**Type:**
- `Cold` — First touch, leads with a specific researched signal from the company
- `Follow-up` — Day 3, different angle, no guilt-tripping or "just checking in"
- `Post-rejection` — Graceful reply under 60 words, keeps the door open

**Tone:**
- `Concise` — Under 100 words, every sentence earns its place
- `Conversational` — Warm and human, like a sharp colleague reaching out
- `Direct` — Confident, no hedging, straight to the ask

**How generation works:**

1. Click "Generate Email" → app checks a local cache of 171 pre-generated emails (19 personas × 3 types × 3 tones)
2. If cached, returns in ~1s with a realistic simulated delay
3. If not cached, calls the Claude Sonnet 4.6 API with a structured prompt that includes: persona title, company tools stack, top 3 signals, email type instructions, and tone instructions
4. Response parsed as structured JSON: `{ subject, body, personalization_notes }`

The cache means the demo runs fully without an API key. The live Claude fallback handles edge cases and any personas added after the cache was built.

**System prompt philosophy:** The AI is framed as "an elite SDR at ClarityQ" with explicit principles: no buzzwords, lead with the prospect's world (not ClarityQ features), make the reader feel understood not sold to, every email must reference something specific about the company.

---

## A/B Insights

The analytics module tracks email performance across all logged outreach attempts. It ships with 26 pre-seeded mock responses so charts are populated immediately — not empty on first load.

As you advance prospects through the Pipeline Board to terminal stages (Replied / Meeting Booked / Rejected), a modal opens to log the outcome: tone used, email type, platform, days to reply, and notes.

**Insights computed automatically:**
- Win rate by tone — which writing style converts best
- Win rate by persona title — which role responds most
- Win rate by platform — Email vs. LinkedIn DM vs. Phone, with average days to reply
- Win rate by email type — Cold vs. Follow-up vs. Post-rejection
- Top performing emails — ranked by conversion rate, shown with subject + snippet

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 + Vite | Fast dev server, small production bundle |
| Styling | Tailwind CSS | Utility-first, no CSS file overhead |
| State | Zustand + localStorage | Lightweight, pipeline and A/B data persist across refresh |
| AI | Claude Sonnet 4.6 (Anthropic) | Best instruction following for structured JSON output |
| Email finder | Hunter.io API + Skrapp.io (manual) | B2B email verification and discovery |
| Icons | Lucide React | Consistent, lightweight |
| Hosting | GitHub Pages | Zero-config static deployment |

Build output: ~308KB JS, ~90KB gzipped.

---

## Running Locally

```bash
cd dashboard
npm install

# Create a .env file (both keys are optional for demo purposes):
VITE_HUNTER_API_KEY=your_key_here
VITE_ANTHROPIC_API_KEY=your_key_here

npm run dev
# → http://localhost:5173
```

```bash
npm run build    # production build → dashboard/dist/
npm run deploy   # deploy to GitHub Pages
```

---

## Project Structure

```
dashboard/
├── src/
│   ├── App.jsx                    # Main app, tab routing
│   ├── data/
│   │   ├── companies.js           # 5 companies, 18 personas, 15 signals
│   │   └── emailCache.js          # 144 pre-generated emails
│   ├── lib/
│   │   ├── claude.js              # generateEmail() — cache-first, Claude fallback
│   │   └── hunter.js              # findEmail() — Hunter.io API wrapper
│   ├── store/
│   │   ├── usePipelineStore.js    # Zustand: Kanban pipeline state
│   │   └── useABStore.js          # Zustand: A/B response log + analytics
│   └── components/
│       ├── Sidebar.jsx
│       ├── ICPScanner.jsx
│       ├── PersonaFinder.jsx
│       ├── EmailComposer.jsx
│       ├── SignalFeed.jsx
│       ├── PipelineBoard.jsx
│       ├── ABInsights.jsx
│       └── ABResponseModal.jsx
└── public/
    └── avatars/                   # Profile photos for all 18 personas
```

---

## Design Decisions Worth Noting

**Cache-first email generation:** Running 144 Claude API calls at demo time would be slow and expensive. Pre-generating all emails and bundling them in the app means instant responses, no rate limits, and no API key required to evaluate the core product experience.

**Signal-to-email pipeline:** Every generated email is grounded in at least one specific buying signal from the company's feed. The personalization is not surface-level ("I saw you're hiring") — each signal has a documented relevance note explaining why it matters from ClarityQ's value prop angle, and that reasoning carries into the email prompt.

**A/B pre-seeded data:** The insights module is useless with zero logged data. Pre-seeding 26 realistic outcomes means anyone evaluating the dashboard immediately sees a functioning analytics view and understands what the module is for.

**Persona rationale over volume:** I could have added 10+ personas per company. I kept it to 2–6 per company with a written "why target" explanation for each. Fewer, better-justified contacts beats bulk.

**Tool source transparency:** In the ICP Scanner, confirmed tools are linked to their public source (blog post, SEC filing, case study). Inferred tools are marked with amber badges and a tooltip explaining the inference logic. The distinction between verified and assumed information is explicit throughout.

---

*Built by Eila Meitav — SDR candidate for ClarityQ*
