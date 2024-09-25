import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import emailjs from '@emailjs/browser'

const sendEmailSchema = z.object({
  name: z
    .string({ message: 'Digite um nome válido' })
    .min(1, { message: 'Esse campo precisa ser preenchido!' }),
  email: z
    .string()
    .min(1, { message: 'Esse campo precisa ser preenchido!' })
    .email('Isso não é um email válido.'),
  whatsapp: z
    .string()
    .min(11, { message: 'Digite um numero válido!' })
    .max(13, { message: 'Digite um numero válido!' }),
})

type SendEmailType = z.infer<typeof sendEmailSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendEmailType>({
    resolver: zodResolver(sendEmailSchema),
  })

  function handleSendEmail(data: SendEmailType, e: any) {
    console.log(data)

    const templateParams = {
      from_name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
    }

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID_EMAILJS,
        import.meta.env.VITE_TEMPLATE_ID_EMAILJS,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY_EMAILJS
      )
      .then(() => {
        e.target.reset()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <section className="container mx-auto p-4 mt-8" id="form">
      <div className="py-8 text-center">
        <h2 className="text-4xl font-bold">
          Vamos conversar sobre{' '}
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            seu projeto!
          </span>
        </h2>
        <p className="mt-4 text-white/55 lg:text-xl">
          Envie suas informações pelo formulário abaixo e vamos juntos dar vida
          ao seu projeto.
        </p>
      </div>
      <div className="">
        <form
          onSubmit={handleSubmit(handleSendEmail)}
          className="flex flex-col gap-4 max-w-sm lg:max-w-xl mx-auto"
        >
          <input
            type="text"
            placeholder="Digite seu nome."
            className="py-2 px-4 rounded-md border border-white/15 bg-white/10 backdrop-blur"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          <input
            type="email"
            placeholder="Digite seu melhor email."
            className="py-2 px-4 rounded-md border border-white/15 bg-white/10 backdrop-blur"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <input
            type="text"
            placeholder="Digite seu whatsapp."
            className="py-2 px-4 rounded-md border border-white/15 bg-white/10 backdrop-blur"
            {...register('whatsapp')}
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>
          )}
          <div className="group flex justify-center mt-4">
            <button
              type="submit"
              className="relative inline-block p-px font-semibold leading-6 bg-gray-800 shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Enviar
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
          </div>
        </form>
      </div>
    </section>
  )
}
