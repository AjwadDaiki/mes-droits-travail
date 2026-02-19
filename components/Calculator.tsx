import { ReactNode } from 'react'

interface CalculatorProps {
  children: ReactNode
}

// Wrapper carte générique pour tous les calculateurs
export default function Calculator({ children }: CalculatorProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
      {children}
    </div>
  )
}
