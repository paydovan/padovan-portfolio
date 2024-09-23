import background from '../assets/background.svg'

export function Cta() {
  return (
    <section className="relative container mx-auto p-4">
      <div className="py-56">
        <div className="">
          <h2 className="text-5xl text-center font-medium">
            Pronto para levar{' '}
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent -tracking-normal">
              seu negócio
            </span>{' '}
            para o próximo nivel?
          </h2>
          <p className="text-center mt-4 text-white/50 md:text-lg">
            Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a
            atingir seus objetivos
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2dd4bf_0%,#3b83f6_50%,#a855f7_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium backdrop-blur-3xl gap-2">
              Entre em contato comigo
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
        <img
          src={background}
          alt="fundo"
          className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10"
        />
      </div>
    </section>
  )
}
