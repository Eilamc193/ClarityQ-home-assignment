import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Pre-seeded mock baseline — replaced gradually by real logged outcomes.
// Designed to surface the story: Concise > Direct, Head of Data/Analytics > VP Marketing/Growth,
// LinkedIn DM > Email, Follow-up (Day 5) nearly matches cold intro.
// Persona titles follow the 7-tier size-based targeting framework.
const MOCK_SEED = [
  { id:'m1',  outcome:'positive_reply',  personaTitle:'Head of Data/Analytics', platform:'email',       emailType:'cold',          tone:'concise',       subject:'Wix Data Guild × ClarityQ — reduce ad-hoc load',    snippet:'Natural language queries on BigQuery. Your scientists get back to modeling.',            daysToResponse:3,  notes:'Said BI team overwhelmed with ad-hoc requests', loggedAt: Date.now() - 20*86400000 },
  { id:'m2',  outcome:'meeting_booked',  personaTitle:'Head of Data/Analytics', platform:'linkedin_dm', emailType:'cold',          tone:'concise',       subject:'Play Perfect data team — cut the analyst queue',     snippet:'ClarityQ sits on top of BigQuery and lets those stakeholders self-serve.',             daysToResponse:2,  notes:'Booked 30-min demo immediately',                loggedAt: Date.now() - 19*86400000 },
  { id:'m3',  outcome:'positive_reply',  personaTitle:'VP Product/Data',        platform:'email',       emailType:'followup',      tone:'concise',       subject:'Re: Canva product data',                             snippet:'With Magic Studio live, PMs need adoption metrics fast — not end-of-sprint.',          daysToResponse:5,  notes:'Second email landed better angle',              loggedAt: Date.now() - 18*86400000 },
  { id:'m4',  outcome:'positive_reply',  personaTitle:'CEO/C-Suite',            platform:'email',       emailType:'cold',          tone:'concise',       subject:'Play Perfect — data visibility for the board table', snippet:'Ask "what\'s total revenue by title this week?" in plain English. Answer in seconds.',   daysToResponse:7,  notes:'Liked the signal-based opening',                loggedAt: Date.now() - 17*86400000 },
  { id:'m5',  outcome:'no_response',     personaTitle:'VP Marketing/Growth',    platform:'email',       emailType:'cold',          tone:'concise',       subject:'Il Makiage growth data — answers in 10 seconds',     snippet:'ClarityQ connects to your Snowflake/Segment stack.',                                  daysToResponse:0,  notes:'',                                              loggedAt: Date.now() - 16*86400000 },
  { id:'m6',  outcome:'meeting_booked',  personaTitle:'Head of Data/Analytics', platform:'phone',       emailType:'cold',          tone:'concise',       subject:'',                                                   snippet:'Cold call follow-up to first email',                                                 daysToResponse:1,  notes:'Picked up — booked a demo immediately',         loggedAt: Date.now() - 15*86400000 },
  { id:'m7',  outcome:'positive_reply',  personaTitle:'CEO/C-Suite',            platform:'linkedin_dm', emailType:'followup',      tone:'concise',       subject:'Re: Play Perfect data visibility',                   snippet:'CEOs who use ClarityQ spot retention dips on Monday instead of hearing about them Friday.', daysToResponse:5, notes:'LinkedIn DM got through where email didn\'t', loggedAt: Date.now() - 14*86400000 },
  { id:'m8',  outcome:'no_response',     personaTitle:'VP Marketing/Growth',    platform:'email',       emailType:'followup',      tone:'concise',       subject:'Re: Canva growth data',                              snippet:'Magic Studio creates new analytics questions for your team.',                         daysToResponse:0,  notes:'',                                              loggedAt: Date.now() - 13*86400000 },
  { id:'m9',  outcome:'positive_reply',  personaTitle:'Head of Data/Analytics', platform:'email',       emailType:'cold',          tone:'conversational',subject:'Question about ad-hoc requests for the Wix data guild', snippet:'What percentage of your guild\'s capacity goes to answering repetitive ad-hoc questions?', daysToResponse:6, notes:'Responded to the diagnostic question',         loggedAt: Date.now() - 12*86400000 },
  { id:'m10', outcome:'meeting_booked',  personaTitle:'VP Product/Data',        platform:'linkedin_dm', emailType:'cold',          tone:'conversational',subject:'Product analytics at Canva scale — a question',       snippet:'When a PM wants to know why users drop off in the AI builder — how fast do they get that answer?', daysToResponse:3, notes:'LinkedIn message got a quick response', loggedAt: Date.now() - 11*86400000 },
  { id:'m11', outcome:'rejection',       personaTitle:'CEO/C-Suite',            platform:'email',       emailType:'cold',          tone:'conversational',subject:'Running Modalyst inside Wix — a data question',       snippet:'ClarityQ gives business unit leaders self-serve data access without the centralized queue.', daysToResponse:4, notes:'Said budget frozen until Q3',             loggedAt: Date.now() - 10*86400000 },
  { id:'m12', outcome:'positive_reply',  personaTitle:'VP Marketing/Growth',    platform:'email',       emailType:'followup',      tone:'conversational',subject:'Still thinking about your growth data setup',          snippet:'Running two brands simultaneously means two separate acquisition ecosystems.',          daysToResponse:8,  notes:'Different angle on follow-up worked',           loggedAt: Date.now() - 9*86400000  },
  { id:'m13', outcome:'no_response',     personaTitle:'VP Product/Data',        platform:'email',       emailType:'cold',          tone:'conversational',subject:'Feature impact analytics at Il Makiage',              snippet:'When your team ships a change, how long until you see the data?',                     daysToResponse:0,  notes:'',                                              loggedAt: Date.now() - 8*86400000  },
  { id:'m14', outcome:'meeting_booked',  personaTitle:'Head of Product',        platform:'linkedin_dm', emailType:'followup',      tone:'conversational',subject:'Re: Wix product team analytics — self-serve layer',   snippet:'Wix just launched AI builder — central team bandwidth will get consumed.',            daysToResponse:5,  notes:'Timing angle on the AI launch resonated',       loggedAt: Date.now() - 7*86400000  },
  { id:'m15', outcome:'positive_reply',  personaTitle:'VP Marketing/Growth',    platform:'email',       emailType:'post_rejection',tone:'conversational',subject:'Makes sense — let\'s stay in touch',                snippet:'I\'ll circle back when Il Makiage and nu are both at scale.',                         daysToResponse:14, notes:'Re-engaged 2 weeks after rejection',            loggedAt: Date.now() - 6*86400000  },
  { id:'m16', outcome:'positive_reply',  personaTitle:'Head of Data/Analytics', platform:'phone',       emailType:'followup',      tone:'conversational',subject:'',                                                   snippet:'Call follow-up after email follow-up',                                               daysToResponse:5,  notes:'Phone confirmed interest after two emails',     loggedAt: Date.now() - 5*86400000  },
  { id:'m17', outcome:'no_response',     personaTitle:'VP Product/Data',        platform:'email',       emailType:'cold',          tone:'direct',        subject:'Your feature data — how fast does it answer back?',  snippet:'If it\'s more than same-day, ClarityQ cuts that to seconds.',                        daysToResponse:0,  notes:'',                                              loggedAt: Date.now() - 5*86400000  },
  { id:'m18', outcome:'rejection',       personaTitle:'CEO/C-Suite',            platform:'email',       emailType:'cold',          tone:'direct',        subject:'CEO data access at Play Perfect — quick question',   snippet:'ClarityQ connects to your existing BigQuery/Tableau stack.',                         daysToResponse:3,  notes:'Said they have an internal tool already',       loggedAt: Date.now() - 4*86400000  },
  { id:'m19', outcome:'positive_reply',  personaTitle:'Head of Data/Analytics', platform:'email',       emailType:'followup',      tone:'direct',        subject:'70% faster data answers — worth a demo?',            snippet:'We cut a gaming studio\'s analyst response time by 70% during a live launch.',        daysToResponse:6,  notes:'The specific metric caught attention',           loggedAt: Date.now() - 3*86400000  },
  { id:'m20', outcome:'no_response',     personaTitle:'VP Marketing/Growth',    platform:'email',       emailType:'cold',          tone:'direct',        subject:'Your growth experiment data — how fast does it answer?', snippet:'If it\'s more than same-day, ClarityQ fixes that.',                               daysToResponse:0,  notes:'',                                              loggedAt: Date.now() - 2*86400000  },
  { id:'m21', outcome:'meeting_booked',  personaTitle:'Head of Growth/UA',      platform:'phone',       emailType:'cold',          tone:'direct',        subject:'',                                                   snippet:'Cold call — Head of UA at Canva, direct outreach on Magic Studio adoption data',      daysToResponse:1,  notes:'Booked demo — Magic Studio launch was the hook', loggedAt: Date.now() - 1*86400000  },
  { id:'m22', outcome:'no_response',     personaTitle:'VP Marketing/Growth',    platform:'linkedin_dm', emailType:'followup',      tone:'direct',        subject:'The soft launch window is closing',                  snippet:'The window where daily data matters most is during a soft launch.',                   daysToResponse:0,  notes:'',                                              loggedAt: Date.now() - 1*86400000  },
  { id:'m23', outcome:'no_response',     personaTitle:'VP Product/Data',        platform:'email',       emailType:'post_rejection',tone:'direct',        subject:'Understood — filing this for when the timing is right', snippet:'When the next title launches, ClarityQ will still plug into BigQuery.',             daysToResponse:0,  notes:'',                                              loggedAt: Date.now()               },
  { id:'m24', outcome:'positive_reply',  personaTitle:'Head of Product',        platform:'email',       emailType:'cold',          tone:'concise',       subject:'AppsFlyer product analytics — self-serve for PMs',   snippet:'Your PMs are probably waiting 48 hours for data that should take 10 seconds.',       daysToResponse:4,  notes:'Head of Product at large company — felt the pain', loggedAt: Date.now() - 3*86400000 },
  { id:'m25', outcome:'meeting_booked',  personaTitle:'Head of Growth/UA',      platform:'linkedin_dm', emailType:'followup',      tone:'concise',       subject:'Re: Il Makiage UA data — METHODIQ launch signal',    snippet:'Launching a telehealth brand doubles your attribution complexity overnight.',          daysToResponse:3,  notes:'METHODIQ launch was the perfect hook',          loggedAt: Date.now() - 2*86400000 },
  { id:'m26', outcome:'positive_reply',  personaTitle:'Director',               platform:'email',       emailType:'cold',          tone:'conversational',subject:'Director-level analytics at Wix — a question',       snippet:'With 1B events/day, your team\'s ad-hoc queue is probably a bottleneck. Am I right?', daysToResponse:5,  notes:'Director of Data responded positively',         loggedAt: Date.now() - 1*86400000 },
]

export const useABStore = create(
  persist(
    (set, get) => ({
      responses: MOCK_SEED,

      logResponse(entry) {
        set((s) => ({
          responses: [
            ...s.responses,
            {
              id: `r-${Date.now()}`,
              loggedAt: Date.now(),
              ...entry,
            },
          ],
        }))
      },

      // Computed insights from all responses
      getInsights() {
        const { responses } = get()
        const isWin = (r) => r.outcome === 'positive_reply' || r.outcome === 'meeting_booked'

        function winRate(subset) {
          if (!subset.length) return 0
          return Math.round((subset.filter(isWin).length / subset.length) * 100)
        }

        function avgDays(subset) {
          const replied = subset.filter((r) => r.daysToResponse > 0)
          if (!replied.length) return null
          return Math.round(replied.reduce((s, r) => s + r.daysToResponse, 0) / replied.length)
        }

        const tones = ['concise', 'conversational', 'direct']
        const titles = ['Head of Data/Analytics', 'Head of Growth/UA', 'Head of Product', 'VP Product/Data', 'VP Marketing/Growth', 'Director', 'CEO/C-Suite']
        const platforms = ['email', 'linkedin_dm', 'phone']
        const emailTypes = ['cold', 'followup', 'post_rejection']

        const byTone = tones.map((t) => ({
          label: t.charAt(0).toUpperCase() + t.slice(1),
          rate: winRate(responses.filter((r) => r.tone === t)),
          count: responses.filter((r) => r.tone === t).length,
        }))

        const byTitle = titles.map((t) => ({
          label: t,
          rate: winRate(responses.filter((r) => r.personaTitle === t)),
          count: responses.filter((r) => r.personaTitle === t).length,
        }))

        const byPlatform = platforms.map((p) => ({
          label: p === 'linkedin_dm' ? 'LinkedIn DM' : p.charAt(0).toUpperCase() + p.slice(1),
          rate: winRate(responses.filter((r) => r.platform === p)),
          avgDays: avgDays(responses.filter((r) => r.platform === p && r.daysToResponse > 0)),
          count: responses.filter((r) => r.platform === p).length,
        }))

        const byEmailType = emailTypes.map((e) => ({
          label: e === 'post_rejection' ? 'Post-Rejection' : e.charAt(0).toUpperCase() + e.slice(1),
          rate: winRate(responses.filter((r) => r.emailType === e)),
          count: responses.filter((r) => r.emailType === e).length,
        }))

        // Top 3 emails by win rate (only those with subject + ≥2 wins)
        const emailGroups = {}
        responses.filter((r) => r.subject).forEach((r) => {
          const key = r.subject
          if (!emailGroups[key]) emailGroups[key] = { subject: r.subject, snippet: r.snippet, tone: r.tone, emailType: r.emailType, personaTitle: r.personaTitle, attempts: 0, wins: 0 }
          emailGroups[key].attempts++
          if (isWin(r)) emailGroups[key].wins++
        })
        const topEmails = Object.values(emailGroups)
          .filter((e) => e.wins >= 1)
          .sort((a, b) => (b.wins / b.attempts) - (a.wins / a.attempts))
          .slice(0, 3)

        return { byTone, byTitle, byPlatform, byEmailType, topEmails, total: responses.length, wins: responses.filter(isWin).length }
      },
    }),
    { name: 'ghd-ab-tracker' }
  )
)
