import { BarChart2 } from 'lucide-react'
import { useABStore } from '../store/useABStore'

function WinRateBar({ label, rate, count, color = 'bg-indigo-500' }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-slate-600 w-32 shrink-0 truncate">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${rate}%` }}
        />
      </div>
      <span className="text-xs font-bold text-slate-800 w-10 text-right tabular-nums">{rate}%</span>
      <span className="text-xs text-slate-400 w-14 text-right tabular-nums">({count})</span>
    </div>
  )
}

function InsightCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">{title}</p>
      {children}
    </div>
  )
}

export default function ABInsights() {
  const getInsights = useABStore((s) => s.getInsights)
  const { byTone, byTitle, byPlatform, byEmailType, topEmails, total, wins } = getInsights()

  const overallRate = total > 0 ? Math.round((wins / total) * 100) : 0

  const bestTone = [...byTone].sort((a, b) => b.rate - a.rate)[0]
  const bestTitle = [...byTitle].sort((a, b) => b.rate - a.rate)[0]
  const bestPlatform = [...byPlatform].sort((a, b) => b.rate - a.rate)[0]

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-2.5 mb-1.5">
        <BarChart2 size={22} className="text-indigo-500" />
        <h1 className="text-2xl font-bold text-slate-900">A/B Insights</h1>
      </div>
      <p className="text-sm text-slate-500 mb-7">
        Win-rate analysis across tone, persona, platform, and email type.{' '}
        <span className="text-slate-400">Based on {total} logged outreach attempts.</span>
      </p>

      {/* Summary stats */}
      <div className="grid grid-cols-4 gap-3 mb-7">
        {[
          { label: 'Total Attempts',    value: total,             color: 'text-slate-900' },
          { label: 'Wins',              value: wins,              color: 'text-emerald-600' },
          { label: 'Overall Win Rate',  value: `${overallRate}%`, color: 'text-indigo-600' },
          { label: 'Avg Days to Reply', value: byPlatform.map(p => p.avgDays).filter(Boolean).reduce((s, v, _, a) => s + v / a.length, 0).toFixed(1) + 'd', color: 'text-amber-600' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 shadow-sm">
            <p className="text-xs text-slate-400 font-medium mb-1">{label}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Key insights callout */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-4 mb-7 space-y-1.5">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">Key Takeaways</p>
        <p className="text-sm text-indigo-900">
          <strong>{bestTone?.label}</strong> tone → <strong>{bestTone?.rate}%</strong> reply rate
          {byTone.find(t => t.label !== bestTone?.label && t.count > 2) && ` vs. ${byTone.filter(t => t.label !== bestTone?.label && t.count > 2).sort((a,b) => a.rate-b.rate)[0]?.rate}% for ${byTone.filter(t => t.label !== bestTone?.label && t.count > 2).sort((a,b) => a.rate-b.rate)[0]?.label}`}
        </p>
        <p className="text-sm text-indigo-900">
          <strong>{bestTitle?.label}</strong> replies <strong>{bestTitle?.rate}%</strong> of the time on cold outreach
        </p>
        <p className="text-sm text-indigo-900">
          <strong>{bestPlatform?.label}</strong> outperforms other channels at <strong>{bestPlatform?.rate}%</strong> win rate
        </p>
        {byEmailType.find(e => e.label === 'Followup') && (
          <p className="text-sm text-indigo-900">
            Follow-up emails convert at <strong>{byEmailType.find(e => e.label === 'Followup')?.rate}%</strong> — nearly matches cold intro rate
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InsightCard title="Win Rate by Tone">
          <div className="space-y-3">
            {[...byTone].sort((a, b) => b.rate - a.rate).map((item) => (
              <WinRateBar
                key={item.label}
                label={item.label}
                rate={item.rate}
                count={item.count}
                color={item.rate >= 55 ? 'bg-emerald-500' : item.rate >= 40 ? 'bg-indigo-500' : 'bg-gray-400'}
              />
            ))}
          </div>
        </InsightCard>

        <InsightCard title="Win Rate by Persona Title">
          <div className="space-y-3">
            {[...byTitle].sort((a, b) => b.rate - a.rate).map((item) => (
              <WinRateBar
                key={item.label}
                label={item.label}
                rate={item.rate}
                count={item.count}
                color={item.rate >= 55 ? 'bg-emerald-500' : item.rate >= 40 ? 'bg-indigo-500' : 'bg-gray-400'}
              />
            ))}
          </div>
        </InsightCard>

        <InsightCard title="Win Rate by Platform">
          <div className="space-y-3">
            {[...byPlatform].sort((a, b) => b.rate - a.rate).map((item) => (
              <div key={item.label} className="space-y-1">
                <WinRateBar
                  label={item.label}
                  rate={item.rate}
                  count={item.count}
                  color={item.rate >= 55 ? 'bg-emerald-500' : item.rate >= 40 ? 'bg-indigo-500' : 'bg-gray-400'}
                />
                {item.avgDays != null && (
                  <p className="text-xs text-slate-400 pl-[8.5rem]">avg {item.avgDays}d to reply</p>
                )}
              </div>
            ))}
          </div>
        </InsightCard>

        <InsightCard title="Win Rate by Email Type">
          <div className="space-y-3">
            {[...byEmailType].sort((a, b) => b.rate - a.rate).map((item) => (
              <WinRateBar
                key={item.label}
                label={item.label}
                rate={item.rate}
                count={item.count}
                color={item.rate >= 55 ? 'bg-emerald-500' : item.rate >= 40 ? 'bg-indigo-500' : 'bg-gray-400'}
              />
            ))}
          </div>
        </InsightCard>
      </div>

      {/* Top Performing Emails */}
      {topEmails.length > 0 && (
        <div className="mt-4">
          <InsightCard title="Top Performing Emails">
            <div className="space-y-4">
              {topEmails.map((email, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-3.5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-emerald-600">#{i + 1}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      email.tone === 'concise' ? 'bg-blue-100 text-blue-700' :
                      email.tone === 'conversational' ? 'bg-purple-100 text-purple-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {email.tone}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                      {email.emailType === 'post_rejection' ? 'Post-Rejection' : email.emailType.charAt(0).toUpperCase() + email.emailType.slice(1)}
                    </span>
                    <span className="ml-auto text-xs font-bold text-emerald-600">
                      {Math.round((email.wins / email.attempts) * 100)}% win rate
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800 mb-1">"{email.subject}"</p>
                  <p className="text-xs text-slate-500 italic line-clamp-2">{email.snippet}</p>
                  <p className="text-xs text-slate-400 mt-1">Target: {email.personaTitle}</p>
                </div>
              ))}
            </div>
          </InsightCard>
        </div>
      )}
    </div>
  )
}
