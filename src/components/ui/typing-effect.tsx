import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypingEffect = () => {
  const [text, setText] = useState('')
  const fullText =
    'Combinando inovação em Design, expertise em Desenvolvimento Frontend, criamos experiências digitais que elevam sua marca e encantam seu público.'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, index)) // Atualiza o estado com o texto correto
      index++

      if (index > fullText.length) {
        clearInterval(interval)
      }
    }, 50) // Velocidade da animação (50ms entre cada caractere)

    return () => clearInterval(interval) // Limpa o intervalo ao desmontar o componente
  }, [fullText])

  return (
    <motion.p
      className="mt-4 text-center text-white/60 md:text-lg lg:text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.p>
  )
}

export default TypingEffect
