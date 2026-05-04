import { companies } from '../data/companies'
import { ChevronRight, TrendingUp, ExternalLink } from 'lucide-react'

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
          5 target accounts — SaaS &amp; app companies with data analytics needs.
        </p>
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
                    {company.logo ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${company.logo.slice(1)}`}
                        alt={company.name}
                        onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'inline' }}
                        className="w-8 h-8 rounded object-contain shrink-0"
                      />
                    ) : null}
                    <span className="text-xl" style={company.logo ? { display: 'none' } : {}}>{company.emoji}</span>
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
                    {/* Confirmed tools — each links to its documented source */}
                    {company.tools.slice(0, 2).map((tool) => {
                      const src = company.toolSources?.[tool]
                      return src ? (
                        <a
                          key={tool}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Source: ${src.label}`}
                          className="flex items-center gap-0.5 text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {tool}
                          <ExternalLink size={9} className="opacity-50" />
                        </a>
                      ) : (
                        <span key={tool} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                          {tool}
                        </span>
                      )
                    })}
                    {company.tools.length > 2 && (
                      <span className="text-xs text-gray-400">+{company.tools.length - 2}</span>
                    )}
                    {/* Inferred tools — amber, with tooltip explaining they're not confirmed */}
                    {company.tools.length === 0 && company.toolsInferred?.slice(0, 2).map((tool) => (
                      <span
                        key={tool}
                        title={`Inferred (not confirmed from public sources): ${company.inferenceNote}`}
                        className="flex items-center gap-0.5 text-xs bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded cursor-help"
                      >
                        {tool}
                        <span className="opacity-60 text-[9px]">?</span>
                      </span>
                    ))}
                    {company.tools.length === 0 && (company.toolsInferred?.length ?? 0) > 2 && (
                      <span className="text-xs text-amber-400">+{company.toolsInferred.length - 2}</span>
                    )}
                  </div>
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
    </div>
  )
}
