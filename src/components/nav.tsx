import { FaBars } from 'react-icons/fa6'
import logo from '../assets/logo.svg'
import { useState } from 'react'

export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function toggleNavbar() {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className="p-4 flex justify-between items-center max-w-screen-xl mx-auto relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8" />
        <span className="text-2xl font-semibold">padovan.io</span>
      </div>

      {/* Ícone do menu (visível apenas no mobile) */}
      <button className="lg:hidden" type="button" onClick={toggleNavbar}>
        <FaBars size={24} className="cursor-pointer" />
      </button>

      {/* Menu de navegação (para telas grandes) */}
      <nav className="hidden lg:flex gap-4">
        <a href="." className="">
          Home
        </a>
        <a href="#projects" className="">
          Projetos
        </a>
        <a href="#services" className="">
          Serviços
        </a>
        <a href="#about" className="">
          Sobre
        </a>
        <a href="#form" className="">
          Contato
        </a>
      </nav>

      {/* Menu dropdown para mobile (aparece ao clicar no ícone) */}
      {isNavOpen && (
        <div className="absolute md:hidden top-full left-1/2 transform -translate-x-1/2 mt-2 w-[95%] bg-gray-800 text-white shadow-lg rounded-md z-20">
          {/* Links de navegação */}
          <a href="." className="block px-4 py-2 hover:bg-gray-600">
            Home
          </a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-600">
            Projetos
          </a>
          <a href="#services" className="block px-4 py-2 hover:bg-gray-600">
            Serviços
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-600">
            Sobre
          </a>
          <a href="#form" className="block px-4 py-2 hover:bg-gray-600">
            Contato
          </a>
        </div>
      )}
    </header>
  )
}
