import { Rocket } from 'lucide-react'
import { Card } from './ui/card'
import livro1 from '../assets/livro1.webp'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa6'
import { FaNodeJs, FaGithub } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { CardTechnology } from './ui/card-technology'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.5 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1])
  return (
    <section className="container mx-auto p-4 relative" id="about">
      <div className="text-center py-4">
        <h3 className="text-xl lg:text-2xl tracking-widest font-semibold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Sobre mim
        </h3>
        <h2 className="text-3xl font-serif text-gray-50 font-semibold mt-2">
          Um vislumbre do meu mundo
        </h2>
        <p className="md:text-lg lg:text-xl text-gray-50/60 mt-4 max-w-md mx-auto">
          Saiba mais sobre quem sou, o que faço e o que me inspira.
        </p>
      </div>
      <motion.div
        className="flex flex-col gap-4 lg:flex-row"
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <Card className="h-[320px]">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2">
              <Rocket size={28} className="text-purple-500" />
              <h3 className="font-serif text-3xl">Minhas leituras</h3>
            </div>
            <p className="text-sm text-gray-50/60 mt-2 md:text-base lg:text-lg">
              Explore os livros que moldam minhas perspectivas
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
      </motion.div>
    </section>
  )
}
