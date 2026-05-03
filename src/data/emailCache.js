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

Play Perfect is rolling out globally while your Monetization Data Analyst seat is still open. That's a lot of intraday campaign decisions chasing a shrinking headcount.

ClarityQ connects to BigQuery and lets your UA team ask "which channel drove the best LTV last week?" in plain English — answer in under 10 seconds, no SQL required.

Worth a 15-minute look? Happy to show you a live demo with your data stack.`,
        personalization_notes: [
          'Referenced Play Perfect\'s global title rollout (Q1 2026)',
          'Referenced open Monetization Data Analyst job posting',
          'Mentioned BigQuery (confirmed tool in their stack)',
          'Framed around UA team pain: intraday ROAS + LTV tracking without SQL',
        ],
      },
      conversational: {
        subject: 'Quick question about your UA analytics setup',
        body: `Hey Michael,

I was looking at Play Perfect's growth — 50M+ downloads is no joke, and with a global rollout now underway the pressure to optimize every acquisition dollar intraday must be intense.

I'm curious: how long does it currently take your team to get an answer like "what's the Day-7 retention on users from Meta vs Google in this market?" Is it a quick query, or does it go through an analyst queue?

I ask because ClarityQ is an AI analytics tool that connects to BigQuery and lets non-technical team members ask questions like that in plain English — and get the answer in seconds. We work with mobile gaming studios that are in exactly your situation: scaling fast, lean data team, lots of campaign decisions to make.

Would love to show you a quick demo if the timing is right. What does your week look like?`,
        personalization_notes: [
          'Acknowledged 50M+ download milestone as a signal of scale',
          'Referenced global title rollout as the current pain trigger',
          'Asked a specific, relatable question about their data workflow',
          'Named BigQuery as their confirmed stack component',
        ],
      },
      direct: {
        subject: 'Your new title launch — data bottleneck coming',
        body: `Michael,

You're rolling out globally while your Monetization Data Analyst seat is still open. That means your UA team is making intraday acquisition decisions on delayed data — which in mobile gaming is a competitive disadvantage.

ClarityQ plugs into your BigQuery stack and lets any team member — PM, UA manager, CMO — ask "what's the ROAS on TikTok this week?" and get a precise answer in 10 seconds.

I'd like to show you what that looks like for a gaming studio in 15 minutes. Are you free Thursday or Friday?`,
        personalization_notes: [
          'Named the specific business risk: delayed data during global rollout',
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

With a global rollout active and a data analyst seat still open, your window to iterate fast is right now — intraday budget calls can't wait for analyst queues. Every day of delayed campaign data costs you optimization cycles.

ClarityQ gives your existing team — today, without a new hire — the ability to query BigQuery in plain English and get answers in seconds. Book 15 minutes and I'll show you exactly how.`,
        personalization_notes: [
          'Created genuine urgency: intraday optimization window during global rollout is time-limited',
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

Good luck with the global rollout — those intraday ROAS numbers will tell the story quickly.`,
        personalization_notes: [
          'Acknowledged the "no" without trying to overcome it',
          'Left two re-engagement triggers: new launch + data crunch moment',
          'Personal and genuine — references the global rollout outcome',
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

I was looking at Play Perfect's portfolio — Gin Rummy Stars, Grand Gin Rummy, and a global rollout now underway. Managing P&L and intraday performance across multiple markets is genuinely complex.

Quick question: when you need to know how the business is performing right now, do you get that answer from a dashboard you check yourself, or do you usually need to ask someone to pull the data?

I'm asking because ClarityQ is built for exactly the CEO use case — connect your data (BigQuery, Tableau, whatever you're using) and ask business questions in plain English. "What's our Day-30 retention vs. last quarter?" gets you a precise answer in 10 seconds.

Happy to show you a live demo if this sounds relevant. What's your availability like this week?`,
        personalization_notes: [
          'Named specific game titles — demonstrates real research',
          'Referenced global rollout as the current complexity trigger',
          'Framed around "CEO use case" explicitly — addresses his decision-making role',
        ],
      },
      direct: {
        subject: 'CEO data access at Play Perfect — quick question',
        body: `Dvir,

If you want to know "how did Grand Gin Rummy perform last week vs. your newest market rollout?" — how fast do you get that answer today?

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

Following up from last week. One additional thought: CEOs who use ClarityQ tell us the biggest value isn't the fancy queries — it's being able to spot a ROAS dip in a new market on Monday morning instead of hearing about it Friday from an analyst.

For a studio with a global rollout underway, that timing matters a lot.

Still happy to show you a 15-minute demo. What does your week look like?`,
        personalization_notes: [
          'Added new angle: proactive issue detection vs reactive reporting',
          'Connected to global rollout timing — makes the benefit concrete and urgent',
        ],
      },
      conversational: {
        subject: 'Still thinking about the global rollout window',
        body: `Hey Dvir,

Sending a quick follow-up in case my last note didn't land at the right moment.

I keep thinking about Play Perfect's position right now — global rollout underway, optimizing spend across markets, trying to move fast before competitors catch up. That phase is usually where the data feedback loop is most critical, and also where most gaming studios feel the most friction.

ClarityQ is built specifically for that moment. It connects your existing data stack and gives everyone — you, your marketing VP, your product leads — intraday answers without waiting on your data team.

Happy to show you a quick demo if this resonates. No hard sell, just curious if the timing is right.`,
        personalization_notes: [
          'Referenced global rollout as the key timing trigger',
          'Extended value to the whole leadership team, not just the CEO',
          'Casual, non-pushy tone appropriate for follow-up',
        ],
      },
      direct: {
        subject: 'The global rollout window — intraday data matters now',
        body: `Dvir,

A quick follow-up. The window where intraday data matters most is exactly during a global rollout — and every delayed budget call costs optimization cycles.

ClarityQ gives you and your team same-day answers on retention, ROAS, and revenue without analyst lag. If you're making spend decisions on delayed data right now, that's a direct cost.

15 minutes this week — worth it or not?`,
        personalization_notes: [
          'Created genuine urgency: the global rollout window requires intraday data',
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

I've been following Play Perfect's growth — the card game portfolio is impressive, and managing product across multiple live titles while rolling out globally is genuinely complex.

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

Following up from last week. One new angle: ClarityQ recently helped a gaming studio reduce their analyst response time by 70% during a global rollout — letting their product team make daily iteration decisions instead of weekly ones.

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

Quick follow-up. We recently cut a gaming studio's analyst response time by 70% during a live rollout window. That's the difference between iterating on Monday vs Thursday.

For Play Perfect, with a global rollout underway right now, that timing gap matters. Worth 15 minutes this week?`,
        personalization_notes: [
          'Led with a compelling, specific metric (70% faster)',
          'Made it concrete with the Monday vs Thursday framing',
          'Referenced global rollout timing — creates genuine urgency',
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
        subject: 'METHODIQ performance: Consult-to-Purchase data in 10s',
        body: `Hi Rachael,

Now that METHODIQ has scaled, the friction between your telehealth consult logs and final purchase data in Snowflake is likely the primary bottleneck.

When you're checking performance over morning coffee, ClarityQ lets you ask "Which Instagram ad sets are driving the highest consult-to-purchase conversion this week?" and get the answer instantly.

Worth a 15-minute look at how we unify your Telehealth and Performance stacks?`,
        personalization_notes: [
          'Named METHODIQ specifically — shows research beyond Il Makiage',
          'Identified the exact cross-stack friction: telehealth consult logs + Snowflake purchase data',
          'Used a realistic, role-specific query (Instagram ad sets → consult-to-purchase)',
        ],
      },
      conversational: {
        subject: 'The METHODIQ consult-to-purchase gap — how do you measure it today?',
        body: `Hi Rachael,

METHODIQ is a genuinely interesting challenge — you're running a telehealth funnel that feeds into a commerce conversion. That means your performance data lives in two separate places: the consult logs and the post-purchase events in Snowflake.

Quick question: when you want to know which ad sets are driving the best consult-to-purchase conversion this week — how long does it actually take your team to get that answer?

ClarityQ connects your Telehealth and Performance stacks and lets you ask those cross-stack questions in plain English. I'd love to show you what that looks like for METHODIQ. What does your week look like?`,
        personalization_notes: [
          'Named METHODIQ and described its unique telehealth-to-commerce funnel structure',
          'Asked a diagnostic question that surfaces the cross-stack data friction naturally',
          'Framed ClarityQ as the connector between two specific stacks — not a generic tool',
        ],
      },
      direct: {
        subject: "METHODIQ's consult-to-purchase rate — answer in 10s or in a ticket?",
        body: `Rachael,

METHODIQ's key performance question is: which channels are actually converting consultations into purchases?

Right now that answer sits across your Telehealth stack and your Snowflake performance data — and connecting them takes time your team doesn't have.

ClarityQ unifies both and answers that question in plain English, in 10 seconds. 15 minutes this week to see it in action?`,
        personalization_notes: [
          'Opened with METHODIQ\'s core performance question — immediately relevant',
          'Named the exact friction: data split across Telehealth stack and Snowflake',
          'Positioned ClarityQ as the unifier — clear, specific value prop',
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
        subject: "Wix B2B2C: Morning data anomalies shouldn't wait for tickets",
        body: `Hi Antanas,

As Wix scales its B2B2C reach, understanding why a specific campaign cohort's retention dipped overnight is critical.

ClarityQ lets you skip the analyst queue for daily pulse checks. You ask "What's the D1 retention for AI Builder users from the UK yesterday?" in plain English and get the answer in 10 seconds.

Are you free Tuesday to see how this accelerates your daily optimization?`,
        personalization_notes: [
          'Framed around Wix\'s B2B2C model — shows understanding of the business layer',
          'Used a specific, realistic retention question (AI Builder, D1, UK cohort)',
          'Positioned ClarityQ as removing the analyst bottleneck for daily ops',
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
  // ─────────────────────────────────────────────
  // PLAY PERFECT — NEW PERSONAS
  // ─────────────────────────────────────────────

  'playp-zur-shental': {
    cold: {
      concise: {
        subject: 'Play Perfect × ClarityQ — product decisions without the queue',
        body: `Hi Zur,

You're leading product at Play Perfect during a global rollout — with no VP Product above you. That means you're making game iteration decisions on BigQuery data you probably have to request from analytics.

ClarityQ connects to BigQuery and lets you ask "which feature drove the Day-7 spike in this market?" in plain English — answer in 10 seconds.

Worth 15 minutes to see it live?`,
        personalization_notes: [
          'Referenced VP Product seat being open — Zur is filling the gap',
          'Referenced global rollout as the current pressure',
          'Named BigQuery as their confirmed stack',
          'Framed around Day-7 retention — the key gaming metric',
        ],
      },
      conversational: {
        subject: 'Quick question about your product analytics workflow',
        body: `Hey Zur,

I was looking at Play Perfect's growth — 50M+ downloads and a global rollout now underway. Impressive. But I'm curious: when you want to understand something like "how is feature X performing in the German market vs. Israel this week?" — how fast do you get that answer?

Is it a self-serve query, or does it go through an analyst request that takes a day or two?

I ask because we built ClarityQ for exactly that situation — it connects to BigQuery and lets product leads ask questions in plain English and get answers in seconds. We work with mobile gaming studios where product decisions move fast.

Would love to show you a quick demo. What does your schedule look like?`,
        personalization_notes: [
          'Acknowledged 50M+ download milestone',
          'Named the specific global rollout pressure',
          'Asked a relatable, specific product analytics question',
          'Mentioned BigQuery and gaming context',
        ],
      },
      direct: {
        subject: 'Your global rollout needs faster product data',
        body: `Zur,

You're running product during Play Perfect's global expansion with no VP above you. Every day you're making decisions on which markets to invest in, which features to push — and you're waiting on analytics to confirm or deny your hypotheses.

ClarityQ plugs into BigQuery and lets you ask product questions in plain English — "what's Day-7 retention on users who engaged with feature X?" — and get a precise answer in under 10 seconds.

I'd like to show you what that looks like for a gaming studio in 15 minutes. Free Thursday or Friday?`,
        personalization_notes: [
          'Named the specific risk: making product decisions without fast data during global expansion',
          'Referenced VP Product gap to create urgency',
          'Used a concrete, gaming-relevant example query',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Play Perfect × ClarityQ',
        body: `Hi Zur,

Following up on my note from last week. One thing worth adding: we recently helped a mobile gaming studio similar to Play Perfect's size cut their product insight turnaround from 48 hours to under 10 seconds. Their PMs now self-serve, which freed their analytics team entirely for model-building work.

Still happy to show you a quick demo. Next week work?`,
        personalization_notes: [
          'Added a social proof hook from a comparable gaming studio',
          'Specific outcome: 48h → 10 seconds',
          'Short and respectful of his time',
        ],
      },
      conversational: {
        subject: 'Still thinking about the product analytics question',
        body: `Hey Zur,

I sent a note last week about ClarityQ and didn't hear back — totally fine, I know timing matters.

I did want to share one thing that might be useful regardless: at Play Perfect's current scale, the biggest bottleneck is usually the gap between "I have a hypothesis about this feature" and "I have the data to confirm or kill it." That gap is where bad product decisions happen.

ClarityQ closes that gap — plain-English queries on your BigQuery stack, answers in seconds. Happy to show you a 15-minute demo whenever timing is right.

What are your biggest product data frustrations right now?`,
        personalization_notes: [
          'Acknowledged no response without being pushy',
          'Reframed the pain as hypothesis-to-data gap — resonant for PMs',
          'Ended with a genuine question to re-engage',
        ],
      },
      direct: {
        subject: 'One more ping — then I\'ll leave you alone',
        body: `Zur,

Last note on this — I promise.

You're in the middle of a global rollout with no VP Product above you, making real-time calls on BigQuery data that takes days to surface. That's a compounding risk as you scale into new markets.

If that's not a priority right now, no worries. But if it is — ClarityQ can show you the difference in 15 minutes. Just reply with a time.`,
        personalization_notes: [
          'Acknowledged this is the last follow-up — reduces friction',
          'Restated the specific risk clearly',
          'Simple, no-pressure CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Zur,

Totally understand — thanks for letting me know. I'll check back in a few months when timing might be different.

If Play Perfect ever hits a wall on analyst bandwidth during a product sprint, you know where to find me.`,
        personalization_notes: [
          'Graceful, no pressure',
          'Left a specific, relevant trigger for re-engagement',
        ],
      },
      conversational: {
        subject: 'Thanks for the reply',
        body: `Hey Zur,

Appreciate you taking the time to respond. Completely understand — no worries at all.

If the product analytics bottleneck ever becomes a real pain (it usually does at the next scale stage), I'd love to reconnect. We're building specifically for gaming studios navigating that growth phase.

I'll reach out in a few months to check in. In the meantime, good luck with the global rollout — it sounds like an exciting time at Play Perfect.`,
        personalization_notes: [
          'Warm and genuine — not transactional',
          'Set a specific re-engagement trigger (next scale stage)',
          'Referenced the global rollout positively',
        ],
      },
      direct: {
        subject: 'Noted — circling back in Q3',
        body: `Zur,

Got it — not the right time. I'll reach out again in Q3 when the global rollout dust has settled and the next growth challenge is clear.

If anything changes before then, you have my contact.`,
        personalization_notes: [
          'Specific re-engagement timeline (Q3)',
          'Tied to their known business cycle',
          'Door clearly open',
        ],
      },
    },
  },

  'playp-gilad-ben-david': {
    cold: {
      concise: {
        subject: 'Play Perfect × ClarityQ — cut the analyst queue',
        body: `Hi Gilad,

When your studio has 50M+ downloads and a global rollout underway, your analytics team fields a lot of "quick questions" that aren't quick.

ClarityQ connects to BigQuery and lets PMs, UA managers, and game designers ask those questions in plain English — answer in 10 seconds. Your team handles the complex work.

15 minutes to see it live?`,
        personalization_notes: [
          'Referenced 50M+ downloads as scale context',
          'Named the global rollout as a current ad-hoc request multiplier',
          'Named BigQuery as their confirmed stack',
          'Framed the pitch around freeing up the data team',
        ],
      },
      conversational: {
        subject: 'Question about how Play Perfect handles analyst requests',
        body: `Hey Gilad,

I've been looking at Play Perfect's growth — 50M+ downloads and a global rollout in progress. That's an impressive operation. But I'm curious: as Head of Data Analytics, how much of your team's time goes to ad-hoc requests from product and marketing?

In my experience with gaming studios at this scale, the ratio is often 60–70% ad-hoc. That's a lot of your team's capacity going to "what's the Day-7 retention for this campaign?" rather than deep modeling work.

ClarityQ is an AI analytics tool that connects to BigQuery and lets non-technical stakeholders self-serve on exactly those questions — answers in plain English, in seconds. It's designed to reduce that ad-hoc load so your team can focus on the analysis that actually requires their expertise.

Would love to show you a 20-minute demo. Does next week work?`,
        personalization_notes: [
          'Opened with genuine curiosity about his specific challenge',
          'Named the 60–70% ad-hoc ratio — a credible industry insight',
          'Framed ClarityQ as freeing the data team for high-value work',
          'Named BigQuery specifically',
        ],
      },
      direct: {
        subject: 'Your analysts are answering questions your PMs should handle',
        body: `Gilad,

At 50M+ downloads and with a global rollout underway, your PMs and UA managers are generating more data questions than your analytics team can handle. The bottleneck is real — and it gets worse as you scale.

ClarityQ connects to BigQuery and lets non-technical teams ask "what's the ROAS on TikTok in the US last week?" in plain English — and get a precise answer in 10 seconds. No analyst ticket required.

Your team gets back to modeling. Your stakeholders get faster answers.

Can I show you what this looks like for Play Perfect in 15 minutes? Thursday or Friday?`,
        personalization_notes: [
          'Named the specific problem directly: analysts answering what PMs should handle',
          'Used a concrete gaming/UA metric example',
          'Clear outcome for the data team: more time for real work',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: ClarityQ for Play Perfect',
        body: `Hi Gilad,

Following up on my note from last week. One data point that might be relevant: a mobile gaming analytics team we work with reduced their ad-hoc request load by 65% within 60 days of deploying ClarityQ. Their analysts now focus almost entirely on monetization modeling and LTV prediction.

Happy to show you how that worked. 15 minutes next week?`,
        personalization_notes: [
          'Added specific outcome: 65% reduction in ad-hoc load',
          'Named the specific high-value work their team could focus on instead',
          'Short and data-forward — appropriate for a data leader',
        ],
      },
      conversational: {
        subject: 'Checking in — any bandwidth this week?',
        body: `Hey Gilad,

I reached out last week about ClarityQ and didn't hear back. Completely understandable — this time of year with a global rollout in motion, your team is probably fielding a lot.

I wanted to share one thing that might be useful regardless: we have a quick ROI calculator for data team leaders that estimates how much analyst time is currently going to ad-hoc requests vs. complex analysis. Takes about 5 minutes to fill out and gives you a clearer picture of the opportunity.

Happy to send it over if that's useful — no pitch required.`,
        personalization_notes: [
          'Offered value without requiring a meeting',
          'Acknowledged the busy context (global rollout)',
          'Soft re-engagement with a useful tool',
        ],
      },
      direct: {
        subject: 'Last note on this',
        body: `Gilad,

One more note before I step back. The ad-hoc request problem doesn't solve itself — it compounds as Play Perfect grows into new markets. Your team will continue to be the bottleneck unless the self-serve layer gets built.

ClarityQ is that layer. If the timing is wrong now, that's fine — but I'd encourage you to block time to evaluate this in the next quarter.

Happy to schedule something whenever it fits.`,
        personalization_notes: [
          'Named the compounding nature of the problem',
          'Respected his timeline while creating urgency',
          'Soft CTA without pressure',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Gilad,

Understood, thanks for the response. I'll reach out again when the timing is better.

If the ad-hoc queue ever becomes the team's biggest challenge, you know where to find us.`,
        personalization_notes: [
          'Brief and professional',
          'Left a relevant trigger for future re-engagement',
        ],
      },
      conversational: {
        subject: 'Appreciate the reply',
        body: `Hey Gilad,

Thanks for letting me know — no worries at all. These conversations are always about timing.

I'll check back in a few months. In the meantime, if you're ever curious about how other gaming analytics teams are handling the self-serve vs. analyst question, I'm happy to share what we're seeing — no pitch attached.

Good luck with the global rollout.`,
        personalization_notes: [
          'Acknowledged timing without pressure',
          'Offered genuine value (industry insights) as a reason to stay in touch',
          'Warm close referencing their business context',
        ],
      },
      direct: {
        subject: 'Noted — I\'ll circle back in Q3',
        body: `Gilad,

Got it. I'll reach out again in Q3 — by then the global expansion will have created enough new data challenges to make this conversation timely.

If anything changes before then, feel free to reach out directly.`,
        personalization_notes: [
          'Specific re-engagement timeline',
          'Tied to their actual business cycle',
          'Confident but not pushy',
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // ODDITY (IL MAKIAGE) — NEW PERSONAS
  // ─────────────────────────────────────────────

  'ilmak-boaz-ariely': {
    cold: {
      concise: {
        subject: 'Il Makiage × ClarityQ — ROAS answers in seconds',
        body: `Hi Boaz,

Running performance marketing for a public DTC brand means defending every ad dollar with data — and waiting on analysts is not an option.

ClarityQ connects to Snowflake and lets your team ask "what's our ROAS on Meta this week vs. last month?" in plain English — answer in under 10 seconds. No SQL. No ticket.

Worth 15 minutes to see it live?`,
        personalization_notes: [
          'Referenced public company accountability for performance marketing spend',
          'Named Snowflake as their confirmed stack',
          'Used a specific, relevant ROAS example query',
          'Framed around eliminating analyst dependency',
        ],
      },
      conversational: {
        subject: 'Quick question about your performance analytics setup',
        body: `Hey Boaz,

I've been following Il Makiage's growth — impressive what ODDITY has built in DTC beauty, especially the AI personalization angle. Running performance marketing at that scale, you must be managing hundreds of campaigns across channels.

I'm curious: when you want to understand something like "which channel drove the best CAC this week in the US vs. UK?" — how quickly do you get that answer? Is it a dashboard you check, or does it go through an analyst?

I ask because we built ClarityQ specifically for performance marketers at data-heavy DTC brands. It connects to Snowflake and lets your team ask questions like that in plain English — answers in under 10 seconds. The brands we work with say it changes how fast they can iterate on spend.

Would love to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Acknowledged ODDITY\'s AI personalization strategy — shows research',
          'Asked a specific, role-relevant question about attribution speed',
          'Named Snowflake — their confirmed data stack',
          'Framed value around iteration speed for performance marketers',
        ],
      },
      direct: {
        subject: 'ODDITY\'s data stack is built for this',
        body: `Boaz,

ODDITY runs one of the most data-intensive DTC stacks in the industry — Snowflake, dbt, Looker. But "rich data stack" still means your team waits for analyst pulls when you need to answer "which creative drove the best ROAS this week on TikTok?"

ClarityQ sits on top of Snowflake and lets you ask that question in plain English. Answer in 10 seconds. No SQL, no analyst queue, no waiting until Monday.

I'd like to show you a 15-minute live demo using a performance marketing dataset. Are you free Thursday?`,
        personalization_notes: [
          'Opened by acknowledging their strong data stack — credibility move',
          'Named the gap that exists even with a strong stack',
          'Used a specific, timely example (creative ROAS on TikTok)',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Il Makiage × ClarityQ',
        body: `Hi Boaz,

Following up on my note from last week. One thing that might be relevant: a DTC brand with a similar Snowflake + paid social setup used ClarityQ to cut their channel attribution turnaround from 2 days to real-time. Their media buyers now iterate on bids daily instead of weekly.

15 minutes to see how that works? Happy to fit around your schedule.`,
        personalization_notes: [
          'Added social proof: DTC brand, similar stack, real outcome',
          'Named the specific improvement: 2 days → real-time attribution',
          'Short and role-relevant',
        ],
      },
      conversational: {
        subject: 'Still thinking about the channel attribution question',
        body: `Hey Boaz,

I reached out last week and didn't hear back — no worries at all.

I wanted to add one thing that might be useful: with ODDITY's METHODIQ telehealth launch, you now have consultation data and purchase data that need to be connected to measure true conversion performance. That's exactly the fragmented-stack problem ClarityQ solves — it lets you query across Snowflake sources in plain English without building custom joins.

Happy to show you what that looks like in 15 minutes. Would next week work?`,
        personalization_notes: [
          'Added a new hook: METHODIQ launch creates a new data fragmentation problem',
          'Named the specific pain: consult data + purchase data = attribution gap',
          'Positioned ClarityQ as solving a problem they have RIGHT NOW',
        ],
      },
      direct: {
        subject: 'One more note on ROAS analytics',
        body: `Boaz,

Last note on this. ODDITY's METHODIQ launch means your attribution model now spans telehealth consultations and e-commerce purchases — a fragmented data problem that will only get more complex.

ClarityQ connects both data sources in Snowflake and gives your team plain-English answers across the full funnel. I'd like to show you in 15 minutes.

Reply with a time that works and I'll send a calendar invite.`,
        personalization_notes: [
          'Used METHODIQ as the specific urgency trigger',
          'Named the concrete technical challenge: cross-source attribution',
          'Clear CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Boaz,

No worries — I'll circle back when the timing is better. If the METHODIQ attribution question ever becomes a priority, happy to reconnect.`,
        personalization_notes: [
          'Left a specific, relevant re-engagement trigger',
          'Brief and professional',
        ],
      },
      conversational: {
        subject: 'Thanks for the reply',
        body: `Hey Boaz,

Appreciate you taking the time. Completely understand — performance marketing at ODDITY's scale is a full-time job without adding vendor evaluations.

I'll check back in a few months. In the meantime, if METHODIQ's attribution model becomes a pain point, I'd love to revisit the conversation.

Good luck with everything — what ODDITY is building is genuinely impressive.`,
        personalization_notes: [
          'Acknowledged the volume of their workload empathetically',
          'Named METHODIQ as the specific future trigger',
          'Genuine compliment on ODDITY\'s business',
        ],
      },
      direct: {
        subject: 'Noted — I\'ll reach out again in Q3',
        body: `Boaz,

Got it. I'll follow up in Q3 — by then the METHODIQ attribution complexity will likely be a bigger priority.

If anything changes before then, you know where to find me.`,
        personalization_notes: [
          'Specific timeline tied to their known business trigger',
          'Confident close',
        ],
      },
    },
  },

  'ilmak-miranda-may': {
    cold: {
      concise: {
        subject: 'Oddity × ClarityQ — revenue insights without the wait',
        body: `Hi Miranda,

Running revenue and product for SpoiledChild means you need fast answers on what's driving growth — CAC trends, product funnel conversion, LTV by cohort — without waiting on analysts.

ClarityQ connects to Snowflake and delivers those answers in plain English in under 10 seconds.

Worth 15 minutes? Happy to show you a live demo.`,
        personalization_notes: [
          'Referenced SpoiledChild specifically — shows awareness of her brand scope',
          'Named revenue + product metrics relevant to her dual role',
          'Named Snowflake as Oddity\'s confirmed data stack',
        ],
      },
      conversational: {
        subject: 'Quick question on how you access revenue data at Oddity',
        body: `Hey Miranda,

I've been following Oddity's journey — the SpoiledChild expansion is a bold bet on a really different model from Il Makiage. As VP Revenue & Product, you're essentially running two very different analytics challenges simultaneously.

I'm curious: when you need to quickly understand something like "how is SpoiledChild's month-two retention trending vs. Il Makiage at the same stage?" — how do you get that answer? Is it a live dashboard, or does it go through an analyst?

I ask because ClarityQ is an AI analytics tool that connects to Snowflake and lets revenue and product leaders ask cross-brand, cross-cohort questions in plain English — answers in seconds. We work with DTC brands at exactly your stage of complexity.

Happy to show you a 20-minute demo. What does your schedule look like?`,
        personalization_notes: [
          'Showed genuine knowledge of SpoiledChild as a distinct brand from Il Makiage',
          'Asked a specific, cross-brand analytics question that resonates with her dual role',
          'Named Snowflake and positioned as solving multi-brand complexity',
        ],
      },
      direct: {
        subject: 'SpoiledChild\'s growth data needs faster answers',
        body: `Miranda,

You're running revenue and product for SpoiledChild while managing data across two very different brand funnels. When your BCG instincts tell you there's a retention signal or a revenue trend worth investigating, you shouldn't have to wait 48 hours for an analyst to confirm it.

ClarityQ connects to Snowflake and lets you ask "what's our month-2 retention for SpoiledChild subscribers acquired via paid social in Q1?" in plain English — answer in 10 seconds.

I'd like to show you what that looks like in 15 minutes. Free Thursday or Friday?`,
        personalization_notes: [
          'Referenced BCG background as a signal of high analytical expectations',
          'Named the specific pain: waiting for analysts when instincts are already telling a story',
          'Used a SpoiledChild-specific, role-relevant example query',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Oddity × ClarityQ',
        body: `Hi Miranda,

Following up from last week. One thing worth adding: we recently worked with a subscription beauty brand at a similar scale that used ClarityQ to monitor retention cohorts in real-time — they identified a month-3 churn signal 3 weeks earlier than their previous reporting cycle and saved the cohort with a targeted campaign.

15 minutes to see how that works?`,
        personalization_notes: [
          'Used a specific, relevant case study: subscription beauty brand, retention cohort, early churn signal',
          'Named a concrete business outcome: saved the cohort',
          'Short and data-forward',
        ],
      },
      conversational: {
        subject: 'Still thinking about the cross-brand analytics challenge',
        body: `Hey Miranda,

I reached out last week and didn't hear back — no worries.

One thing I've been thinking about: managing two brands (Il Makiage and SpoiledChild) with fundamentally different business models on one data stack is genuinely hard. The temptation is to build separate dashboards for each, but that creates exactly the visibility gaps that slow revenue decisions.

ClarityQ is designed for multi-model queries — ask "how does SpoiledChild's CAC compare to Il Makiage at the same growth stage?" and get a direct answer across Snowflake sources in seconds.

Happy to show you in 15 minutes whenever the timing is right.`,
        personalization_notes: [
          'Added a new angle: multi-brand complexity on one data stack',
          'Named the specific anti-pattern: separate dashboards per brand',
          'Positioned ClarityQ as solving the multi-model query problem',
        ],
      },
      direct: {
        subject: 'One more note on SpoiledChild revenue analytics',
        body: `Miranda,

Last note on this. SpoiledChild is scaling fast, and the revenue analytics complexity grows with it — especially once you start comparing cohort behavior across two very different business models.

If you ever want to see how ClarityQ handles cross-brand Snowflake queries in plain English, I can show you in 15 minutes. Just pick a time.`,
        personalization_notes: [
          'Framed around SpoiledChild scaling — a near-term pain point',
          'Named the specific complexity: cross-brand cohort comparison',
          'Minimal friction CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Miranda,

No problem — I'll check back in a few months. If the cross-brand analytics question ever becomes a priority, happy to reconnect.`,
        personalization_notes: [
          'Brief and graceful',
          'Named a specific future trigger',
        ],
      },
      conversational: {
        subject: 'Thanks for the response',
        body: `Hey Miranda,

Appreciate you taking the time. Totally understand — no worries at all.

I'll reach out again in a quarter or two. Oddity is doing something genuinely interesting with the multi-brand model, and I'd love to stay in touch as that complexity evolves.

Best of luck with everything.`,
        personalization_notes: [
          'Genuine acknowledgment of Oddity\'s multi-brand model as interesting',
          'Set a soft re-engagement timeline',
          'No pressure close',
        ],
      },
      direct: {
        subject: 'Noted — circling back in Q3',
        body: `Miranda,

Got it. I'll reach out again in Q3 — by then the SpoiledChild scaling analytics will likely be a clearer priority.

Feel free to reach out before then if anything changes.`,
        personalization_notes: [
          'Specific Q3 re-engagement timeline',
          'Named the future trigger',
        ],
      },
    },
  },

  'ilmak-yohei-shoji': {
    cold: {
      concise: {
        subject: 'Il Makiage × ClarityQ — CX insights without analyst lag',
        body: `Hi Yohei,

Running CX and insights for Il Makiage means you're constantly asking "which touchpoint is driving satisfaction, and which is driving churn?" — and waiting on Snowflake queries to find out.

ClarityQ delivers those answers in plain English in under 10 seconds. No SQL. No analyst ticket.

Worth 15 minutes to see it live?`,
        personalization_notes: [
          'Named his dual responsibility: CX + Insights',
          'Named the specific CX analytics question he deals with daily',
          'Named Snowflake as their confirmed stack',
        ],
      },
      conversational: {
        subject: 'Question about customer insights at Il Makiage',
        body: `Hey Yohei,

Il Makiage's AI personalization model is genuinely impressive — matching customers to foundation shades with 80% accuracy is a bold product bet that's clearly working. As VP CX & Insights, you must be sitting on a goldmine of customer behavior data.

I'm curious: when you want to understand something like "which NPS cohort has the highest 90-day LTV?" — how do you get that answer? Is it a dashboard you can pull yourself, or does it require analyst time?

I ask because ClarityQ connects to Snowflake and lets CX leaders ask questions like that in plain English — answers in seconds. It's built for the kind of insight-action cycle that matters in DTC brands where personalization is the core product.

Would love to show you a 20-minute demo. What does your week look like?`,
        personalization_notes: [
          'Acknowledged Il Makiage\'s 80% foundation shade match — shows genuine product research',
          'Asked a specific CX analytics question (NPS cohort LTV) that resonates with his role',
          'Named Snowflake and framed around DTC personalization context',
        ],
      },
      direct: {
        subject: 'Your CX data should be answering faster',
        body: `Yohei,

You're sitting on one of the richest customer behavior datasets in DTC beauty — shade match outcomes, purchase patterns, support touchpoints, NPS signals — all in Snowflake. But surfacing insights from that data still requires analyst requests that take days.

ClarityQ puts that data in plain English. Ask "what's the churn rate for customers whose shade match required more than 3 quiz attempts?" and get the answer in 10 seconds.

I'd like to show you what that looks like in 15 minutes. Free Thursday or Friday?`,
        personalization_notes: [
          'Named Il Makiage\'s specific CX data richness (shade match, NPS)',
          'Used a creative, highly specific example query that shows domain knowledge',
          'Clear outcome: days → 10 seconds',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Il Makiage × ClarityQ',
        body: `Hi Yohei,

Following up from last week. One thing worth adding: we worked with a DTC beauty brand that used ClarityQ to identify a specific post-purchase CX trigger that was driving 23% of month-2 churn. They fixed it in a single sprint. Without ClarityQ, that insight had been buried in Snowflake for months.

15 minutes to see how that works?`,
        personalization_notes: [
          'Used a specific, outcome-driven case study',
          'Named the exact CX metric: month-2 churn',
          'Framed around speed of insight → action',
        ],
      },
      conversational: {
        subject: 'Checking in on the CX analytics question',
        body: `Hey Yohei,

I reached out last week and didn't hear back — completely understandable. Running CX and insights for a public DTC brand is a lot.

I wanted to add one angle I didn't mention: with METHODIQ's telehealth launch, you now have consultation data that needs to be woven into the customer journey analytics. Understanding how a telehealth consultation changes a customer's LTV trajectory requires cross-source queries that are normally painful to build.

ClarityQ handles that natively — ask the question in plain English, get the answer across Snowflake sources in seconds.

Happy to show you when the timing is right.`,
        personalization_notes: [
          'Added new hook: METHODIQ consultation data adds CX analytics complexity',
          'Named the specific challenge: cross-source LTV journey analysis',
          'Positioned METHODIQ as a concrete pain point trigger',
        ],
      },
      direct: {
        subject: 'One more note on CX analytics',
        body: `Yohei,

Last note. The METHODIQ launch has added a new data source to your CX stack — and with it, a new gap in your ability to track the full customer journey.

ClarityQ closes that gap. 15 minutes to see how. Just pick a time.`,
        personalization_notes: [
          'Used METHODIQ as the specific, timely trigger',
          'Framed as closing a known gap',
          'Minimal friction CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Yohei,

No worries — I'll check back in a few months. If the cross-channel CX analytics question becomes a priority, happy to reconnect.`,
        personalization_notes: [
          'Brief and professional',
          'Named a relevant future trigger',
        ],
      },
      conversational: {
        subject: 'Thanks for letting me know',
        body: `Hey Yohei,

Appreciate the response — completely understand. These conversations are about timing.

I'll reach out again in a quarter. In the meantime, if METHODIQ's data ever creates a blind spot in your CX analytics picture, feel free to reach out directly.

Good luck with everything at Il Makiage.`,
        personalization_notes: [
          'Warm and genuine close',
          'Named METHODIQ as a future trigger',
          'No pressure',
        ],
      },
      direct: {
        subject: 'Noted — Q3 follow-up',
        body: `Yohei,

Got it. I'll circle back in Q3 when METHODIQ has generated enough data to create real CX analytics challenges.

Feel free to reach out before then if the need arises.`,
        personalization_notes: [
          'Specific Q3 timeline tied to METHODIQ data accumulation',
          'Confident close',
        ],
      },
    },
  },

  'ilmak-amanda-rodriguez': {
    cold: {
      concise: {
        subject: 'Il Makiage × ClarityQ — retention insights in seconds',
        body: `Hi Amanda,

Retention at Il Makiage's scale means you need fast answers on which cohorts are churning, which messages are working, and why — without waiting on Snowflake query turnarounds.

ClarityQ delivers those answers in plain English in under 10 seconds. No analyst queue.

Worth 15 minutes to see it live?`,
        personalization_notes: [
          'Named the specific retention analytics pain: cohort churn, message performance',
          'Named Snowflake as their confirmed stack',
          'Framed around eliminating analyst queue dependency',
        ],
      },
      conversational: {
        subject: 'Quick question about retention analytics at Il Makiage',
        body: `Hey Amanda,

I've been looking at Il Makiage's customer model — the AI shade matching creates a really unique retention challenge. Customers who get their match right the first time must behave completely differently from those who needed multiple tries.

I'm curious: when you want to understand something like "what's the 90-day repurchase rate for customers segmented by shade match confidence score?" — how do you surface that? Is it a self-serve dashboard, or does it go through an analyst request?

I ask because ClarityQ connects to Snowflake and lets retention leads ask exactly those kinds of segmentation questions in plain English — answers in seconds. It's built for the kind of fast iteration cycle that lifecycle programs run on.

Would love to show you a quick demo. What does your schedule look like?`,
        personalization_notes: [
          'Showed genuine knowledge of Il Makiage\'s shade match mechanics and their retention implications',
          'Asked a highly specific, role-relevant segmentation question',
          'Named Snowflake and framed around lifecycle program iteration speed',
        ],
      },
      direct: {
        subject: 'Your retention data is answering slowly',
        body: `Amanda,

You manage lifecycle and retention for a brand with millions of customers across multiple touchpoints. When you spot a churn signal in your email performance data, you need to know which Snowflake segment is behind it — not in two days, but now.

ClarityQ connects to Snowflake and lets you ask "which acquisition cohort has the highest month-3 churn rate this quarter?" in plain English — answer in 10 seconds. Your lifecycle campaigns iterate daily, not weekly.

15 minutes to see how this works for retention teams. Free Thursday?`,
        personalization_notes: [
          'Named the specific temporal pain: churn signals that need same-day action',
          'Used a specific retention query example relevant to her role',
          'Framed around lifecycle iteration speed',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Il Makiage × ClarityQ',
        body: `Hi Amanda,

Following up from last week. One retention-specific example that might be useful: a DTC brand we work with used ClarityQ to identify a suppressed email segment that was actually their highest-LTV cohort. They re-engaged that segment and drove $200K in incremental monthly revenue.

That kind of insight typically takes a 2-week analyst sprint. With ClarityQ, it took 40 seconds.

15 minutes to see how?`,
        personalization_notes: [
          'Used a specific, high-impact retention case study with a dollar outcome',
          'Named the before/after speed: 2-week sprint → 40 seconds',
          'Highly relevant to a retention director\'s priorities',
        ],
      },
      conversational: {
        subject: 'Still thinking about the retention analytics question',
        body: `Hey Amanda,

I sent a note last week and didn't hear back — no worries.

I wanted to add one thing that might be useful regardless: the METHODIQ telehealth launch means you now have a new customer journey to retain — telehealth subscribers, not just e-commerce purchasers. Those two groups almost certainly have very different lifecycle patterns.

ClarityQ lets you compare retention cohorts across both journeys in plain English, in seconds. No separate analyst requests per brand.

Happy to show you when the timing is right.`,
        personalization_notes: [
          'Added new hook: METHODIQ creates a new retention cohort with different lifecycle needs',
          'Named the specific complexity: two distinct customer journeys to retain',
          'Positioned ClarityQ as solving multi-journey retention analytics',
        ],
      },
      direct: {
        subject: 'One more note on retention analytics',
        body: `Amanda,

Last note. METHODIQ has added a new customer journey to your retention portfolio — and with it, a new set of cohort questions that your current Snowflake workflow wasn't built to answer quickly.

ClarityQ closes that gap. 15 minutes to see how. Pick a time that works.`,
        personalization_notes: [
          'Used METHODIQ as the specific urgency trigger',
          'Named the concrete gap: new cohort questions, old slow workflow',
          'Minimal friction CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Amanda,

No worries — I'll check back in a few months. If the cohort analytics question ever becomes a bottleneck, happy to reconnect.`,
        personalization_notes: [
          'Brief and professional',
          'Left a relevant trigger',
        ],
      },
      conversational: {
        subject: 'Thanks for the response',
        body: `Hey Amanda,

Appreciate you taking the time. Completely understand — retention programs run on tight cycles and vendor evaluations are hard to prioritize.

I'll check back in a quarter. If METHODIQ ever creates a cohort analytics gap in your retention stack, feel free to reach out directly.

Best of luck with everything at Il Makiage.`,
        personalization_notes: [
          'Acknowledged her workload context empathetically',
          'Named a specific future trigger (METHODIQ cohort gap)',
          'Warm close',
        ],
      },
      direct: {
        subject: 'Noted — circling back in Q3',
        body: `Amanda,

Got it. Q3 check-in it is — by then METHODIQ will have generated enough lifecycle data to make the retention analytics question very concrete.

Feel free to reach out before then if anything changes.`,
        personalization_notes: [
          'Specific Q3 timeline',
          'Tied to their known business trigger',
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // WIX — NEW PERSONAS
  // ─────────────────────────────────────────────

  'wix-roy-maimon': {
    cold: {
      concise: {
        subject: 'Wix × ClarityQ — reduce ad-hoc load on your data team',
        body: `Hi Roy,

At 1 billion events per day, your data team at Wix is the most requested team in the building. The ad-hoc request queue is real — and it scales with every product launch.

ClarityQ gives non-technical stakeholders a self-serve layer on top of your existing stack. PMs ask questions in plain English. Your analysts stay focused on high-value work.

Worth 15 minutes?`,
        personalization_notes: [
          'Named the 1B events/day scale — shows research',
          'Named the core pain: data team as the most-requested team',
          'Framed ClarityQ as empowering the data team, not replacing it',
        ],
      },
      conversational: {
        subject: 'Question about how you manage data demand at Wix',
        body: `Hey Roy,

I've been looking at Wix's data org — 1 billion events per day is an extraordinary scale, and from what I understand Wix has one of the most sophisticated analytics teams in Israeli tech.

I'm curious: what's the ratio of ad-hoc requests to proactive analysis on your team right now? In my experience with large data orgs, it's usually 50–70% ad-hoc, and the bigger the company gets, the harder that ratio is to shift.

The reason I ask: ClarityQ is an AI analytics tool that sits on top of your existing stack (Presto, BigQuery, dbt) and lets non-technical stakeholders self-serve on exactly those ad-hoc questions — plain English, answers in seconds. It's designed to give data teams back the hours they need for real analysis.

I'd love to show you a 20-minute demo. Does next week work?`,
        personalization_notes: [
          'Named 1B events/day and acknowledged Wix\'s analytics reputation',
          'Asked about the ad-hoc ratio — a credible, resonant question for a data leader',
          'Named Presto, BigQuery, dbt — their confirmed stack',
          'Framed ClarityQ as a capacity multiplier, not a replacement',
        ],
      },
      direct: {
        subject: 'Your data team shouldn\'t be answering "what\'s the DAU trend?"',
        body: `Roy,

At 5,000+ people, Wix's data team fields thousands of requests from product, marketing, and growth teams — most of which are routine queries that a self-serve tool should handle.

ClarityQ sits on top of Presto, BigQuery, and dbt and lets any stakeholder ask "what's the DAU trend for Wix Blog users in LATAM this month?" in plain English — answer in 10 seconds. Your team focuses on model-building and experimentation.

I'd like to show you what the self-serve layer looks like in a 15-minute demo. Are you free Thursday?`,
        personalization_notes: [
          'Named the 5,000+ headcount scale context',
          'Used a specific, Wix-relevant example query (DAU by product and region)',
          'Named Presto, BigQuery, dbt — their stack',
          'Clear framing: routine requests move to self-serve, complex work stays with the team',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Wix × ClarityQ',
        body: `Hi Roy,

Following up from last week. One data point that might be relevant: a SaaS data team of similar scale used ClarityQ to reduce ad-hoc requests by 60% within 90 days. Their analysts freed up 15+ hours per week per person — most of which went back into experimentation and modeling work.

15 minutes to see how that worked?`,
        personalization_notes: [
          'Specific outcome: 60% reduction, 15 hours/person/week',
          'Named the high-value work that replaced ad-hoc: experimentation and modeling',
          'Short and data-forward — appropriate for a Head of Data',
        ],
      },
      conversational: {
        subject: 'Checking in — Wix AI builder and data demand',
        body: `Hey Roy,

I reached out last week and didn't hear back — totally understand, you're running a massive operation.

I wanted to add one angle I didn't mention: the Wix AI website builder launch almost certainly spiked ad-hoc requests from product teams wanting to understand adoption rates, feature engagement, and user behavior shifts. Those requests are exactly what ClarityQ is designed to absorb — so your team doesn't have to choose between answering them and running experiments.

Happy to show you a 15-minute demo whenever it fits.`,
        personalization_notes: [
          'Added new hook: Wix AI builder launch = ad-hoc request spike',
          'Named the specific conflict: answering ad-hoc vs. running experiments',
          'Positioned ClarityQ as the capacity buffer for product launch spikes',
        ],
      },
      direct: {
        subject: 'One more note on data team capacity',
        body: `Roy,

Last note on this. The Wix AI builder launch is generating new ad-hoc queries faster than your team can absorb. That gap compounds with every new product shipped.

ClarityQ is the self-serve layer that stops that gap from growing. 15 minutes to see it — pick a time and I'll send the invite.`,
        personalization_notes: [
          'Used Wix AI builder launch as the specific urgency trigger',
          'Named the compounding nature of the problem',
          'Minimal friction CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Roy,

No worries — I'll check back in a few months. If the ad-hoc request volume ever becomes the team's top challenge, happy to reconnect.`,
        personalization_notes: [
          'Brief and professional',
          'Named the relevant future trigger',
        ],
      },
      conversational: {
        subject: 'Appreciate the response',
        body: `Hey Roy,

Thanks for letting me know — completely understand. Running a data org at Wix's scale is a full-time mandate.

I'll reach out again in a quarter. If any new product launches create a spike in ad-hoc demand that your team can't absorb, feel free to reach out before then.

Good luck with everything.`,
        personalization_notes: [
          'Acknowledged the scale of his role empathetically',
          'Named a specific future trigger (new product launch spike)',
          'Warm close',
        ],
      },
      direct: {
        subject: 'Noted — Q3 follow-up',
        body: `Roy,

Got it. I'll follow up in Q3 — likely after the next major product push at Wix when the data demand question becomes concrete again.

Feel free to reach out before then.`,
        personalization_notes: [
          'Specific Q3 timeline',
          'Tied to Wix\'s known shipping cadence',
        ],
      },
    },
  },

  'wix-omer-zilberman': {
    cold: {
      concise: {
        subject: 'Wix × ClarityQ — BD analytics without the data team queue',
        body: `Hi Omer,

Head of BD at a 5,000+ person SaaS company means your partnership ROI questions need fast answers — not analyst tickets that take days.

ClarityQ connects to Wix's data stack and lets you ask "which partner channel drove the highest SMB activation rate last quarter?" in plain English — answer in seconds.

Worth 15 minutes?`,
        personalization_notes: [
          'Named the BD-specific pain: partnership ROI questions stuck in analyst queue',
          'Named a specific, role-relevant example query',
          'Framed around eliminating data team dependency for BD decisions',
        ],
      },
      conversational: {
        subject: 'Quick question about BD analytics at Wix',
        body: `Hey Omer,

Running business development at Wix's scale — managing partnerships across 230M+ users — you must have a lot of performance data questions that need fast answers. Which partner programs are driving high-LTV users? Which channels are converting SMBs vs. enterprise? How does partner-driven acquisition compare to direct?

I'm curious: do you have self-serve access to that data, or do those questions go through the data team?

I ask because ClarityQ is an AI analytics tool that connects to Wix's data stack and lets BD teams ask exactly those kinds of questions in plain English — answers in seconds. It's designed for business leaders who need data-driven decisions but can't afford to wait on analyst queues.

Would love to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Named Wix\'s 230M+ user scale as context',
          'Listed specific BD analytics questions that are relevant to his role',
          'Asked about self-serve vs. analyst dependency — a credible diagnostic question',
          'Framed ClarityQ around BD decision speed',
        ],
      },
      direct: {
        subject: 'BD at Wix shouldn\'t wait on data team queues',
        body: `Omer,

You're making BD decisions at a 5,000+ person company where the data team is always oversubscribed. When you need to know "which partnership model is driving the best long-term retention for Wix's SMB segment?" you shouldn't have to wait 48 hours for an analyst to tell you.

ClarityQ sits on top of Wix's data stack and gives you that answer in plain English in 10 seconds.

I'd like to show you a 15-minute demo. Are you free Thursday or Friday?`,
        personalization_notes: [
          'Named the specific BD pain: partnership decisions delayed by data team queue',
          'Used a Wix-relevant, SMB-focused example query',
          'Clear outcome: 48 hours → 10 seconds',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Wix × ClarityQ',
        body: `Hi Omer,

Following up from last week. One BD-specific example worth sharing: a SaaS Head of Partnerships we work with used ClarityQ to identify that one of their top-priority partner channels was actually delivering 40% lower LTV users than their second-tier channel. That insight reordered their entire partnership investment strategy — and it came from a 20-second query, not a 2-week analyst engagement.

15 minutes to see how?`,
        personalization_notes: [
          'Used a specific, high-impact BD case study with a concrete business outcome',
          'Named the specific insight type: LTV by partner channel',
          'Speed contrast: 20-second query vs. 2-week analyst engagement',
        ],
      },
      conversational: {
        subject: 'Thinking about the Base44 angle',
        body: `Hey Omer,

I reached out last week and didn't hear back — no worries.

One angle I didn't mention: the Base44 acquisition means Wix now has a new partnership surface area — Base44's developer ecosystem. Understanding how that developer segment converts, retains, and expands within Wix's broader platform is a new BD analytics question that your existing stack wasn't built to answer quickly.

ClarityQ handles those cross-acquisition queries in plain English, across your data stack. Happy to show you when the timing is right.`,
        personalization_notes: [
          'Added new hook: Base44 acquisition creates a new BD analytics challenge',
          'Named the specific question: how does the Base44 developer segment behave within Wix?',
          'Positioned ClarityQ as solving post-acquisition cross-segment analytics',
        ],
      },
      direct: {
        subject: 'One more note on BD analytics',
        body: `Omer,

Last note. The Base44 acquisition has added a new developer partnership segment to your BD portfolio — and understanding how that segment performs relative to traditional Wix partners requires queries that currently take days to surface.

ClarityQ handles that in seconds. 15 minutes to see how — pick a time.`,
        personalization_notes: [
          'Used Base44 acquisition as the specific urgency trigger',
          'Named the concrete analytical challenge',
          'Minimal friction CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Omer,

No worries — I'll circle back in a few months. If the Base44 integration analytics ever becomes a priority, happy to reconnect.`,
        personalization_notes: [
          'Brief and professional',
          'Named a specific, relevant future trigger',
        ],
      },
      conversational: {
        subject: 'Thanks for the reply',
        body: `Hey Omer,

Appreciate the response — completely understand. BD at a company like Wix is relentlessly busy.

I'll check back in a quarter. If the Base44 analytics question ever creates a blind spot in your partnership reporting, feel free to reach out directly.

Good luck with everything.`,
        personalization_notes: [
          'Acknowledged his workload empathetically',
          'Named Base44 as a specific future trigger',
          'Warm close',
        ],
      },
      direct: {
        subject: 'Noted — Q3 check-in',
        body: `Omer,

Got it. Q3 it is — by then the Base44 partnership analytics will likely be a clearer priority.

Feel free to reach out before then if the need arises.`,
        personalization_notes: [
          'Specific Q3 timeline tied to Base44 analytics maturation',
          'Confident close',
        ],
      },
    },
  },

  'wix-mor-saar': {
    cold: {
      concise: {
        subject: 'Base44 × ClarityQ — startup speed inside Wix',
        body: `Hi Mor,

Running growth for Base44 inside Wix means you need startup-speed answers on your data — but you're competing with 5,000 other people for the data team's bandwidth.

ClarityQ gives your growth team self-serve analytics on top of Wix's data stack. Ask questions in plain English. Get answers in seconds. No data team ticket required.

Worth 15 minutes?`,
        personalization_notes: [
          'Named the startup-within-corporate tension directly — highly resonant',
          'Named the specific constraint: competing for data team bandwidth',
          'Framed ClarityQ as maintaining startup speed inside a large company',
        ],
      },
      conversational: {
        subject: 'Question about growth analytics at Base44 / Wix',
        body: `Hey Mor,

The Base44 acquisition by Wix is a fascinating move — an AI development platform inside a website builder. As Head of Growth, you're probably navigating one of the trickiest parts of any acquisition: maintaining startup-speed iteration on your growth metrics while operating inside a company 100x your size.

I'm curious: how do you handle data requests right now? Are you plugged into Wix's central data team, or does Base44 have some self-serve analytics setup?

I ask because ClarityQ is built for exactly this situation — growth teams that need fast answers on product and acquisition data without depending on a large central data org. It connects to the underlying data stack and lets your team ask questions in plain English.

Would love to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Showed genuine interest in the Base44/Wix acquisition dynamic',
          'Named the exact tension: startup iteration speed vs. corporate data org size',
          'Asked a diagnostic question about their current data access setup',
          'Framed ClarityQ as the self-serve layer for acquired startup teams',
        ],
      },
      direct: {
        subject: 'Startup growth team inside Wix — you need your own data access',
        body: `Mor,

Base44 was acquired by Wix because it's a fast-moving, AI-first product. But inside a 5,000-person company, the data org moves at corporate speed — and your growth team can't afford to wait 48 hours to answer "what's our week-over-week activation rate this sprint?"

ClarityQ gives Base44's growth team a self-serve analytics layer on top of Wix's data stack. Ask questions in plain English. Get answers in 10 seconds.

I'd like to show you what that looks like in 15 minutes. Are you free Thursday or Friday?`,
        personalization_notes: [
          'Named the Base44 acquisition context and the cultural tension it creates',
          'Used a specific, growth-relevant example query (activation rate by sprint)',
          'Clear outcome: maintain startup speed inside corporate infrastructure',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Base44 × ClarityQ',
        body: `Hi Mor,

Following up from last week. One example that might resonate: we work with a startup that was acquired by a large SaaS company and used ClarityQ to maintain its own growth analytics independence — without waiting on the central data team for weekly metrics. Their sprint velocity stayed the same post-acquisition.

15 minutes to see how that works?`,
        personalization_notes: [
          'Used a directly analogous case study: startup acquired by large SaaS',
          'Named the specific outcome: maintaining growth analytics independence post-acquisition',
          'Sprint velocity metaphor — highly relevant to a growth team lead',
        ],
      },
      conversational: {
        subject: 'Checking in on the Base44 growth analytics question',
        body: `Hey Mor,

I reached out last week about ClarityQ and didn't hear back — completely understandable. Post-acquisition growth teams are always in execution mode.

I wanted to add one angle: as Base44 scales within Wix, the growth analytics questions get more complex — how does Base44-sourced traffic convert to paid Wix plans? How does the developer segment monetize differently from traditional Wix users? Those cross-platform questions are hard to answer with the central data team's queue.

ClarityQ handles them in plain English, in seconds. Happy to show you when the timing is right.`,
        personalization_notes: [
          'Added new hook: cross-platform growth analytics questions are harder post-acquisition',
          'Named specific questions: Base44 traffic → Wix paid conversion, developer monetization',
          'Positioned ClarityQ as solving the cross-platform complexity',
        ],
      },
      direct: {
        subject: 'Last note on growth analytics',
        body: `Mor,

Last note. As Base44 grows within Wix, the question of how your developer users convert and retain within Wix's broader ecosystem gets increasingly complex — and increasingly important to your growth story.

ClarityQ gives your team the self-serve analytics to answer those questions in real-time. 15 minutes to see how — pick a time.`,
        personalization_notes: [
          'Named the long-term analytics challenge: Base44 developer segment within Wix ecosystem',
          'Framed as growing in importance over time',
          'Minimal friction CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Mor,

No worries — I'll check back in a few months. If the cross-platform analytics question ever becomes a blocker for growth, happy to reconnect.`,
        personalization_notes: [
          'Brief and professional',
          'Named a relevant future trigger',
        ],
      },
      conversational: {
        subject: 'Thanks for the response',
        body: `Hey Mor,

Appreciate you letting me know. Completely understand — growth at an acquisition stage is full-on.

I'll reach back out in a quarter. If the Wix data org ever becomes a bottleneck for Base44's growth sprint cycle, feel free to reach out directly.

Best of luck — it's an exciting time at Base44.`,
        personalization_notes: [
          'Acknowledged the acquisition context empathetically',
          'Named the specific future trigger: data org as a growth sprint bottleneck',
          'Warm close referencing the exciting moment',
        ],
      },
      direct: {
        subject: 'Noted — I\'ll follow up in Q3',
        body: `Mor,

Got it. I'll follow up in Q3 — by then the cross-platform analytics questions will likely be clearer priorities.

Feel free to reach out before then if the need arises.`,
        personalization_notes: [
          'Specific Q3 timeline',
          'Tied to the natural evolution of post-acquisition analytics needs',
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // APPSFLYER — NEW PERSONAS
  // ─────────────────────────────────────────────

  'appsf-deborah-baruc': {
    cold: {
      concise: {
        subject: 'AppsFlyer × ClarityQ — pricing analytics without engineering tickets',
        body: `Hi Deborah,

Pricing strategy at a $5.9B attribution platform requires fast answers on customer segmentation, usage patterns, and price sensitivity — without waiting on engineering or analytics queues.

ClarityQ connects to BigQuery and lets your team ask "what's the average usage intensity for customers in the mid-market tier vs. enterprise in the US?" in plain English — answer in seconds.

Worth 15 minutes?`,
        personalization_notes: [
          'Named the $5.9B valuation — shows research and establishes scale context',
          'Named the specific pricing analytics pain points: segmentation, usage, sensitivity',
          'Named BigQuery as their confirmed stack',
          'Used a specific, pricing-relevant example query',
        ],
      },
      conversational: {
        subject: 'Question about pricing analytics at AppsFlyer',
        body: `Hey Deborah,

AppsFlyer's pricing decisions at this scale — serving 75,000+ apps across every tier from indie developers to Fortune 500 — must be incredibly data-intensive. Understanding which features drive expansion, which segments are underpriced, and how usage patterns predict churn requires a constant stream of analytics.

I'm curious: when you want to understand something like "which customer segments have the highest feature usage relative to their current plan?" — how do you surface that? Is it a self-serve dashboard, or does it go through an analyst request?

I ask because ClarityQ connects to BigQuery and lets pricing leaders ask exactly those kinds of segmentation questions in plain English — answers in seconds. It's built for the kind of fast iteration that pricing strategy requires.

Would love to show you a 20-minute demo. What does your week look like?`,
        personalization_notes: [
          'Showed genuine knowledge of AppsFlyer\'s multi-tier customer base (75,000+ apps)',
          'Named three specific pricing analytics use cases: expansion drivers, underpricing, churn prediction',
          'Asked a diagnostic question about current data access workflow',
          'Named BigQuery specifically',
        ],
      },
      direct: {
        subject: 'Your pricing decisions need faster data',
        body: `Deborah,

Pricing strategy at AppsFlyer means navigating 75,000+ customer accounts across multiple tiers, geographies, and product lines. When you need to know "which enterprise accounts are under-utilizing their plan relative to similar accounts that expanded?" you can't afford a 2-day analyst turnaround.

ClarityQ connects to BigQuery and delivers that answer in plain English in 10 seconds.

I'd like to show you what pricing analytics looks like with ClarityQ in 15 minutes. Free Thursday?`,
        personalization_notes: [
          'Named the 75,000+ customer account scale — specific and credible',
          'Used a specific, high-value pricing analytics example: under-utilization identification',
          'Clear speed contrast: 2-day turnaround → 10 seconds',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: AppsFlyer × ClarityQ',
        body: `Hi Deborah,

Following up from last week. A pricing-specific example worth sharing: a SaaS platform we work with used ClarityQ to identify that 23% of their mid-market accounts were consistently hitting usage limits but hadn't been flagged for an upgrade conversation. They recovered $180K ARR in the next quarter.

That insight came from a 30-second query. Normally it would have taken a 2-week data pull.

15 minutes to see how?`,
        personalization_notes: [
          'Used a specific, high-impact pricing case study with a dollar outcome',
          'Named the exact use case: usage limit identification for expansion',
          'Speed contrast: 30-second query vs. 2-week data pull',
        ],
      },
      conversational: {
        subject: 'The Incrementality product launch angle',
        body: `Hey Deborah,

I reached out last week about ClarityQ and didn't hear back — no worries.

One angle I didn't mention: the Incrementality product launch means AppsFlyer now has a new pricing surface to think about — a statistically complex product that needs its own usage and adoption analytics to inform tier design. Understanding how Incrementality usage correlates with account expansion is a new data question your current workflow probably wasn't built to answer quickly.

ClarityQ handles that in plain English, in seconds. Happy to show you when the timing is right.`,
        personalization_notes: [
          'Added new hook: Incrementality launch creates new pricing analytics questions',
          'Named the specific question: Incrementality usage → expansion correlation',
          'Positioned ClarityQ as solving a near-term, product-specific challenge',
        ],
      },
      direct: {
        subject: 'One more note on pricing analytics',
        body: `Deborah,

Last note. The Incrementality launch has introduced a new pricing complexity — a statistically rigorous product that needs its own tier structure informed by usage data. That's a pricing analytics question that can't wait weeks for an analyst sprint.

ClarityQ delivers those answers in seconds. 15 minutes to see how — pick a time.`,
        personalization_notes: [
          'Used Incrementality launch as the specific urgency trigger',
          'Named the concrete pricing challenge: new tier structure needs usage data',
          'Minimal friction CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Deborah,

No worries — I'll check back in a few months. If pricing analytics speed ever becomes a bottleneck, happy to reconnect.`,
        personalization_notes: [
          'Brief and professional',
          'Named the relevant future trigger',
        ],
      },
      conversational: {
        subject: 'Thanks for the response',
        body: `Hey Deborah,

Appreciate you taking the time. Completely understand — pricing strategy at AppsFlyer's scale is a complex, full-time mandate.

I'll reach out again in a quarter. If the Incrementality pricing question ever creates a data analytics urgency, feel free to reach out directly.

Good luck with everything.`,
        personalization_notes: [
          'Acknowledged the complexity of her role empathetically',
          'Named a specific future trigger (Incrementality pricing)',
          'Warm close',
        ],
      },
      direct: {
        subject: 'Noted — Q3 follow-up',
        body: `Deborah,

Got it. I'll follow up in Q3 — likely after the Incrementality pricing model has had a few months to generate real usage data worth analyzing.

Feel free to reach out before then.`,
        personalization_notes: [
          'Specific Q3 timeline tied to Incrementality data maturation',
          'Confident close',
        ],
      },
    },
  },

  'appsf-gal-regev': {
    cold: {
      concise: {
        subject: 'AppsFlyer × ClarityQ — GTM analytics without the engineering queue',
        body: `Hi Gal,

Running GTM applications at AppsFlyer means you need fast answers on pipeline health, tool adoption, and RevOps performance — without waiting on engineering or data team queues.

ClarityQ connects to BigQuery and lets your team ask "which GTM tool has the highest adoption rate among enterprise AEs this quarter?" in plain English — answer in seconds.

Worth 15 minutes?`,
        personalization_notes: [
          'Named the GTM-specific analytics pain points: pipeline health, tool adoption, RevOps',
          'Named BigQuery as their confirmed stack',
          'Used a specific, GTM-relevant example query',
        ],
      },
      conversational: {
        subject: 'Question about GTM analytics at AppsFlyer',
        body: `Hey Gal,

AppsFlyer's GTM motion at this scale — 75,000+ apps across enterprise, mid-market, and SMB segments — must generate a huge amount of internal analytics questions. Which tools are AEs actually using? Which GTM plays are converting at the highest rate in each segment? Where are the handoff gaps between marketing and sales?

I'm curious: how do you get fast answers to those questions right now? Is there a self-serve RevOps dashboard, or do those questions go through the data team?

I ask because ClarityQ connects to BigQuery and lets GTM leaders ask exactly those kinds of questions in plain English — answers in seconds. It's designed for the kind of rapid iteration that modern GTM strategy requires.

Would love to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Named AppsFlyer\'s multi-segment GTM complexity (75,000+ apps, enterprise/MM/SMB)',
          'Listed three specific GTM analytics questions that resonate with his role',
          'Named BigQuery and framed around RevOps decision speed',
        ],
      },
      direct: {
        subject: 'GTM analytics at AppsFlyer shouldn\'t wait on the data team',
        body: `Gal,

Running GTM applications at AppsFlyer means making decisions about tooling, pipeline, and RevOps based on data that's often 48 hours stale by the time it surfaces. When you want to know "which sales motion is driving the fastest time-to-close for enterprise accounts this quarter?" you need that now, not next week.

ClarityQ connects to BigQuery and delivers that answer in plain English in 10 seconds.

I'd like to show you what GTM analytics looks like with ClarityQ in 15 minutes. Free Thursday?`,
        personalization_notes: [
          'Named the specific GTM pain: 48-hour data lag on pipeline decisions',
          'Used a specific, enterprise GTM example query: time-to-close by sales motion',
          'Clear speed outcome: next week → 10 seconds',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: AppsFlyer × ClarityQ',
        body: `Hi Gal,

Following up from last week. A GTM-specific example worth sharing: a SaaS RevOps leader we work with used ClarityQ to identify that one of their GTM tools was being used by only 30% of AEs despite being in their stack for 18 months. That insight led to a targeted enablement program that drove adoption to 80% — and measurable pipeline improvement.

That analysis came from a 2-minute query. Previously it would have required a custom data pull.

15 minutes to see how?`,
        personalization_notes: [
          'Used a specific GTM case study: tool adoption analysis driving enablement program',
          'Named concrete outcomes: 30% → 80% adoption, pipeline improvement',
          'Speed contrast: 2-minute query vs. custom data pull',
        ],
      },
      conversational: {
        subject: 'The IPO path and GTM analytics angle',
        body: `Hey Gal,

I reached out last week and didn't hear back — no worries.

One angle I didn't mention: as AppsFlyer moves toward a potential IPO, the rigor of GTM analytics becomes board-level important. Understanding exactly which go-to-market motions drive ARR, and proving that with clean data, is exactly the kind of pre-IPO discipline that ClarityQ helps GTM leaders build.

Happy to show you how in 15 minutes when the timing is right.`,
        personalization_notes: [
          'Added new hook: IPO path creates board-level GTM analytics pressure',
          'Named the specific need: clean GTM data for ARR attribution',
          'Positioned ClarityQ as a pre-IPO GTM analytics discipline tool',
        ],
      },
      direct: {
        subject: 'One more note on GTM analytics',
        body: `Gal,

Last note. With AppsFlyer's IPO path in view, GTM analytics clarity becomes a board-level requirement. Which motions drive ARR, and at what efficiency — those aren't nice-to-have questions anymore.

ClarityQ gives you clean, instant answers from BigQuery. 15 minutes to see how — pick a time.`,
        personalization_notes: [
          'Used IPO path as the specific urgency trigger',
          'Named the board-level GTM analytics requirement',
          'Minimal friction CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Gal,

No worries — I'll check back in a few months. If GTM analytics speed ever becomes a bottleneck pre-IPO, happy to reconnect.`,
        personalization_notes: [
          'Brief and professional',
          'Named the IPO-related trigger for future re-engagement',
        ],
      },
      conversational: {
        subject: 'Thanks for the response',
        body: `Hey Gal,

Appreciate you letting me know. Completely understand — GTM operations at AppsFlyer's scale is a full-time focus.

I'll reach out in a quarter. If the pre-IPO GTM analytics rigor question becomes a priority, feel free to reach out before then.

Good luck with everything.`,
        personalization_notes: [
          'Acknowledged the scale of his GTM role',
          'Named the IPO analytics trigger as a future re-engagement reason',
          'Warm close',
        ],
      },
      direct: {
        subject: 'Noted — Q3 check-in',
        body: `Gal,

Got it. I'll follow up in Q3 — likely when the IPO timeline makes GTM analytics precision a clearer priority.

Feel free to reach out before then.`,
        personalization_notes: [
          'Specific Q3 timeline tied to IPO preparation',
          'Confident close',
        ],
      },
    },
  },

  'appsf-niv-klein': {
    cold: {
      concise: {
        subject: 'AppsFlyer × ClarityQ — product analytics for Incrementality',
        body: `Hi Niv,

Running the Incrementality product means you need fast answers on feature adoption, A/B test coverage, and usage patterns across 75,000+ apps — without waiting on data team queues.

ClarityQ connects to BigQuery and lets your team ask "which customer segments have the highest Incrementality feature engagement in the first 30 days?" in plain English — answer in seconds.

Worth 15 minutes?`,
        personalization_notes: [
          'Named Incrementality specifically — shows awareness of his product area',
          'Named the specific product analytics pain points: adoption, A/B coverage, usage patterns',
          'Named BigQuery as their confirmed stack',
          'Used a product-relevant example query specific to Incrementality',
        ],
      },
      conversational: {
        subject: 'Question about product analytics for Incrementality',
        body: `Hey Niv,

The Incrementality product is a fascinating build — using statistical rigor to measure true campaign lift is exactly the kind of product that AppsFlyer's customer base has been asking for. But I imagine running product for it creates a unique analytics challenge: you're building a measurement product, which means your internal product data needs to be held to an especially high standard.

I'm curious: how do you handle the product analytics for Incrementality? Is there a self-serve layer for your PMs and data scientists to query feature adoption and experiment results, or does everything go through the central data team?

I ask because ClarityQ connects to BigQuery and lets product teams ask questions like "what's the activation rate for Incrementality in accounts with >10M MAU?" in plain English — answers in seconds. It's built for data-heavy product teams that can't afford analyst lag.

Would love to show you a 20-minute demo. What does your week look like?`,
        personalization_notes: [
          'Showed genuine appreciation for the Incrementality product\'s technical sophistication',
          'Named the unique challenge: building a measurement product means high internal data standards',
          'Asked a diagnostic question about their self-serve vs. analyst workflow',
          'Used a Incrementality-specific, product-relevant example query',
        ],
      },
      direct: {
        subject: 'Incrementality product analytics needs faster answers',
        body: `Niv,

You're running product for AppsFlyer's most statistically complex offering — which means your PMs and data scientists are asking detailed questions about feature adoption, experiment results, and customer usage patterns constantly. Waiting on the central data team for those answers slows down your iteration cycle.

ClarityQ connects to BigQuery and lets your product team ask "what's the Day-30 retention rate for customers who activated Incrementality alongside Conversion Paths?" in plain English — answer in 10 seconds.

I'd like to show you what product analytics looks like with ClarityQ in 15 minutes. Free Thursday?`,
        personalization_notes: [
          'Named the Incrementality product\'s statistical complexity as a reason for higher internal analytics demands',
          'Named the specific stakeholders: PMs and data scientists',
          'Used a cross-product, AppsFlyer-specific example query',
          'Specific day CTA',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: AppsFlyer × ClarityQ',
        body: `Hi Niv,

Following up from last week. A product analytics example worth sharing: a measurement product team we work with used ClarityQ to identify that their highest-engaged feature was being used almost exclusively by one customer segment — a finding that completely redirected their roadmap for the next two quarters.

That insight came from a 5-minute query session. Previously it would have required a 3-week analyst sprint.

15 minutes to see how?`,
        personalization_notes: [
          'Used a case study directly analogous to Niv\'s measurement product context',
          'Named the high-value outcome: roadmap redirection from a segmentation insight',
          'Speed contrast: 5-minute query session vs. 3-week analyst sprint',
        ],
      },
      conversational: {
        subject: 'Thinking about the self-serve angle for Incrementality PMs',
        body: `Hey Niv,

I reached out last week and didn't hear back — no worries.

One thing I wanted to share: product teams working on measurement and analytics products often have a specific challenge — their PMs are analytically sophisticated enough to know what questions to ask, but not technical enough to write the BigQuery SQL to answer them. That gap shows up as an analyst queue that slows down product iteration.

ClarityQ closes that gap. Happy to show you how in 15 minutes whenever the timing works.`,
        personalization_notes: [
          'Added new angle: analytically sophisticated PMs who can\'t write SQL — a specific and resonant pain',
          'Named the mechanism: analyst queue slows iteration for measurement product PMs',
          'Positioned ClarityQ as the bridge between analytical curiosity and SQL execution',
        ],
      },
      direct: {
        subject: 'One more note on product analytics',
        body: `Niv,

Last note. Your PMs on Incrementality know exactly what questions they want to answer about feature adoption and customer behavior — but they shouldn't need to wait on data team queues to get those answers.

ClarityQ gives them self-serve access to BigQuery in plain English. 15 minutes to see how — pick a time.`,
        personalization_notes: [
          'Named the specific audience: Incrementality PMs with high analytical curiosity',
          'Framed the pain: waiting on data queues for known questions',
          'Minimal friction CTA',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ — understood',
        body: `Hi Niv,

No worries — I'll check back in a few months. If the Incrementality PM analytics bottleneck ever becomes a priority, happy to reconnect.`,
        personalization_notes: [
          'Brief and professional',
          'Named the specific future trigger',
        ],
      },
      conversational: {
        subject: 'Thanks for the reply',
        body: `Hey Niv,

Appreciate the response. Completely understand — running product for Incrementality is a technically intensive role.

I'll check back in a quarter. If the self-serve analytics question for your PM team becomes a priority, feel free to reach out directly.

Good luck with the product.`,
        personalization_notes: [
          'Acknowledged the technical intensity of his role',
          'Named the specific future trigger: PM self-serve analytics',
          'Warm close',
        ],
      },
      direct: {
        subject: 'Noted — Q3 follow-up',
        body: `Niv,

Got it. I'll follow up in Q3 — by then the Incrementality product will have had another few quarters of adoption data worth analyzing.

Feel free to reach out before then if the need arises.`,
        personalization_notes: [
          'Specific Q3 timeline tied to Incrementality adoption growth',
          'Confident close',
        ],
      },
    },
  },
}

// Helper: lookup cached email or return null (triggers live Claude generation)
export function getCachedEmail(personaId, emailType, tone) {
  return emailCache[personaId]?.[emailType]?.[tone] ?? null
}
