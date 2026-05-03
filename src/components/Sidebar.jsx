import { Search, Users, Mail, Zap, LayoutDashboard, BarChart2 } from 'lucide-react'

const NAV = [
  { id: 'icp',      label: 'ICP Scanner',     icon: Search,          desc: 'Find target accounts' },
  { id: 'persona',  label: 'Persona Finder',  icon: Users,           desc: 'Identify decision-makers' },
  { id: 'email',    label: 'Email Composer',  icon: Mail,            desc: 'AI-generated outreach' },
  { id: 'signals',  label: 'Signal Feed',     icon: Zap,             desc: 'Buying trigger alerts' },
  { id: 'pipeline', label: 'Pipeline Board',  icon: LayoutDashboard, desc: 'Track outreach stages' },
  { id: 'insights', label: 'A/B Insights',    icon: BarChart2,       desc: "What's working & why" },
]

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-64 shrink-0 bg-slate-900 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-slate-800">
        <div className="flex items-center gap-0.5">
          <span className="text-xl font-bold text-white tracking-tight">Clarity</span>
          <span className="text-xl font-bold text-cyan-400 tracking-tight">Q.</span>
        </div>
        <p className="text-xs text-slate-500 mt-0.5 font-medium tracking-widest uppercase">
          Growth Hacker Dashboard
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV.map(({ id, label, icon: Icon, desc }) => {
          const active = activeTab === id
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                active
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon
                size={17}
                className={active ? 'text-white' : 'text-slate-500'}
              />
              <div>
                <p className={`text-sm font-medium leading-tight ${active ? 'text-white' : ''}`}>
                  {label}
                </p>
                <p className={`text-xs leading-tight mt-0.5 ${active ? 'text-indigo-200' : 'text-slate-600'}`}>
                  {desc}
                </p>
              </div>
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-slate-800">
        <p className="text-xs text-slate-600">SDR Role Application Demo</p>
      </div>
    </aside>
  )
}
