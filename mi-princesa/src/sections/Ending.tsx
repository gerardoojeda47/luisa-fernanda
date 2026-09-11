import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import MoonScene from '../components/MoonScene'
import RomanticButton from '../components/RomanticButton'

interface EndingProps {
  onRestart: () => void
}

const endingLines = [
  { text: 'Para Luisa Fernanda Velasco Cabezas ❤️', style: 'title' },
  {
    text: 'Gracias por convertir estas tres semanas en algo que jamás olvidaré.',
    style: 'subtitle',
  },
  { text: 'Nuestro universo apenas comienza...', style: 'script' },
]

export default function Ending({ onRestart }: EndingProps) {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ minHeight: '100vh', background: '#010306' }}
    >
      <StarField count={200} />

      {/* Partículas finales */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: i % 2 === 0 ? '#ffd9a0' : '#a8c8ff',
            opacity: Math.random() * 0.5 + 0.1,
            '--pduration': `${Math.random() * 10 + 6}s`,
            '--pdelay': `${Math.random() * 5}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-10">
        {/* Luna */}
        <motion.div
          className="float-slow"
          style={{ '--fdelay': '0s' } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <MoonScene size={90} />
        </motion.div>

        {/* Textos */}
        <div className="space-y-6 max-w-xl">
          {endingLines.map((line, i) => (
            <motion.p
              key={i}
              className={
                line.style === 'title'
                  ? 'font-serif font-light text-white text-glow-white'
                  : line.style === 'script'
                  ? 'font-script text-star-warm text-glow'
                  : 'font-serif font-light text-white/65'
              }
              style={{
                fontSize:
                  line.style === 'title'
                    ? 'clamp(1.3rem, 4vw, 2rem)'
                    : line.style === 'script'
                    ? 'clamp(1.4rem, 4.5vw, 2.2rem)'
                    : 'clamp(0.95rem, 2.2vw, 1.15rem)',
              }}
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.5 + 0.3, duration: 1.1 }}
            >
              {line.text}
            </motion.p>
          ))}

          {/* Emoji ✨ */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.8, type: 'spring' }}
            style={{ fontSize: '2.5rem' }}
          >
            ✨
          </motion.div>
        </div>

        {/* Línea separadora */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-star-warm/30 to-transparent"
          style={{ width: 'min(300px,70vw)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 1.2 }}
        />

        {/* Botón volver */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.6, duration: 1 }}
        >
          <RomanticButton onClick={onRestart} variant="ghost">
            Volver a comenzar
          </RomanticButton>
        </motion.div>
      </div>
    </section>
  )
}
