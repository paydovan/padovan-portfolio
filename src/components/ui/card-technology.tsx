import React from 'react'

interface CardTechnologyProps {
  children: React.ReactNode // Adiciona a tipagem para children
}

export function CardTechnology({ children }: CardTechnologyProps) {
  return (
    <div className="flex py-2 px-3 items-center gap-2 outline outline-2 outline-white/10 rounded-lg transform transition-transform duration-300 hover:rotate-3">
      {children} {/* Renderiza os children */}
    </div>
  )
}
