import { companies } from '../data/companies'
import { Zap } from 'lucide-react'

const TYPE_STYLES = {
  hiring:  { badge: 'bg-blue-100 text-blue-700',    label: 'Hiring Signal' },
  funding: { badge: 'bg-emerald-100 text-emerald-700', label: 'Funding Event' },
  product: { badge: 'bg-purple-100 text-purple-700', label: 'Product Launch' },
  growth:  { badge: 'bg-amber-100 text-amber-700',  label: 'Growth Milestone' },
  tech:    { badge: 'bg-cyan-100 text-cyan-700',    label: 'Tech Stack Change' },
}

function SignalCard({ signal }) {
  const style = TYPE_STYLES[signal.type] || { badge: 'bg-gray-100 text-gray-600', label: signal.type }

  return (
    <div className={`bg-white rounded-xl border shadow-sm p-4 ${signal.hot ? 'border-red-200 ring-1 ring-red-100' : 'border-gray-100'}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0">{signal.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${style.badge}`}>
              {style.label}
            </span>
            {signal.hot && (
              <span className="text-xs font-medium bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                🔥 Hot signal
              </span>
            )}
            <span className="text-xs text-gray-400 ml-auto">{signal.date}</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">{signal.title}</p>
          <p className="text-xs text-gray-500 mb-2">{signal.detail}</p>
          <div className="bg-indigo-50 rounded-lg px-3 py-2">
            <p className="text-xs font-medium text-indigo-600 mb-0.5">Why this matters for ClarityQ</p>
            <p className="text-xs text-indigo-800">{signal.relevance}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SignalFeed() {
  const allSignals = companies.flatMap((c) =>
    c.signals.map((s) => ({ ...s, companyName: c.name, companyEmoji: c.emoji, companyId: c.id }))
  )

  const hotSignals = allSignals.filter((s) => s.hot)
  const otherSignals = allSignals.filter((s) => !s.hot)

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-2 mb-1">
        <Zap size={20} className="text-indigo-500" />
        <h1 className="text-xl font-semibold text-gray-900">Signal Feed</h1>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Buying triggers across your 5 target accounts — prioritize outreach based on recency and relevance.
      </p>

      {/* Hot signals */}
      {hotSignals.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-3">🔥 Hot — Act Now</p>
          <div className="space-y-3">
            {hotSignals.map((signal) => (
              <div key={signal.id}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-sm">{signal.companyEmoji}</span>
                  <span className="text-xs font-semibold text-gray-600">{signal.companyName}</span>
                </div>
                <SignalCard signal={signal} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All other signals grouped by company */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">All Signals by Company</p>
        <div className="space-y-6">
          {companies.map((company) => (
            <div key={company.id}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{company.emoji}</span>
                <span className="text-sm font-semibold text-gray-800">{company.name}</span>
                <span className="text-xs text-gray-400">· {company.signals.length} signals</span>
              </div>
              <div className="space-y-3 pl-1">
                {company.signals.map((signal) => (
                  <SignalCard key={signal.id} signal={signal} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
