import { useState } from 'react'
import { motion } from 'framer-motion'
import StarField from '../components/StarField'
import SectionTitle from '../components/SectionTitle'

interface Photo {
  src: string
  alt: string
  caption?: string
  isReal: boolean
  style: 'main' | 'square' | 'polaroid' | 'wide' | 'float'
  rotate?: number
}

const photos: Photo[] = [
  {
    src: './images/foto1.jpg',
    alt: 'Nuestro primer recuerdo',
    caption: 'Un momento que quiero guardar.',
    isReal: true,
    style: 'main',
  },
  {
    src: './images/foto2.jpg',
    alt: 'Recuerdo especial',
    caption: 'Contigo todo se siente diferente.',
    isReal: true,
    style: 'square',
  },
  {
    src: './images/foto3.jpg',
    alt: 'Un instante perfecto',
    isReal: true,
    style: 'polaroid',
    rotate: -2,
  },
  {
    src: './images/foto4.jpg',
    alt: 'Recuerdo especial',
    caption: 'Uno de tantos recuerdos que quiero repetir.',
    isReal: true,
    style: 'float',
  },
  {
    src: './images/foto5.jpg',
    alt: 'Un instante para recordar',
    isReal: true,
    style: 'wide',
  },
]

// Placeholder elegante para fotos futuras
function FuturePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(6,13,26,0.9) 0%, rgba(13,31,60,0.7) 100%)',
        border: '1px dashed rgba(255,197,106,0.12)',
      }}
    >
      {/* Estrellas de fondo */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="star absolute rounded-full"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            background: '#f8f4ff',
            '--duration': `${Math.random() * 3 + 2}s`,
            '--delay': `${Math.random() * 4}s`,
          } as React.CSSProperties}
        />
      ))}
      <span style={{ fontSize: '1.8rem', opacity: 0.4 }}>✨</span>
      <span
        className="font-script text-star-warm/30 text-center leading-relaxed"
        style={{ fontSize: '0.8rem' }}
      >
        un recuerdo por vivir...
      </span>
    </div>
  )
}

function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  const [imgError, setImgError] = useState(false)
  const showPlaceholder = !photo.isReal || imgError

  const delay = index * 0.15

  if (photo.style === 'main') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay, duration: 1.2 }}
      >
        <div className="photo-glow rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
          {showPlaceholder ? (
            <FuturePlaceholder className="w-full h-full rounded-2xl" />
          ) : (
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}
        </div>
        {photo.caption && (
          <motion.p
            className="font-script text-star-warm/60 text-sm text-center mt-3 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.4, duration: 0.8 }}
          >
            {photo.caption}
          </motion.p>
        )}
      </motion.div>
    )
  }

  if (photo.style === 'polaroid') {
    return (
      <motion.div
        style={{ rotate: photo.rotate ?? 0 }}
        className="polaroid"
        initial={{ opacity: 0, y: 30, rotate: (photo.rotate ?? 0) - 10 }}
        whileInView={{ opacity: 1, y: 0, rotate: photo.rotate ?? 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay, duration: 1 }}
        whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
      >
        <div className="overflow-hidden" style={{ aspectRatio: '1/1' }}>
          {showPlaceholder ? (
            <FuturePlaceholder className="w-full h-full" />
          ) : (
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <p className="font-script text-white/35 text-xs text-center mt-2">
          un recuerdo ✨
        </p>
      </motion.div>
    )
  }

  if (photo.style === 'float') {
    return (
      <motion.div
        className="float-element"
        style={{ '--fdelay': `${index * 0.6}s` } as React.CSSProperties}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay, duration: 1 }}
      >
        <div
          className="photo-glow rounded-2xl overflow-hidden"
          style={{ aspectRatio: '3/4' }}
        >
          {showPlaceholder ? (
            <FuturePlaceholder className="w-full h-full rounded-2xl" />
          ) : (
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}
        </div>
        {photo.caption && (
          <p className="font-script text-star-warm/50 text-xs text-center mt-2 italic">
            {photo.caption}
          </p>
        )}
      </motion.div>
    )
  }

  if (photo.style === 'wide') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay, duration: 1.3 }}
        style={{ perspective: '800px' }}
      >
        <motion.div
          className="photo-glow rounded-2xl overflow-hidden"
          style={{ aspectRatio: '16/9' }}
          whileHover={{ rotateY: 2, rotateX: -1, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {showPlaceholder ? (
            <FuturePlaceholder className="w-full h-full rounded-2xl" />
          ) : (
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </motion.div>
      </motion.div>
    )
  }

  // square
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.9 }}
    >
      <div className="photo-glow rounded-xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
        {showPlaceholder ? (
          <FuturePlaceholder className="w-full h-full rounded-xl" />
        ) : (
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      {photo.caption && (
        <p className="font-script text-star-warm/60 text-xs text-center mt-2 italic">
          {photo.caption}
        </p>
      )}
    </motion.div>
  )
}

export default function Memories() {
  return (
    <section
      className="relative w-full py-32 md:py-44 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #020408, #040a14, #020408)' }}
    >
      <StarField count={90} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        <SectionTitle
          title="Nuestros recuerdos"
          subtitle="Momentos que quiero conservar"
          className="mb-16"
          gold
        />

        {/* ── Composición artística ── */}

        {/* Fila 1: foto principal grande + columna derecha con 2 fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-start mb-4 md:mb-6">
          {/* Foto 1 — principal, ocupa 1 col en mobile, 2 en md */}
          <div className="col-span-1 md:col-span-2">
            <PhotoCard photo={photos[0]} index={0} />
          </div>

          {/* Columna derecha: foto 2 (cuadrada) + foto 3 (polaroid) */}
          <div className="flex flex-col gap-4 md:gap-5">
            <PhotoCard photo={photos[1]} index={1} />
            <PhotoCard photo={photos[2]} index={2} />
          </div>
        </div>

        {/* Fila 2: foto flotante + foto wide */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-center">
          <PhotoCard photo={photos[3]} index={3} />
          <div className="col-span-1 md:col-span-2">
            <PhotoCard photo={photos[4]} index={4} />
          </div>
        </div>

        {/* Nota al pie */}
        <motion.div
          className="text-center mt-16 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <p className="font-script text-star-warm/50 text-lg">
            Cada foto, un capítulo de esta historia. ✨
          </p>
          <p className="font-sans text-white/20 text-xs tracking-widest uppercase">
            5 recuerdos que guardo en el corazón
          </p>
        </motion.div>
      </div>
    </section>
  )
}
