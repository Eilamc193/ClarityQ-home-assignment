// Pre-generated email cache - 12 personas × 3 types × 3 tones = 108 emails.
// Lookup: emailCache[personaId][emailType][tone]
// EmailComposer checks this cache before calling the Claude API.

export const emailCache = {

  // ─────────────────────────────────────────────
  // PLAY PERFECT
  // ─────────────────────────────────────────────

  'playp-michael-saifer': {
    cold: {
      concise: {
        subject: 'Play Perfect × ClarityQ - ROAS answers in 10 sec',
        body: `Hi Michael,

Play Perfect is rolling out globally while scaling its data analytics team - two senior roles open simultaneously. That's a lot of intraday campaign decisions chasing constrained analytical headcount.

ClarityQ connects to BigQuery and lets your UA team ask "which channel drove the best LTV last week?" in plain English - answer in under 10 seconds, no SQL required.

Worth a 15-minute look? Happy to show you a live demo with your data stack.`,
        personalization_notes: [
          'Referenced Play Perfect\'s global title rollout (Q1 2026)',
          'Referenced dual analytics hiring (Head of Data Analytics + Growth Analyst) as urgency signal',
          'Mentioned BigQuery (confirmed tool in their stack)',
          'Framed around UA team pain: intraday ROAS + LTV tracking without SQL',
        ],
      },
      conversational: {
        subject: 'Quick question about your UA analytics setup',
        body: `Hey Michael,

I was looking at Play Perfect's trajectory - a new title in beta, a global rollout in motion, and two senior analytics roles open at the same time. That's a lot of intraday acquisition pressure with constrained data bandwidth.

I'm curious: how long does it currently take your team to get an answer like "what's the Day-7 retention on users from Meta vs Google in this market?" Is it a quick query, or does it go through an analyst queue?

I ask because ClarityQ is an AI analytics tool that connects to BigQuery and lets non-technical team members ask questions like that in plain English - and get the answer in seconds. We work with mobile gaming studios that are in exactly your situation: scaling fast, lean data team, lots of campaign decisions to make.

Would love to show you a quick demo if the timing is right. What does your week look like?`,
        personalization_notes: [
          'Referenced concurrent beta launch + global rollout + hiring signal as compounding pressure',
          'Referenced global title rollout as the current pain trigger',
          'Asked a specific, relatable question about their data workflow',
          'Named BigQuery as their confirmed stack component',
        ],
      },
      direct: {
        subject: 'Your new title launch - data bottleneck coming',
        body: `Michael,

You're rolling out globally with a new title in beta and two analytics roles still unfilled. That means your UA team is making intraday acquisition decisions on delayed data - which in mobile gaming is a competitive disadvantage.

ClarityQ plugs into your BigQuery stack and lets any team member - PM, UA manager, CMO - ask "what's the ROAS on TikTok this week?" and get a precise answer in 10 seconds.

I'd like to show you what that looks like for a gaming studio in 15 minutes. Are you free Thursday or Friday?`,
        personalization_notes: [
          'Named the specific business risk: delayed data during global rollout',
          'Referenced open analytics roles + beta title as compounding urgency signals',
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
          'Followed up without being pushy - acknowledged the gap',
          'Added a new hook: social proof from a similar gaming company',
          'Kept it extremely short - respects busy VP Marketing inbox',
        ],
      },
      conversational: {
        subject: 'Still thinking about that ROAS question',
        body: `Hey Michael,

Reaching back out - I sent a note a few days ago about ClarityQ and wanted to add one more thought.

I've been reading about Play Perfect's Gin Rummy portfolio. It sounds like you're running a pretty sophisticated UA operation to maintain that kind of download velocity. The challenge I keep hearing from mobile gaming VPs is that the data to make a bid adjustment comes 24-48 hours too late - by the time the analyst pulls the report, the campaign window is gone.

That's exactly what we built ClarityQ to solve. Natural language queries on top of your existing BigQuery stack. No rework, no new dashboards.

Happy to jump on a quick call whenever the timing works. What does your schedule look like this week?`,
        personalization_notes: [
          'Referenced Gin Rummy portfolio specifically - shows real research',
          'Named the "24-48 hour data lag" pain point common in mobile gaming',
          'Positioned as non-disruptive (no new stack, just layered on existing BigQuery)',
        ],
      },
      direct: {
        subject: 'One more angle on your data setup',
        body: `Michael,

Quick follow-up. A different angle on why I reached out:

With a global rollout active and a data analyst seat still open, your window to iterate fast is right now - intraday budget calls can't wait for analyst queues. Every day of delayed campaign data costs you optimization cycles.

ClarityQ gives your existing team - today, without a new hire - the ability to query BigQuery in plain English and get answers in seconds. Book 15 minutes and I'll show you exactly how.`,
        personalization_notes: [
          'Created genuine urgency: intraday optimization window during global rollout is time-limited',
          'Reframed as "today without a new hire" - removes the "we\'ll fix it when we hire" objection',
          'Direct, action-oriented close',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ - noted, keeping the door open',
        body: `Hi Michael,

Totally understand - bad timing happens. I'll take this off your plate for now.

One quick ask: if the data bottleneck during your next launch becomes a real friction point, would you be open to a 15-minute conversation then? No pressure either way.

Rooting for the new title.`,
        personalization_notes: [
          'Acknowledged rejection gracefully - no pushback',
          'Left a clear re-engagement trigger: "next launch" timing',
          'Ended on a genuine, human note about Play Perfect\'s new game',
        ],
      },
      conversational: {
        subject: 'Makes sense - let\'s stay in touch',
        body: `Hey Michael,

Fair enough - appreciate you getting back to me. Timing isn't always right, and I'd rather wait for the right moment than push for a meeting that won't be useful.

I'll circle back when you have a new launch on the horizon or if a data crunch hits at a particularly bad moment. Feel free to reach out directly if something changes before then.

Good luck with the global rollout - those intraday ROAS numbers will tell the story quickly.`,
        personalization_notes: [
          'Acknowledged the "no" without trying to overcome it',
          'Left two re-engagement triggers: new launch + data crunch moment',
          'Personal and genuine - references the global rollout outcome',
        ],
      },
      direct: {
        subject: 'Understood - filing this for when the timing is right',
        body: `Michael,

Understood. I'll hold off for now.

When the next title launches or when you're feeling the analyst bandwidth squeeze, I'll be here. ClarityQ will still plug into BigQuery and still give your team same-day campaign data - the opportunity just needs the right timing.

Talk soon.`,
        personalization_notes: [
          'Crisp, no-fluff acknowledgment of rejection',
          'Named two future triggers: next title launch, analyst squeeze',
          'Reinforced the core value prop one last time without being salesy',
        ],
      },
    },
  },

  'playp-jonathan-okun': {
    cold: {
      concise: {
        subject: 'VP Data × ClarityQ - cut the analyst queue',
        body: `Hi Jonathan,

Running data and virtual economy for Play Perfect means your team probably spends a significant chunk of time on ad-hoc requests from marketing, product, and leadership - answering questions that don't require your expertise, just your access.

ClarityQ sits on top of BigQuery and lets those stakeholders self-serve on routine questions. Your team gets back to the high-leverage work.

Worth a quick look? Happy to demo in 15 minutes.`,
        personalization_notes: [
          'Named Jonathan\'s specific role: data AND virtual economy - shows real research',
          'Framed around the pain data VPs actually feel: ad-hoc requests consuming bandwidth',
          'Positioned ClarityQ as complementary to his team, not a replacement',
        ],
      },
      conversational: {
        subject: 'Question about your ad-hoc data request volume',
        body: `Hi Jonathan,

I've been looking at Play Perfect's setup - VP Data & Economy is a fascinating role, especially in mobile gaming where in-app economics drive almost everything. Your team must sit at the intersection of monetization modeling, UA data, and business reporting.

Quick question: what percentage of your team's week goes to "can you pull X for me?" requests vs strategic analysis? I'm guessing it's higher than anyone would like.

ClarityQ is built to fix exactly that. It connects to BigQuery and lets marketing, product, and leadership teams ask those questions themselves - in plain English - without touching your queue. Your analysts get to work on the interesting problems.

Happy to show you how it works. What does your calendar look like this week?`,
        personalization_notes: [
          'Acknowledged the unique "Data & Economy" role - rare and interesting combination',
          'Asked a diagnostic question that surfaces the ad-hoc request pain naturally',
          'Positioned solution as freeing his team, not replacing them',
        ],
      },
      direct: {
        subject: 'Cut Play Perfect\'s analyst queue - 15 min?',
        body: `Jonathan,

If your team spends more than 30% of its time on ad-hoc data requests from stakeholders who could, with the right tool, answer their own questions - ClarityQ fixes that.

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

Following up from last week. One thought I forgot to mention: ClarityQ also works for the data team itself - quick queries, data exploration, sanity checks - not just for the stakeholders you support.

Still happy to show you a demo. 15 minutes this week?`,
        personalization_notes: [
          'Added new angle: value for the data team itself, not just as a self-serve tool for others',
          'Short and respectful - doesn\'t re-explain everything',
        ],
      },
      conversational: {
        subject: 'One more thought on your data team setup',
        body: `Hey Jonathan,

Reaching back out - I realize my last note focused a lot on reducing your team's ad-hoc load, but I didn't mention the other side.

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

Outward - your stakeholders self-serve on routine questions. Inward - your team explores BigQuery data faster with natural language queries.

For a data + economy VP, both sides have value. Worth 15 minutes to see the full picture?`,
        personalization_notes: [
          'Introduced the dual-use framing: outward (stakeholder self-serve) and inward (team efficiency)',
          'Very concise - respects that this is a second touch',
          'Clear question at the end: yes or no to a demo',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ - understood',
        body: `Hi Jonathan,

No problem at all. I'll keep this on my radar and follow up when Play Perfect's data team is feeling more bandwidth pressure.

Thanks for getting back to me.`,
        personalization_notes: [
          'Brief and professional',
          'Named a specific re-engagement trigger: data team bandwidth',
        ],
      },
      conversational: {
        subject: 'Makes sense - no rush',
        body: `Hey Jonathan,

Fair enough - I appreciate the honest response. These things are about timing, and I'd rather wait for the right moment than push for something that won't be useful.

I'll circle back when Play Perfect is scaling the data team or when the virtual economy modeling work is demanding more analytical horsepower. Until then, good luck with the new title launch.

Feel free to reach out directly if something changes.`,
        personalization_notes: [
          'Named specific re-engagement triggers: scaling the team, increased analytical demand',
          'Referenced the virtual economy work - shows continued understanding of his role',
        ],
      },
      direct: {
        subject: 'Understood - I\'ll be here',
        body: `Jonathan,

Noted. When the ad-hoc request volume starts hitting harder, or when you're hiring more analysts than you\'d like, reach out.

ClarityQ will still be here.`,
        personalization_notes: [
          'Named the future pain points directly: request volume, analyst hiring pressure',
          'Confident, not desperate - leaves the door open without begging',
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
          'Named METHODIQ specifically - shows research beyond Il Makiage',
          'Identified the exact cross-stack friction: telehealth consult logs + Snowflake purchase data',
          'Used a realistic, role-specific query (Instagram ad sets → consult-to-purchase)',
        ],
      },
      conversational: {
        subject: 'The METHODIQ consult-to-purchase gap - how do you measure it today?',
        body: `Hi Rachael,

METHODIQ is a genuinely interesting challenge - you're running a telehealth funnel that feeds into a commerce conversion. That means your performance data lives in two separate places: the consult logs and the post-purchase events in Snowflake.

Quick question: when you want to know which ad sets are driving the best consult-to-purchase conversion this week - how long does it actually take your team to get that answer?

ClarityQ connects your Telehealth and Performance stacks and lets you ask those cross-stack questions in plain English. I'd love to show you what that looks like for METHODIQ. What does your week look like?`,
        personalization_notes: [
          'Named METHODIQ and described its unique telehealth-to-commerce funnel structure',
          'Asked a diagnostic question that surfaces the cross-stack data friction naturally',
          'Framed ClarityQ as the connector between two specific stacks - not a generic tool',
        ],
      },
      direct: {
        subject: "METHODIQ's consult-to-purchase rate - answer in 10s or in a ticket?",
        body: `Rachael,

METHODIQ's key performance question is: which channels are actually converting consultations into purchases?

Right now that answer sits across your Telehealth stack and your Snowflake performance data - and connecting them takes time your team doesn't have.

ClarityQ unifies both and answers that question in plain English, in 10 seconds. 15 minutes this week to see it in action?`,
        personalization_notes: [
          'Opened with METHODIQ\'s core performance question - immediately relevant',
          'Named the exact friction: data split across Telehealth stack and Snowflake',
          'Positioned ClarityQ as the unifier - clear, specific value prop',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Il Makiage growth data',
        body: `Hi Rachael,

Following up from last week. One thing worth adding: Il Makiage's expansion to the nu skincare brand doubles the data complexity your team has to navigate - two acquisition funnels, two retention curves, two A/B testing pipelines.

ClarityQ unifies those across a single natural language interface. Worth 15 minutes?`,
        personalization_notes: [
          'Added new angle: the nu skincare brand expansion doubles data complexity',
          'Framed ClarityQ as the unifier across two brand datasets',
          'Concise and additive - doesn\'t repeat the first email',
        ],
      },
      conversational: {
        subject: 'The nu skincare launch made me think of something',
        body: `Hey Rachael,

Reaching back out with a thought that came to me after reading about Il Makiage's nu skincare launch.

Running growth marketing across two brands - Il Makiage and nu - means you're essentially managing two separate acquisition ecosystems simultaneously. That's two sets of A/B tests, two attribution models, two sets of LTV curves. The cross-brand comparison questions alone ("is our CAC more efficient on nu than on Il Makiage for the 25-35 demographic?") are the kind that take time to answer.

ClarityQ makes those comparisons instant. Connect both brand datasets to one interface and ask the cross-brand question in plain English.

Happy to show you a demo whenever it's convenient.`,
        personalization_notes: [
          'Named nu skincare specifically and framed it as a data complexity multiplier',
          'Named a highly specific, realistic cross-brand query question',
          'Showed understanding of dual-brand growth marketing complexity',
        ],
      },
      direct: {
        subject: 'Two brands, one data interface - worth a look?',
        body: `Rachael,

Quick follow-up. With Il Makiage and nu running simultaneously, your team is navigating two attribution models, two funnel analyses, and two sets of A/B results.

ClarityQ can unify that into one natural language interface - ask cross-brand questions in seconds. That's worth 15 minutes. Are you free this week?`,
        personalization_notes: [
          'Led with the specific, current pain: two brands creating data fragmentation',
          'Positioned ClarityQ as the unifier - clear, relevant value prop',
          'Short, direct, asks a clear yes/no question',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ - understood, I\'ll follow up',
        body: `Hi Rachael,

No problem - I'll check back when the nu skincare scale-up creates more analytics complexity or the team is feeling the data bandwidth pressure more acutely.

Thanks for getting back to me.`,
        personalization_notes: [
          'Named a specific future trigger: nu skincare scale-up',
          'Brief and professional - no pushback',
        ],
      },
      conversational: {
        subject: 'Makes sense - timing is everything',
        body: `Hey Rachael,

Fair enough - I appreciate the honest response. These conversations are about timing, and I'd rather wait for the right moment.

I'll circle back when Il Makiage and nu are both at scale and the cross-brand analytics complexity starts to bite. Until then, good luck with both launches - it's a bold move to build two brands simultaneously.`,
        personalization_notes: [
          'Named the specific future trigger: when both brands are at full scale',
          'Expressed genuine interest in what Il Makiage is doing - it\'s genuinely impressive',
        ],
      },
      direct: {
        subject: 'Understood - I\'ll be back when the data complexity scales',
        body: `Rachael,

Noted. When the cross-brand data complexity starts slowing your team down, I'll be here.

ClarityQ will still fix it.`,
        personalization_notes: [
          'Extremely concise - matches the direct tone',
          'Left the door open with a specific trigger: cross-brand complexity at scale',
        ],
      },
    },
  },

  'ilmak-helina-levy': {
    cold: {
      concise: {
        subject: 'VP Product × ClarityQ - feature data in seconds',
        body: `Hi Helina,

Running product and growth at Il Makiage means you're constantly asking: "did this feature change improve retention or hurt conversion?" - and waiting for the answer.

ClarityQ connects to Snowflake and lets your product team ask those questions in plain English. Same-day answers, no analyst required.

Worth a 15-minute demo?`,
        personalization_notes: [
          'Named her dual role: product AND growth - demonstrates research',
          'Named Snowflake as Il Makiage\'s confirmed data stack',
          'Used a realistic product question: feature impact on retention vs conversion',
        ],
      },
      conversational: {
        subject: 'Feature impact analytics at Il Makiage - quick question',
        body: `Hi Helina,

I've been following Il Makiage's product story - the AI skin-matching technology and now the expansion to nu skincare. Managing product for a company that's simultaneously operating at beauty-brand scale while building ML infrastructure is genuinely fascinating.

One question that comes to mind: when your product team ships a change to the AI matching flow and wants to know if it improved conversion - how long does it take to get that answer? Same day? Next day? End of sprint?

ClarityQ is built to make that answer instant. Connect to your Snowflake data, ask "did the matching update improve purchase conversion for first-time users?" in plain English, and get a precise result in 10 seconds.

Would love to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Referenced both Il Makiage\'s AI matching tech and nu skincare expansion',
          'Asked a highly specific, realistic question about their product flow (AI matching conversion)',
          'Named Snowflake as their confirmed data warehouse',
        ],
      },
      direct: {
        subject: 'Your feature data - how fast does it answer back?',
        body: `Helina,

When your product team ships a change and wants to know if it worked - how long until you see the data?

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

Following up from last week. One thought I didn't include: with nu skincare now live, you're essentially running product analytics for two separate AI-powered brands simultaneously. The complexity doesn't add - it multiplies.

ClarityQ handles both datasets in one interface. Worth 15 minutes?`,
        personalization_notes: [
          'Introduced new angle: nu skincare doubles the product analytics complexity',
          'Used the phrase "complexity multiplies" - accurate and visceral',
        ],
      },
      conversational: {
        subject: 'Thinking about the nu skincare launch and your data setup',
        body: `Hey Helina,

Reaching back out with a thought that came up as I read about Il Makiage's nu skincare launch.

Running product for Il Makiage's AI matching platform is already sophisticated. Now that nu is live, you're managing two separate product analytics streams - two sets of feature experiments, two adoption curves, two retention models. And they probably need to inform each other ("do users who engaged with nu's formulations have different behavior patterns on Il Makiage?").

That cross-brand product intelligence is exactly where ClarityQ adds value. One interface, both Snowflake datasets, natural language queries that work across brands.

Happy to show you how this looks in practice. What does your calendar look like?`,
        personalization_notes: [
          'Named nu skincare explicitly and framed it as complexity that doubles the data work',
          'Invented a specific, plausible cross-brand question about user behavior',
          'Positioned ClarityQ as the cross-brand data unifier',
        ],
      },
      direct: {
        subject: 'Two brands, one product team - the data complexity',
        body: `Helina,

Quick follow-up. Product for Il Makiage + nu = two AI product funnels, two feature experiment pipelines, two adoption curves to track.

ClarityQ unifies that in one natural language interface on top of your Snowflake stack. Worth 15 minutes this week?`,
        personalization_notes: [
          'Very concise - used the "=" framing to make the complexity mathematical',
          'Named specific work: feature experiments, adoption curves',
          'Direct close with a specific time ask',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ - noted',
        body: `Hi Helina,

Understood - no problem. I'll follow up when the dual-brand product complexity starts creating more data friction.

Thanks for getting back to me.`,
        personalization_notes: [
          'Brief and professional',
          'Named the specific future trigger: dual-brand complexity scaling',
        ],
      },
      conversational: {
        subject: 'Makes sense - I\'ll check back later',
        body: `Hey Helina,

Fair enough - timing is everything with these conversations. I'd rather wait for the right moment than push for a meeting that won't be useful.

I'll circle back when Il Makiage and nu are both at full scale and the cross-brand product analytics gets more complex. Good luck with both - what you're building with AI-powered personalization across beauty is genuinely interesting.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: dual-brand at full scale',
          'Expressed genuine interest in the AI personalization work - it\'s a differentiator',
        ],
      },
      direct: {
        subject: 'Understood - I\'ll be here when you\'re ready',
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

  'ltx-nicky-kamins': {
    cold: {
      concise: {
        subject: 'Facetune data - answers in seconds, no queue',
        body: `Hi Nicky,

Running data for Facetune at Lightricks means fielding a constant stream of product, marketing, and monetization questions - and most of them shouldn't need to go through an analyst queue.

ClarityQ connects to your data warehouse and lets anyone on the team ask "what's the Day-30 retention for users who used the new AI background feature?" in plain English. Answer in under 10 seconds.

Worth 15 minutes to see it live?`,
        personalization_notes: [
          'Addressed Nicky\'s specific role: Head of Facetune Data',
          'Used a realistic, app-specific example query (AI background feature retention)',
          'Framed around reducing the ad-hoc analyst queue',
        ],
      },
      conversational: {
        subject: 'Quick question about your analytics workflow at Facetune',
        body: `Hey Nicky,

I was looking at Facetune's AI feature expansion - the generative tools you've rolled out recently are a serious step up, and they must be generating a whole new category of behavioral data to track.

I'm curious: when a PM or marketer asks you "which users are converting from the free AI edit to paid subscription?", how long does that typically take to answer? Is it a dashboard, a quick query, or does it route through your team?

I ask because ClarityQ lets non-technical stakeholders ask exactly those questions in plain English, directly against your data warehouse. No SQL, no ticket, answer in seconds. We work with product-led apps in exactly your situation.

Happy to show you a quick demo if you're open to it. What does your calendar look like?`,
        personalization_notes: [
          'Referenced the recent generative AI feature expansion at Lightricks',
          'Asked a specific, realistic question about their AI-to-paid conversion funnel',
          'Positioned ClarityQ as removing the dependency on Nicky\'s team for routine queries',
        ],
      },
      direct: {
        subject: 'Your AI feature analytics - are stakeholders self-serving?',
        body: `Nicky,

Facetune's AI feature rollout is generating new behavioral data that product, marketing, and monetization teams all want to understand - but most of those questions shouldn't require your team to answer them.

ClarityQ connects to your data stack and lets PMs, growth managers, and marketers query it in plain English. "Which AI feature drives the highest free-to-paid conversion?" - answer in 10 seconds, no SQL, no analyst ticket.

I'd like to show you what that looks like in 15 minutes. Are you free Thursday or Friday?`,
        personalization_notes: [
          'Named the specific trigger: AI feature rollout generating new data demand',
          'Focused on reducing Nicky\'s team\'s ad-hoc burden',
          'Clear, specific CTA with day suggestions',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Facetune × ClarityQ',
        body: `Hi Nicky,

Following up on my note from last week. One thing worth adding: a mobile app data team we work with cut their ad-hoc request volume by 60% within the first month - their analysts shifted from answering routine queries to building actual models.

Still happy to show you a 15-minute demo. Would next week work?`,
        personalization_notes: [
          'Added a concrete social proof stat (60% reduction in ad-hoc volume)',
          'Kept it short - Nicky is a data practitioner, not a marketing persona',
        ],
      },
      conversational: {
        subject: 'Still thinking about your AI feature data',
        body: `Hey Nicky,

Reaching back out - I wanted to add one more thought since I sent my last note.

With Lightricks rolling out generative AI features across Facetune, Videoleap, and Photoleap simultaneously, the variety of questions hitting your team must be multiplying fast. Which AI brush drives the most sessions? Which users churn after their free trial of the AI suite? Do power users of one app convert to another?

Those aren't complex questions, but they shouldn't compete with your team's actual modeling work. ClarityQ handles that entire layer - natural language on top of your existing stack.

Happy to jump on a call whenever makes sense. What's your week like?`,
        personalization_notes: [
          'Referenced multi-app AI expansion (Facetune, Videoleap, Photoleap)',
          'Named specific realistic questions her team probably gets',
          'Positioned the opportunity cost: complex work vs. routine queries',
        ],
      },
      direct: {
        subject: 'One more thought on the analyst queue',
        body: `Nicky,

Following up with one concrete point: the data teams we work with report that 60-70% of their ad-hoc requests are questions anyone could answer if they had the right tool. ClarityQ is that tool.

For Facetune specifically - with AI features shipping fast and stakeholders hungry for behavioral data - that queue is only going to grow.

15 minutes to show you what self-serve analytics looks like for your stack. This week?`,
        personalization_notes: [
          'Led with a specific, credible statistic',
          'Named the growth trajectory: AI features → more data questions → bigger queue',
          'Tight and actionable',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ - understood',
        body: `Hi Nicky,

No problem - I'll follow up when the AI feature rollout starts generating more ad-hoc demand than the team can absorb.

Good luck with the Facetune data work.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: AI feature-driven ad-hoc surge',
          'Short and respectful',
        ],
      },
      conversational: {
        subject: 'Makes sense - I\'ll check back',
        body: `Hey Nicky,

Fair enough - I appreciate the honest response. I know timing matters with tools like this.

I'll check back when the generative AI rollout starts pushing more questions to your team than there are analyst hours to handle. In the meantime, good luck with the Facetune work - the AI feature direction looks genuinely impressive.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: AI rollout generating more data demand',
          'Acknowledged their product work - genuine, not hollow',
        ],
      },
      direct: {
        subject: 'Noted - I\'ll be here when the queue grows',
        body: `Nicky,

Understood. When the AI feature expansion drives more ad-hoc requests than the team can handle, reach out.

Good luck.`,
        personalization_notes: [
          'Brief and respectful',
          'Named the specific future trigger',
        ],
      },
    },
  },

  'ltx-rene-froitzheim': {
    cold: {
      concise: {
        subject: 'Lightricks demand gen - pipeline answers without the wait',
        body: `Hi Rene,

Running demand gen across a multi-app portfolio means every campaign question - "which channel is driving pipeline for Facetune vs. Videoleap?" - has to route through an analyst before you can act.

ClarityQ connects to your data warehouse and lets your team ask those questions in plain English. Answer in seconds, not days.

Worth 15 minutes to see it live?`,
        personalization_notes: [
          'Named the multi-app portfolio challenge specific to Lightricks',
          'Used a realistic, relevant campaign question example',
          'Framed around the speed-to-insight problem in demand gen',
        ],
      },
      conversational: {
        subject: 'Question about your demand gen analytics setup',
        body: `Hey Rene,

I was looking at Lightricks' growth trajectory - with generative AI rolling out across Facetune, Videoleap, and Photoleap, the demand gen picture must be getting more complex every quarter. Different conversion paths, different payback windows, different ICP signals per app.

I'm curious: how quickly can your team get an answer like "what's the MQL-to-opportunity rate for users who came through paid social for Facetune last month"? Is that a quick query, or does it need an analyst?

I ask because ClarityQ lets demand gen teams ask exactly those questions in plain English, directly against their data warehouse. No SQL, no ticket, answer in seconds.

Happy to show you what that looks like for a multi-app setup. What does your calendar look like?`,
        personalization_notes: [
          'Referenced multi-app AI expansion creating per-app demand gen complexity',
          'Asked a specific, realistic pipeline question about their funnel',
          'Positioned ClarityQ as solving the multi-product analytics fragmentation',
        ],
      },
      direct: {
        subject: 'Your multi-app pipeline data - how fast can you get it?',
        body: `Rene,

Lightricks runs demand gen across multiple apps, each with distinct acquisition channels and conversion funnels. Getting a consolidated pipeline view - or a per-app campaign breakdown - should take seconds, not a 48-hour analyst turnaround.

ClarityQ connects to your data stack and lets you or your team ask "which campaign drove the most qualified pipeline for Videoleap last month?" in plain English. Instant answer, no SQL.

I'd like to show you what that looks like in 15 minutes. Are you free Thursday or Friday?`,
        personalization_notes: [
          'Named the specific pain: multi-app demand gen fragmentation',
          'Used a concrete, realistic query example',
          'Clear CTA with specific day suggestions',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Lightricks × ClarityQ',
        body: `Hi Rene,

Following up on my note from last week. One thing worth adding: a B2C SaaS demand gen team we work with cut their time-to-pipeline-insight from 2 days to under 10 minutes using ClarityQ.

For a multi-app portfolio like Lightricks, that speed advantage compounds across every campaign decision. Still happy to show you a 15-minute demo - would next week work?`,
        personalization_notes: [
          'Added a concrete social proof stat (2 days → 10 minutes)',
          'Tied the stat to the specific multi-app portfolio challenge',
        ],
      },
      conversational: {
        subject: 'Still thinking about your multi-app pipeline visibility',
        body: `Hey Rene,

Reaching back out - I've been thinking about the Lightricks demand gen challenge since my last note.

With AI features launching across multiple apps simultaneously, I imagine the campaign attribution question gets messy fast: which campaigns are driving subscriptions to the AI suite specifically? Which channels perform differently per app? How does a user who tried Facetune convert to Photoleap?

Those cross-app pipeline questions are exactly where ClarityQ shines - natural language queries on your unified data warehouse, instant answers.

Happy to jump on a call whenever makes sense. What's your week like?`,
        personalization_notes: [
          'Named specific cross-app pipeline questions Rene likely faces',
          'Tied the follow-up to a real business complexity (multi-app AI expansion)',
          'Conversational and genuinely curious tone',
        ],
      },
      direct: {
        subject: 'Cross-app pipeline visibility - still an open question?',
        body: `Rene,

One concrete follow-up: the demand gen teams we work with report that cross-product pipeline visibility is their biggest unresolved data problem. Lightricks running 4+ apps amplifies exactly that challenge.

ClarityQ gives you unified pipeline analytics across every app and channel in plain English - no waiting on data teams.

15 minutes this week?`,
        personalization_notes: [
          'Led with a specific, credible pain point framing',
          'Named the Lightricks-specific amplifier: 4+ app portfolio',
          'Tight and actionable',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ - understood',
        body: `Hi Rene,

No problem - I'll follow up when the cross-app pipeline visibility gap becomes more of a constraint on your campaigns.

Good luck with the Lightricks demand gen work.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: cross-app pipeline visibility',
          'Short and respectful',
        ],
      },
      conversational: {
        subject: 'Makes sense - I\'ll check back',
        body: `Hey Rene,

Fair enough - I appreciate the honest response. Timing is everything with tooling decisions.

I'll circle back when the multi-app pipeline attribution challenge becomes a bigger bottleneck. In the meantime, the Lightricks product direction looks genuinely exciting - good luck with the AI feature rollouts.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: multi-app attribution bottleneck',
          'Acknowledged their product work - genuine, not hollow',
        ],
      },
      direct: {
        subject: 'Noted - I\'ll be here when the pipeline data gaps grow',
        body: `Rene,

Understood. When the cross-app pipeline visibility gap starts slowing down campaign decisions, reach out.

Good luck.`,
        personalization_notes: [
          'Brief and respectful',
          'Named the specific future trigger',
        ],
      },
    },
  },

  'ltx-lior-sassy': {
    cold: {
      concise: {
        subject: 'Lightricks product decisions - data in seconds',
        body: `Hi Lior,

At Lightricks, every AI feature launch requires an immediate read on adoption, retention delta, and paywall conversion. Waiting 48 hours for an analyst to pull that data means you're shipping your next feature before you understand the last one.

ClarityQ connects to your data warehouse and lets your product team ask those questions in plain English - answer in under 10 seconds.

Worth 15 minutes to see it?`,
        personalization_notes: [
          'Named the specific product analytics pain: AI feature launch cycle',
          'Framed the cost: shipping next feature before understanding the previous one',
          'Tight and product-persona appropriate',
        ],
      },
      conversational: {
        subject: 'Question about your product analytics loop at Lightricks',
        body: `Hey Lior,

I was looking at Lightricks' AI feature rollout - it's impressive how fast you're shipping across Facetune, Videoleap, and Photoleap. But I imagine that speed puts real pressure on the data loop: how quickly after launch can your team answer "is this feature actually driving retention?"

I'm curious about your current workflow. When a feature ships and a stakeholder asks "what's the 7-day adoption rate among paid users?", how long does that take?

I ask because ClarityQ is an AI analytics tool that lets product teams ask those questions in plain English, directly against your data warehouse. No SQL, no analyst ticket - answer in seconds.

Happy to show you a quick demo if the timing is right. What does your week look like?`,
        personalization_notes: [
          'Referenced the multi-app AI feature rollout velocity',
          'Asked a specific, realistic post-launch analytics question',
          'Conversational and genuinely curious - right for a product director',
        ],
      },
      direct: {
        subject: 'Your AI feature launch cycle - how fast is your data loop?',
        body: `Lior,

Lightricks ships AI features at high velocity across multiple apps. The product question after every launch is the same: adoption, retention impact, paywall conversion. If that data takes 48 hours to surface, you're already halfway to the next sprint decision.

ClarityQ connects to your data warehouse and lets product managers ask "what's the Day-7 retention lift for users of the new AI brush feature?" in plain English. Answer in 10 seconds.

I'd like to show you what that looks like in 15 minutes. Are you free Thursday or Friday?`,
        personalization_notes: [
          'Named the specific post-launch analytics cycle: adoption, retention, conversion',
          'Used a concrete, realistic product analytics query example',
          'Clear CTA with day suggestions',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: Lightricks product analytics × ClarityQ',
        body: `Hi Lior,

Following up on my note from last week. One thing worth adding: a consumer mobile app product team we work with cut their post-launch data review cycle from 3 days to same-day using ClarityQ. Their PMs now run their own feature performance checks independently.

Still happy to show you a 15-minute demo. Would next week work?`,
        personalization_notes: [
          'Added concrete social proof (3 days → same-day post-launch review)',
          'Framed around PM independence - relevant for a Director of Product',
        ],
      },
      conversational: {
        subject: 'Still thinking about your feature data loop',
        body: `Hey Lior,

Reaching back out - I've been thinking about the Lightricks product analytics challenge since my last note.

With generative AI features shipping across multiple apps, the variety of product questions must be multiplying: does the AI background feature increase session length? Do users who engage with AI edits convert to paid at a higher rate? How does feature adoption compare across Facetune vs. Photoleap users?

Those aren't complex questions - but if they require an analyst ticket, they slow your roadmap down. ClarityQ handles that entire layer so your PMs can self-serve.

Happy to jump on a call whenever makes sense. What's your week like?`,
        personalization_notes: [
          'Named specific realistic product analytics questions Lior\'s team faces',
          'Framed the cost: analyst dependency slowing roadmap velocity',
          'Conversational and empathetic to a product director\'s workflow',
        ],
      },
      direct: {
        subject: 'PM self-serve - still a gap at Lightricks?',
        body: `Lior,

Following up with one specific question: how much of your team's analytics bandwidth is going to routine "can you pull this metric?" requests vs. actual product modeling?

If it's more than 30%, ClarityQ eliminates that layer - natural language self-serve for PMs on top of your existing warehouse.

15 minutes this week?`,
        personalization_notes: [
          'Led with a specific, diagnostic question (30% bandwidth threshold)',
          'Named the solution in concrete terms',
          'Very short - right for a Director of Product persona',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: ClarityQ - understood',
        body: `Hi Lior,

No problem - I'll follow up when the post-launch analytics cycle becomes a bigger constraint on your roadmap velocity.

Good luck with the Lightricks product work.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: post-launch data cycle slowing roadmap',
          'Short and respectful',
        ],
      },
      conversational: {
        subject: 'Makes sense - I\'ll check back',
        body: `Hey Lior,

Fair enough - I appreciate the honest response. Product tool decisions need to be timed right.

I'll circle back when PM self-serve analytics becomes a bigger priority. In the meantime, the Lightricks AI feature direction is genuinely impressive - good luck with the roadmap.`,
        personalization_notes: [
          'Named the specific re-engagement trigger: PM self-serve analytics priority',
          'Acknowledged their product direction - genuine',
        ],
      },
      direct: {
        subject: 'Noted - I\'ll be here when the analytics queue grows',
        body: `Lior,

Understood. When the ad-hoc analytics requests start slowing your team's roadmap velocity, reach out.

Good luck.`,
        personalization_notes: [
          'Brief and respectful',
          'Named the specific future trigger',
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // APPSFLYER
  // ─────────────────────────────────────────────

  'appsf-deborah-baruc': {
    cold: {
      concise: {
        subject: 'AppsFlyer pricing analytics → plain English',
        body: `Hi Deborah,

Pricing at a $5.9B attribution platform means constant questions: which customer segments are approaching tier limits, which accounts show expansion signals, which pricing cohorts have the best retention.

Right now those questions go to an analyst queue. ClarityQ connects to your BigQuery and lets you ask them in plain English - answer in under 10 seconds.

Worth a 15-minute look?`,
        personalization_notes: [
          'Referenced $5.9B valuation as pricing context',
          'Named BigQuery as confirmed tool',
          'Framed around pricing-specific use cases: tier limits, expansion signals, retention cohorts',
        ],
      },
      conversational: {
        subject: 'Quick question about your pricing analytics setup',
        body: `Hey Deborah,

I was thinking about what pricing analytics looks like at the scale AppsFlyer operates - 75,000 apps, a $5.9B valuation, IPO conversations in the air. Every pricing decision is backed by customer usage data, and I imagine the questions come fast: which segments are approaching tier thresholds, which accounts are ripe for expansion, which price points have the best retention.

How long does it typically take your team to answer something like "which enterprise accounts are underutilizing their current tier?" - quick pull, or analyst queue?

ClarityQ connects to BigQuery and answers questions like that in plain English - seconds, not days. No SQL, no engineering ticket.

Happy to show you a quick demo if this resonates. What does your calendar look like?`,
        personalization_notes: [
          'Referenced 75,000 app scale and $5.9B valuation',
          'Framed around pricing-specific pain: tier analysis, expansion signals',
          'Asked a specific, relatable question about their workflow',
        ],
      },
      direct: {
        subject: 'Pricing analytics without the analyst wait',
        body: `Deborah,

Pricing at AppsFlyer means you're constantly asking: which segments are approaching tier limits, which accounts have expansion potential, which cohorts churn at specific price points.

Those questions shouldn't require an engineering ticket. ClarityQ connects to BigQuery and answers them in plain English - in seconds.

15 minutes to show you live?`,
        personalization_notes: [
          'Named BigQuery as confirmed tool',
          'Focused on pricing-specific pain points: tier analysis, expansion, churn by cohort',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Re: pricing analytics → pre-IPO angle',
        body: `Hi Deborah,

One thing I didn't mention: AppsFlyer is in pre-IPO mode, which means your pricing data is under a new kind of scrutiny - board-level, investor-level.

ClarityQ gives you real-time visibility into pricing cohort performance from BigQuery, in plain English. No analyst dependency for the metrics that matter most right now.

Still worth a quick look?`,
        personalization_notes: [
          'Led with new angle: pre-IPO board scrutiny on pricing data',
          'Tied urgency to IPO timing',
        ],
      },
      conversational: {
        subject: 'One more angle on the pricing question',
        body: `Hey Deborah,

I reached out last week about pricing analytics - wanted to try a different angle.

AppsFlyer is scaling its data org ahead of what looks like an IPO. That typically means more pressure on pricing analytics specifically: investor-level visibility into cohort performance, tier utilization, and expansion revenue. The questions your board will ask are exactly the kind that currently sit in an analyst queue.

ClarityQ gives you a layer where you can ask those questions directly - "how is ARR trending by tier this quarter?" - and get the answer in seconds from BigQuery.

If the timing isn't right, happy to stay in touch. But if pricing analytics is a current pain point, 15 minutes could be well spent.`,
        personalization_notes: [
          'New angle: IPO-driven board scrutiny on pricing data',
          'Named specific question a board would ask',
          'Acknowledged timing sensitivity',
        ],
      },
      direct: {
        subject: 'Pre-IPO pricing visibility - quick follow-up',
        body: `Deborah,

IPO prep puts pricing metrics under a new microscope - board visibility, cohort performance, tier utilization. Analysts can't keep pace with those demands.

ClarityQ gives you self-serve access to your BigQuery pricing data in plain English. One layer that removes the bottleneck.

Quick 15 minutes?`,
        personalization_notes: [
          'Reframed around IPO as new urgency trigger',
          'Kept extremely concise',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: No problem at all',
        body: `Deborah,

Completely understood - timing matters. If AppsFlyer's pricing analytics ever becomes a bottleneck during IPO prep, I'd love to revisit. Happy to reconnect then.`,
        personalization_notes: [
          'Acknowledged decision gracefully',
          'Left door open with IPO timing as future trigger',
        ],
      },
      conversational: {
        subject: 'Re: Understood - and thanks',
        body: `Deborah,

No worries at all - appreciate you letting me know. These things are often about timing, not fit.

If the data access question ever becomes urgent - especially as IPO prep creates new pressure on pricing visibility - feel free to reach out. I'll be here.

Wishing you and the team continued success.`,
        personalization_notes: [
          'Warm, non-defensive close',
          'Named IPO prep as a future timing trigger without being pushy',
        ],
      },
      direct: {
        subject: 'Re: Noted - door stays open',
        body: `Deborah,

Understood. Whenever pricing analytics becomes a priority - and IPO timelines tend to accelerate that - I'm easy to reach.

Best of luck with the build.`,
        personalization_notes: [
          'Brief and direct',
          'Named IPO as natural future trigger',
        ],
      },
    },
  },

  'appsf-gal-regev': {
    cold: {
      concise: {
        subject: 'AppsFlyer GTM analytics - instant answers from your stack',
        body: `Hi Gal,

Running GTM applications at AppsFlyer means you're constantly tracking pipeline health, tool adoption, and revenue motion across a complex stack. Those questions shouldn't sit in a ticket queue.

ClarityQ connects to BigQuery and lets you ask "which stage has the most pipeline drag this quarter?" in plain English - answer in seconds.

Worth 15 minutes?`,
        personalization_notes: [
          'Focused on GTM-specific use cases: pipeline health, tool adoption, revenue motion',
          'Named BigQuery as confirmed tool',
          'Used a specific, relatable pipeline question',
        ],
      },
      conversational: {
        subject: 'Question about your GTM analytics setup',
        body: `Hey Gal,

I was looking at what GTM analytics looks like at AppsFlyer's scale - a data-intensive attribution platform that also has to manage its own RevOps motion, pipeline visibility, and GTM tool stack.

Here's a question I'd be curious about: when a sales leader asks "where's pipeline stalling this week?", how long does it take your team to get them a credible answer? Quick pull from your BI layer, or analyst first?

ClarityQ connects to BigQuery and answers questions like that in plain English - under 10 seconds. No SQL, no engineering dependency. We work with GTM and RevOps leads who need data at the speed of deal cycles.

Happy to show you a quick demo if this sounds familiar. What does your schedule look like?`,
        personalization_notes: [
          'Asked a specific, relatable question about their GTM workflow',
          'Named BigQuery as confirmed tool',
          'Framed around GTM-specific pain: pipeline visibility, sales speed',
        ],
      },
      direct: {
        subject: 'GTM pipeline data without the wait',
        body: `Gal,

GTM leads at AppsFlyer scale need pipeline health, tool adoption rates, and RevOps data fast - not at the speed of analyst queues.

ClarityQ connects to your BigQuery and delivers those answers in plain English. "Which channel is driving the best conversion this quarter?" - seconds, not days.

15 minutes to show you live?`,
        personalization_notes: [
          'Focused on speed as core value for GTM',
          'Named specific GTM use cases',
          'BigQuery reference',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'AppsFlyer IPO prep - GTM data gets scrutinized more',
        body: `Hi Gal,

One thing I didn't mention: as AppsFlyer scales toward a potential IPO, GTM data accuracy and visibility becomes board-level. Pipeline forecasting, win rates, tool ROI - those get reviewed at a new level.

ClarityQ gives you real-time self-serve access to that data from BigQuery. No analyst dependency at a moment when data credibility matters most.

Still worth a quick chat?`,
        personalization_notes: [
          'New angle: IPO scrutiny on GTM data',
          'Named specific metrics board would care about',
        ],
      },
      conversational: {
        subject: 'Different angle on the GTM question',
        body: `Hey Gal,

I reached out last week about GTM analytics - wanted to come at this from a different angle.

AppsFlyer is in scale mode right now - data org expanding, IPO conversations in the background. That puts more pressure on GTM data accuracy: pipeline forecasting needs to be defensible, tool adoption needs to be measured, and RevOps reporting can't be stuck in an analyst queue.

ClarityQ sits on top of your BigQuery and lets GTM leads query that data in plain English - "what's our average cycle length for enterprise deals this quarter?" - and get the answer in seconds.

If the timing is off, completely understand. But if GTM data visibility is a live issue, worth 15 minutes.`,
        personalization_notes: [
          'New angle: pre-IPO GTM data scrutiny',
          'Named specific GTM metrics',
          'Conversational and respectful of their time',
        ],
      },
      direct: {
        subject: 'Pre-IPO GTM visibility - following up',
        body: `Gal,

Pre-IPO scale means your pipeline data needs to be board-ready, not analyst-dependent.

ClarityQ gives GTM leads self-serve access to BigQuery data in plain English - pipeline health, tool ROI, win rates - in seconds.

Quick 15 minutes?`,
        personalization_notes: [
          'Tight reframe on IPO as urgency trigger',
          'Named specific GTM metrics',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: Understood - no problem',
        body: `Gal,

Totally understood. When GTM analytics visibility becomes a priority - especially during IPO build-out - happy to reconnect. Good luck with the quarter.`,
        personalization_notes: [
          'Brief, non-defensive',
          'IPO timing as future trigger',
        ],
      },
      conversational: {
        subject: 'Re: Thanks for the reply',
        body: `Gal,

Appreciate you getting back to me - these decisions are always about timing and priority.

If the GTM data question ever becomes more pressing - particularly as revenue scrutiny picks up ahead of any potential IPO - feel free to reach out. I'd be glad to reconnect.

Best of luck with AppsFlyer's next chapter.`,
        personalization_notes: [
          'Warm and non-defensive',
          'IPO as future timing trigger',
        ],
      },
      direct: {
        subject: 'Re: Got it',
        body: `Gal,

Understood. When GTM data visibility becomes a priority - it tends to during IPO cycles - I'm easy to find.

Good luck with the quarter.`,
        personalization_notes: [
          'Direct and brief',
          'IPO timing as future trigger',
        ],
      },
    },
  },

  'appsf-niv-klein': {
    cold: {
      concise: {
        subject: 'Incrementality analytics - self-serve for your team',
        body: `Hi Niv,

The Incrementality Suite is gaining traction across enterprise - which means your team is fielding more internal data questions: feature adoption by customer segment, experiment coverage rates, validation pipeline throughput.

ClarityQ connects to BigQuery and lets your team ask those questions in plain English - no SQL, no analyst queue, answer in seconds.

Worth 15 minutes?`,
        personalization_notes: [
          'Referenced Incrementality Suite enterprise growth signal',
          'Named specific product analytics use cases: adoption, experiment coverage, validation throughput',
          'BigQuery reference',
        ],
      },
      conversational: {
        subject: 'Quick question about Incrementality product analytics',
        body: `Hey Niv,

I was looking at AppsFlyer's Incrementality Suite - impressive traction with top enterprise accounts. I'm curious about the internal side: as adoption scales across the top-100 app developers, how does your team stay on top of which customers are running experiments, what adoption looks like by segment, and whether the validation pipeline is keeping pace?

Those sound like the kind of questions that could go to an analyst - or could go directly into a plain-English query layer.

ClarityQ connects to BigQuery and lets product teams ask exactly these questions in natural language and get the answer in under 10 seconds. No SQL, no engineering ticket.

Happy to show you a quick demo if this resonates. What does your week look like?`,
        personalization_notes: [
          'Referenced Incrementality Suite enterprise traction as conversation opener',
          'Asked a specific question about internal product analytics workflow',
          'BigQuery reference',
        ],
      },
      direct: {
        subject: 'Incrementality product data - no more analyst queue',
        body: `Niv,

Enterprise adoption of the Incrementality Suite means your team is tracking feature adoption rates, A/B test coverage, and validation pipeline health - constantly.

Those questions shouldn't require analyst tickets. ClarityQ connects to BigQuery and answers them in plain English - in seconds.

15 minutes to see it live?`,
        personalization_notes: [
          'Directly referenced Incrementality Suite adoption signal',
          'Named specific product analytics use cases',
          'BigQuery reference',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'One more angle - CTV complexity',
        body: `Hi Niv,

Something I didn't mention: AppsFlyer's CTV attribution expansion adds a new measurement surface - and new internal data questions your team will need to answer fast.

ClarityQ gives product teams self-serve access to analytics data across surfaces in plain English. No SQL, no queue, instant answers.

Still worth a look?`,
        personalization_notes: [
          'New angle: CTV expansion creates new internal product analytics complexity',
          'Tied to a real signal from their company',
        ],
      },
      conversational: {
        subject: 'CTV + Incrementality - a new data angle',
        body: `Hey Niv,

Reached out last week about Incrementality analytics - wanted to try a different angle.

AppsFlyer is expanding into CTV attribution, which adds a new measurement surface your product team will need to track internally - adoption patterns, cross-platform validation, methodology accuracy in a medium your system wasn't originally built for.

That's the kind of question that doesn't fit neatly into existing dashboards. ClarityQ sits on top of BigQuery and lets your team ask "how is CTV experiment adoption tracking vs. mobile this quarter?" in plain English - and get the answer in seconds.

Worth a quick demo if this is on your radar. No pressure.`,
        personalization_notes: [
          'New signal: CTV expansion as new internal analytics challenge',
          'Named specific cross-platform question as example',
          'Non-pressured close',
        ],
      },
      direct: {
        subject: 'CTV expansion → new product analytics questions',
        body: `Niv,

CTV attribution adds measurement complexity that existing dashboards weren't built for. Your team will need fast answers on CTV adoption, cross-platform validation, and methodology coverage.

ClarityQ answers those questions in plain English from BigQuery. No SQL, no queue.

Quick 15 minutes?`,
        personalization_notes: [
          'New angle: CTV as new complexity driver',
          'Direct and to the point',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: Makes sense - door stays open',
        body: `Niv,

Understood. If product analytics becomes a bottleneck - especially as the Incrementality suite and CTV surface both scale - happy to reconnect. Good luck with the roadmap.`,
        personalization_notes: [
          'Graceful, brief',
          'Named specific future triggers: Incrementality scale, CTV expansion',
        ],
      },
      conversational: {
        subject: 'Re: No worries at all',
        body: `Niv,

Appreciate you responding - timing is everything with these things.

If product analytics becomes harder to keep pace with as Incrementality adoption grows and CTV adds complexity, feel free to reach back out. I'll be easy to find.

Wishing you a strong quarter.`,
        personalization_notes: [
          'Warm close',
          'Named both growth signals as natural future triggers',
        ],
      },
      direct: {
        subject: 'Re: Got it',
        body: `Niv,

Understood. When product analytics velocity becomes a priority - it tends to during rapid product expansion - I'm easy to reach.

Good luck with the suite.`,
        personalization_notes: [
          'Brief and direct',
          'Product expansion as natural future trigger',
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // WIX
  // ─────────────────────────────────────────────

  'wix-roy-maimon': {
    cold: {
      concise: {
        subject: 'Wix data org - self-serve layer for 200 analysts',
        body: `Hi Roy,

Running data at Wix means processing 1B events per day while fielding a constant stream of ad-hoc requests from product, marketing, and growth. Every PM request that goes to an analyst is a strategic question that doesn't get answered.

ClarityQ connects to Presto/BigQuery and lets non-technical teams self-serve on routine queries - freeing your analysts for complex work.

Worth 15 minutes?`,
        personalization_notes: [
          'Referenced 1B events/day as proof of research',
          'Named Presto and BigQuery as confirmed tools from Wix Engineering Blog',
          'Framed from data team leader perspective: protect analyst time',
        ],
      },
      conversational: {
        subject: 'Data bottleneck at 1B events/day',
        body: `Hey Roy,

I was reading Wix's engineering blog - impressive infrastructure. 1 billion events per day, Presto, Trino, and a 200+ person analytics org.

Here's a question I'd be curious about: even at that scale, how much of your team's time goes to ad-hoc requests from product and growth teams - "can you pull retention numbers for this cohort?" - versus strategic, high-complexity work?

ClarityQ puts a self-serve layer on top of your data warehouse - BigQuery, Presto, whatever's in the stack - so product managers and marketers ask routine questions in plain English and get answers in seconds. Your analysts spend less time on tickets and more time on the work only they can do.

If this resonates, happy to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Referenced Wix Engineering Blog as source - adds credibility',
          'Named 1B events/day, Presto, Trino, 200+ person org',
          'Framed around analyst time protection - the key pain for a data team lead',
        ],
      },
      direct: {
        subject: 'Reduce ad-hoc requests to your 200-person data team',
        body: `Roy,

Wix processes 1B events per day across a 200+ analyst org. Despite that scale, ad-hoc requests from product and growth still eat analyst bandwidth that should go to strategic work.

ClarityQ gives non-technical teams a self-serve query layer on top of BigQuery - plain English, instant answers, no analyst queue.

15 minutes?`,
        personalization_notes: [
          'Referenced 1B events/day and 200+ analyst scale',
          'BigQuery as confirmed tool',
          'Framed directly from Head of Data perspective: protect analyst time',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'Base44 + Wix - two very different data audiences',
        body: `Hi Roy,

One thing I didn't mention: post-Base44 acquisition, your data org is now serving two very different audiences - Wix's SMB base and Base44's developer community.

ClarityQ lets each team self-serve on their own data questions in plain English - reducing central team load across both product surfaces.

Worth a quick look?`,
        personalization_notes: [
          'New angle: Base44 acquisition creates dual-audience data complexity',
          'Framed from data org leader perspective',
        ],
      },
      conversational: {
        subject: 'Different angle - Base44 analytics complexity',
        body: `Hey Roy,

I reached out last week about data self-service at Wix. Wanted to take a different angle.

The Base44 acquisition puts your data org in an interesting spot - you're now serving a developer audience that behaves very differently from Wix's SMB base. Different retention signals, different activation metrics, different data questions entirely. That's a new layer of complexity on top of an already 1B-events-per-day operation.

ClarityQ can act as a self-serve layer for both teams - so Base44's growth leads can ask their own questions in plain English without adding to your central team's load.

If the Base44 data integration is on your radar, happy to connect. No pressure.`,
        personalization_notes: [
          'New angle: Base44 dual-audience data complexity',
          'Demonstrated understanding of the acquisition internal data implications',
          'Low-pressure close',
        ],
      },
      direct: {
        subject: 'Base44 data complexity - following up',
        body: `Roy,

Post-acquisition, your data org serves two very different audiences: Wix SMB and Base44's developer base. Different metrics, different questions, compounding demand on your team.

ClarityQ adds a self-serve layer so each audience answers their own questions - without adding to your team's ticket queue.

Quick 15 minutes?`,
        personalization_notes: [
          'Base44 acquisition as new angle',
          'Direct framing around compounding demand on data org',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: Makes sense - staying in touch',
        body: `Roy,

Understood. If ad-hoc request volume ever becomes a bigger pain point - especially as Base44 analytics complexity grows - happy to revisit. Good luck with the build.`,
        personalization_notes: [
          'Brief, non-defensive',
          'Base44 as future timing trigger',
        ],
      },
      conversational: {
        subject: 'Re: No worries - appreciate the response',
        body: `Roy,

Makes sense - data initiatives at this scale rarely move quickly. Appreciate you getting back to me.

If the self-serve analytics question ever becomes more urgent - particularly as Base44 adds new data complexity - I'd be glad to reconnect. Happy to stay in touch.

Wishing you and the team a strong quarter.`,
        personalization_notes: [
          'Warm and understanding',
          'Base44 as natural future trigger',
          'Scale acknowledgment shows empathy',
        ],
      },
      direct: {
        subject: 'Re: Got it',
        body: `Roy,

Understood. When data self-service becomes a priority - and Base44 complexity tends to accelerate that - I'm easy to reach.

Good luck with the quarter.`,
        personalization_notes: [
          'Brief and direct',
          'Base44 as natural future trigger',
        ],
      },
    },
  },

  'wix-omer-zilberman': {
    cold: {
      concise: {
        subject: 'Wix BD analytics - answers without the queue',
        body: `Hi Omer,

Business development at Wix means you need partner performance data, deal analytics, and market insights fast - without competing with 200+ analysts for bandwidth.

ClarityQ connects to BigQuery and lets BD leads ask "which partner is driving the best conversion in the enterprise segment this quarter?" in plain English - answer in seconds.

Worth 15 minutes?`,
        personalization_notes: [
          'Named the core BD pain: competing for analyst bandwidth at 200+ person org',
          'BigQuery as confirmed tool',
          'Used a specific, relatable BD question',
        ],
      },
      conversational: {
        subject: 'Quick question about your BD analytics setup',
        body: `Hey Omer,

I was looking at Wix's BD operation - a 5,000+ person company with a massive partner ecosystem, enterprise segment growth, and a newly acquired AI platform in Base44. That's a lot of partnerships to track and a lot of performance data to stay on top of.

Here's the question: when you need to understand which partners are contributing the most pipeline, or how a particular market segment is converting - does that information come to you quickly, or does it go through a data team queue first?

ClarityQ connects to BigQuery and gives BD leads the ability to ask those questions in plain English and get the answer in seconds. No SQL, no analyst ticket.

Happy to show you a quick demo if this resonates. What does your calendar look like?`,
        personalization_notes: [
          'Named Base44 acquisition as BD complexity driver',
          'Asked a specific, relatable BD question about partner performance',
          'BigQuery reference',
        ],
      },
      direct: {
        subject: 'BD analytics without waiting on data team',
        body: `Omer,

At Wix's scale, waiting 48 hours for partner performance data or deal conversion insights is a real cost to BD velocity.

ClarityQ gives you self-serve access to BigQuery in plain English - "which enterprise partners drove the most activation this quarter?" - in seconds.

15 minutes to show you?`,
        personalization_notes: [
          'Named the 48-hour wait as a real BD cost',
          'Used a specific partner analytics question',
          'BigQuery reference',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'One angle I missed - Base44 partnership data',
        body: `Hi Omer,

Something I didn't mention: the Base44 acquisition adds a new BD layer - developer partnerships, API integrations, platform deals - on top of Wix's existing partner ecosystem.

ClarityQ can help you track both in plain English without adding to your data team's load.

Still worth a quick look?`,
        personalization_notes: [
          'New angle: Base44 acquisition creates new BD data layer',
          'Tied to a confirmed company event',
        ],
      },
      conversational: {
        subject: 'Different angle - Base44 partnerships',
        body: `Hey Omer,

Reached out last week about BD analytics - wanted to try a different approach.

The Base44 acquisition opens a new front for Wix's partnership strategy - developer ecosystem deals, API partnerships, platform integrations. That's a different kind of BD motion with different performance metrics than your existing SMB and enterprise partnerships.

Getting visibility into both - how are Base44 developer partners converting vs. traditional Wix ecosystem partners? - requires data that currently sits in separate pipelines.

ClarityQ unifies that and lets you ask cross-portfolio questions in plain English. If Base44 integration is on your radar, happy to show you how.`,
        personalization_notes: [
          'New angle: Base44 creates new BD data layer',
          'Named specific cross-portfolio analytics question',
          'Demonstrated understanding of developer vs. SMB partnership distinction',
        ],
      },
      direct: {
        subject: 'Base44 BD analytics - following up',
        body: `Omer,

Base44 adds a new partnership surface - developer deals, API integrations - on top of your existing ecosystem. Getting visibility across both requires data currently sitting in different pipelines.

ClarityQ unifies them and lets you query in plain English. Quick 15 minutes?`,
        personalization_notes: [
          'Base44 as new angle',
          'Cross-pipeline visibility as core pain',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: Understood - staying in touch',
        body: `Omer,

Makes sense. If BD analytics visibility becomes a priority - especially as Base44 partnerships layer on - happy to reconnect. Good luck with the quarter.`,
        personalization_notes: [
          'Brief and graceful',
          'Base44 as future trigger',
        ],
      },
      conversational: {
        subject: 'Re: Thanks for letting me know',
        body: `Omer,

Appreciate you responding - timing and priorities shift, completely understand.

If the BD data question becomes more urgent - particularly as Base44 partnership activity scales up - feel free to reach out. I'll be here.

Best of luck with Wix's next chapter.`,
        personalization_notes: [
          'Warm close',
          'Base44 as natural future timing trigger',
        ],
      },
      direct: {
        subject: 'Re: Got it',
        body: `Omer,

Understood. When partnership analytics becomes a priority - Base44 integration tends to accelerate that - I'm easy to reach.

Good luck.`,
        personalization_notes: [
          'Brief and direct',
          'Base44 as future trigger',
        ],
      },
    },
  },

  'wix-mor-saar': {
    cold: {
      concise: {
        subject: 'Base44 growth analytics - startup speed in a 5K-person org',
        body: `Hi Mor,

Running growth at Base44 means moving at startup speed inside a 5,000-person org - great for resources, brutal when data requests have to compete with 200+ analysts.

ClarityQ connects to BigQuery and gives your growth team instant self-serve analytics in plain English - activation funnels, developer retention, campaign performance - without touching the central data queue.

Worth 15 minutes?`,
        personalization_notes: [
          'Named the startup-within-enterprise tension as central pain',
          'Named specific Base44 growth metrics: activation, developer retention, campaign performance',
          'BigQuery reference',
        ],
      },
      conversational: {
        subject: 'Growth analytics at Base44 - quick question',
        body: `Hey Mor,

Running growth at Base44 is a unique challenge - startup speed inside one of Israel's largest tech companies. Great infrastructure, but real friction when every data question has to route through a 200+ analyst organization.

Here's a specific question I'd be curious about: when you need to understand how developer activation is tracking this week, or which acquisition channel is driving the best retention - how quickly can you get that answer? Same-day? Next-day? Or does it sit in a queue?

ClarityQ connects to BigQuery and gives Base44's growth team a self-serve layer for those questions in plain English - so you're not blocked on data while moving at startup speed.

Happy to show you a quick demo. What does your week look like?`,
        personalization_notes: [
          'Named the startup-within-enterprise tension directly',
          'Asked a specific, relatable growth question about developer activation',
          'BigQuery reference',
          'Acknowledged the unique org dynamics at Base44/Wix',
        ],
      },
      direct: {
        subject: 'Base44 growth data without the Wix queue',
        body: `Mor,

Startup-speed growth teams can't wait for large-org data queues. Base44's activation, developer retention, and campaign data sits in BigQuery - but getting to it requires competing with a 200+ analyst org.

ClarityQ gives your team a self-serve plain-English layer. Same-day answers, no queue.

15 minutes?`,
        personalization_notes: [
          'Named the core tension: startup speed vs. large-org data queue',
          'Named specific Base44 growth metrics',
          'BigQuery reference',
        ],
      },
    },
    followup: {
      concise: {
        subject: 'One more thing - developer audiences are different',
        body: `Hi Mor,

Something I didn't mention: developer retention data looks different from SMB retention. Activation events, API usage depth, integration milestones - these are signals Wix's existing dashboards weren't built for.

ClarityQ lets your team ask those questions in plain English without waiting on the central analytics team to build new reports.

Worth a quick look?`,
        personalization_notes: [
          'New angle: developer-specific analytics signals differ from SMB',
          'Named specific developer metrics: API usage, integration milestones',
          'Low-pressure close',
        ],
      },
      conversational: {
        subject: 'Developer metrics vs. SMB metrics - a different angle',
        body: `Hey Mor,

I reached out last week about Base44 growth analytics. Wanted to try a different angle.

Developer products create analytics signals that are fundamentally different from Wix's SMB base - time-to-activation on API keys, depth of feature integration, retention curves tied to project milestones rather than subscription renewal dates. Wix's existing reporting infrastructure probably wasn't built to surface those answers quickly.

ClarityQ gives your team a self-serve layer where you can ask "which activation channel is driving 30-day developer retention?" in plain English - and get the answer in seconds, without a custom report request.

If Base44 growth analytics is a current pain point, worth 15 minutes. No pressure.`,
        personalization_notes: [
          'New angle: developer-specific analytics differ from SMB',
          'Named specific developer metrics: API activation, integration depth, milestone-based retention',
          'Low-pressure close',
          'Demonstrated understanding of what makes developer analytics distinct',
        ],
      },
      direct: {
        subject: 'Developer analytics - different signals, same bottleneck',
        body: `Mor,

Developer activation, API usage depth, integration milestones - these signals are different from Wix's SMB metrics, and Wix's existing reports probably don't surface them well.

ClarityQ gives your team self-serve plain-English analytics. No custom report requests, no queue.

Quick 15 minutes?`,
        personalization_notes: [
          'New angle: developer-specific signals don\'t fit existing reports',
          'Named specific developer metrics',
          'Direct and brief',
        ],
      },
    },
    rejection: {
      concise: {
        subject: 'Re: Understood - staying in touch',
        body: `Mor,

Makes sense. If developer analytics becomes a bottleneck as Base44 scales - happy to reconnect. Good luck with the growth.`,
        personalization_notes: [
          'Brief, graceful',
          'Base44 scaling as future trigger',
        ],
      },
      conversational: {
        subject: 'Re: No worries - appreciate the reply',
        body: `Mor,

Completely understood - these decisions are always about timing and current priorities.

If the data access question ever becomes a blocker for Base44's growth team - it tends to as developer platforms scale - feel free to reach out. I'll be here.

Good luck with Base44!`,
        personalization_notes: [
          'Warm and enthusiastic close',
          'Named the natural future trigger: as developer platform scales',
        ],
      },
      direct: {
        subject: 'Re: Got it',
        body: `Mor,

Understood. When developer analytics becomes a priority - it tends to during rapid platform growth - I'm easy to find.

Good luck.`,
        personalization_notes: [
          'Brief and direct',
          'Platform growth as natural future trigger',
        ],
      },
    },
  },

}

// Helper: lookup cached email or return null (triggers live Claude generation)
export function getCachedEmail(personaId, emailType, tone) {
  return emailCache[personaId]?.[emailType]?.[tone] ?? null
}
