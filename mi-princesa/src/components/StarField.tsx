import { useMemo } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  type: string
  duration: number
  delay: number
  opacity: number
}

interface StarFieldProps {
  count?: number
  className?: string
}

export default function StarField({ count = 200, className = '' }: StarFieldProps) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, (_, i) => {
      const rand = Math.random()
      let type = 'star'
      if (rand > 0.85) type = 'star-slow'
      else if (rand > 0.7) type = 'star-fast'

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        type,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.6 + 0.2,
      }
    })
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Nebulosa sutil */}
      <div
        className="nebula absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 20% 30%, rgba(107,63,160,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 50% 35% at 80% 70%, rgba(26,58,107,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 60% 20%, rgba(192,69,107,0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Estrellas */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={star.type}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: star.size > 2 ? '#ffd9a0' : '#f8f4ff',
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
