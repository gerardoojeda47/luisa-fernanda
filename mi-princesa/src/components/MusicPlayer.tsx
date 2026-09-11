import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasAudio, setHasAudio] = useState(false)

  useEffect(() => {
    // Verificar si existe el archivo de audio
    fetch('./music/song.mp3', { method: 'HEAD' })
      .then((res) => setHasAudio(res.ok))
      .catch(() => setHasAudio(false))
  }, [])

  const togglePlay = () => {
    if (!audioRef.current || !hasAudio) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setVolume(val)
    if (audioRef.current) audioRef.current.volume = val
  }

  if (!hasAudio) return null

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      <audio ref={audioRef} src="./music/song.mp3" loop />

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute bottom-14 right-0 flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{
              background: 'rgba(6,13,26,0.95)',
              border: '1px solid rgba(255,197,106,0.15)',
              backdropFilter: 'blur(10px)',
              minWidth: '180px',
            }}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={togglePlay}
              className="text-star-warm hover:text-white transition-colors"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>

            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={handleVolume}
              className="w-20 accent-amber-400 cursor-pointer"
              style={{ height: '3px' }}
            />

            <button
              onClick={toggleMute}
              className="text-star-warm/60 hover:text-star-warm transition-colors"
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative flex items-center justify-center w-11 h-11 rounded-full"
        style={{
          background: 'rgba(6,13,26,0.9)',
          border: '1px solid rgba(255,197,106,0.2)',
          backdropFilter: 'blur(10px)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Música"
      >
        <Music size={16} className="text-star-warm/80" />
        {isPlaying && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(255,197,106,0.1)' }}
          />
        )}
      </motion.button>
    </motion.div>
  )
}
