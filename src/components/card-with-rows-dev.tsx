'use client'
import React from 'react'
import { Boxes } from './ui/boxes-core'
import { cn } from '../lib/utils'
import { FaDesktop } from 'react-icons/fa'

export function BackgroundBoxesDemoDev() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col rounded-lg p-8 gap-4">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <FaDesktop size={56} className="relative z-20" />
      <h2 className={cn('md:text-4xl text-xl text-white relative z-20')}>
        Desenvolvimento
      </h2>
      <p className="mt-2 text-white/50 text-pretty text-lg relative z-20">
        Desenvolvo sites, blogs e e-commerces personalizados, com design moderno
        e otimização para SEO, focados em destacar sua marca e gerar resultados.
      </p>
    </div>
  )
}
