import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Phase = 0 | 1 | 2 | 3 | 4

const messages: Record<number, string> = {
  1: 'Mira una estrella fugaz...',
  2: 'Y pide un deseo.',
  3: 'Yo ya pedí el mío.',
  4: 'Que podamos seguir escribiendo esta historia juntos. ❤️',
}

export default function ShootingStarSection() {
  const [phase, setPhase] = useState<Phase>(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!inView) return

    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 3200),
      setTimeout(() => setPhase(3), 5800),
      setTimeout(() => setPhase(4), 8400),
    ]
    return () => timers.forEach(clearTimeout)
  }, [inView])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '100vh',
        background: '#010306',
      }}
    >
      {/* Observer */}
      <motion.div
        className="absolute inset-0"
        onViewportEnter={() => setInView(true)}
        viewport={{ once: true, amount: 0.4 }}
      />

      {/* Estrellas muy sutiles */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="star absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              background: '#f8f4ff',
              '--duration': `${Math.random() * 4 + 3}s`,
              '--delay': `${Math.random() * 5}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Estrella fugaz principal */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.div
            className="absolute"
            style={{ top: '25%', left: '15%' }}
            key="main-star"
          >
            {/* Núcleo */}
            <motion.div
              className="relative"
              initial={{ x: 0, y: 0 }}
              animate={{ x: 900, y: 420 }}
              transition={{ duration: 2.4, ease: 'easeOut', delay: 0 }}
            >
              <div
                className="rounded-full"
                style={{
                  width: '5px',
                  height: '5px',
                  background: 'white',
                  boxShadow: '0 0 10px 4px rgba(255,255,255,0.8), 0 0 20px 8px rgba(255,220,150,0.4)',
                }}
              />
              {/* Trail largo */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  height: '2px',
                  transformOrigin: 'right center',
                  transform: 'translateY(-50%) rotate(180deg)',
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9))',
                  filter: 'blur(1px)',
                }}
                initial={{ width: 0 }}
                animate={{ width: '260px' }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  height: '1px',
                  transformOrigin: 'right center',
                  transform: 'translateY(-50%) rotate(180deg)',
                  background: 'linear-gradient(to right, transparent, rgba(168,200,255,0.5))',
                  filter: 'blur(2px)',
                }}
                initial={{ width: 0 }}
                animate={{ width: '400px' }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mensajes */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {phase >= 1 && phase < 2 && (
            <motion.p
              key="m1"
              className="font-serif font-light text-white/70 text-center"
              style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)' }}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              {messages[1]}
            </motion.p>
          )}
          {phase >= 2 && phase < 3 && (
            <motion.p
              key="m2"
              className="font-serif font-light text-white/80 text-center"
              style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {messages[2]}
            </motion.p>
          )}
          {phase >= 3 && phase < 4 && (
            <motion.p
              key="m3"
              className="font-serif italic text-star-warm/80 text-center"
              style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {messages[3]}
            </motion.p>
          )}
          {phase >= 4 && (
            <motion.p
              key="m4"
              className="font-script text-star-warm text-glow text-center max-w-lg"
              style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)' }}
              initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1.4 }}
            >
              {messages[4]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
