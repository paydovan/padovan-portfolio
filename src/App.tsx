import { useEffect, useState } from 'react'
import { HeroSection } from './components/hero-section'
import { Nav } from './components/nav'
import { ProjectsSection } from './components/projects-section'
import { TapeSection } from './components/tape-section'
import { About } from './components/about'
import { Services } from './components/services'
import { Cta } from './components/cta'
import { Form } from './components/form'
import { Footer } from './components/footer'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const size = isHovered ? 224 : 80

  const updateCursorPosition = (e: MouseEvent) => {
    const docHeight = document.documentElement.scrollHeight // Altura total do documento
    const limitedX = Math.min(
      window.innerWidth - size / 2,
      Math.max(size / 2, e.pageX)
    )
    const limitedY = Math.min(docHeight - size / 2, Math.max(size / 2, e.pageY)) // Limitar a Y com base na altura total do documento
    setCursorPosition({ x: limitedX, y: limitedY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition)
    return () => window.removeEventListener('mousemove', updateCursorPosition)
  }, [])

  return (
    <div className="relative">
      <Nav />
      <HeroSection setIsHovered={setIsHovered} />
      <ProjectsSection />
      <TapeSection />
      <Services />
      <Cta />
      <About />
      <TapeSection />
      <Form />
      <Footer />

      {/* Cursor personalizado */}
      <div
        className="absolute transition-transform duration-200 ease-in-out mix-blend-difference hidden md:block"
        style={{
          top: `${cursorPosition.y - size / 2}px`,
          left: `${cursorPosition.x - size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          pointerEvents: 'none',
          backgroundColor: 'white',
          transform: `scale(${size / 188})`,
        }}
      />
    </div>
  )
}

export default App
