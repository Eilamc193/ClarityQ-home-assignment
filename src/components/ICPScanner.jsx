import { companies } from '../data/companies'
import { ChevronRight, TrendingUp } from 'lucide-react'

function ScoreBar({ score }) {
  const color =
    score >= 85 ? 'bg-emerald-500' :
    score >= 70 ? 'bg-indigo-500' :
    score >= 50 ? 'bg-amber-500' : 'bg-red-500'

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
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
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp size={20} className="text-indigo-500" />
          <h1 className="text-xl font-semibold text-gray-900">ICP Scanner</h1>
        </div>
        <p className="text-sm text-gray-500">
          5 target accounts scored against ClarityQ's ICP — SaaS &amp; app companies with data analytics needs.
        </p>
      </div>

      {/* Scoring legend */}
      <div className="flex items-center gap-4 mb-5 text-xs text-gray-500">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> 85–100 Strong fit</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" /> 70–84 Good fit</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> 50–69 Possible</span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
              <th className="text-left px-5 py-3 font-medium">Company</th>
              <th className="text-left px-4 py-3 font-medium">Industry</th>
              <th className="text-left px-4 py-3 font-medium">Size</th>
              <th className="text-left px-4 py-3 font-medium">Stage</th>
              <th className="text-left px-4 py-3 font-medium">Tools</th>
              <th className="text-left px-4 py-3 font-medium w-44">ICP Score</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {companies.map((company) => (
              <tr
                key={company.id}
                className="hover:bg-indigo-50/40 transition-colors cursor-pointer group"
                onClick={() => onSelectCompany(company)}
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{company.emoji}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{company.name}</p>
                      <p className="text-xs text-gray-400">{company.domain}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-gray-600">{company.industry}</td>
                <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">{company.headcount}</td>
                <td className="px-4 py-3.5">
                  <StageBadge stage={company.stage} />
                </td>
                <td className="px-4 py-3.5">
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
                <td className="px-4 py-3.5 w-44">
                  <ScoreBar score={company.icpScore} />
                </td>
                <td className="px-4 py-3.5">
                  <button className="flex items-center gap-1 text-xs font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View <ChevronRight size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ICP criteria */}
      <div className="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">ICP Scoring Criteria</p>
        <div className="grid grid-cols-5 gap-3">
          {[
            { label: 'Dedicated data team', weight: '30pts' },
            { label: 'Uses analytics tools', weight: '25pts' },
            { label: 'Growth-stage funding', weight: '20pts' },
            { label: 'Headcount 50–500', weight: '15pts' },
            { label: 'Hiring data roles', weight: '10pts' },
          ].map(({ label, weight }) => (
            <div key={label} className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-semibold text-indigo-600">{weight}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
