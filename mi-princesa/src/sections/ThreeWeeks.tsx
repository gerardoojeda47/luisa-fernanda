import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import SectionTitle from '../components/SectionTitle'

const paragraphs = [
  'Estas tres semanas que he pasado contigo fueron de las mejores de mi vida.',
  'No por la cantidad de días, sino por todo lo que logramos sentir en ellos.',
  'Fue increíble encontrar a alguien con quien puedo hablar, reír, compartir gustos, descubrir cosas y sentir una conexión tan especial.',
  'Hay personas con las que simplemente conversas...',
  'y hay personas con las que parece que el universo ya hubiera escrito una historia antes de conocerse.',
]

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.2, duration: 0.9, ease: 'easeOut' },
  }),
}

export default function ThreeWeeks() {
  return (
    <section
      className="relative w-full py-32 md:py-44 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #020408, #04080f, #020408)' }}
    >
      <StarField count={100} />

      {/* Gradiente lateral sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 15% 50%, rgba(107,63,160,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-10">
        <SectionTitle
          title="Tres semanas contigo..."
          className="mb-16"
          gold
        />

        <div className="space-y-8">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className={`font-serif font-light leading-relaxed ${
                i === 3 || i === 4
                  ? 'text-star-warm/80 italic text-center'
                  : 'text-white/75'
              }`}
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Elemento decorativo inferior */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: i === 1 ? '6px' : '4px',
                  height: i === 1 ? '6px' : '4px',
                  background: 'rgba(255,197,106,0.5)',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
