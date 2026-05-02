// Pre-generated email cache — 12 personas × 3 types × 3 tones = 108 emails.
// Lookup: emailCache[personaId][emailType][tone]
// EmailComposer checks this cache before calling the Claude API.

export const emailCache = {

  // ─────────────────────────────────────────────
  // PLAY PERFECT
  // ─────────────────────────────────────────────

  'playp-michael-saifer': {
    cold: {
      concise: {
        subject: 'Play Perfect × ClarityQ — ROAS answers in 10 sec',
        body: `Hi Michael,

Saw Play Perfect is soft-launching a new title while simultaneously hunting for a Monetization Data Analyst. That's a lot of campaign data chasing a shrinking headcount.

ClarityQ connects to BigQuery and lets your UA team ask "which channel drove the best LTV last week?" in plain English — answer in under 10 seconds, no SQL required.

Worth a 15-minute look? Happy to show you a live demo with your data stack.`,
        personalization_notes: [
          'Referenced Play Perfect\'s active card game soft-launch (Dec 2024)',
          'Referenced open Monetization Data Analyst job posting',
          'Mentioned BigQuery (confirmed tool in their stack)',
          'Framed around UA team pain: ROAS + LTV tracking without SQL',
        ],
      },
      conversational: {
        subject: 'Quick question about your UA analytics setup',
        body: `Hey Michael,

I was looking at Play Perfect's growth — 50M+ downloads is no joke, and with a new title in soft launch the pressure to optimize every acquisition dollar must be real right now.

I'm curious: how long does it currently take your team to get an answer like "what's the Day-7 retention on users from Meta vs Google for this new title?" Is it a quick query, or does it go through an analyst queue?

I ask because ClarityQ is an AI analytics tool that connects to BigQuery and lets non-technical team members ask questions like that in plain English — and get the answer in seconds. We work with mobile gaming studios that are in exactly your situation: scaling fast, lean data team, lots of campaign decisions to make.

Would love to show you a quick demo if the timing is right. What does your week look like?`,
        personalization_notes: [
          'Acknowledged 50M+ download milestone as a signal of scale',
          'Referenced new title in soft launch as a current pain trigger',
          'Asked a specific, relatable question about their data workflow',
          'Named BigQuery as their confirmed stack component',
        ],
      },
      direct: {
        subject: 'Your new title launch — data bottleneck coming',
        body: `Michael,

You're soft-launching a new card game while your Monetization Data Analyst seat is still open. That means your UA team is making acquisition decisions on delayed data — which in mobile gaming is a competitive disadvantage.

ClarityQ plugs into your BigQuery stack and lets any team member — PM, UA manager, CMO — ask "what's the ROAS on TikTok this week?" and get a precise answer in 10 seconds.

I'd like to show you what that looks like for a gaming studio in 15 minutes. Are you free Thursday or Friday?`,
        personalization_notes: [
          'Named the specific business risk: delayed data during soft launch',
          'Referenced open Monetization Data Analyst role to create urgency',
          'Used a specific, gaming-relevant metric example (ROAS on TikTok)',
          'Clear, time-bound CTA (Thursday or Friday)',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Play Perfect × ClarityQ',
        body: `Hi Michael,

Following up on my note from last week. Didn't want to let it get buried.

One thing that might be relevant: ClarityQ recently worked with a mobile gaming studio similar to Play Perfect's size and helped them cut analyst response time by 70% during a live game launch. That meant the UA team could iterate on bids same-day instead of waiting 48 hours.

Still happy to show you a 15-minute demo. Would next week work?`,
        personalization_notes: [
          'Followed up without being pushy — acknowledged the gap',
          'Added a new hook: social proof from a similar gaming company',
          'Kept it extremely short — respects busy VP Marketing inbox',
        ],
      },
      conversational: {
        subject: 'Still thinking about that ROAS question',
        body: `Hey Michael,

Reaching back out — I sent a note a few days ago about ClarityQ and wanted to add one more thought.

I've been reading about Play Perfect's Gin Rummy portfolio. It sounds like you're running a pretty sophisticated UA operation to maintain that kind of download velocity. The challenge I keep hearing from mobile gaming VPs is that the data to make a bid adjustment comes 24-48 hours too late — by the time the analyst pulls the report, the campaign window is gone.

That's exactly what we built ClarityQ to solve. Natural language queries on top of your existing BigQuery stack. No rework, no new dashboards.

Happy to jump on a quick call whenever the timing works. What does your schedule look like this week?`,
        personalization_notes: [
          'Referenced Gin Rummy portfolio specifically — shows real research',
          'Named the "24-48 hour data lag" pain point common in mobile gaming',
          'Positioned as non-disruptive (no new stack, just layered on existing BigQuery)',
        ],
      },
      direct: {
        subject: 'One more angle on your data setup',
        body: `Michael,

Quick follow-up. A different angle on why I reached out:

With a soft launch active and a data analyst seat still open, your window to iterate fast is right now — before the game's key metrics stabilize. Every day of delayed campaign data in that window costs you optimization cycles.

ClarityQ gives your existing team — today, without a new hire — the ability to query BigQuery in plain English and get answers in seconds. Book 15 minutes and I'll show you exactly how.`,
        personalization_notes: [
          'Created genuine urgency: optimization window during soft launch is time-limited',
          'Reframed as "today without a new hire" — removes the "we\'ll fix it when we hire" objection',
          'Direct, action-oriented close',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — noted, keeping the door open',
        body: `Hi Michael,

Totally understand — bad timing happens. I'll take this off your plate for now.

One quick ask: if the data bottleneck during your next launch becomes a real friction point, would you be open to a 15-minute conversation then? No pressure either way.

Rooting for the new title.`,
        personalization_notes: [
          'Acknowledged rejection gracefully — no pushback',
          'Left a clear re-engagement trigger: "next launch" timing',
          'Ended on a genuine, human note about Play Perfect\'s new game',
        ],
      },
      conversational: {
        subject: 'Makes sense — let\'s stay in touch',
        body: `Hey Michael,

Fair enough — appreciate you getting back to me. Timing isn't always right, and I'd rather wait for the right moment than push for a meeting that won't be useful.

I'll circle back when you have a new launch on the horizon or if a data crunch hits at a particularly bad moment. Feel free to reach out directly if something changes before then.

Good luck with the soft launch — those early retention numbers will tell the story quickly.`,
        personalization_notes: [
          'Acknowledged the "no" without trying to overcome it',
          'Left two re-engagement triggers: new launch + data crunch moment',
          'Personal and genuine — references the soft launch outcome',
        ],
      },
      direct: {
        subject: 'Understood — filing this for when the timing is right',
        body: `Michael,

Understood. I'll hold off for now.

When the next title launches or when you're feeling the analyst bandwidth squeeze, I'll be here. ClarityQ will still plug into BigQuery and still give your team same-day campaign data — the opportunity just needs the right timing.

Talk soon.`,
        personalization_notes: [
          'Crisp, no-fluff acknowledgment of rejection',
          'Named two future triggers: next title launch, analyst squeeze',
          'Reinforced the core value prop one last time without being salesy',
        ],
      },
    },
  },

  'playp-dvir-shemesh': {
    cold: {
      concise: {
        subject: 'Play Perfect — data visibility for the board table',
        body: `Hi Dvir,

Running a gaming studio at Play Perfect's scale means constantly answering "how's the business?" with data from three different tools across two titles.

ClarityQ connects those sources and lets you ask "what's total revenue by title this week, compared to last month?" — answer in seconds, no analyst needed.

Worth a 15-minute look before your next board prep?`,
        personalization_notes: [
          'Addressed CEO-specific pain: board reporting and cross-title visibility',
          'Used a specific, realistic metric example relevant to a gaming CEO',
          'Tied CTA to an existing trigger: board prep cycle',
        ],
      },
      conversational: {
        subject: 'Question about how you track the business at Play Perfect',
        body: `Hi Dvir,

I was looking at Play Perfect's portfolio — Gin Rummy Stars, Grand Gin Rummy, and what sounds like a new title in soft launch. Managing P&L and performance across multiple games is genuinely complex.

Quick question: when you need to know how the business is performing right now, do you get that answer from a dashboard you check yourself, or do you usually need to ask someone to pull the data?

I'm asking because ClarityQ is built for exactly the CEO use case — connect your data (BigQuery, Tableau, whatever you're using) and ask business questions in plain English. "What's our Day-30 retention vs. last quarter?" gets you a precise answer in 10 seconds.

Happy to show you a live demo if this sounds relevant. What's your availability like this week?`,
        personalization_notes: [
          'Named specific game titles — demonstrates real research',
          'Asked a diagnostic question that surfaces the pain naturally',
          'Framed around "CEO use case" explicitly — addresses his decision-making role',
        ],
      },
      direct: {
        subject: 'CEO data access at Play Perfect — quick question',
        body: `Dvir,

If you want to know "how did Grand Gin Rummy perform last week vs. the new title in soft launch?" — how fast do you get that answer today?

If it's more than 30 seconds, ClarityQ can fix that. We connect to your existing BigQuery/Tableau stack and let you ask business questions in plain English. No analyst queue, no dashboards to maintain.

15 minutes this week — I'll show you exactly how.`,
        personalization_notes: [
          'Led with a highly specific, realistic data question for Play Perfect\'s CEO',
          'Named both confirmed analytics tools (BigQuery, Tableau)',
          'Extremely direct — one paragraph setup, one value prop, one CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Play Perfect data visibility',
        body: `Hi Dvir,

Following up from last week. One additional thought: CEOs who use ClarityQ tell us the biggest value isn't the fancy queries — it's being able to spot a retention dip in a new game on Monday morning instead of hearing about it Friday from an analyst.

For a studio with a title in soft launch, that timing matters a lot.

Still happy to show you a 15-minute demo. What does your week look like?`,
        personalization_notes: [
          'Added new angle: proactive issue detection vs reactive reporting',
          'Connected to soft-launch timing — makes the benefit concrete and urgent',
        ],
      },
      conversational: {
        subject: 'Still thinking about the soft launch window',
        body: `Hey Dvir,

Sending a quick follow-up in case my last note didn't land at the right moment.

I keep thinking about Play Perfect's position right now — new title in soft launch, optimizing spend, trying to move fast before competitors pick up on the mechanics. That phase is usually where the data feedback loop is most critical, and also where most gaming studios feel the most friction.

ClarityQ is built specifically for that moment. It connects your existing data stack and gives everyone — you, your marketing VP, your product leads — answers in real-time without waiting on your data team.

Happy to show you a quick demo if this resonates. No hard sell, just curious if the timing is right.`,
        personalization_notes: [
          'Acknowledged soft-launch as the key timing trigger',
          'Extended value to the whole leadership team, not just the CEO',
          'Casual, non-pushy tone appropriate for follow-up',
        ],
      },
      direct: {
        subject: 'The soft launch window is closing',
        body: `Dvir,

A quick follow-up. The window where daily data matters most is exactly during a soft launch — and that window closes fast.

ClarityQ gives you and your team same-day answers on retention, ROAS, and revenue without analyst lag. If you're making spend decisions on delayed data right now, that's a direct cost.

15 minutes this week — worth it or not?`,
        personalization_notes: [
          'Created genuine urgency: the soft launch window is time-bounded',
          'Named specific, high-stakes metrics: retention, ROAS, revenue',
          'Ended with a direct yes/no framing — respects his time',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — noted',
        body: `Hi Dvir,

Understood — no worries at all. I'll follow up when Play Perfect has another major launch or a data crunch that makes this more relevant.

Best of luck with the new title.`,
        personalization_notes: [
          'Extremely brief — respects a CEO\'s time even in rejection',
          'Left a clear re-engagement trigger: next major launch',
        ],
      },
      conversational: {
        subject: 'Makes complete sense',
        body: `Hi Dvir,

Appreciate you getting back to me — genuinely. Timing is everything with these conversations, and I'd rather wait until it's actually useful.

I'll check back in when you have a new launch or when the data team bandwidth becomes a real bottleneck. In the meantime, good luck with Gin Rummy Stars and whatever comes next.

Feel free to reach out anytime.`,
        personalization_notes: [
          'Named a specific game (Gin Rummy Stars) — keeps it personal',
          'Two re-engagement triggers: next launch, data team bandwidth',
        ],
      },
      direct: {
        subject: 'Understood — I\'ll be here when the timing is right',
        body: `Dvir,

Fair enough. Filed for later — when you're scaling again or the data noise gets loud.

Talk soon.`,
        personalization_notes: [
          'Minimal, respectful — matches his direct communication style as CEO',
          'Left the door open without being sycophantic',
        ],
      },
    },
  },

  'playp-michael-berkovich': {
    cold: {
      concise: {
        subject: 'Play Perfect — product decisions on live data',
        body: `Hi Michael,

Building a gaming portfolio at scale means your product decisions — what to fix, what to ship, when to kill a feature — need to move faster than the analytics queue.

ClarityQ connects to BigQuery and lets your product leads ask "what's the Day-14 churn on the new title's tutorial?" and get the answer in seconds, not days.

Worth 15 minutes to see it in action?`,
        personalization_notes: [
          'Addressed the product decision velocity pain common for multi-title gaming CEOs',
          'Used a highly specific, realistic mobile gaming metric (Day-14 churn on tutorial)',
          'Short, direct — appropriate for a Co-CEO who moves fast',
        ],
      },
      conversational: {
        subject: 'How Play Perfect makes product calls on live data',
        body: `Hi Michael,

I've been following Play Perfect's growth — the card game portfolio is impressive, and managing product across multiple live titles while soft-launching new ones is genuinely complex.

I'm curious about your current setup: when a product lead wants to know whether a gameplay change improved retention — how quickly can they get that answer? Same day? Next day? End of week via analyst report?

I ask because ClarityQ is built to make that kind of question answerable in seconds. It connects to your existing BigQuery stack, and any product manager can ask "did the tutorial change improve Day-7 retention?" in plain English and get an accurate answer immediately.

Would love to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Acknowledged multi-title complexity — demonstrates understanding of their business',
          'Asked a diagnostic question that surfaces their data latency pain',
          'Framed the solution around product manager use case — relevant to a CPO/Co-CEO',
        ],
      },
      direct: {
        subject: 'Product data lag at Play Perfect — worth 15 min?',
        body: `Michael,

When your product team needs to know if a gameplay change worked — how long does that answer take? If it's more than a few hours, you're losing optimization cycles on live titles.

ClarityQ connects to BigQuery and gives your PMs same-day behavioral answers in plain English. No SQL, no analyst queue, no waiting.

I'd like to show you a 15-minute demo this week. Tuesday or Wednesday work for you?`,
        personalization_notes: [
          'Led with the core business cost: lost optimization cycles',
          'Positioned for PMs specifically — the users who feel the pain daily',
          'Gave specific day options — easier to say yes to than an open-ended ask',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Play Perfect product data',
        body: `Hi Michael,

Following up from last week. One new angle: ClarityQ recently helped a gaming studio reduce their analyst response time by 70% during a soft launch — letting their product team make daily iteration decisions instead of weekly ones.

Still worth 15 minutes? Happy to show you a quick demo.`,
        personalization_notes: [
          'Added social proof: specific metric from similar gaming company',
          'Tied benefit to product iteration velocity — his core job',
        ],
      },
      conversational: {
        subject: 'Still thinking about Play Perfect\'s data setup',
        body: `Hey Michael,

Following up in case my last note got lost in the shuffle. I know the inbox is brutal.

One thing I didn't mention: ClarityQ isn't just for the data team — it's specifically designed for product managers and executives who need answers without SQL skills. In a gaming studio, that means your PMs can pull retention curves, ARPU by cohort, and feature adoption data themselves, without ever filing an analytics request.

The gaming studios I've talked to say this changes the product meeting dynamic entirely — you walk in with live data, not last week's slide.

Happy to show you what that looks like for Play Perfect. What does your schedule look like this week?`,
        personalization_notes: [
          'Addressed a possible objection: "we have a data team" — positioned as complementary',
          'Named specific gaming metrics PMs would care about: ARPU by cohort, retention curves',
          'Painted a vivid "day in the life" picture of the benefit',
        ],
      },
      direct: {
        subject: '70% faster data answers — worth a demo?',
        body: `Michael,

Quick follow-up. We recently cut a gaming studio's analyst response time by 70% during a live launch window. That's the difference between iterating on Monday vs Thursday.

For Play Perfect, with a new title in soft launch right now, that timing gap matters. Worth 15 minutes this week?`,
        personalization_notes: [
          'Led with a compelling, specific metric (70% faster)',
          'Made it concrete with the Monday vs Thursday framing',
          'Referenced soft launch timing — creates genuine urgency',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — totally understand',
        body: `Hi Michael,

No worries at all — I'll follow up when the timing is better. Best of luck with the new title and the portfolio growth.`,
        personalization_notes: [
          'Brief, graceful exit — respects a Co-CEO\'s time',
          'Referenced the portfolio and new title as genuine good wishes',
        ],
      },
      conversational: {
        subject: 'Makes sense — let\'s stay in touch',
        body: `Hey Michael,

Fair enough — I appreciate you responding. I know these decisions are timing-dependent, and forcing it when it's not right is a waste for both of us.

I'll keep an eye on Play Perfect's launches and check back when the data complexity grows. In the meantime, good luck with the new title — card games at scale are genuinely interesting.

Feel free to ping me anytime.`,
        personalization_notes: [
          'Acknowledged the timing dependency — shows understanding',
          'Expressed genuine interest in Play Perfect\'s space (card games)',
          'Left a clear future trigger: as portfolio complexity grows',
        ],
      },
      direct: {
        subject: 'Understood — filing for next launch',
        body: `Michael,

Noted. I'll circle back when you're deeper into the next launch cycle and data speed becomes the constraint.

Talk soon.`,
        personalization_notes: [
          'Crisp and direct — matches the direct communication style expected',
          'Named the specific future trigger: next launch cycle',
        ],
      },
    },
  },

  'playp-jonathan-okun': {
    cold: {
      concise: {
        subject: 'VP Data × ClarityQ — cut the analyst queue',
        body: `Hi Jonathan,

Running data and virtual economy for Play Perfect means your team probably spends a significant chunk of time on ad-hoc requests from marketing, product, and leadership — answering questions that don't require your expertise, just your access.

ClarityQ sits on top of BigQuery and lets those stakeholders self-serve on routine questions. Your team gets back to the high-leverage work.

Worth a quick look? Happy to demo in 15 minutes.`,
        personalization_notes: [
          'Named Jonathan\'s specific role: data AND virtual economy — shows real research',
          'Framed around the pain data VPs actually feel: ad-hoc requests consuming bandwidth',
          'Positioned ClarityQ as complementary to his team, not a replacement',
        ],
      },
      conversational: {
        subject: 'Question about your ad-hoc data request volume',
        body: `Hi Jonathan,

I've been looking at Play Perfect's setup — VP Data & Economy is a fascinating role, especially in mobile gaming where in-app economics drive almost everything. Your team must sit at the intersection of monetization modeling, UA data, and business reporting.

Quick question: what percentage of your team's week goes to "can you pull X for me?" requests vs strategic analysis? I'm guessing it's higher than anyone would like.

ClarityQ is built to fix exactly that. It connects to BigQuery and lets marketing, product, and leadership teams ask those questions themselves — in plain English — without touching your queue. Your analysts get to work on the interesting problems.

Happy to show you how it works. What does your calendar look like this week?`,
        personalization_notes: [
          'Acknowledged the unique "Data & Economy" role — rare and interesting combination',
          'Asked a diagnostic question that surfaces the ad-hoc request pain naturally',
          'Positioned solution as freeing his team, not replacing them',
        ],
      },
      direct: {
        subject: 'Cut Play Perfect\'s analyst queue — 15 min?',
        body: `Jonathan,

If your team spends more than 30% of its time on ad-hoc data requests from stakeholders who could, with the right tool, answer their own questions — ClarityQ fixes that.

Connect BigQuery to ClarityQ, and your marketing and product teams can ask "what's the LTV of players acquired via Facebook in Q4?" themselves. In seconds. Without you.

That frees your team for the virtual economy modeling that actually drives Play Perfect's monetization. Worth a 15-minute demo?`,
        personalization_notes: [
          'Opened with a specific, relatable benchmark: 30% ad-hoc request load',
          'Named a gaming-specific query example: LTV by acquisition channel',
          'Closed by connecting back to his strategic work: virtual economy modeling',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: ClarityQ for Play Perfect data team',
        body: `Hi Jonathan,

Following up from last week. One thought I forgot to mention: ClarityQ also works for the data team itself — quick queries, data exploration, sanity checks — not just for the stakeholders you support.

Still happy to show you a demo. 15 minutes this week?`,
        personalization_notes: [
          'Added new angle: value for the data team itself, not just as a self-serve tool for others',
          'Short and respectful — doesn\'t re-explain everything',
        ],
      },
      conversational: {
        subject: 'One more thought on your data team setup',
        body: `Hey Jonathan,

Reaching back out — I realize my last note focused a lot on reducing your team's ad-hoc load, but I didn't mention the other side.

ClarityQ also gives your data team better tooling for their own exploration work. When you're modeling virtual economy changes or testing a new pricing hypothesis, having a natural language layer on top of BigQuery means less time writing exploratory queries and more time thinking about the results.

For a VP running both data and economy, that compound benefit might be the more interesting angle.

Happy to walk through it in 15 minutes whenever works for you.`,
        personalization_notes: [
          'Pivoted to a new angle: value for the data team\'s own analysis, not just stakeholder self-serve',
          'Named his unique "Data & Economy" combination as the lens',
          'Showed understanding of exploratory vs. operational analytics use cases',
        ],
      },
      direct: {
        subject: 'Two sides of ClarityQ for Play Perfect',
        body: `Jonathan,

Quick follow-up with an angle I missed: ClarityQ works in both directions.

Outward — your stakeholders self-serve on routine questions. Inward — your team explores BigQuery data faster with natural language queries.

For a data + economy VP, both sides have value. Worth 15 minutes to see the full picture?`,
        personalization_notes: [
          'Introduced the dual-use framing: outward (stakeholder self-serve) and inward (team efficiency)',
          'Very concise — respects that this is a second touch',
          'Clear question at the end: yes or no to a demo',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Jonathan,

No problem at all. I'll keep this on my radar and follow up when Play Perfect's data team is feeling more bandwidth pressure.

Thanks for getting back to me.`,
        personalization_notes: [
          'Brief and professional',
          'Named a specific re-engagement trigger: data team bandwidth',
        ],
      },
      conversational: {
        subject: 'Makes sense — no rush',
        body: `Hey Jonathan,

Fair enough — I appreciate the honest response. These things are about timing, and I'd rather wait for the right moment than push for something that won't be useful.

I'll circle back when Play Perfect is scaling the data team or when the virtual economy modeling work is demanding more analytical horsepower. Until then, good luck with the new title launch.

Feel free to reach out directly if something changes.`,
        personalization_notes: [
          'Named specific re-engagement triggers: scaling the team, increased analytical demand',
          'Referenced the virtual economy work — shows continued understanding of his role',
        ],
      },
      direct: {
        subject: 'Understood — I\'ll be here',
        body: `Jonathan,

Noted. When the ad-hoc request volume starts hitting harder, or when you're hiring more analysts than you\'d like, reach out.

ClarityQ will still be here.`,
        personalization_notes: [
          'Named the future pain points directly: request volume, analyst hiring pressure',
          'Confident, not desperate — leaves the door open without begging',
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // IL MAKIAGE
  // ─────────────────────────────────────────────

  'ilmak-rachael-spencer': {
    cold: {
      concise: {
        subject: 'Il Makiage growth data — answers in 10 seconds',
        body: `Hi Rachael,

Il Makiage's post-IPO growth machine runs on data — but getting cross-channel campaign answers when you need them (not 24 hours later) is still a friction point for most growth marketing VPs.

ClarityQ connects to your Snowflake/Segment stack and lets your team ask "what\'s our blended CAC across Meta and email this week?" in plain English. Answer in 10 seconds.

Worth a 15-minute look?`,
        personalization_notes: [
          'Referenced ODDITY Tech IPO as context for growth pressure',
          'Named Il Makiage\'s confirmed tools: Snowflake and Segment',
          'Used a realistic growth marketing metric: blended CAC across channels',
        ],
      },
      conversational: {
        subject: 'Question about your growth analytics setup at Il Makiage',
        body: `Hi Rachael,

I've been following Il Makiage's growth story — going public as part of ODDITY Tech while simultaneously launching a new skincare brand is a high-stakes data environment. Your team must be running A/B tests and campaign experiments at a serious pace.

Quick question: when you need to know which acquisition channel drove the best LTV last month — how fast do you get that answer? Is it a query you can run yourself, or does it go through someone on the data team?

I ask because ClarityQ lets growth marketing VPs get those answers themselves, instantly, by asking in plain English. It connects to Snowflake and Segment and returns precise answers — not just dashboards.

Happy to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Referenced both ODDITY Tech IPO and nu skincare brand launch — shows real research',
          'Asked a diagnostic question that surfaces the data access friction naturally',
          'Named confirmed tech stack tools: Snowflake and Segment',
        ],
      },
      direct: {
        subject: 'Your growth data — accessible in 10 seconds or not?',
        body: `Rachael,

When you want to know "which channel drove best LTV in the last 30 days?" — do you get that answer yourself in seconds, or does it go into someone's queue?

If it's the latter, ClarityQ fixes that. We connect to Il Makiage's Snowflake stack and give your growth team natural language access to their own data. No SQL, no waiting, no analyst bottleneck.

15 minutes this week — I'll show you exactly what that looks like for a growth marketing VP.`,
        personalization_notes: [
          'Opened with a direct diagnostic question — immediately surfaces the pain',
          'Named Snowflake specifically — confirms stack knowledge',
          'Positioned around the VP growth use case explicitly',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Il Makiage growth data',
        body: `Hi Rachael,

Following up from last week. One thing worth adding: Il Makiage's expansion to the nu skincare brand doubles the data complexity your team has to navigate — two acquisition funnels, two retention curves, two A/B testing pipelines.

ClarityQ unifies those across a single natural language interface. Worth 15 minutes?`,
        personalization_notes: [
          'Added new angle: the nu skincare brand expansion doubles data complexity',
          'Framed ClarityQ as the unifier across two brand datasets',
          'Concise and additive — doesn\'t repeat the first email',
        ],
      },
      conversational: {
        subject: 'The nu skincare launch made me think of something',
        body: `Hey Rachael,

Reaching back out with a thought that came to me after reading about Il Makiage's nu skincare launch.

Running growth marketing across two brands — Il Makiage and nu — means you're essentially managing two separate acquisition ecosystems simultaneously. That's two sets of A/B tests, two attribution models, two sets of LTV curves. The cross-brand comparison questions alone ("is our CAC more efficient on nu than on Il Makiage for the 25-35 demographic?") are the kind that take time to answer.

ClarityQ makes those comparisons instant. Connect both brand datasets to one interface and ask the cross-brand question in plain English.

Happy to show you a demo whenever it's convenient.`,
        personalization_notes: [
          'Named nu skincare specifically and framed it as a data complexity multiplier',
          'Named a highly specific, realistic cross-brand query question',
          'Showed understanding of dual-brand growth marketing complexity',
        ],
      },
      direct: {
        subject: 'Two brands, one data interface — worth a look?',
        body: `Rachael,

Quick follow-up. With Il Makiage and nu running simultaneously, your team is navigating two attribution models, two funnel analyses, and two sets of A/B results.

ClarityQ can unify that into one natural language interface — ask cross-brand questions in seconds. That's worth 15 minutes. Are you free this week?`,
        personalization_notes: [
          'Led with the specific, current pain: two brands creating data fragmentation',
          'Positioned ClarityQ as the unifier — clear, relevant value prop',
          'Short, direct, asks a clear yes/no question',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood, I\'ll follow up',
        body: `Hi Rachael,

No problem — I'll check back when the nu skincare scale-up creates more analytics complexity or the team is feeling the data bandwidth pressure more acutely.

Thanks for getting back to me.`,
        personalization_notes: [
          'Named a specific future trigger: nu skincare scale-up',
          'Brief and professional — no pushback',
        ],
      },
      conversational: {
        subject: 'Makes sense — timing is everything',
        body: `Hey Rachael,

Fair enough — I appreciate the honest response. These conversations are about timing, and I'd rather wait for the right moment.

I'll circle back when Il Makiage and nu are both at scale and the cross-brand analytics complexity starts to bite. Until then, good luck with both launches — it's a bold move to build two brands simultaneously.`,
        personalization_notes: [
          'Named the specific future trigger: when both brands are at full scale',
          'Expressed genuine interest in what Il Makiage is doing — it\'s genuinely impressive',
        ],
      },
      direct: {
        subject: 'Understood — I\'ll be back when the data complexity scales',
        body: `Rachael,

Noted. When the cross-brand data complexity starts slowing your team down, I'll be here.

ClarityQ will still fix it.`,
        personalization_notes: [
          'Extremely concise — matches the direct tone',
          'Left the door open with a specific trigger: cross-brand complexity at scale',
        ],
      },
    },
  },

  'ilmak-helina-levy': {
    cold: {
      concise: {
        subject: 'VP Product × ClarityQ — feature data in seconds',
        body: `Hi Helina,

Running product and growth at Il Makiage means you're constantly asking: "did this feature change improve retention or hurt conversion?" — and waiting for the answer.

ClarityQ connects to Snowflake and lets your product team ask those questions in plain English. Same-day answers, no analyst required.

Worth a 15-minute demo?`,
        personalization_notes: [
          'Named her dual role: product AND growth — demonstrates research',
          'Named Snowflake as Il Makiage\'s confirmed data stack',
          'Used a realistic product question: feature impact on retention vs conversion',
        ],
      },
      conversational: {
        subject: 'Feature impact analytics at Il Makiage — quick question',
        body: `Hi Helina,

I've been following Il Makiage's product story — the AI skin-matching technology and now the expansion to nu skincare. Managing product for a company that's simultaneously operating at beauty-brand scale while building ML infrastructure is genuinely fascinating.

One question that comes to mind: when your product team ships a change to the AI matching flow and wants to know if it improved conversion — how long does it take to get that answer? Same day? Next day? End of sprint?

ClarityQ is built to make that answer instant. Connect to your Snowflake data, ask "did the matching update improve purchase conversion for first-time users?" in plain English, and get a precise result in 10 seconds.

Would love to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Referenced both Il Makiage\'s AI matching tech and nu skincare expansion',
          'Asked a highly specific, realistic question about their product flow (AI matching conversion)',
          'Named Snowflake as their confirmed data warehouse',
        ],
      },
      direct: {
        subject: 'Your feature data — how fast does it answer back?',
        body: `Helina,

When your product team ships a change and wants to know if it worked — how long until you see the data?

If it's more than same-day, ClarityQ cuts that to seconds. Connect Snowflake, ask in plain English, get the answer. No analyst queue, no SQL, no dashboard.

For a VP sitting at the intersection of product and growth, that speed changes how you make decisions. 15 minutes this week?`,
        personalization_notes: [
          'Opened with the core question: data latency after a ship',
          'Named her unique dual role: product AND growth VP',
          'Direct, specific, respectful of her time',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Il Makiage product analytics',
        body: `Hi Helina,

Following up from last week. One thought I didn't include: with nu skincare now live, you're essentially running product analytics for two separate AI-powered brands simultaneously. The complexity doesn't add — it multiplies.

ClarityQ handles both datasets in one interface. Worth 15 minutes?`,
        personalization_notes: [
          'Introduced new angle: nu skincare doubles the product analytics complexity',
          'Used the phrase "complexity multiplies" — accurate and visceral',
        ],
      },
      conversational: {
        subject: 'Thinking about the nu skincare launch and your data setup',
        body: `Hey Helina,

Reaching back out with a thought that came up as I read about Il Makiage's nu skincare launch.

Running product for Il Makiage's AI matching platform is already sophisticated. Now that nu is live, you're managing two separate product analytics streams — two sets of feature experiments, two adoption curves, two retention models. And they probably need to inform each other ("do users who engaged with nu's formulations have different behavior patterns on Il Makiage?").

That cross-brand product intelligence is exactly where ClarityQ adds value. One interface, both Snowflake datasets, natural language queries that work across brands.

Happy to show you how this looks in practice. What does your calendar look like?`,
        personalization_notes: [
          'Named nu skincare explicitly and framed it as complexity that doubles the data work',
          'Invented a specific, plausible cross-brand question about user behavior',
          'Positioned ClarityQ as the cross-brand data unifier',
        ],
      },
      direct: {
        subject: 'Two brands, one product team — the data complexity',
        body: `Helina,

Quick follow-up. Product for Il Makiage + nu = two AI product funnels, two feature experiment pipelines, two adoption curves to track.

ClarityQ unifies that in one natural language interface on top of your Snowflake stack. Worth 15 minutes this week?`,
        personalization_notes: [
          'Very concise — used the "=" framing to make the complexity mathematical',
          'Named specific work: feature experiments, adoption curves',
          'Direct close with a specific time ask',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — noted',
        body: `Hi Helina,

Understood — no problem. I'll follow up when the dual-brand product complexity starts creating more data friction.

Thanks for getting back to me.`,
        personalization_notes: [
          'Brief and professional',
          'Named the specific future trigger: dual-brand complexity scaling',
        ],
      },
      conversational: {
        subject: 'Makes sense — I\'ll check back later',
        body: `Hey Helina,

Fair enough — timing is everything with these conversations. I'd rather wait for the right moment than push for a meeting that won't be useful.

I'll circle back when Il Makiage and nu are both at full scale and the cross-brand product analytics gets more complex. Good luck with both — what you're building with AI-powered personalization across beauty is genuinely interesting.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: dual-brand at full scale',
          'Expressed genuine interest in the AI personalization work — it\'s a differentiator',
        ],
      },
      direct: {
        subject: 'Understood — I\'ll be here when you\'re ready',
        body: `Helina,

Noted. When the dual-brand product data becomes the bottleneck, reach out.

Good luck with nu.`,
        personalization_notes: [
          'Crisp, respectful',
          'Named the specific trigger and the specific product (nu)',
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // WIX
  // ─────────────────────────────────────────────

  'wix-antanas-stimaitis': {
    cold: {
      concise: {
        subject: 'Wix product teams — self-serve data at scale',
        body: `Hi Antanas,

Wix's product org is enormous — 200+ analysts supporting 5,000 engineers and product managers. But with 230M users and 1B events/day, even that data team can\'t keep up with every PM\'s ad-hoc request.

ClarityQ sits on top of your BigQuery/Presto stack and lets product managers ask behavioral questions themselves. Analyst queue: shorter. PM velocity: faster.

Worth 15 minutes?`,
        personalization_notes: [
          'Referenced Wix\'s specific scale: 200+ analysts, 230M users, 1B events/day (real numbers)',
          'Named confirmed tools: BigQuery and Presto',
          'Positioned as PM self-serve — directly relevant to a Head of Product',
        ],
      },
      conversational: {
        subject: 'How Wix\'s product teams access data — a question',
        body: `Hi Antanas,

I've been looking at Wix's scale — 230M users, a billion events per day, and a product org that spans dozens of semi-autonomous teams. That's a genuinely complex data environment.

One thing I'm curious about: when a PM on your team wants to understand why users are dropping off in the AI website builder flow — how fast do they get that answer? Do they query Presto/BigQuery themselves, or does that go into the data team's queue?

I ask because ClarityQ is built for exactly that use case: product managers asking behavioral questions in plain English, getting precise answers in seconds without SQL knowledge.

Would love to show you a quick demo. What does your calendar look like?`,
        personalization_notes: [
          'Referenced Wix AI website builder — a recent, real product launch',
          'Named Presto and BigQuery (confirmed Wix stack tools)',
          'Asked a diagnostic question tailored to the Head of Product role',
        ],
      },
      direct: {
        subject: 'Wix product teams + self-serve data — 15 min?',
        body: `Antanas,

At 230M users, your PMs are constantly racing to understand what's happening in the product — and waiting on the data team slows that down.

ClarityQ connects to Wix's BigQuery and Presto stack. PMs ask behavioral questions in plain English. Answers in seconds.

I'd like to show you a 15-minute demo this week. Tuesday or Wednesday work?`,
        personalization_notes: [
          'Led with the scale (230M users) — establishes credibility',
          'Named both confirmed Wix data tools',
          'Direct, respectful, gives specific day options',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Wix product data self-serve',
        body: `Hi Antanas,

Following up from last week. New angle: Wix is actively hiring multiple Data Analytics Team Leads right now — which signals that data demand is outpacing even your substantial analytics team.

ClarityQ is a faster fix than a 3-month hiring process. Worth 15 minutes?`,
        personalization_notes: [
          'Named the specific hiring signal: multiple Data Analytics Team Lead openings',
          'Positioned ClarityQ as faster than the hiring solution',
          'Short and additive — doesn\'t repeat the first email',
        ],
      },
      conversational: {
        subject: 'The Wix AI builder launch and product analytics',
        body: `Hey Antanas,

Reaching back out with a thought about the Wix AI website builder launch.

Measuring AI feature adoption at 230M-user scale is genuinely hard. Which user segments are using the AI builder? What's the conversion rate for users who start with AI vs. traditional editor? What's the Day-30 retention difference? Those are questions your PMs probably want answered weekly, not monthly.

ClarityQ makes those questions answerable in seconds — natural language queries on top of your existing BigQuery stack, no analyst queue.

Happy to show you a demo whenever the timing is right.`,
        personalization_notes: [
          'Named the AI website builder specifically — a real, recent Wix launch',
          'Named three specific, realistic questions PMs would ask about this product',
          'Positioned BigQuery specifically — confirms stack knowledge',
        ],
      },
      direct: {
        subject: 'Wix AI builder metrics — how fast do you get them?',
        body: `Antanas,

Quick follow-up. With the Wix AI builder now live, your PMs need adoption and conversion metrics fast — not end-of-sprint.

ClarityQ gives them that: natural language queries on BigQuery, answers in seconds.

15 minutes this week — worth it?`,
        personalization_notes: [
          'Referenced the AI builder launch as the timing trigger',
          'Framed urgency: "not end-of-sprint" — specific to agile product teams',
          'Direct close',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Antanas,

No worries at all. I'll follow up when the product team's data request volume becomes more of a friction point.

Best of luck with the AI builder rollout.`,
        personalization_notes: [
          'Named the AI builder — stays relevant and personal',
          'Specific re-engagement trigger: data request volume friction',
        ],
      },
      conversational: {
        subject: 'Makes sense — I\'ll check back later',
        body: `Hey Antanas,

Fair enough — I appreciate the honest response. These conversations are about timing, and pushing when it's not right helps nobody.

I'll circle back when the AI builder is driving more data complexity or when the PM request queue becomes the bottleneck. Good luck with the rollout — the AI website creation space is moving fast.`,
        personalization_notes: [
          'Named two specific re-engagement triggers: AI builder complexity, PM queue bottleneck',
          'Expressed genuine interest in the AI website creation space',
        ],
      },
      direct: {
        subject: 'Understood — filing for when the queue gets loud',
        body: `Antanas,

Noted. When the analytics queue starts slowing your PMs down, I'll be here.

Good luck with the AI builder.`,
        personalization_notes: [
          'Crisp, minimal — respects his time even in rejection',
          'Named the specific trigger: analytics queue slowing PMs down',
        ],
      },
    },
  },

  'wix-jill-sherman': {
    cold: {
      concise: {
        subject: 'Modalyst at Wix — data access without the queue',
        body: `Hi Jill,

Running a marketplace within a 5,000-person company means competing for data team resources — which are always stretched thin at Wix scale.

ClarityQ gives your Modalyst team self-serve analytics on your own supplier and buyer data without depending on Wix's central data org. Ask questions in plain English, get answers in seconds.

Worth a quick look?`,
        personalization_notes: [
          'Named Modalyst specifically — demonstrates research into her specific unit',
          'Identified the unique pain: competing for centralized data resources in a large org',
          'Positioned as independence from Wix central team — directly relevant',
        ],
      },
      conversational: {
        subject: 'Running Modalyst inside Wix — a data question',
        body: `Hi Jill,

I've been looking at Modalyst's journey since the Wix acquisition — building a B2B supplier marketplace within a massive consumer-focused tech company is a genuinely unusual operating environment.

One thing I'm curious about: as the CEO of a product unit inside Wix, when you need marketplace metrics — supplier GMV, buyer acquisition funnel, category performance — how quickly do you get those answers? Are you dependent on Wix's central data team, or does Modalyst have its own analytics access?

I ask because ClarityQ is built exactly for this situation: giving business unit leaders self-serve data access on their own operational data, without waiting on a centralized analytics function.

Happy to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Named Modalyst\'s specific situation: B2B marketplace within consumer tech company',
          'Named specific Modalyst metrics: supplier GMV, buyer acquisition, category performance',
          'Diagnosed the exact pain point: dependency on Wix\'s central data team',
        ],
      },
      direct: {
        subject: 'Modalyst data independence from Wix central team',
        body: `Jill,

Running Modalyst inside Wix means your marketplace metrics compete with Wix's core product analytics for data team attention — and Wix\'s core product usually wins.

ClarityQ gives Modalyst its own self-serve analytics layer. Connect your supplier and buyer data, ask questions in plain English, get answers without the wait.

15 minutes this week — I'll show you how it works.`,
        personalization_notes: [
          'Named the specific organizational tension: Modalyst data vs. Wix core product priority',
          'Positioned ClarityQ as data independence for Modalyst specifically',
          'Direct and specific — no filler',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Modalyst analytics independence',
        body: `Hi Jill,

Following up from last week. One additional thought: Wix is actively hiring multiple Data Analytics Team Leads right now — which signals the central team is already at capacity before Modalyst's needs are added.

That\'s exactly the environment where ClarityQ becomes essential. Worth 15 minutes?`,
        personalization_notes: [
          'Referenced Wix\'s active hiring as a signal that central team is stretched',
          'Made the implication clear: Modalyst will get even less central team support',
          'Short and additive',
        ],
      },
      conversational: {
        subject: 'Thinking about the Wix AI launch and Modalyst data access',
        body: `Hey Jill,

Reaching back out. I saw that Wix just launched its AI website builder — which is likely a major bandwidth pull on the central data team as they measure adoption and optimize the AI flow.

That means Modalyst's supplier and buyer analytics will get even less central team attention in the coming months. If there was ever a moment to set up self-serve data access for your team, it's before the AI launch consumes Wix's analytics resources.

ClarityQ can get Modalyst's team up and running on self-serve analytics quickly. Happy to show you a demo.`,
        personalization_notes: [
          'Referenced the Wix AI builder launch as a timing trigger that hurts Modalyst',
          'Created urgency: AI launch will consume central team bandwidth',
          'Positioned ClarityQ as the solution to set up now, before the squeeze',
        ],
      },
      direct: {
        subject: 'Wix\'s AI launch = less data team attention for Modalyst',
        body: `Jill,

Quick follow-up. Wix just launched an AI website builder — which means their central data team is now measuring AI adoption at 230M-user scale.

Modalyst's analytics requests are going to the back of the queue.

ClarityQ gives your team self-serve access. 15 minutes this week?`,
        personalization_notes: [
          'Led with the causal chain: AI launch → central team consumed → Modalyst queue delayed',
          'Created genuine urgency with real context',
          'Short, direct close',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Jill,

No problem — I'll follow up when the central data team bottleneck becomes more acute for Modalyst.

Good luck with the supplier hub growth.`,
        personalization_notes: [
          'Named the specific trigger: central team bottleneck for Modalyst',
          'Referenced her current work: supplier hub growth',
        ],
      },
      conversational: {
        subject: 'Makes sense — I\'ll check back',
        body: `Hey Jill,

Fair enough — timing is everything. I'd rather wait for the right moment than push for a meeting that won't be useful.

I'll circle back when Modalyst is scaling faster and needs analytics infrastructure that can't depend on Wix's central team timeline. Good luck with the marketplace — building B2B within a consumer giant is genuinely interesting.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: Modalyst scaling beyond central team capacity',
          'Expressed genuine interest in the B2B-within-consumer dynamics',
        ],
      },
      direct: {
        subject: 'Understood — I\'ll be here when the queue bites',
        body: `Jill,

Noted. When Wix\'s central data team becomes the bottleneck for Modalyst's growth, reach out.

Good luck with the supplier hub.`,
        personalization_notes: [
          'Crisp and respectful',
          'Named the exact future trigger: central team bottleneck for Modalyst',
        ],
      },
    },
  },

  'wix-gilad-barkan': {
    cold: {
      concise: {
        subject: 'Wix Data Science Guild × ClarityQ — reduce ad-hoc load',
        body: `Hi Gilad,

Leading 200+ data scientists at Wix means a significant portion of your guild's capacity goes to answering routine data questions from product managers and marketing leads who could, with the right tool, answer themselves.

ClarityQ sits on top of BigQuery and Presto and gives those stakeholders a natural language interface for self-serve queries. Your scientists get back to the modeling that actually matters.

Worth 15 minutes to see how it works?`,
        personalization_notes: [
          'Named the Data Science Guild specifically — demonstrates real research',
          'Referenced his 200+ team scale (real number from Wix Engineering blog)',
          'Named both confirmed Wix data tools: BigQuery and Presto',
          'Positioned as freeing the guild for higher-value work, not replacing them',
        ],
      },
      conversational: {
        subject: 'A question about ad-hoc requests for the Wix data guild',
        body: `Hi Gilad,

I\'ve been reading some of your posts on the Wix Engineering blog — the data science guild model is a fascinating organizational structure. Running 200+ data scientists across a company that processes a billion events per day is genuinely one of the harder data leadership challenges in Israeli tech.

One question that came to mind: what percentage of your guild's capacity goes to answering repetitive ad-hoc questions from stakeholders — PMs who want retention curves, marketing leads who want campaign attribution data — vs. the actual modeling and research work?

I'm asking because ClarityQ is built to solve exactly that: a natural language layer on top of BigQuery that gives those stakeholders self-serve access. Your guild focuses on the hard problems. The routine queries handle themselves.

Happy to show you a demo whenever the timing is right. What does your calendar look like?`,
        personalization_notes: [
          'Referenced the Wix Engineering blog where Gilad has published — real research',
          'Acknowledged the guild model specifically — shows genuine understanding of his work',
          'Named the specific scale: 200+ scientists, 1B events/day',
          'Asked a diagnostic question that surfaces the ad-hoc request cost naturally',
        ],
      },
      direct: {
        subject: 'Free your data scientists from routine queries — 15 min?',
        body: `Gilad,

If your guild spends more than 20% of its capacity on routine data requests from stakeholders who could answer their own questions — that's a ClarityQ conversation.

Natural language queries on BigQuery and Presto. Stakeholders self-serve. Your scientists focus on the LLM research, recommendation systems, and guild initiatives that require their expertise.

15 minutes this week — I'll show you exactly how it works for a guild your size.`,
        personalization_notes: [
          'Opened with a specific, relatable benchmark: 20% capacity on routine requests',
          'Referenced LLM research and recommendation systems — his confirmed areas of focus',
          'Named both Wix data tools',
          'Positioned around "guild size" — shows he\'s a serious organization, not a small team',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Wix Data Science Guild data self-serve',
        body: `Hi Gilad,

Following up from last week. I read your recent piece on AI-driven data science initiatives — which makes me think the guild is leaning heavily into LLM-adjacent work right now.

That's exactly when routine ad-hoc queries are most expensive — they pull attention from the high-value AI work. ClarityQ can handle those while your guild focuses on the frontier.

Still happy to show you a demo. 15 minutes this week?`,
        personalization_notes: [
          'Referenced a recent Wix Engineering publication by Gilad — extremely specific',
          'Framed the opportunity cost: LLM work interrupted by routine queries',
          'Short and additive — new angle, not repetition',
        ],
      },
      conversational: {
        subject: 'Your LLM work and the data request load',
        body: `Hey Gilad,

Reaching back out with a thought from your recent piece on the emerging LLM economy.

If your guild is heavily invested in LLM research and AI-driven analytics initiatives, then routine ad-hoc requests are an even more expensive interruption than usual. Every hour a senior data scientist spends on "can you pull Q3 retention by cohort?" is an hour not spent on the AI work that differentiates Wix.

ClarityQ is the solution: natural language self-serve for stakeholders, freeing your guild for the research that actually moves the needle.

Happy to show you a demo whenever it\'s convenient.`,
        personalization_notes: [
          'Referenced his specific published work on the "LLM economy" — from his Medium posts',
          'Framed the opportunity cost in terms of his guild\'s most important work: LLM research',
          'Positioned ClarityQ as enabling more focus on the AI work he cares about',
        ],
      },
      direct: {
        subject: 'LLM research vs. ad-hoc queries — the tradeoff',
        body: `Gilad,

Quick follow-up. You're leading LLM and AI research for one of Israel's largest data orgs, and routine ad-hoc requests from stakeholders are competing with that work for your guild's attention.

ClarityQ removes those requests from the queue. Your scientists stay on the frontier work.

15 minutes this week?`,
        personalization_notes: [
          'Named the specific tradeoff: LLM research vs. routine queries',
          'Positioned ClarityQ as a direct enabler of the frontier AI work he cares about',
          'Extremely concise — appropriate for a data scientist who values precision',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Gilad,

No problem — I\'ll follow up when the guild's ad-hoc request load becomes more of a constraint on the AI research work.

Good luck with the LLM initiatives.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: ad-hoc load constraining AI research',
          'Referenced his LLM work — stays relevant and personal',
        ],
      },
      conversational: {
        subject: 'Makes sense — I\'ll check back',
        body: `Hey Gilad,

Fair enough — I appreciate the honest response. Data leaders know what they need, and I'd rather wait for the right timing.

I'll circle back when the stakeholder ad-hoc request load starts cutting into the guild\'s AI research bandwidth. In the meantime, the work on LLMs in data science sounds genuinely interesting — looking forward to reading more of your publications.`,
        personalization_notes: [
          'Named the specific trigger: stakeholder requests cutting into AI research time',
          'Expressed genuine interest in his publications — builds authentic rapport',
        ],
      },
      direct: {
        subject: 'Understood — I\'ll be here when the requests pile up',
        body: `Gilad,

Noted. When the ad-hoc request volume starts pulling your guild away from the AI work, reach out.

Good luck with the LLM research.`,
        personalization_notes: [
          'Crisp and professional',
          'Named both the trigger and his specific work',
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // CANVA
  // ─────────────────────────────────────────────

  'canva-zach-kitschke': {
    cold: {
      concise: {
        subject: 'Canva growth data — answers in 10 seconds',
        body: `Hi Zach,

Marketing Canva to 200M users across every channel is a data-intensive operation. When you need to know "what's our blended CAC across segments this month?" — how fast does that answer come?

ClarityQ connects to BigQuery and Looker and gives your marketing leads natural language access to their campaign data. No analyst queue, no SQL, no waiting.

Worth 15 minutes?`,
        personalization_notes: [
          'Referenced 200M monthly active users — Canva\'s real scale',
          'Named BigQuery and Looker (confirmed Canva stack tools)',
          'Used a realistic CMO metric: blended CAC across segments',
        ],
      },
      conversational: {
        subject: 'Marketing analytics at Canva scale — a question',
        body: `Hi Zach,

I\'ve been following Canva's growth story — employee #5 to CMO of a $26B design platform is quite a journey. Marketing 200M users across B2C, B2B, and international markets simultaneously is genuinely complex.

One thing I'm curious about: when you want to know whether a specific growth experiment drove meaningful retention improvement for the B2B segment in a particular market — how fast do you get that answer today? Is it a self-serve query, or does it go to your data team?

I ask because ClarityQ gives CMOs and their teams natural language access to their own BigQuery and Looker data. No SQL, no waiting — just ask and get a precise answer.

Happy to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Referenced his tenure at Canva: employee #5 — from his public profile',
          'Named the multi-segment complexity: B2C, B2B, and international',
          'Named BigQuery and Looker as confirmed Canva tools',
          'Framed around a CMO-specific use case: growth experiment measurement',
        ],
      },
      direct: {
        subject: 'Your growth experiment data — how fast does it answer?',
        body: `Zach,

When you want to know if a growth experiment worked — which channels, which segments, which creative — how fast do you get that answer?

If it's more than same-day, ClarityQ fixes that. Natural language queries on BigQuery and Looker. Your team asks, the answer arrives in seconds.

15 minutes this week to see it in action?`,
        personalization_notes: [
          'Opened with the specific CMO use case: growth experiment measurement',
          'Named the three dimensions that matter: channels, segments, creative',
          'Named confirmed Canva data stack tools',
          'Direct, time-efficient close',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Canva growth data',
        body: `Hi Zach,

Following up from last week. One additional angle: with Magic Studio AI now live across all of Canva's products, measuring AI feature adoption for marketing purposes is a new layer of complexity your team didn't have 6 months ago.

ClarityQ handles that alongside your existing metrics — natural language, same interface. Worth 15 minutes?`,
        personalization_notes: [
          'Referenced Magic Studio AI as a new data complexity layer',
          'Framed as an additive benefit, not a replacement for existing analytics',
          'Short and focused on a new angle',
        ],
      },
      conversational: {
        subject: 'Magic Studio and your marketing analytics setup',
        body: `Hey Zach,

Reaching back out with a thought about Magic Studio. Launching a full AI creative suite means your marketing team now needs to measure AI feature adoption, AI-assisted design completion rates, and whether Magic Studio users have higher retention or conversion than non-AI users.

Those are new questions that your existing dashboards probably weren't built to answer in real-time. ClarityQ gives your marketing analysts a natural language layer to ask exactly those questions — without waiting for engineering to build new reports.

Happy to show you a demo whenever the timing is right.`,
        personalization_notes: [
          'Named Magic Studio specifically and the new metrics it creates',
          'Named three specific new questions the AI launch creates for marketing',
          'Positioned as faster than "wait for engineering to build a report"',
        ],
      },
      direct: {
        subject: 'Magic Studio data — is your team set up to measure it?',
        body: `Zach,

Quick follow-up. Magic Studio creates new marketing analytics questions — AI adoption rates, AI-assisted retention, creative quality correlation with conversion.

Is your team set up to answer those in real-time, or is that a new reporting backlog?

ClarityQ closes that gap fast. 15 minutes this week?`,
        personalization_notes: [
          'Named Magic Studio and three specific new data questions it creates',
          'Asked a direct diagnostic question that surfaces the gap',
          'Short and direct',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Zach,

No problem — I'll follow up when the Magic Studio analytics complexity or the AI adoption measurement becomes a more urgent data challenge.

Good luck with the $26B growth machine.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: Magic Studio analytics complexity',
          'Acknowledged Canva\'s scale with a compliment that\'s actually accurate',
        ],
      },
      conversational: {
        subject: 'Makes sense — I\'ll check back',
        body: `Hey Zach,

Fair enough — these conversations are all about timing. I'd rather wait for the right moment.

I'll circle back when the Magic Studio analytics layer becomes more complex or when the marketing team is feeling the data request backlog more acutely. Until then, good luck — what Canva is doing with AI creative tools is genuinely remarkable.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: Magic Studio analytics complexity',
          'Expressed genuine admiration for Canva\'s AI creative work',
        ],
      },
      direct: {
        subject: 'Understood — I\'ll be here when AI analytics scales',
        body: `Zach,

Noted. When Magic Studio's data complexity becomes the marketing team's bottleneck, reach out.

Good luck.`,
        personalization_notes: [
          'Crisp and minimal',
          'Named the specific future trigger: Magic Studio data complexity',
        ],
      },
    },
  },

  'canva-cameron-adams': {
    cold: {
      concise: {
        subject: 'Canva product data — 10-second answers for 200M users',
        body: `Hi Cameron,

Building product for 200M users means every feature decision is a statistical question at scale. When your PMs want to know "did Magic Studio improve Day-30 retention?" — how fast do they get that answer?

ClarityQ connects to BigQuery and Amplitude and gives product teams natural language access to behavioral data. No analyst queue, no SQL, answers in seconds.

Worth 15 minutes?`,
        personalization_notes: [
          'Referenced 200M users — Canva\'s real scale',
          'Named Magic Studio specifically — a very recent product launch',
          'Named BigQuery and Amplitude (confirmed Canva stack tools)',
          'Used a realistic product question: Day-30 retention impact',
        ],
      },
      conversational: {
        subject: 'Product analytics at Canva scale — a question',
        body: `Hi Cameron,

I\'ve been following Canva's product journey from the beginning — building the world's most-used design platform from scratch and now expanding into AI creative tools is an extraordinary arc.

One question that comes to mind: at 200M monthly active users, when a product team wants to know how a feature change affected retention or engagement for a specific user segment — how does that data reach them? Is it a self-serve query, or does it go through your data science team?

I ask because ClarityQ gives product managers natural language access to BigQuery and Amplitude data. They ask the question, they get the answer — no analyst in the middle.

Happy to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Acknowledged Cameron as a co-founder — appropriately respectful',
          'Named both confirmed Canva data stack tools',
          'Framed around the PM self-serve use case — relevant for a CPO',
        ],
      },
      direct: {
        subject: 'Your PMs — how fast do they get product data?',
        body: `Cameron,

When a product manager at Canva wants to know if a feature change improved retention for enterprise users — how long does that answer take?

If it\'s more than a few hours, ClarityQ cuts that to seconds. Natural language queries on BigQuery and Amplitude. No analyst bottleneck.

15 minutes this week — I'd like to show you how this works at your scale.`,
        personalization_notes: [
          'Used a specific, realistic PM question: feature impact on enterprise retention',
          'Named both confirmed data tools',
          'Respectful and direct — appropriate for a co-founder CPO',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Canva product data',
        body: `Hi Cameron,

Following up from last week. One thing worth adding: with Magic Studio now across all product surfaces, your PMs need to measure AI feature adoption alongside traditional product metrics — which means more questions, not fewer, for the same data team capacity.

ClarityQ handles both. Worth 15 minutes?`,
        personalization_notes: [
          'Named Magic Studio as the new complexity layer',
          'Framed as additive analytics demand — more questions for same team',
          'Short and focused',
        ],
      },
      conversational: {
        subject: 'Magic Studio and product analytics complexity',
        body: `Hey Cameron,

Reaching back out with a thought about Magic Studio.

Launching an AI suite across your entire product surface means your product managers now have a new class of questions to answer: Which AI features are driving DAU? Does Magic Studio usage predict expansion revenue? What\'s the Day-7 retention difference between AI-first and traditional users?

Those are questions your existing Amplitude dashboards probably weren\'t designed to answer in real-time. ClarityQ gives product teams natural language access to ask exactly those questions — and get precise answers from BigQuery in seconds.

Happy to show you a demo whenever the timing is right.`,
        personalization_notes: [
          'Named Magic Studio and three specific new product analytics questions it creates',
          'Named Amplitude as a confirmed Canva tool',
          'Positioned as faster than "rebuild the dashboards"',
        ],
      },
      direct: {
        subject: 'Magic Studio data — ready for the analytics load?',
        body: `Cameron,

Quick follow-up. Magic Studio creates a new analytics workload — AI adoption rates, feature-level retention, LTV differences between AI and non-AI users.

Is your data team ready for that load, or is this a gap?

ClarityQ closes it fast. 15 minutes this week?`,
        personalization_notes: [
          'Named specific new metrics Magic Studio creates',
          'Asked a direct yes/no diagnostic question',
          'Short and action-oriented',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Cameron,

No problem — I\'ll follow up when the Magic Studio analytics complexity or PM data access becomes a higher priority.

Good luck with the AI creative suite — it\'s a big move.`,
        personalization_notes: [
          'Named the specific re-engagement trigger',
          'Acknowledged Magic Studio genuinely — it is a big move',
        ],
      },
      conversational: {
        subject: 'Makes sense — I\'ll check back',
        body: `Hey Cameron,

Fair enough. These things are about timing, and I appreciate the honest response.

I'll circle back when the Magic Studio analytics layer creates more pressure or when the PM data request volume starts slowing down product velocity. In the meantime, good luck — what you're building with AI creative tools is impressive.`,
        personalization_notes: [
          'Named two specific re-engagement triggers',
          'Expressed genuine admiration for the AI creative work',
        ],
      },
      direct: {
        subject: 'Understood — I\'ll be here when the data layer needs it',
        body: `Cameron,

Noted. When the Magic Studio analytics complexity becomes the product team's bottleneck, reach out.

Good luck.`,
        personalization_notes: [
          'Crisp, respectful, minimal',
          'Named the specific future trigger',
        ],
      },
    },
  },

  'canva-andy-ford': {
    cold: {
      concise: {
        subject: 'Canva marketing data team — reduce the request load',
        body: `Hi Andy,

Heading marketing data for Canva means your team probably spends a significant share of capacity answering the same questions from marketing stakeholders who could, with the right tool, answer themselves.

ClarityQ sits on top of BigQuery and Looker and gives marketing managers natural language access to their own campaign data. Your team gets back to the strategic analysis.

Worth 15 minutes?`,
        personalization_notes: [
          'Named his specific role: Head of Marketing Data at Canva',
          'Named BigQuery and Looker (confirmed Canva stack tools)',
          'Framed around the ad-hoc request reduction — data team pain point',
        ],
      },
      conversational: {
        subject: 'Marketing data at Canva — a question about your team\'s capacity',
        body: `Hi Andy,

I\'ve been looking at Canva's scale — 200M MAU, global marketing across every channel, $1.7B ARR. The marketing data operation supporting Zach's team must be significant.

One question that comes to mind: what percentage of your team's week goes to answering "can you pull X for me?" requests from marketing managers and campaign leads, vs. the strategic analysis work that only your team can do?

I ask because ClarityQ is built to shift that balance. It connects to BigQuery and Looker and gives marketing stakeholders a natural language interface for self-serve queries. Your team focuses on the high-value analytical work.

Happy to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Referenced Zach Kitschke (Canva CMO) as the marketing leader Andy supports — shows org knowledge',
          'Named real Canva scale metrics: 200M MAU, $1.7B ARR',
          'Named BigQuery and Looker as confirmed tools',
          'Asked a diagnostic question about ad-hoc request load vs. strategic work',
        ],
      },
      direct: {
        subject: 'Canva marketing data team — free them for strategic work',
        body: `Andy,

If your marketing data team spends more than 30% of its time on ad-hoc questions from campaign managers and growth leads who could self-serve — that's a ClarityQ conversation.

Connect BigQuery and Looker. Marketing stakeholders ask their questions in plain English. Your team focuses on attribution modeling, LTV analysis, and the work that actually requires their expertise.

15 minutes this week — I'll show you how.`,
        personalization_notes: [
          'Opened with a specific, relatable benchmark: 30% on ad-hoc requests',
          'Named the high-value work Andy\'s team should focus on: attribution modeling, LTV',
          'Named both confirmed Canva data tools',
          'Direct close',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Canva marketing data',
        body: `Hi Andy,

Following up from last week. One new angle: with Magic Studio AI now live, your marketing team has a new set of questions — AI feature adoption correlation with paid conversion, creative AI vs. traditional templates in campaign performance. Those questions are going to start landing in your team's queue.

ClarityQ handles those alongside your existing metrics. Worth 15 minutes?`,
        personalization_notes: [
          'Named Magic Studio and the new analytics questions it creates for marketing',
          'Framed as proactive: those questions are coming before they hit the queue',
          'Short and additive',
        ],
      },
      conversational: {
        subject: 'Magic Studio and your marketing analytics queue',
        body: `Hey Andy,

Reaching back out with a thought about Magic Studio.

Your marketing managers are probably already asking: "Do users who use Magic Studio tools have better retention? Do AI-generated designs perform better in our paid campaigns? What\'s the LTV difference between Magic Studio power users and traditional Canva users?"

Those are new questions that weren't in your team's backlog 6 months ago. ClarityQ lets those stakeholders answer those questions themselves — in plain English on top of BigQuery — instead of adding to your analytics queue.

Happy to show you a demo whenever it's convenient.`,
        personalization_notes: [
          'Named Magic Studio and three specific new marketing analytics questions it creates',
          'Framed as "questions that weren\'t in your backlog 6 months ago" — creates urgency',
          'Named BigQuery as the specific technical layer ClarityQ sits on',
        ],
      },
      direct: {
        subject: 'Magic Studio analytics — adding to your queue?',
        body: `Andy,

Quick follow-up. Magic Studio creates new marketing analytics questions — AI adoption correlation with paid conversion, creative AI performance in campaigns, LTV differences between AI and non-AI users.

Those will hit your queue. ClarityQ lets stakeholders answer them themselves instead.

15 minutes this week?`,
        personalization_notes: [
          'Named specific new marketing questions from Magic Studio',
          'Made the implication concrete: they\'re coming to his queue',
          'Short and direct',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Andy,

No problem — I\'ll follow up when the Magic Studio analytics questions start hitting your team\'s queue more heavily.

Thanks for getting back to me.`,
        personalization_notes: [
          'Named the specific future trigger',
          'Brief and professional',
        ],
      },
      conversational: {
        subject: 'Makes sense — I\'ll check back later',
        body: `Hey Andy,

Fair enough — I appreciate the honest response. Timing matters a lot with these conversations.

I\'ll circle back when the marketing stakeholder request volume picks up or when Magic Studio analytics starts creating more complexity for your team. Until then, good luck — supporting Canva\'s marketing at that scale must be genuinely interesting work.`,
        personalization_notes: [
          'Named two specific re-engagement triggers',
          'Expressed genuine interest in his work — supporting Canva\'s marketing IS interesting',
        ],
      },
      direct: {
        subject: 'Understood — I\'ll be here when the queue gets heavy',
        body: `Andy,

Noted. When the marketing analytics queue becomes the constraint, reach out.

ClarityQ will still be here.`,
        personalization_notes: [
          'Crisp and minimal',
          'Named the specific trigger',
        ],
      },
    },
  },
}

// Helper: lookup cached email or return null (triggers live Claude generation)
export function getCachedEmail(personaId, emailType, tone) {
  return emailCache[personaId]?.[emailType]?.[tone] ?? null
}
