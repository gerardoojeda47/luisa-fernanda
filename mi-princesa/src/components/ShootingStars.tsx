import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ShootingStar {
  id: number
  x: number
  y: number
  speed: number
  showWish: boolean
}

export default function ShootingStars() {
  const [stars, setStars] = useState<ShootingStar[]>([])
  const [wishVisible, setWishVisible] = useState(false)

  const spawnStar = useCallback(() => {
    const id = Date.now()
    const newStar: ShootingStar = {
      id,
      x: Math.random() * 60 + 5,
      y: Math.random() * 40 + 5,
      speed: Math.random() * 1 + 1,
      showWish: Math.random() > 0.5,
    }

    setStars((prev) => [...prev, newStar])

    if (newStar.showWish) {
      setTimeout(() => setWishVisible(true), 200)
      setTimeout(() => setWishVisible(false), 2200)
    }

    setTimeout(() => {
      setStars((prev) => prev.filter((s) => s.id !== id))
    }, (newStar.speed + 1) * 1000)
  }, [])

  useEffect(() => {
    // Primera estrella después de 3s
    const firstTimer = setTimeout(spawnStar, 3000)

    // Estrellas recurrentes cada 8–18s
    const interval = setInterval(() => {
      if (Math.random() > 0.3) spawnStar()
    }, Math.random() * 10000 + 8000)

    return () => {
      clearTimeout(firstTimer)
      clearInterval(interval)
    }
  }, [spawnStar])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: star.speed + 0.5 }}
        >
          {/* Núcleo */}
          <div
            className="rounded-full bg-white"
            style={{ width: '3px', height: '3px', boxShadow: '0 0 6px 2px rgba(255,255,255,0.8)' }}
          />
          {/* Trail */}
          <motion.div
            className="absolute top-1/2 right-0"
            style={{
              height: '1.5px',
              transformOrigin: 'right center',
              transform: 'translateY(-50%) rotate(180deg)',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9))',
            }}
            initial={{ width: 0 }}
            animate={{ width: '140px' }}
            transition={{ duration: 0.3 }}
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
            }}
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          {/* Movimiento diagonal */}
          <motion.div
            className="absolute inset-0"
            initial={{ x: 0, y: 0 }}
            animate={{ x: 700, y: 350 }}
            transition={{ duration: star.speed + 0.5, ease: 'easeOut' }}
          />
        </motion.div>
      ))}

      {/* Mensaje "Pide un deseo..." */}
      <AnimatePresence>
        {wishVisible && (
          <motion.p
            className="absolute font-script text-star-warm/70 text-sm md:text-base pointer-events-none"
            style={{ bottom: '20%', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            Pide un deseo...
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
