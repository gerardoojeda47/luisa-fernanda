import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StarField from '../components/StarField'
import ShootingStars from '../components/ShootingStars'
import MoonScene from '../components/MoonScene'
import RomanticButton from '../components/RomanticButton'

interface HeroProps {
  onStart: () => void
}

type IntroPhase = 'line1' | 'line2' | 'line3' | 'hero'

export default function Hero({ onStart }: HeroProps) {
  const [phase, setPhase] = useState<IntroPhase>('line1')

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('line2'), 3200),
      setTimeout(() => setPhase('line3'), 6400),
      setTimeout(() => setPhase('hero'), 9800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const introLines = {
    line1: 'Hay personas que llegan a nuestra vida por casualidad...',
    line2: '...y terminan convirtiéndose en nuestro universo.',
    line3: 'Esta historia es para ti, Luisa Fernanda ❤️',
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ background: '#020408' }}>
      {/* Fondo espacial */}
      <StarField count={280} className="z-0" />
      <ShootingStars />

      {/* Gradiente de profundidad */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(10,22,40,0.4) 0%, transparent 70%)',
        }}
      />

      {/* Luna posicionada en esquina superior derecha */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        style={{ top: '6%', right: '8%' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: phase === 'hero' ? 1 : 0.3, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.5 }}
      >
        <MoonScene size={180} />
      </motion.div>

      {/* Partículas flotantes */}
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: i % 3 === 0 ? '#ffd9a0' : i % 3 === 1 ? '#a8c8ff' : '#f8f4ff',
            opacity: Math.random() * 0.5 + 0.2,
            '--pduration': `${Math.random() * 8 + 6}s`,
            '--pdelay': `${Math.random() * 4}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* ── Intro cinematográfica ── */}
      <AnimatePresence mode="wait">
        {phase !== 'hero' && (
          <motion.div
            key="intro"
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <AnimatePresence mode="wait">
              {phase === 'line1' && (
                <motion.p
                  key="l1"
                  className="font-serif font-light text-white/80 text-center max-w-xl leading-relaxed"
                  style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.6rem)' }}
                  initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(8px)', y: -15 }}
                  transition={{ duration: 1.4 }}
                >
                  {introLines.line1}
                </motion.p>
              )}
              {phase === 'line2' && (
                <motion.p
                  key="l2"
                  className="font-serif font-light text-white/90 text-center max-w-xl leading-relaxed"
                  style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.6rem)' }}
                  initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(8px)', y: -15 }}
                  transition={{ duration: 1.4 }}
                >
                  {introLines.line2}
                </motion.p>
              )}
              {phase === 'line3' && (
                <motion.p
                  key="l3"
                  className="font-script text-star-warm text-glow text-center max-w-xl"
                  style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)' }}
                  initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.95 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 1.4 }}
                >
                  {introLines.line3}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero principal ── */}
      <AnimatePresence>
        {phase === 'hero' && (
          <motion.div
            key="hero-content"
            className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
          >
            {/* Subtítulo superior */}
            <motion.p
              className="font-script text-star-warm/70 mb-4 tracking-widest"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Nuestro pequeño universo
            </motion.p>

            {/* Nombre principal */}
            <motion.h1
              className="font-serif font-light text-white text-glow-white leading-none tracking-[0.15em]"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 7rem)' }}
              initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.9 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ delay: 0.6, duration: 1.6 }}
            >
              LUISA FERNANDA
            </motion.h1>

            {/* Línea dorada */}
            <motion.div
              className="my-5 h-px bg-gradient-to-r from-transparent via-star-gold/50 to-transparent"
              style={{ width: 'min(400px, 80vw)' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.2 }}
            />

            {/* Mi persona especial */}
            <motion.p
              className="font-serif font-light text-star-warm/90 tracking-[0.3em] uppercase"
              style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              Mi persona especial ✨
            </motion.p>

            {/* Frase */}
            <motion.p
              className="font-serif font-light text-white/60 text-center leading-relaxed mt-8 max-w-lg"
              style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1.2 }}
            >
              Tres semanas pueden parecer poco tiempo para el mundo, pero para mi corazón han sido
              suficientes para guardar recuerdos que quiero conservar por mucho tiempo.
            </motion.p>

            {/* Botón */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 1 }}
            >
              <RomanticButton onClick={onStart}>
                Comenzar nuestro viaje ✨
              </RomanticButton>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 3.5, duration: 1 }}
            >
              <span className="font-sans text-white/50 text-xs tracking-widest uppercase">scroll</span>
              <motion.div
                className="w-px h-10 bg-white/30"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
