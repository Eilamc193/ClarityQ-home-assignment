import { useState } from 'react'
import { Loader2, Copy, Check, RefreshCw, ArrowLeft, PlusCircle, Zap } from 'lucide-react'
import { generateEmail } from '../lib/claude'
import { usePipelineStore } from '../store/usePipelineStore'

const EMAIL_TYPES = [
  { id: 'cold',      label: 'Cold Intro',       desc: 'First touch' },
  { id: 'followup',  label: 'Follow-up',        desc: 'Day 5, no reply' },
  { id: 'rejection', label: 'Post-Rejection',   desc: 'Keep door open' },
]

const TONES = [
  { id: 'concise',        label: 'Concise' },
  { id: 'conversational', label: 'Conversational' },
  { id: 'direct',         label: 'Direct' },
]

const SIGNAL_TYPE_COLORS = {
  hiring:  'bg-blue-100 text-blue-700',
  funding: 'bg-emerald-100 text-emerald-700',
  product: 'bg-purple-100 text-purple-700',
  growth:  'bg-amber-100 text-amber-700',
  tech:    'bg-cyan-100 text-cyan-700',
}

export default function EmailComposer({ persona, company, onBack }) {
  const [emailType, setEmailType] = useState('cold')
  const [tone, setTone] = useState('concise')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)
  const [addedToPipeline, setAddedToPipeline] = useState(false)
  const addProspect = usePipelineStore((s) => s.addProspect)

  if (!persona || !company) {
    return (
      <div className="p-8 flex items-center justify-center h-64">
        <p className="text-slate-400 text-sm">Select a persona from the Persona Finder first.</p>
      </div>
    )
  }

  async function handleGenerate() {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const email = await generateEmail({ prospect: persona, company, emailType, tone })
      setResult(email)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleCopy() {
    if (!result) return
    const text = `Subject: ${result.subject}\n\n${result.body}`
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleAddToPipeline() {
    addProspect({
      personaId: persona.id,
      name: persona.name,
      title: persona.title,
      company: company.name,
      companyEmoji: company.emoji,
    })
    setAddedToPipeline(true)
  }

  return (
    <div className="p-8 max-w-5xl">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 mb-6 transition-colors font-medium"
      >
        <ArrowLeft size={15} /> Back to Persona Finder
      </button>

      <div className="flex items-center gap-2.5 mb-7">
        <Zap size={22} className="text-indigo-500" />
        <h1 className="text-2xl font-bold text-slate-900">AI Email Composer</h1>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {/* Left: Context + Controls */}
        <div className="col-span-2 space-y-4">
          {/* Prospect info */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Prospect</p>
            <div className="flex items-center gap-3">
              {persona.photo ? (
                <img
                  src={persona.photo}
                  alt={persona.name}
                  onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
              ) : null}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${persona.avatarColor}`}
                style={persona.photo ? { display: 'none' } : {}}
              >
                {persona.avatar}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{persona.name}</p>
                <p className="text-xs text-slate-500">{persona.title} · {company.name}</p>
              </div>
            </div>
          </div>

          {/* Signals context */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Signals to Leverage</p>
            <div className="space-y-2.5">
              {company.signals.map((signal) => (
                <div key={signal.id} className="flex items-start gap-2">
                  <span className="text-base shrink-0">{signal.icon}</span>
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${SIGNAL_TYPE_COLORS[signal.type] || 'bg-gray-100 text-gray-600'}`}>
                        {signal.type}
                      </span>
                      {signal.hot && (
                        <span className="text-xs font-medium bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full">🔥 hot</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-snug">{signal.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email type */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Email Type</p>
            <div className="space-y-1.5">
              {EMAIL_TYPES.map(({ id, label, desc }) => (
                <button
                  key={id}
                  onClick={() => setEmailType(id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    emailType === id
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'text-slate-600 hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <span className="font-medium">{label}</span>
                  <span className="text-xs text-slate-400">{desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tone */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Tone</p>
            <div className="flex gap-2">
              {TONES.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setTone(id)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    tone === id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-60 shadow-sm"
          >
            {loading ? (
              <><Loader2 size={16} className="animate-spin" /> Generating…</>
            ) : (
              <><Zap size={16} /> Generate Email</>
            )}
          </button>
        </div>

        {/* Right: Email output */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full min-h-96 flex flex-col">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200">
              <p className="text-sm font-semibold text-slate-700">Generated Email</p>
              {result && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleGenerate}
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <RefreshCw size={13} /> Regenerate
                  </button>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs font-medium bg-gray-100 text-slate-700 px-2.5 py-1.5 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {copied ? <><Check size={13} className="text-emerald-600" /> Copied!</> : <><Copy size={13} /> Copy</>}
                  </button>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 px-5 py-4">
              {/* Empty state */}
              {!result && !loading && !error && (
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <div className="text-4xl mb-3 opacity-30">✦</div>
                    <p className="text-slate-400 text-sm">Configure options and click<br />"Generate Email"</p>
                  </div>
                </div>
              )}

              {/* Loading */}
              {loading && (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2 size={24} className="animate-spin text-indigo-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-400">Writing your email…</p>
                  </div>
                </div>
              )}

              {/* Error */}
              {error && !loading && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-700 mb-1">Generation failed</p>
                  <p className="text-xs text-red-600">{error}</p>
                  <p className="text-xs text-red-400 mt-1">Check that VITE_ANTHROPIC_API_KEY is set in your .env file.</p>
                </div>
              )}

              {/* Result */}
              {result && !loading && (
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-3 border border-gray-100">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-1.5">Subject</p>
                    <p className="text-sm font-semibold text-slate-900">{result.subject}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-2">Body</p>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{result.body}</p>
                  </div>

                  {result.personalization_notes?.length > 0 && (
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-2">Personalization used</p>
                      <ul className="space-y-1">
                        {result.personalization_notes.map((note, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <span className="text-indigo-400 mt-0.5 shrink-0">✦</span>
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Add to pipeline */}
            {result && (
              <div className="px-5 py-3 border-t border-gray-200">
                <button
                  onClick={handleAddToPipeline}
                  disabled={addedToPipeline}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                    addedToPipeline
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                  }`}
                >
                  {addedToPipeline ? (
                    <><Check size={14} /> Added to Pipeline Board</>
                  ) : (
                    <><PlusCircle size={14} /> Add to Pipeline Board</>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
