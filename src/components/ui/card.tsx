import type { MotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends Omit<MotionProps, 'style'> {
  // Omit para remover 'style'
  className?: string
  children: ReactNode
  style?: React.CSSProperties // Adicionando a propriedade style
}

export const Card = ({ className, children, ...other }: CardProps) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 relative rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-6 after:pointer-events-none",
        className
      )}
      {...(other as React.HTMLAttributes<HTMLDivElement>)} // Casting para garantir que o TypeScript reconheça as props corretas
    >
      {children}
    </div>
  )
}
