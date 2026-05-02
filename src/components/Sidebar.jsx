import { Search, Users, Mail, Zap, LayoutDashboard, BarChart2 } from 'lucide-react'

const NAV = [
  { id: 'icp',      label: 'ICP Scanner',     icon: Search,          desc: 'Find target accounts' },
  { id: 'persona',  label: 'Persona Finder',  icon: Users,           desc: 'Identify decision-makers' },
  { id: 'email',    label: 'Email Composer',  icon: Mail,            desc: 'AI-generated outreach' },
  { id: 'signals',  label: 'Signal Feed',     icon: Zap,             desc: 'Buying trigger alerts' },
  { id: 'pipeline', label: 'Pipeline Board',  icon: LayoutDashboard, desc: 'Track outreach stages' },
  { id: 'insights', label: 'A/B Insights',    icon: BarChart2,       desc: 'What\'s working & why' },
]

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">Clarity</span>
          <span className="text-xl font-bold text-cyan-500">Q.</span>
        </div>
        <p className="text-xs text-gray-400 mt-0.5 font-medium tracking-wide uppercase">
          Growth Hacker Dashboard
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV.map(({ id, label, icon: Icon, desc }) => {
          const active = activeTab === id
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                active
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon
                size={18}
                className={active ? 'text-indigo-600' : 'text-gray-400'}
              />
              <div>
                <p className={`text-sm font-medium leading-tight ${active ? 'text-indigo-700' : ''}`}>
                  {label}
                </p>
                <p className="text-xs text-gray-400 leading-tight mt-0.5">{desc}</p>
              </div>
              {active && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500" />
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer badges */}
      <div className="px-4 py-4 border-t border-gray-100 space-y-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full font-medium">
            ✦ Claude AI
          </span>
          <span className="inline-flex items-center gap-1 text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full font-medium">
            Hunter.io
          </span>
        </div>
        <p className="text-xs text-gray-400">SDR Role Application Demo</p>
      </div>
    </aside>
  )
}
