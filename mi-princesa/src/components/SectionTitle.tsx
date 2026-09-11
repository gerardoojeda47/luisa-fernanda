import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  gold?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
  gold = false,
}: SectionTitleProps) {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <motion.div
      className={`${alignment[align]} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {subtitle && (
        <p className="font-script text-star-warm/60 text-lg md:text-xl mb-3 tracking-wide">
          {subtitle}
        </p>
      )}
      <h2
        className={`font-serif font-light leading-tight ${
          gold ? 'text-glow text-star-gold' : 'text-white text-glow-white'
        }`}
        style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
      >
        {title}
      </h2>
      {/* Línea decorativa */}
      <motion.div
        className={`mt-4 h-px mx-auto ${gold ? 'bg-star-gold/30' : 'bg-white/20'}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        style={{ width: '80px', transformOrigin: align === 'center' ? 'center' : align }}
      />
    </motion.div>
  )
}
