import { useState } from 'react'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'

export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header>
      <nav id="nav">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="."
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              padovan.io
            </span>
          </a>
          <button
            onClick={toggleNavbar}
            onMouseDown={event => {
              event.preventDefault()
            }}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 cursor-pointer"
          >
            <FaBars size={36} />
          </button>
          <div
            className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          >
            <ul className="font-medium bg-gray-900 md:bg-transparent flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="."
                  className="block py-2 px-3 hover:bg-gray-800 md:hover:bg-transparent rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0  md:p-0"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0  md:p-0"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0  md:p-0"
                >
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
