import inorbitImage from '../assets/in-orbit-image.webp'
import pinterestImage from '../assets/pinterest-image.webp'
import vogliatecImage from '../assets/vogliatec-image.webp'
import { CircleCheck, ChevronRight } from 'lucide-react'
import { Card } from './ui/card'

const portfolioProjects = [
  {
    company: 'RocketSeat',
    year: '2024',
    title: 'Projeto in.orbit | Gerenciador de Metas',
    results: [
      { title: 'Gerenciador de metas' },
      { title: 'Projeto full-stack node/react' },
      { title: 'Consumindo a api com react query' },
    ],
    link: 'lalala',
    image: inorbitImage,
  },
  {
    company: 'Padovan',
    year: '2024',
    title: 'Projeto Pinterest 2',
    results: [
      { title: 'Simulador de pinterest' },
      { title: 'Consumindo a api do unsplash' },
      { title: 'Navegação entre as imagens' },
    ],
    link: 'https://paydovan.github.io/new-pinterest/',
    image: pinterestImage,
  },
  {
    company: 'Vogliatec',
    year: '2024',
    title: 'Site institucional vogliatec',
    results: [
      { title: 'Site moderno e responsivo para vogliatec' },
      { title: 'Tecnologias: HTML5 e TailwindCSS' },
      { title: 'Bibliotecas javascript, scrollReveal, etc...' },
    ],
    link: 'https://www.vogliatec.com.br/',
    image: vogliatecImage,
  },
]

export function ProjectsSection() {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-center bg-clip-text text-transparent mix-blend-difference">
            Resultados reais
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 mix-blend-difference">
          Projetos em destaque
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-gray-50/60 mt-4 max-w-md mx-auto mix-blend-difference">
          Veja como transformei conceitos em experiências digitais envolventes.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(52px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map(result => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CircleCheck size={16} className="md:size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} rel="noreferrer" target="_blank">
                    <button
                      type="button"
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ChevronRight size={16} />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-1 rounded-lg lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
