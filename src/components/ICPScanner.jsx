import { companies } from '../data/companies'
import { ChevronRight, TrendingUp } from 'lucide-react'

function ScoreBar({ score }) {
  const color =
    score >= 85 ? 'bg-emerald-500' :
    score >= 70 ? 'bg-indigo-500' :
    score >= 50 ? 'bg-amber-500' : 'bg-red-500'

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className={`text-sm font-semibold tabular-nums ${
        score >= 85 ? 'text-emerald-600' :
        score >= 70 ? 'text-indigo-600' :
        score >= 50 ? 'text-amber-600' : 'text-red-600'
      }`}>
        {score}
      </span>
    </div>
  )
}

function StageBadge({ stage }) {
  const colors =
    stage.includes('C') ? 'bg-violet-100 text-violet-700' :
    stage.includes('B') ? 'bg-blue-100 text-blue-700' :
    stage.includes('A') ? 'bg-cyan-100 text-cyan-700' : 'bg-gray-100 text-gray-600'
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors}`}>
      {stage}
    </span>
  )
}

export default function ICPScanner({ onSelectCompany }) {
  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-7">
        <div className="flex items-center gap-2.5 mb-1.5">
          <TrendingUp size={22} className="text-indigo-500" />
          <h1 className="text-2xl font-bold text-slate-900">ICP Scanner</h1>
        </div>
        <p className="text-sm text-slate-500">
          5 target accounts scored against ClarityQ's ICP — SaaS &amp; app companies with data analytics needs.
        </p>
      </div>

      {/* Scoring legend */}
      <div className="flex items-center gap-5 mb-5 text-xs text-slate-500">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> 85–100 Strong fit</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" /> 70–84 Good fit</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> 50–69 Possible</span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
              <th className="text-left px-5 py-3.5 font-semibold">Company</th>
              <th className="text-left px-4 py-3.5 font-semibold">Industry</th>
              <th className="text-left px-4 py-3.5 font-semibold">Size</th>
              <th className="text-left px-4 py-3.5 font-semibold">Stage</th>
              <th className="text-left px-4 py-3.5 font-semibold">Tools</th>
              <th className="text-left px-4 py-3.5 font-semibold w-44">ICP Score</th>
              <th className="px-4 py-3.5" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {companies.map((company) => (
              <tr
                key={company.id}
                className="hover:bg-indigo-50/50 transition-colors cursor-pointer group"
                onClick={() => onSelectCompany(company)}
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{company.emoji}</span>
                    <div>
                      <p className="font-semibold text-slate-900">{company.name}</p>
                      <p className="text-xs text-slate-400">{company.domain}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-slate-600">{company.industry}</td>
                <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{company.headcount}</td>
                <td className="px-4 py-4">
                  <StageBadge stage={company.stage} />
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-1">
                    {company.tools.slice(0, 2).map((tool) => (
                      <span key={tool} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                    {company.tools.length > 2 && (
                      <span className="text-xs text-gray-400">+{company.tools.length - 2}</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 w-44">
                  <ScoreBar score={company.icpScore} />
                </td>
                <td className="px-4 py-4">
                  <button className="flex items-center gap-1 text-xs font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View <ChevronRight size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ICP criteria */}
      <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">ICP Scoring Criteria</p>
        <div className="grid grid-cols-5 gap-3">
          {[
            { label: 'Dedicated data team', weight: '30pts' },
            { label: 'Uses analytics tools', weight: '25pts' },
            { label: 'Growth-stage funding', weight: '20pts' },
            { label: 'Headcount 50–500', weight: '15pts' },
            { label: 'Hiring data roles', weight: '10pts' },
          ].map(({ label, weight }) => (
            <div key={label} className="text-center p-3 bg-slate-50 rounded-lg border border-gray-100">
              <p className="text-sm font-bold text-indigo-600">{weight}</p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
