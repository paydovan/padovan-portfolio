import { BackgroundBoxesDemoDev } from './card-with-rows-dev'
import { BackgroundBoxesDemoFigma } from './card-with-rows-figma'

export function Services() {
  return (
    <section className="container mx-auto p-4 mt-16">
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
          <BackgroundBoxesDemoFigma />
          <BackgroundBoxesDemoDev />
        </div>
      </div>
    </section>
  )
}
