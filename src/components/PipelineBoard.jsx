import { useState } from 'react'
import { LayoutDashboard, Trash2, ChevronRight, ChevronLeft } from 'lucide-react'
import { usePipelineStore, STAGES, STAGE_COLORS } from '../store/usePipelineStore'
import ABResponseModal from './ABResponseModal'

const LOG_STAGES = new Set(['Replied', 'Meeting Booked', 'Rejected'])

function daysSince(ts) {
  return Math.floor((Date.now() - ts) / (1000 * 60 * 60 * 24))
}

function ProspectCard({ prospect, onLogOutcome }) {
  const { moveProspect, removeProspect } = usePipelineStore()
  const days = daysSince(prospect.lastTouchedAt)
  const stageIndex = STAGES.indexOf(prospect.stage)

  const urgencyColor =
    days >= 7 ? 'text-red-500' :
    days >= 3 ? 'text-amber-500' : 'text-slate-400'

  function handleAdvance() {
    const nextStage = STAGES[stageIndex + 1]
    moveProspect(prospect.id, nextStage)
    if (LOG_STAGES.has(nextStage)) onLogOutcome(prospect)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 space-y-2">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-900 leading-tight">{prospect.name}</p>
          <p className="text-xs text-slate-500">{prospect.title}</p>
        </div>
        <span className="text-lg shrink-0">{prospect.companyEmoji}</span>
      </div>
      <p className="text-xs font-medium text-slate-600">{prospect.company}</p>
      <p className={`text-xs ${urgencyColor}`}>
        {days === 0 ? 'Added today' : `Last touched ${days}d ago`}
      </p>
      <div className="flex items-center justify-between gap-1 pt-1 border-t border-gray-100">
        <button
          onClick={() => moveProspect(prospect.id, STAGES[stageIndex - 1])}
          disabled={stageIndex === 0}
          className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-20 transition-colors"
          title="Move back"
        >
          <ChevronLeft size={14} />
        </button>
        <button
          onClick={handleAdvance}
          disabled={stageIndex === STAGES.length - 1}
          className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 disabled:opacity-30 transition-colors font-medium"
          title="Advance stage"
        >
          Advance <ChevronRight size={13} />
        </button>
        <button
          onClick={() => removeProspect(prospect.id)}
          className="p-1 text-gray-300 hover:text-red-400 transition-colors"
          title="Remove"
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  )
}

export default function PipelineBoard() {
  const { prospects } = usePipelineStore()
  const [loggingProspect, setLoggingProspect] = useState(null)

  const byStage = STAGES.reduce((acc, stage) => {
    acc[stage] = prospects.filter((p) => p.stage === stage)
    return acc
  }, {})

  const total = prospects.length
  const booked = byStage['Meeting Booked'].length

  return (
    <div className="p-8">
      <div className="flex items-center gap-2.5 mb-1.5">
        <LayoutDashboard size={22} className="text-indigo-500" />
        <h1 className="text-2xl font-bold text-slate-900">Pipeline Board</h1>
      </div>
      <p className="text-sm text-slate-500 mb-6">
        Track outreach stages. Advance a card to Replied, Meeting Booked, or Rejected to log the outcome.
      </p>

      {/* Stats */}
      <div className="flex items-center gap-4 mb-7">
        {[
          { label: 'Total Prospects',  value: total,  color: 'text-slate-900' },
          { label: 'Meetings Booked',  value: booked, color: 'text-emerald-600' },
          { label: 'Conversion Rate',  value: total > 0 ? `${Math.round((booked / total) * 100)}%` : '—', color: 'text-indigo-600' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
            <p className="text-xs text-slate-400 font-medium">{label}</p>
            <p className={`text-2xl font-bold mt-0.5 ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {total === 0 && (
        <div className="bg-white rounded-xl border border-dashed border-gray-200 p-12 text-center">
          <p className="text-3xl mb-3">📭</p>
          <p className="text-sm font-semibold text-slate-500">No prospects yet.</p>
          <p className="text-xs text-slate-400 mt-1">
            Generate an email in the Email Composer, then click "Add to Pipeline Board".
          </p>
        </div>
      )}

      {/* Kanban */}
      {total > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin">
          {STAGES.map((stage) => {
            const cards = byStage[stage]
            const colors = STAGE_COLORS[stage]
            return (
              <div
                key={stage}
                className={`shrink-0 w-44 rounded-xl border ${colors.border} ${colors.bg} p-3 flex flex-col gap-2`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">{stage}</span>
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${colors.badge}`}>
                    {cards.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {cards.map((prospect) => (
                    <ProspectCard
                      key={prospect.id}
                      prospect={prospect}
                      onLogOutcome={setLoggingProspect}
                    />
                  ))}
                </div>
                {cards.length === 0 && (
                  <p className="text-xs text-gray-300 text-center py-2">—</p>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* A/B Response Modal */}
      {loggingProspect && (
        <ABResponseModal
          prospect={loggingProspect}
          onClose={() => setLoggingProspect(null)}
        />
      )}
    </div>
  )
}
