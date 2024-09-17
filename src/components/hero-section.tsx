import { useEffect, useState } from 'react'
import emoji from '../assets/emoji-png-1018.png'
import rocket from '../assets/rocket-ship.png'

export function HeroSection() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const size = isHovered ? 224 : 80

  // Atualiza a posição do cursor
  const updateCursorPosition = (e: MouseEvent) => {
    const limitedX = e.pageX
    const limitedY = e.pageY - 56

    setCursorPosition({ x: limitedX, y: limitedY })
  }

  useEffect(() => {
    // Adiciona o listener de movimento do mouse
    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      // Remove o listener quando o componente desmonta
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div className="relative z-0 py-12 mix-blend-difference overflow-x-clip">
      <div className="absolute inset-0">
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="size-[700px] animate-spin [animation-duration:30s] mix-blend-difference">
          <div className="inline-flex">
            <img src={rocket} alt="rocket" className="size-16" />
          </div>
        </div>
      </div>
      <div
        className="hidden md:block bg-gray-50 absolute transition-transform duration-200 ease-in-out mix-blend-difference"
        style={{
          top: `${cursorPosition.y - size / 2}px`,
          left: `${cursorPosition.x - size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: `scale(${size / 188})`, // Ajusta o tamanho relativo ao tamanho inicial
        }}
      />
      <div className="p-4 max-w-screen-xl mx-auto mix-blend-difference">
        <div className="flex flex-col items-center gap-2">
          <img
            src={emoji}
            alt="emoji guy in laptop"
            className="w-40 h-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div className="bg-gray-900 border border-gray-800 flex justify-center items-center gap-2 px-4 py-1 rounded">
            <div className="bg-green-500 w-2.5 h-2.5 rounded-full animate-pulse" />
            <div className="text-sm">Available for new projects</div>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mx-auto max-w-lg"
        >
          <h1 className="text-3xl font-medium text-center mt-8 tracking-wide md:text-5xl">
            Building Exceptional{' '}
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              User Experience
            </span>
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            quia quas esse, ea veniam provident deleniti ipsam inventore placeat
            explicabo?
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 p-4">
          <div className="group">
            <a href="#">
              <button
                type="button"
                className="relative inline-block p-px font-semibold leading-6 bg-gray-800 shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Let's get started
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </a>
          </div>
          <button
            type="button"
            className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2dd4bf_0%,#3b83f6_50%,#a855f7_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium backdrop-blur-3xl gap-2">
              Contact me
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Arrow Right</title>
                <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
