import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './sections/Hero'
import ThreeWeeks from './sections/ThreeWeeks'
import TwoSouls from './sections/TwoSouls'
import Poem from './sections/Poem'
import Memories from './sections/Memories'
import MoonAndWater from './sections/MoonAndWater'
import ShootingStarSection from './sections/ShootingStarSection'
import OurUniverse from './sections/OurUniverse'
import FinalLetter from './sections/FinalLetter'
import Ending from './sections/Ending'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleStart = () => {
    // Desplazar suavemente a la primera sección de contenido
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div ref={mainRef} className="relative w-full" style={{ background: '#020408' }}>
      {/* Hero — primera pantalla con intro */}
      <Hero onStart={handleStart} />

      {/* Separador con gradiente */}
      <div
        ref={contentRef}
        className="h-1 w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(255,197,106,0.08), transparent)',
        }}
      />

      {/* Sección 1 — Las tres semanas */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <ThreeWeeks />
        </motion.div>
      </AnimatePresence>

      {/* Separador */}
      <SectionDivider />

      {/* Sección 2 — Dos almas */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <TwoSouls />
      </motion.div>

      {/* Separador */}
      <SectionDivider />

      {/* Sección 3 — Poema */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6 }}
      >
        <Poem />
      </motion.div>

      {/* Separador */}
      <SectionDivider />

      {/* Sección 4 — Galería de recuerdos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <Memories />
      </motion.div>

      {/* Separador */}
      <SectionDivider />

      {/* Sección 5 — Luna y agua */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <MoonAndWater />
      </motion.div>

      {/* Sección 6 — Estrella fugaz especial */}
      <ShootingStarSection />

      {/* Separador */}
      <SectionDivider />

      {/* Sección 7 — Nuestro universo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <OurUniverse />
      </motion.div>

      {/* Separador */}
      <SectionDivider />

      {/* Sección 8 — Carta final */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <FinalLetter />
      </motion.div>

      {/* Final */}
      <Ending onRestart={handleRestart} />

      {/* Reproductor de música (flotante) */}
      <MusicPlayer />
    </div>
  )
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2 px-8">
      <div
        className="h-px flex-1"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(168,200,255,0.06), transparent)',
        }}
      />
      <div
        className="mx-4 rounded-full"
        style={{ width: '4px', height: '4px', background: 'rgba(255,197,106,0.25)' }}
      />
      <div
        className="h-px flex-1"
        style={{
          background:
            'linear-gradient(to left, transparent, rgba(168,200,255,0.06), transparent)',
        }}
      />
    </div>
  )
}
