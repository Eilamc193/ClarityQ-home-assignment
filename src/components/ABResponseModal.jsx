import { useState } from 'react'
import { X, Check } from 'lucide-react'
import { useABStore } from '../store/useABStore'

const OUTCOMES = [
  { id: 'positive_reply',  label: '✅ Positive Reply' },
  { id: 'meeting_booked',  label: '🗓 Meeting Booked' },
  { id: 'no_response',     label: '🔇 No Response' },
  { id: 'rejection',       label: '❌ Rejection' },
  { id: 'bounce',          label: '↩ Bounced' },
]

const TITLES = ['Head of Data', 'VP Product', 'CEO/CBO', 'VP Growth', 'Other']
const PLATFORMS = [
  { id: 'email',       label: 'Email' },
  { id: 'linkedin_dm', label: 'LinkedIn DM' },
  { id: 'phone',       label: 'Phone' },
]
const EMAIL_TYPES = [
  { id: 'cold',          label: 'Cold Intro' },
  { id: 'followup',      label: 'Follow-up' },
  { id: 'post_rejection',label: 'Post-Rejection' },
]
const TONES = ['Concise', 'Conversational', 'Direct']

export default function ABResponseModal({ prospect, onClose }) {
  const logResponse = useABStore((s) => s.logResponse)
  const [form, setForm] = useState({
    outcome: '',
    personaTitle: prospect?.title || '',
    platform: 'email',
    emailType: 'cold',
    tone: 'concise',
    daysToResponse: '',
    notes: '',
  })
  const [saved, setSaved] = useState(false)

  function update(key, val) {
    setForm((f) => ({ ...f, [key]: val }))
  }

  function handleSave() {
    if (!form.outcome) return
    logResponse({
      outcome: form.outcome,
      personaTitle: form.personaTitle,
      platform: form.platform,
      emailType: form.emailType,
      tone: form.tone.toLowerCase(),
      daysToResponse: parseInt(form.daysToResponse) || 0,
      notes: form.notes,
      subject: prospect?.lastEmailSubject || '',
      snippet: prospect?.lastEmailSnippet || '',
    })
    setSaved(true)
    setTimeout(onClose, 900)
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <p className="font-semibold text-gray-900 text-sm">Log Outreach Outcome</p>
            {prospect && (
              <p className="text-xs text-gray-500 mt-0.5">{prospect.name} · {prospect.company}</p>
            )}
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
            <X size={16} />
          </button>
        </div>

        {saved ? (
          <div className="flex flex-col items-center justify-center py-10 gap-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Check size={20} className="text-emerald-600" />
            </div>
            <p className="text-sm font-medium text-gray-700">Response logged!</p>
            <p className="text-xs text-gray-400">Insights panel updated</p>
          </div>
        ) : (
          <div className="px-5 py-4 space-y-4">
            {/* Outcome */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Outcome *</p>
              <div className="grid grid-cols-2 gap-1.5">
                {OUTCOMES.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => update('outcome', id)}
                    className={`text-xs px-3 py-2 rounded-lg border text-left transition-colors ${
                      form.outcome === id
                        ? 'bg-indigo-50 border-indigo-300 text-indigo-700 font-medium'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Row: Email Type + Tone */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email Type</p>
                <select
                  value={form.emailType}
                  onChange={(e) => update('emailType', e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-300"
                >
                  {EMAIL_TYPES.map(({ id, label }) => (
                    <option key={id} value={id}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Tone Used</p>
                <select
                  value={form.tone}
                  onChange={(e) => update('tone', e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-300"
                >
                  {TONES.map((t) => (
                    <option key={t} value={t.toLowerCase()}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row: Platform + Days */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Platform</p>
                <div className="space-y-1">
                  {PLATFORMS.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => update('platform', id)}
                      className={`w-full text-xs px-2.5 py-1.5 rounded-lg border text-left transition-colors ${
                        form.platform === id
                          ? 'bg-indigo-50 border-indigo-300 text-indigo-700 font-medium'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Days to Response</p>
                <input
                  type="number"
                  min={0}
                  placeholder="0"
                  value={form.daysToResponse}
                  onChange={(e) => update('daysToResponse', e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-300"
                />
                <p className="text-xs text-gray-400 mt-1">0 = no response yet</p>
              </div>
            </div>

            {/* Notes */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Notes</p>
              <textarea
                rows={2}
                placeholder='e.g. "said budget frozen until Q3"'
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
                className="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-2 text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-indigo-300"
              />
            </div>

            {/* Save */}
            <button
              onClick={handleSave}
              disabled={!form.outcome}
              className="w-full bg-indigo-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              Log Response
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
