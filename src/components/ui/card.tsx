import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 relative rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-6 after:pointer-events-none",
        className
      )}
      {...other}
    >
      {children}
    </div>
  )
}
