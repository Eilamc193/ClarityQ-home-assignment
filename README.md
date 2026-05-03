# ClarityQ — SDR Growth Hacker Dashboard

**Live demo:** https://eilamc193.github.io/ClarityQ-home-assignment

A fully interactive SDR tool built as a home assignment for ClarityQ's SDR role. Simulates a real prospecting workflow — ICP scoring, persona research, live email lookup, AI-generated outreach, pipeline management, and A/B analytics — all in one browser app.

---

## What's inside

| Module | Description |
|--------|-------------|
| **ICP Scanner** | 5 target companies scored 0–100 against ClarityQ's ideal customer profile |
| **Signal Feed** | Live buying signals per company (funding, product launches, hiring) |
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
| Il Makiage | DTC Beauty Tech | **83** | Public (ODDITY, NASDAQ) |
| Wix | Website Builder / SaaS | **78** | Public (NASDAQ: WIX) |
| Canva | Design SaaS | **71** | Late Stage / Pre-IPO ($26B) |

---

## Personas & Verified Emails

12 real decision-makers researched manually and verified via Hunter.io:

| Name | Title | Company | Email | Status |
|------|-------|---------|-------|--------|
| Michael Saifer | VP Marketing | Play Perfect | michaels@play-perfect.com | ✅ Verified |
| Dvir Shemesh | Co-CEO | Play Perfect | dvir@play-perfect.com | ✅ Verified |
| Michael Berkovich | Co-CEO | Play Perfect | michael@play-perfect.com | ✅ Verified |
| Jonathan Okun | VP Data & Economy | Play Perfect | jonathan.okun@play-perfect.com | ✅ Verified |
| Rachael Spencer | VP of Growth Marketing | Il Makiage | rachaels@ilmakiage.com | ✅ Verified |
| Helina Levy | VP of Product & Growth | Oddity | helinal@oddity.com | ✅ 98% confidence |
| Antanas Štimaitis | Head of Product | Wix | antanass@wix.com | ✅ Verified |
| Jill Sherman | Co-Founder & CEO, Modalyst | Wix | jills@wix.com | ✅ Verified |
| Gilad Barkan | Head of Data Science Guild | Wix | giladb@wix.com | ⚠️ Estimated (accept-all domain) |
| Zach Kitschke | CMO | Canva | zachary@canva.com | ✅ 97% confidence |
| Cameron Adams | CPO & Co-Founder | Canva | adams@canva.com | ✅ 92% confidence |
| Andy Ford | Head of Marketing Data | Canva | andyford@canva.com | ✅ Verified |

> **AppsFlyer note:** Domain `appsflyer.com` is opted out of Hunter.io's index. Oren Kaniel, Barak Witkowski, and Ran Avrahamy are shown as personas but outreach defaults to LinkedIn DM (links embedded in app).

---

## Email Cache

108 pre-generated emails cover all 12 personas × 3 email types × 3 tones. The composer serves cached emails instantly (simulated 0.9–1.5s delay) — no API key needed for any of the 12 main personas.

**Email types:** `cold` · `followup` · `rejection`
**Tones:** `concise` · `conversational` · `direct`

If a persona isn't in cache (e.g., AppsFlyer), the app falls back to a live `claude-sonnet-4-6` call — requires `VITE_ANTHROPIC_API_KEY`.

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
│   ├── companies.js      # 5 ICP companies — personas, signals, ICP breakdown
│   └── emailCache.js     # 108 pre-generated emails (12 personas × 3 types × 3 tones)
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
