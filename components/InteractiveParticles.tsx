'use client'
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion'
import { Sparkles, Star, Circle, Square, Zap } from 'lucide-react'
import { useEffect, useState, useMemo } from 'react'

interface ParticleProps {
  index: number
  smoothX: MotionValue<number>
  smoothY: MotionValue<number>
  ornament: any
}

function ParticleItem({ index, smoothX, smoothY, ornament }: ParticleProps) {
  const size = useMemo(() => 15 + Math.random() * 35, [])
  const factor = useMemo(() => 20 + Math.random() * 100, [])
  
  const x = useTransform(smoothX, (val) => val * factor * (index % 2 === 0 ? 1 : -1))
  const y = useTransform(smoothY, (val) => val * factor * (index % 3 === 0 ? 1 : -1))

  return (
    <motion.div
      style={{ 
        x, 
        y,
        top: `${(index * 7) % 100}%`, 
        left: `${(index * 13) % 100}%` 
      }}
      animate={{ 
        rotate: [0, 360],
        scale: [0.8, 1.2, 0.8],
        opacity: [0.1, 0.4, 0.1]
      }}
      transition={{ 
        rotate: { duration: 15 + Math.random() * 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 4 + Math.random() * 6, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 5 + Math.random() * 7, repeat: Infinity, ease: "easeInOut" }
      }}
      className={`absolute ${ornament.color} drop-shadow-[0_0_8px_rgba(0,122,255,0.2)]`}
    >
      <ornament.Icon size={size} strokeWidth={1} />
    </motion.div>
  )
}

export default function InteractiveParticles() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const ornaments = useMemo(() => [
    { Icon: Star, color: 'text-yellow-400/30' },
    { Icon: Circle, color: 'text-blue-400/30' },
    { Icon: Square, color: 'text-[#007AFF]/30' },
    { Icon: Sparkles, color: 'text-sky-400/30' },
    { Icon: Zap, color: 'text-blue-500/30' },
  ], [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <ParticleItem 
          key={i} 
          index={i} 
          smoothX={smoothX} 
          smoothY={smoothY} 
          ornament={ornaments[i % ornaments.length]} 
        />
      ))}
    </div>
  )
}
