import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import SectionTitle from '../components/SectionTitle'

const poemLines = [
  { text: 'Si alguna noche miras al cielo', style: 'normal' },
  { text: 'y encuentras una estrella brillando diferente,', style: 'normal' },
  { text: 'quizás sea el universo recordándote', style: 'normal' },
  { text: 'que en algún lugar existe alguien', style: 'normal' },
  { text: 'que piensa en ti.', style: 'italic gold' },
  { text: '', style: 'spacer' },
  { text: 'Porque estas tres semanas contigo', style: 'normal' },
  { text: 'no fueron simplemente tres semanas.', style: 'italic' },
  { text: '', style: 'spacer' },
  { text: 'Fueron risas,', style: 'list' },
  { text: 'conversaciones,', style: 'list' },
  { text: 'miradas,', style: 'list' },
  { text: 'momentos,', style: 'list' },
  { text: 'coincidencias', style: 'list' },
  { text: 'y pequeños instantes', style: 'list' },
  { text: 'que mi corazón decidió guardar.', style: 'italic' },
  { text: '', style: 'spacer' },
  { text: 'Llegaste sin avisar,', style: 'normal' },
  { text: 'sin prometer nada,', style: 'normal' },
  { text: 'sin saber cuánto significarías.', style: 'italic' },
  { text: '', style: 'spacer' },
  { text: 'Y poco a poco,', style: 'normal' },
  { text: 'entre palabras y momentos,', style: 'normal' },
  { text: 'fuiste encontrando un lugar', style: 'normal' },
  { text: 'que nadie había logrado ocupar.', style: 'italic gold' },
  { text: '', style: 'spacer' },
  { text: 'A veces pienso', style: 'normal' },
  { text: 'que las casualidades no existen.', style: 'italic' },
  { text: '', style: 'spacer' },
  { text: 'Que quizás el universo,', style: 'normal' },
  { text: 'entre millones de personas,', style: 'normal' },
  { text: 'hizo que nuestros caminos', style: 'normal' },
  { text: 'se cruzaran justamente ahora.', style: 'italic gold' },
  { text: '', style: 'spacer' },
  { text: 'Y mi corazón me dice', style: 'normal' },
  { text: 'que tal vez tú eres', style: 'normal' },
  { text: 'ese amor que estaba esperando encontrar.', style: 'italic gold' },
  { text: '', style: 'spacer' },
  { text: 'Porque cuando pienso en ti', style: 'normal' },
  { text: 'no imagino solamente el presente.', style: 'italic' },
  { text: '', style: 'spacer' },
  { text: 'Imagino noches mirando las estrellas,', style: 'list' },
  { text: 'caminatas sin saber a dónde vamos,', style: 'list' },
  { text: 'viajes,', style: 'list' },
  { text: 'risas,', style: 'list' },
  { text: 'fotografías,', style: 'list' },
  { text: 'atardeceres,', style: 'list' },
  { text: 'la luna reflejada sobre el agua', style: 'list' },
  { text: 'y una vida llena de momentos', style: 'list' },
  { text: 'que todavía no hemos vivido.', style: 'italic' },
  { text: '', style: 'spacer' },
  { text: 'Quiero que algún día', style: 'normal' },
  { text: 'podamos mirar atrás', style: 'normal' },
  { text: 'y decir:', style: 'normal' },
  { text: '', style: 'spacer' },
  { text: '«¿Recuerdas cuando todo comenzó?»', style: 'script gold' },
  { text: '', style: 'spacer' },
  { text: 'Y recordar estas tres semanas', style: 'normal' },
  { text: 'como el comienzo', style: 'normal' },
  { text: 'de algo verdaderamente especial.', style: 'italic gold' },
  { text: '', style: 'spacer' },
  { text: 'Luisa Fernanda...', style: 'script large' },
  { text: '', style: 'spacer' },
  { text: 'si el universo tiene millones de estrellas,', style: 'normal' },
  { text: 'yo solo necesito una.', style: 'italic' },
  { text: '', style: 'spacer' },
  { text: 'La que me haga sentir en casa.', style: 'normal' },
  { text: '', style: 'spacer' },
  { text: 'Y esa estrella,', style: 'normal' },
  { text: 'para mí,', style: 'normal' },
  { text: 'eres tú. ❤️', style: 'script gold large' },
]

function getLineClasses(style: string): string {
  const base = 'font-serif font-light leading-relaxed text-center'
  if (style.includes('script')) return 'font-script text-center'
  if (style.includes('list')) return `${base} pl-4 text-white/65`
  if (style.includes('italic')) return `${base} italic`
  return `${base} text-white/75`
}

function getLineColor(style: string): string {
  if (style.includes('gold')) return '#ffc56a'
  if (style.includes('script')) return '#ffd9a0'
  return 'inherit'
}

function getLineFontSize(style: string): string {
  if (style.includes('large')) return 'clamp(1.4rem, 4vw, 2rem)'
  return 'clamp(0.95rem, 2.2vw, 1.15rem)'
}

export default function Poem() {
  return (
    <section
      className="relative w-full py-32 md:py-44 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #020408, #030810, #020408)' }}
    >
      {/* Fondo de estrellas con movimiento muy suave */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <StarField count={150} />
      </motion.div>

      {/* Gradiente lateral */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(107,63,160,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto px-6">
        <SectionTitle title="Para ti, Luisa Fernanda 🌙" className="mb-20" gold />

        <div className="space-y-3">
          {poemLines.map((line, i) => {
            if (line.style === 'spacer') {
              return <div key={i} className="h-5" />
            }

            return (
              <motion.p
                key={i}
                className={getLineClasses(line.style)}
                style={{
                  fontSize: getLineFontSize(line.style),
                  color: getLineColor(line.style),
                  textShadow: line.style.includes('gold')
                    ? '0 0 20px rgba(255,197,106,0.25)'
                    : undefined,
                }}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {line.text}
              </motion.p>
            )
          })}
        </div>
      </div>
    </section>
  )
}
