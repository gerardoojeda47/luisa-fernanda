interface MoonSceneProps {
  size?: number
  className?: string
  showCraters?: boolean
}

export default function MoonScene({ size = 120, className = '', showCraters = true }: MoonSceneProps) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      {/* Halo exterior */}
      <div
        className="absolute rounded-full moon-glow"
        style={{
          inset: '-30%',
          background: 'radial-gradient(circle, rgba(255,220,150,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      {/* Cuerpo de la luna */}
      <div
        className="absolute inset-0 rounded-full moon-glow"
        style={{
          background: `
            radial-gradient(circle at 35% 35%, #fff8e7 0%, #f0d890 30%, #c8a840 60%, #a07820 80%, #704a10 100%)
          `,
        }}
      >
        {showCraters && (
          <>
            {/* Cráteres sutiles */}
            <div
              className="absolute rounded-full"
              style={{
                width: '18%', height: '18%',
                left: '55%', top: '20%',
                background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: '12%', height: '12%',
                left: '25%', top: '55%',
                background: 'radial-gradient(circle, rgba(0,0,0,0.12) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: '8%', height: '8%',
                left: '65%', top: '65%',
                background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)',
              }}
            />
          </>
        )}
        {/* Brillo superior izquierdo */}
        <div
          className="absolute rounded-full"
          style={{
            width: '40%', height: '40%',
            left: '5%', top: '5%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}
