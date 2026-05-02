import { useState } from 'react'
import { ExternalLink, Mail, Loader2, CheckCircle, AlertCircle, ArrowLeft, Pencil } from 'lucide-react'
import { findEmail } from '../lib/hunter'

function PersonaCard({ persona, company, onDraftEmail }) {
  const [emailState, setEmailState] = useState({ status: 'idle', email: null, error: null })

  async function handleFindEmail() {
    setEmailState({ status: 'loading', email: null, error: null })
    try {
      const result = await findEmail({ domain: company.domain, name: persona.name })
      if (result.email) {
        setEmailState({ status: 'found', email: result.email, error: null })
      } else {
        setEmailState({ status: 'notfound', email: null, error: null })
      }
    } catch (err) {
      setEmailState({ status: 'error', email: null, error: err.message })
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${persona.avatarColor}`}>
          {persona.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900">{persona.name}</p>
          <p className="text-sm text-gray-500">{persona.title}</p>
          <span className="inline-block mt-1 text-xs font-medium bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
            {persona.seniority}
          </span>
        </div>
      </div>

      {/* AI Rationale */}
      <div className="bg-indigo-50 rounded-lg p-3">
        <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">Why target this person</p>
        <p className="text-sm text-indigo-900 leading-relaxed">{persona.rationale}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        {/* LinkedIn */}
        <a
          href={persona.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm font-medium border border-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ExternalLink size={14} />
          View on LinkedIn
        </a>

        {/* Hunter.io email lookup */}
        {company.domainBlocked ? (
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg">
            <AlertCircle size={14} className="text-gray-400 shrink-0" />
            <span className="text-xs text-gray-500">Domain opted out of Hunter.io — use LinkedIn DM</span>
          </div>
        ) : emailState.status === 'idle' && (
          <button
            onClick={handleFindEmail}
            className="flex items-center justify-center gap-2 text-sm font-medium bg-orange-50 text-orange-700 border border-orange-200 px-3 py-2 rounded-lg hover:bg-orange-100 transition-colors"
          >
            <Mail size={14} />
            Find Email via Hunter.io
          </button>
        )}

        {emailState.status === 'loading' && (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 px-3 py-2">
            <Loader2 size={14} className="animate-spin" />
            Looking up email…
          </div>
        )}

        {emailState.status === 'found' && (
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg">
            <CheckCircle size={14} className="text-emerald-600 shrink-0" />
            <span className="text-sm font-medium text-emerald-800">{emailState.email}</span>
          </div>
        )}

        {emailState.status === 'notfound' && (
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg">
            <AlertCircle size={14} className="text-gray-400 shrink-0" />
            <span className="text-sm text-gray-500">Email not found — try LinkedIn DM</span>
          </div>
        )}

        {emailState.status === 'error' && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
            <AlertCircle size={14} className="text-red-500 shrink-0" />
            <span className="text-sm text-red-600">{emailState.error}</span>
          </div>
        )}

        {/* Draft Email */}
        <button
          onClick={() => onDraftEmail(persona)}
          className="flex items-center justify-center gap-2 text-sm font-semibold bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Pencil size={14} />
          Draft Email with Claude
        </button>
      </div>
    </div>
  )
}

export default function PersonaFinder({ company, onBack, onDraftEmail }) {
  if (!company) {
    return (
      <div className="p-8 flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-gray-400 text-sm">Select a company from the ICP Scanner first.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-5 transition-colors"
      >
        <ArrowLeft size={15} /> Back to ICP Scanner
      </button>

      <div className="flex items-center gap-3 mb-1">
        <span className="text-2xl">{company.emoji}</span>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{company.name} — Decision Makers</h1>
          <p className="text-sm text-gray-500">{company.industry} · {company.headcount} employees · {company.stage}</p>
        </div>
        <span className={`ml-auto text-sm font-semibold px-3 py-1 rounded-full ${
          company.icpScore >= 85 ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700'
        }`}>
          ICP {company.icpScore}/100
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-6 mt-2">{company.description}</p>

      {/* Persona grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {company.personas.map((persona) => (
          <PersonaCard
            key={persona.id}
            persona={persona}
            company={company}
            onDraftEmail={(p) => onDraftEmail(p, company)}
          />
        ))}
      </div>

      {/* ICP breakdown */}
      <div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">ICP Score Breakdown</p>
        <div className="space-y-2">
          {company.icpBreakdown.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className={`text-base ${item.met ? 'text-emerald-500' : 'text-gray-300'}`}>
                {item.met ? '✓' : '○'}
              </span>
              <span className="text-sm text-gray-700 flex-1">{item.label}</span>
              {item.note && <span className="text-xs text-gray-400 italic">{item.note}</span>}
              <span className="text-sm font-semibold text-gray-900 tabular-nums">
                {item.score}/{item.max}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
