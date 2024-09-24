import { FaFigma } from 'react-icons/fa6'
import { BackgroundBox } from '../components/card-with-rows'
import { FaDesktop } from 'react-icons/fa'

export function Services() {
  return (
    <section className="container mx-auto p-4 mt-16" id="services">
      <div className="text-center">
        <h3 className="text-xl lg:text-2xl tracking-widest font-semibold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Meus Serviços
        </h3>
        <h2 className="text-3xl font-serif text-gray-50 font-semibold mt-2">
          Um pouco do que posso oferecer a você!
        </h2>
      </div>
      <div className="mt-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <BackgroundBox
            title="Ui Design"
            icon={<FaFigma size={56} />}
            description="Ofereço soluções personalizadas que unem design criativo e tecnologia,
        criando experiências digitais envolventes. Transformo suas ideias em
        resultados, focando na usabilidade do usuário."
          />
          <BackgroundBox
            title="Desenvolvimento"
            icon={<FaDesktop size={56} />}
            description="Desenvolvo sites, blogs e e-commerces personalizados, com design moderno e otimização para SEO, focados em destacar sua marca e gerar resultados."
          />
        </div>
      </div>
    </section>
  )
}
