import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import StarField from '../components/StarField'

const bottomLines = [
  'Dos personas.',
  'Dos historias.',
  'Un encuentro.',
  'Y quizás...',
  '...un mismo universo.',
]

// Puntos de la constelación con sus conexiones
const constellationStars = [
  { x: 50, y: 20 },
  { x: 30, y: 35 },
  { x: 70, y: 35 },
  { x: 20, y: 55 },
  { x: 50, y: 50 },
  { x: 80, y: 55 },
  { x: 35, y: 72 },
  { x: 65, y: 72 },
]

const connections = [
  [0, 1], [0, 2], [1, 4], [2, 4], [1, 3], [2, 5], [4, 6], [4, 7], [3, 6], [5, 7],
]

export default function OurUniverse() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [progress, setProgress] = useState(0)
  const [inView, setInView] = useState(false)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    if (!inView) return

    let start: number | null = null
    const duration = 3500

    function animate(timestamp: number) {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const p = Math.min(elapsed / duration, 1)
      setProgress(p)

      if (p < 1) {
        animFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animFrameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [inView])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.width
    const H = canvas.height

    ctx.clearRect(0, 0, W, H)

    const pts = constellationStars.map((s) => ({
      x: (s.x / 100) * W,
      y: (s.y / 100) * H,
    }))

    // Conexiones aparecen con el progreso
    const totalConn = connections.length
    connections.forEach(([a, b], i) => {
      const lineProgress = Math.max(0, Math.min(1, (progress * totalConn - i) * 1.5))
      if (lineProgress <= 0) return

      const pa = pts[a]
      const pb = pts[b]

      ctx.beginPath()
      ctx.moveTo(pa.x, pa.y)
      ctx.lineTo(
        pa.x + (pb.x - pa.x) * lineProgress,
        pa.y + (pb.y - pa.y) * lineProgress,
      )
      ctx.strokeStyle = `rgba(168,200,255,${0.25 * lineProgress})`
      ctx.lineWidth = 1
      ctx.stroke()
    })

    // Estrellas de la constelación
    pts.forEach((p, i) => {
      const starProgress = Math.max(0, Math.min(1, progress * constellationStars.length - i + 1))
      if (starProgress <= 0) return

      ctx.beginPath()
      ctx.arc(p.x, p.y, 3 * starProgress, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,220,150,${0.9 * starProgress})`
      ctx.fill()

      // Glow
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 15 * starProgress)
      grad.addColorStop(0, `rgba(255,220,150,${0.3 * starProgress})`)
      grad.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(p.x, p.y, 15 * starProgress, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
    })
  }, [progress])

  return (
    <section
      className="relative w-full py-32 md:py-44 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #020408, #030c1a, #020408)' }}
    >
      <StarField count={120} />

      <motion.div
        className="absolute inset-0"
        onViewportEnter={() => setInView(true)}
        viewport={{ once: true, amount: 0.3 }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col items-center">
        {/* Canvas constelación */}
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <canvas
            ref={canvasRef}
            width={384}
            height={384}
            className="constellation-canvas w-full h-full"
          />

          {/* Iniciales L + G en el centro */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={progress > 0.8 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 1.2 }}
          >
            <div className="text-center">
              <span
                className="font-serif font-light text-glow"
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 4rem)',
                  color: '#ffc56a',
                  textShadow: '0 0 30px rgba(255,197,106,0.5)',
                  letterSpacing: '0.2em',
                }}
              >
                L ✦ G
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Líneas de texto */}
        <div className="text-center space-y-4">
          {bottomLines.map((line, i) => (
            <motion.p
              key={i}
              className={`font-serif font-light ${
                i === 4 ? 'text-star-warm italic' : 'text-white/65'
              }`}
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.5, duration: 0.9 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
