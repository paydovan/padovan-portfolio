import { useState } from 'react'
import { NavbarSimple } from './ui/navbar'

export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function toggleNavbar() {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className="p-4 flex justify-between items-center max-w-screen-xl mx-auto relative">
      <NavbarSimple />
    </header>
  )
}
