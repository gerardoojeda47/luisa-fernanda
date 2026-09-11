import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RomanticButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  className?: string
}

export default function RomanticButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: RomanticButtonProps) {
  const base =
    'relative px-8 py-3 rounded-full font-sans font-light text-sm tracking-widest uppercase cursor-pointer overflow-hidden transition-all duration-500 select-none'

  const variants = {
    primary:
      'bg-transparent border border-star-warm/40 text-star-warm hover:border-star-warm/80 hover:text-white',
    ghost:
      'bg-transparent border border-white/20 text-white/70 hover:border-white/50 hover:text-white',
  }

  return (
    <motion.button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow de fondo al hover */}
      <motion.span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,197,106,0.08) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
