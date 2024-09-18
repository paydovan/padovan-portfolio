import { Handshake } from 'lucide-react'
import { Fragment } from 'react/jsx-runtime'

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
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map(word => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-950 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <Handshake className="size-6 text-gray-950 rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
