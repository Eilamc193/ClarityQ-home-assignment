# ClarityQ — SDR Growth Hacker Dashboard

**Live demo:** https://eilamc193.github.io/ClarityQ-home-assignment

A fully interactive SDR tool built as a home assignment for ClarityQ's SDR role. Simulates a real prospecting workflow — ICP scoring, persona research, live email lookup, AI-generated outreach, pipeline management, and A/B analytics — all in one browser app.

---

## What's inside

| Module | Description |
|--------|-------------|
| **ICP Scanner** | 5 target companies scored 0–100 against ClarityQ's ideal customer profile |
| **Signal Feed** | Buying signals per company — all dated Q4 2025 (Oct 2025) or later |
| **Persona Finder** | Named decision-makers with Hunter.io live email lookup |
| **Email Composer** | AI-generated cold / follow-up / rejection emails in 3 tones |
| **Pipeline Board** | Kanban board with 7 stages, persisted in localStorage |
| **A/B Insights** | Win rate analytics by tone, persona title, platform, and email type |

---

## Target Companies

| Company | Industry | ICP Score | Stage |
|---------|----------|-----------|-------|
| AppsFlyer | Mobile Analytics & Attribution | **92** | Series F / Pre-IPO |
| Play Perfect | Mobile Gaming | **88** | Growth / Series B equivalent |
| Oddity (Il Makiage) | DTC Beauty Tech | **83** | Public (NASDAQ: ODD) |
| Lightricks | Mobile Creative Apps | **85** | Series E / Late-stage Growth |
| Wix | Website Builder / SaaS | **78** | Public (NASDAQ: WIX) |

---

## Personas

19 real decision-makers researched manually and verified/estimated via Hunter.io:

### Play Perfect (`play-perfect.com`)
| Name | Title | Email | Status |
|------|-------|-------|--------|
| Michael Saifer | VP Marketing | michaels@play-perfect.com | ✅ Verified |
| Jonathan Okun | VP Data & Economy | jonathan.okun@play-perfect.com | ✅ Verified |
| Zur Shental | Product Team Lead | zur.shental@play-perfect.com | ⚠️ Estimated |
| Gilad Ben David | Head of Data Analytics | gilad.ben-david@play-perfect.com | ⚠️ Estimated |

### Oddity / Il Makiage (`ilmakiage.com` + `oddity.com`)
| Name | Title | Email | Status |
|------|-------|-------|--------|
| Rachael Spencer | VP Growth Marketing | rachaels@ilmakiage.com | ✅ Verified |
| Helina Levy | VP Product & Growth | helinal@oddity.com | ✅ 98% |
| Boaz Ariely | EVP Performance Marketing | boaza@ilmakiage.com | ⚠️ Estimated |
| Miranda May | VP Revenue & Product | mirandam@oddity.com | ⚠️ Estimated |
| Yohei Shoji | VP CX & Insights | yoheis@ilmakiage.com | ⚠️ Estimated |
| Amanda Rodriguez | Director of Retention | amandar@ilmakiage.com | ⚠️ Estimated |

### Lightricks (`lightricks.com`)
| Name | Title | Email | Status |
|------|-------|-------|--------|
| Nicky Kamins | Head of Facetune Data | nicky@lightricks.com | Confirmed |
| Rene Froitzheim | Director of Demand Generation | rfroitzheim@lightricks.com | Confirmed |
| Lior Sassy | Director of Product | lsassy@lightricks.com | Confirmed |

### Wix (`wix.com` — accept_all domain)
| Name | Title | Email | Status |
|------|-------|-------|--------|
| Roy Maimon | Head of Data | roym@wix.com | ⚠️ Estimated |
| Omer Zilberman | Head of Business Development | omerz@wix.com | ⚠️ Estimated |
| Mor Saar | Head of Growth, Base44 | mors@wix.com | ⚠️ Estimated |

### AppsFlyer (`appsflyer.com` — domain blocked by Hunter.io)
| Name | Title | Outreach |
|------|-------|---------|
| Deborah Baruc | Head of Pricing | LinkedIn DM only |
| Gal Regev | Head of GTM Applications | LinkedIn DM only |
| Niv Klein | Head of Product, Incrementality | LinkedIn DM only |

---

## Signal Feed Policy

All buy signals are dated **Q4 2025 (October 2025) or later**. No outdated signals from 2024 or earlier appear in the UI. Each signal includes a "Why this matters for ClarityQ" relevance note tied to ClarityQ's core value prop (self-serve analytics, eliminating analyst queues).

---

## Email Cache

Pre-generated emails cover 7 personas × 3 email types × 3 tones:

**Cached personas:** Michael Saifer, Jonathan Okun, Rachael Spencer, Helina Levy, Nicky Kamins, Rene Froitzheim, Lior Sassy

**Email types:** `cold` · `followup` · `rejection`
**Tones:** `concise` · `conversational` · `direct`

Personas not in cache fall back to a live `claude-sonnet-4-6` call — requires `VITE_ANTHROPIC_API_KEY`.

---

## Tech Stack

- **React 18** + **Vite** — frontend
- **Tailwind CSS** — styling
- **Zustand** — state management (pipeline + A/B store, both persisted in localStorage)
- **Hunter.io API** — live email verification
- **Anthropic API** (claude-sonnet-4-6) — live email generation fallback
- **lucide-react** — icons
- **gh-pages** — GitHub Pages deployment

---

## Setup

```bash
cd dashboard
npm install

# Create .env with your keys
echo "VITE_HUNTER_API_KEY=your_key_here" > .env
echo "VITE_ANTHROPIC_API_KEY=sk-ant-..."  >> .env  # optional

npm run dev   # → http://localhost:5173
npm run build # production build
npm run deploy # push to GitHub Pages
```

> The Hunter.io key is needed for live email lookup in Persona Finder. The Anthropic key is only needed if you want live generation for non-cached personas.

---

## Architecture

```
src/
├── data/
│   ├── companies.js      # 5 ICP companies — personas + Q4 2025+ signals
│   └── emailCache.js     # Pre-generated emails for current personas
├── lib/
│   ├── claude.js         # Cache-first email gen → live Claude API fallback
│   └── hunter.js         # Hunter.io email-finder wrapper
├── store/
│   ├── usePipelineStore.js  # Kanban board state (7 stages, localStorage)
│   └── useABStore.js        # A/B tracker (23 mock seed + real logged outcomes)
└── components/
    ├── ICPScanner.jsx     # Company cards + ICP score breakdown
    ├── SignalFeed.jsx     # Buying signals per company
    ├── PersonaFinder.jsx  # Personas + Hunter.io live lookup
    ├── EmailComposer.jsx  # AI email generation UI
    ├── PipelineBoard.jsx  # Kanban with stage controls
    ├── ABInsights.jsx     # Win rate charts by tone / title / platform / type
    ├── ABResponseModal.jsx # Log outcome when moving a card
    └── Sidebar.jsx        # Navigation
```

---

## A/B Insights

Pre-seeded with 23 mock responses designed to surface a clear story:

- **Concise tone** outperforms Direct and Conversational
- **Head of Data** personas convert at highest rate
- **LinkedIn DM** beats email for C-Suite
- **Follow-up (Day 5)** nearly matches cold intro win rate

Real outcomes are logged automatically when you advance a pipeline card to Replied / Meeting Booked / Rejected.

---

## Pipeline Stages

`Identified` → `Researched` → `Email Drafted` → `Sent` → `Replied` → `Meeting Booked` → `Nurture`

All state persists in browser localStorage — no backend required.
