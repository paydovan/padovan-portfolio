import { useScroll, motion, useTransform } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends MotionProps {
  className?: string
  children: ReactNode
}

export const Card = ({ className, children, ...other }: CardProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={twMerge(
        "bg-gray-800 relative rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-6 after:pointer-events-none",
        className
      )}
      {...other}
    >
      {children}
    </motion.div>
  )
}
