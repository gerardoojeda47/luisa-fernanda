import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import MoonScene from '../components/MoonScene'

export default function MoonAndWater() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #020408 0%, #030c1a 40%, #020810 70%, #020408 100%)',
      }}
    >
      <StarField count={140} />

      {/* Glow atmosférico */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 35%, rgba(26,58,107,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Cielo — zona superior */}
      <div className="relative z-10 flex flex-col items-center pt-24 md:pt-32">
        {/* Luna */}
        <motion.div
          className="float-slow"
          style={{ '--fdelay': '0s' } as React.CSSProperties}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        >
          <MoonScene size={200} />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="mt-16 max-w-lg px-6 text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          <p
            className="font-serif font-light text-white/75 leading-relaxed italic"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}
          >
            "Me gustaría algún día estar contigo frente al agua, mirar la luna y quedarnos en
            silencio, simplemente disfrutando de estar juntos."
          </p>

          <motion.p
            className="font-script text-star-warm/70"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            "Porque hay momentos que no necesitan palabras."
          </motion.p>
        </motion.div>
      </div>

      {/* Agua — zona inferior */}
      <div className="relative mt-24 pb-0" style={{ height: '280px' }}>
        {/* Reflejo de la luna en el agua */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base del lago */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(3,12,26,0.6), rgba(2,8,16,0.95))',
            }}
          />

          {/* Reflejo luminoso de la luna */}
          <motion.div
            className="absolute"
            style={{
              left: '50%',
              top: '10px',
              transform: 'translateX(-50%)',
              width: '6px',
              background:
                'linear-gradient(to bottom, rgba(255,220,150,0.6), rgba(255,220,150,0.1))',
              height: '240px',
              filter: 'blur(6px)',
              borderRadius: '50%',
            }}
            animate={{ scaleX: [1, 1.4, 0.8, 1.2, 1], opacity: [0.6, 0.8, 0.5, 0.7, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Halo del reflejo */}
          <motion.div
            className="absolute"
            style={{
              left: '50%',
              top: '30px',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse, rgba(255,220,150,0.12) 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
            animate={{ scaleX: [1, 1.3, 0.9, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Ondas del agua — capas */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: 0,
                right: 0,
                top: `${40 + i * 45}px`,
                height: '1px',
                background: `linear-gradient(to right, transparent, rgba(255,255,255,${0.04 - i * 0.005}) ${20 + i * 5}%, rgba(255,255,255,${0.08 - i * 0.01}) 50%, rgba(255,255,255,${0.04 - i * 0.005}) ${80 - i * 5}%, transparent)`,
              }}
              animate={{ scaleX: [1, 1.02, 0.98, 1.01, 1], opacity: [0.6, 0.3, 0.7, 0.4, 0.6] }}
              transition={{
                duration: 4 + i * 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.6,
              }}
            />
          ))}

          {/* Partículas luminosas en el agua */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${30 + Math.random() * 60}%`,
                width: '2px',
                height: '2px',
                background: '#ffd9a0',
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.5, 1.5, 0.5],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.7,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
