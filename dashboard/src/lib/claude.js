// Direct browser call to Anthropic API — demo use only.
// In production, proxy through a backend to keep the key secret.
// Pre-generated emails are served from emailCache.js; Claude API is the fallback.

import { getCachedEmail } from '../data/emailCache'

const EMAIL_TYPE_INSTRUCTIONS = {
  cold: 'Write a cold intro email. Lead with a specific, researched signal about their company — not a generic opener. One clear soft CTA (15-min call or "worth a quick chat?").',
  followup: 'Write a follow-up email (5 days after the cold email, no response). Take a completely different angle. Reference a new signal or reframe the value prop. Do NOT say "just following up".',
  rejection: 'Write a graceful response to a rejection email. Acknowledge their decision without being defensive, briefly plant a seed for future timing, and leave the door open warmly. Keep it under 60 words.',
}

const TONE_INSTRUCTIONS = {
  concise: 'Ultra-concise. Under 100 words. Every sentence earns its place. No filler phrases.',
  conversational: 'Warm and natural, like a sharp colleague reaching out. Human, not corporate.',
  direct: 'Confident and straight to the point. State the value clearly, no hedging.',
}

export async function generateEmail({ prospect, company, emailType, tone }) {
  // Serve from pre-generated cache first (no API cost, instant)
  const cached = getCachedEmail(prospect.id, emailType, tone)
  if (cached) {
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 600)) // realistic delay
    return cached
  }

  // Fallback: live Claude API call (requires VITE_ANTHROPIC_API_KEY)
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('VITE_ANTHROPIC_API_KEY is not set in your .env file')

  const topSignals = company.signals.slice(0, 3)

  const systemPrompt = `You are an elite SDR at ClarityQ, an AI-powered data analytics startup.

ClarityQ's value prop (one line): Business and product teams ask data questions in plain English and get instant answers — no SQL, no dashboards, no waiting for an analyst.

The pain you solve: Product managers, growth leads, and executives are blocked waiting on data teams for answers they need now. Analysts are overwhelmed with ad-hoc requests instead of doing strategic work.

Your outreach principles:
- Lead with THEIR world, not ClarityQ's features
- Reference at least 2 specific, researched facts about the prospect or company
- Never use buzzwords: "synergy", "leverage", "circle back", "touch base", "game-changer"
- Sound like a human, not a sales template
- Maximum 120 words for cold/followup, 60 words for rejection responses

Return ONLY valid JSON in this exact format:
{
  "subject": "compelling subject line",
  "body": "full email body with greeting and sign-off",
  "personalization_notes": ["specific thing 1 you personalized", "specific thing 2 you personalized"]
}`

  const userPrompt = `Write a ${emailType} email.

PROSPECT:
- Name: ${prospect.name}
- Title: ${prospect.title}
- Company: ${company.name}
- Industry: ${company.industry}
- Company size: ${company.headcount} employees
- Analytics stack: ${company.tools.join(', ')}
- Context: ${company.description}

KEY SIGNALS TO WEAVE IN:
${topSignals.map(s => `• [${s.type.toUpperCase()}] ${s.title}: ${s.detail}`).join('\n')}

EMAIL TYPE: ${EMAIL_TYPE_INSTRUCTIONS[emailType]}
TONE: ${TONE_INSTRUCTIONS[tone]}

Return JSON only. No markdown, no explanation.`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err?.error?.message || `Claude API error ${response.status}`)
  }

  const data = await response.json()
  const raw = data.content[0].text.trim()

  // Extract JSON even if Claude wraps it in backticks
  const jsonMatch = raw.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('Claude returned an unexpected format')

  return JSON.parse(jsonMatch[0])
}
