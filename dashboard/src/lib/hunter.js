// Hunter.io Email Finder API — free tier gives 25 searches/month.
// https://hunter.io/api-documentation/v2#email-finder

export async function findEmail({ domain, name }) {
  const apiKey = import.meta.env.VITE_HUNTER_API_KEY
  if (!apiKey) throw new Error('VITE_HUNTER_API_KEY is not set in your .env file')

  const [firstName, ...rest] = name.trim().split(' ')
  const lastName = rest.join(' ')

  const params = new URLSearchParams({
    domain,
    first_name: firstName,
    last_name: lastName,
    api_key: apiKey,
  })

  const response = await fetch(`https://api.hunter.io/v2/email-finder?${params}`)

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err?.errors?.[0]?.details || `Hunter.io error ${response.status}`)
  }

  const data = await response.json()

  return {
    email: data.data?.email || null,
    confidence: data.data?.score || null,
  }
}
