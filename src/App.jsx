import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ICPScanner from './components/ICPScanner'
import PersonaFinder from './components/PersonaFinder'
import EmailComposer from './components/EmailComposer'
import SignalFeed from './components/SignalFeed'
import PipelineBoard from './components/PipelineBoard'
import ABInsights from './components/ABInsights'

export default function App() {
  const [activeTab, setActiveTab] = useState('icp')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedPersona, setSelectedPersona] = useState(null)

  function handleSelectCompany(company) {
    setSelectedCompany(company)
    setActiveTab('persona')
  }

  function handleDraftEmail(persona, company) {
    setSelectedPersona(persona)
    setSelectedCompany(company)
    setActiveTab('email')
  }

  function handleBackToICP() {
    setActiveTab('icp')
  }

  function handleBackToPersona() {
    setActiveTab('persona')
  }

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 overflow-y-auto">
        {activeTab === 'icp' && (
          <ICPScanner onSelectCompany={handleSelectCompany} />
        )}
        {activeTab === 'persona' && (
          <PersonaFinder
            company={selectedCompany}
            onBack={handleBackToICP}
            onDraftEmail={handleDraftEmail}
          />
        )}
        {activeTab === 'email' && (
          <EmailComposer
            persona={selectedPersona}
            company={selectedCompany}
            onBack={handleBackToPersona}
          />
        )}
        {activeTab === 'signals' && <SignalFeed />}
        {activeTab === 'pipeline' && <PipelineBoard />}
        {activeTab === 'insights' && <ABInsights />}
      </main>
    </div>
  )
}
