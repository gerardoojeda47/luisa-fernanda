import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import SectionTitle from '../components/SectionTitle'

const letterParagraphs = [
  'Luisa,',
  'No sé exactamente qué nos espera después de estas tres semanas.',
  'No quiero apresurar el tiempo ni intentar escribir el futuro antes de vivirlo.',
  'Solo quiero agradecerte.',
  'Gracias por cada conversación.',
  'Por cada risa.',
  'Por cada momento.',
  'Por hacer que estos días fueran tan especiales.',
  'Me alegra muchísimo haberte encontrado.',
  'Y si el universo realmente tiene una manera extraña de conectar a las personas, quiero pensar que nuestro encuentro tuvo una razón.',
  'No sé dónde nos llevará este camino.',
  'Pero sí sé algo:',
  'me gusta caminarlo contigo.',
  'Y si algún día volvemos a mirar las estrellas juntos, quiero poder señalar una de ellas y decirte:',
]

const finalQuote = '«¿Ves esa estrella?\n\nAhí comenzó uno de mis recuerdos favoritos.» ❤️'

export default function FinalLetter() {
  return (
    <section
      className="relative w-full py-32 md:py-44 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #020408, #040a14, #020408)' }}
    >
      <StarField count={100} />

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-10">
        <SectionTitle
          title="Antes de terminar este pequeño viaje..."
          className="mb-16"
        />

        {/* Carta */}
        <motion.div
          className="letter-bg rounded-2xl p-8 md:p-12 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          {/* Decoración de esquina */}
          <div
            className="absolute top-4 left-4 w-8 h-8 pointer-events-none opacity-20"
            style={{
              borderTop: '1px solid #ffc56a',
              borderLeft: '1px solid #ffc56a',
            }}
          />
          <div
            className="absolute top-4 right-4 w-8 h-8 pointer-events-none opacity-20"
            style={{
              borderTop: '1px solid #ffc56a',
              borderRight: '1px solid #ffc56a',
            }}
          />
          <div
            className="absolute bottom-4 left-4 w-8 h-8 pointer-events-none opacity-20"
            style={{
              borderBottom: '1px solid #ffc56a',
              borderLeft: '1px solid #ffc56a',
            }}
          />
          <div
            className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none opacity-20"
            style={{
              borderBottom: '1px solid #ffc56a',
              borderRight: '1px solid #ffc56a',
            }}
          />

          <div className="space-y-5">
            {letterParagraphs.map((para, i) => (
              <motion.p
                key={i}
                className={`font-serif font-light leading-relaxed ${
                  i === 0
                    ? 'font-script text-star-warm text-xl mb-6'
                    : i === 11 || i === 12
                    ? 'text-star-warm/80 italic'
                    : 'text-white/70'
                }`}
                style={{
                  fontSize:
                    i === 0
                      ? 'clamp(1.3rem, 3vw, 1.8rem)'
                      : 'clamp(0.9rem, 2vw, 1.05rem)',
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
              >
                {para}
              </motion.p>
            ))}

            {/* Cita final */}
            <motion.blockquote
              className="mt-8 pt-6 border-t border-star-warm/10 text-center"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2 }}
            >
              <p
                className="font-script text-star-warm text-glow whitespace-pre-line"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', lineHeight: 1.9 }}
              >
                {finalQuote}
              </p>
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
