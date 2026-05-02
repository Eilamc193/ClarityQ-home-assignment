import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const STAGES = [
  'Identified',
  'Researched',
  'Email Drafted',
  'Sent',
  'Replied',
  'Meeting Booked',
  'Nurture',
]

export const STAGE_COLORS = {
  'Identified':     { bg: 'bg-gray-100',   border: 'border-gray-200',   badge: 'bg-gray-200 text-gray-700' },
  'Researched':     { bg: 'bg-blue-50',    border: 'border-blue-100',   badge: 'bg-blue-100 text-blue-700' },
  'Email Drafted':  { bg: 'bg-amber-50',   border: 'border-amber-100',  badge: 'bg-amber-100 text-amber-700' },
  'Sent':           { bg: 'bg-indigo-50',  border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-700' },
  'Replied':        { bg: 'bg-cyan-50',    border: 'border-cyan-100',   badge: 'bg-cyan-100 text-cyan-700' },
  'Meeting Booked': { bg: 'bg-emerald-50', border: 'border-emerald-100',badge: 'bg-emerald-100 text-emerald-700' },
  'Nurture':        { bg: 'bg-orange-50',  border: 'border-orange-100', badge: 'bg-orange-100 text-orange-700' },
}

export const usePipelineStore = create(
  persist(
    (set) => ({
      prospects: [],

      addProspect: (prospect) =>
        set((state) => {
          const alreadyExists = state.prospects.some(
            (p) => p.personaId === prospect.personaId
          )
          if (alreadyExists) return state
          return {
            prospects: [
              ...state.prospects,
              {
                ...prospect,
                id: `${prospect.personaId}-${Date.now()}`,
                stage: 'Identified',
                addedAt: Date.now(),
                lastTouchedAt: Date.now(),
              },
            ],
          }
        }),

      moveProspect: (id, newStage) =>
        set((state) => ({
          prospects: state.prospects.map((p) =>
            p.id === id ? { ...p, stage: newStage, lastTouchedAt: Date.now() } : p
          ),
        })),

      removeProspect: (id) =>
        set((state) => ({
          prospects: state.prospects.filter((p) => p.id !== id),
        })),
    }),
    { name: 'ghd-pipeline' }
  )
)
