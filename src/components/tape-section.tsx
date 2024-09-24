import { Handshake } from 'lucide-react'

const words = [
  'Performance',
  'Acessível',
  'Seguro',
  'Responsivo',
  'Interativo',
  'Agradável ao Usuário',
  'Ótimos resultados de Busca',
  'Melhor SEO',
]

export function TapeSection() {
  return (
    <div className="py-16 lg:py-24 gpu-smooth overflow-x-hidden">
      <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:20s] will-change-[transform]">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="inline-flex gap-4 items-center">
                {words.map(word => (
                  <div key={word} className="flex items-center">
                    <span className="text-gray-950 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <Handshake className="size-6 text-gray-950 rotate-12" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
