import { Rocket } from 'lucide-react'
import { Card } from './ui/card'
import livro1 from '../assets/livro1.png'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa6'
import { FaNodeJs, FaGithub } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { CardTechnology } from './ui/card-technology'

export function Services() {
  return (
    <section className="container mx-auto p-4">
      <div className="text-center py-4">
        <h3 className="text-xl tracking-widest font-semibold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h3>
        <h2 className="text-3xl font-serif text-gray-50 font-semibold mt-2">
          A Glimpse Into My World
        </h2>
        <p className="md:text-lg lg:text-xl text-gray-50/60 mt-4 max-w-md mx-auto">
          Learn more about who i am, what i do, and what inspires me.
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Card className="h-[320px]">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2">
              <Rocket size={28} className="text-purple-500" />
              <h3 className="font-serif text-3xl">My reads</h3>
            </div>
            <p className="text-sm text-gray-50/60 mt-2 md:text-base lg:text-lg">
              Explore the books shaping my perspectives
            </p>
            <div className="mx-auto mt-8">
              <img
                src={livro1}
                alt="livro: estrutura de dados e algoritmos em javascript"
                className=""
              />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2">
              <Rocket size={28} className="text-purple-500" />
              <h3 className="font-serif text-3xl">Conhecimentos</h3>
            </div>
            <p className="text-sm text-gray-50/60 mt-2 md:text-base lg:text-lg">
              Aqui está algumas das tecnologias que utilizo no dia a dia.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <CardTechnology>
                <BiLogoTypescript size={48} />
                <span className="text-xl">TypeScript</span>
              </CardTechnology>
              <CardTechnology>
                <FaReact size={48} />
                <span className="text-xl">React.Js</span>
              </CardTechnology>
              <CardTechnology>
                <FaNodeJs size={48} />
                <span className="text-xl">Node</span>
              </CardTechnology>
              <CardTechnology>
                <RiTailwindCssFill size={48} />
                <span className="text-xl">Tailwind Css</span>
              </CardTechnology>
              <CardTechnology>
                <FaGithub size={48} />
                <span className="text-xl">Github</span>
              </CardTechnology>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
