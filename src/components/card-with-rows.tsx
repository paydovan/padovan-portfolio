import { Boxes } from './ui/boxes-core'
import { cn } from '../lib/utils'

export function BackgroundBox({ title, icon, description }) {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col rounded-lg p-8 gap-4">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {icon}
      <h2 className={cn('md:text-4xl text-xl text-white relative z-20')}>
        {title}
      </h2>
      <p className="mt-2 text-white/50 text-pretty text-lg relative z-20">
        {description}
      </p>
    </div>
  )
}
