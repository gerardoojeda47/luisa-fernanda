import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import StarField from '../components/StarField'

const lines = [
  'Quizás el universo sabía algo que nosotros todavía no sabíamos...',
  'Que dos personas podían encontrarse y sentir que muchas cosas simplemente encajaban.',
  'Que nos gustaran tantas cosas parecidas.',
  'Que pudiéramos reírnos de lo mismo.',
  'Que pudiéramos hablar durante horas.',
  'Y que, sin darnos cuenta, comenzáramos a construir algo tan bonito.',
]

// Subcomponente para cada partícula — hooks fuera del map
function ExplosionParticle({
  index,
  scrollYProgress,
  opacity,
}: {
  index: number
  scrollYProgress: MotionValue<number>
  opacity: MotionValue<number>
}) {
  const angle = (index / 12) * 360
  const radius = 60

  const px = useTransform(
    scrollYProgress,
    [0.48, 0.62],
    [0, Math.cos((angle * Math.PI) / 180) * radius],
  )
  const py = useTransform(
    scrollYProgress,
    [0.48, 0.62],
    [0, Math.sin((angle * Math.PI) / 180) * radius],
  )

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: '4px',
        height: '4px',
        background: index % 2 === 0 ? '#ffd9a0' : '#a8c8ff',
        left: '50%',
        top: '50%',
        opacity,
        x: px,
        y: py,
      }}
    />
  )
}

export default function TwoSouls() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const leftX = useTransform(scrollYProgress, [0.1, 0.5], ['-30%', '0%'])
  const rightX = useTransform(scrollYProgress, [0.1, 0.5], ['30%', '0%'])
  const starScale = useTransform(scrollYProgress, [0.4, 0.55], [1, 1.8])
  const explosionOpacity = useTransform(scrollYProgress, [0.48, 0.55, 0.7], [0, 1, 0])
  const explosionScale = useTransform(scrollYProgress, [0.48, 0.58], [0.5, 2.5])

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 md:py-48 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #020408, #040a14, #020408)' }}
    >
      <StarField count={80} />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Título */}
        <motion.h2
          className="font-serif font-light text-white/70 text-center mb-20 tracking-wide"
          style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          Dos almas en el universo
        </motion.h2>

        {/* Escena de las dos estrellas */}
        <div className="relative flex items-center justify-center h-48 md:h-64 mb-24">
          {/* Estrella izquierda — Luisa */}
          <motion.div
            className="absolute flex flex-col items-center gap-3"
            style={{ x: leftX, left: '15%' }}
          >
            <motion.div
              className="rounded-full"
              style={{
                width: '20px',
                height: '20px',
                background: 'radial-gradient(circle, #ffd9a0, #ffc56a)',
                boxShadow: '0 0 20px 8px rgba(255,197,106,0.4)',
                scale: starScale,
              }}
            />
            <span className="font-script text-star-warm/70 text-sm whitespace-nowrap">Luisa</span>
          </motion.div>

          {/* Estrella derecha — Yo */}
          <motion.div
            className="absolute flex flex-col items-center gap-3"
            style={{ x: rightX, right: '15%' }}
          >
            <motion.div
              className="rounded-full"
              style={{
                width: '20px',
                height: '20px',
                background: 'radial-gradient(circle, #a8c8ff, #6a9fd8)',
                boxShadow: '0 0 20px 8px rgba(168,200,255,0.4)',
                scale: starScale,
              }}
            />
            <span className="font-script text-star-blue/70 text-sm whitespace-nowrap">Yo</span>
          </motion.div>

          {/* Explosión de luz */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '80px',
              height: '80px',
              background:
                'radial-gradient(circle, rgba(255,220,180,0.9) 0%, rgba(168,200,255,0.4) 40%, transparent 70%)',
              opacity: explosionOpacity,
              scale: explosionScale,
              left: '50%',
              top: '50%',
              translateX: '-50%',
              translateY: '-50%',
            }}
          />

          {/* Partículas — cada una en su propio componente para respetar reglas de hooks */}
          {Array.from({ length: 12 }).map((_, i) => (
            <ExplosionParticle
              key={i}
              index={i}
              scrollYProgress={scrollYProgress}
              opacity={explosionOpacity}
            />
          ))}
        </div>

        {/* Líneas de texto */}
        <div className="space-y-8 max-w-xl mx-auto">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className={`font-serif font-light text-center leading-relaxed ${
                i === 0 ? 'text-star-warm/90 italic' : 'text-white/65'
              }`}
              style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)' }}
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15, duration: 0.9 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
