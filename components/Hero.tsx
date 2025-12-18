'use client'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white dark:bg-[#1C1C1E] transition-colors duration-500 border-b border-slate-200 dark:border-white/5">
      
      {/* --- Advanced Floating Ornaments --- */}
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-sky-300/10 dark:bg-sky-500/5 rounded-full blur-[120px]" />

      {/* Floating Particles - 30 particles for richness */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -(80 + Math.random() * 100), 0],
            x: [0, (i % 2 === 0 ? 50 : -50) * Math.random(), 0],
            opacity: [0, 0.3 + Math.random() * 0.5, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: Math.random() * 10
          }}
          className="absolute rounded-full z-0 bg-[#007AFF]"
          style={{ 
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%` 
          }}
        />
      ))}

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[5%] w-20 h-20 bg-[#007AFF]/5 rounded-3xl border border-[#007AFF]/10 -z-10 backdrop-blur-sm hidden lg:flex items-center justify-center"
      >
        <div className="w-6 h-6 rounded-full bg-[#007AFF]/20 animate-pulse" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#007AFF]/5 text-[#007AFF] text-xs font-bold tracking-widest uppercase mb-8">
              Experience Konaha Identity
            </span>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-[1.1] mb-8">
              Elevate Your <br />
              <span className="text-[#007AFF] animate-gradient bg-gradient-to-r from-[#007AFF] via-[#5AC8FA] to-[#007AFF] bg-clip-text text-transparent bg-[length:200%_auto]">
                Virtual Persona
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#1D1D1F]/60 dark:text-[#F5F5F7]/60 mb-12 max-w-xl leading-relaxed font-medium">
              Join <strong>Konaha Studio</strong> to bridge the gap between imagination and reality with industry-leading Live2D models.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <button className="px-10 py-4 bg-[#007AFF] hover:bg-[#0071E3] text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.05] active:scale-95">
                Start Your Journey
              </button>
              <button className="px-10 py-4 glass text-[#1D1D1F] dark:text-[#F5F5F7] rounded-full font-bold text-lg transition-all hover:bg-white dark:hover:bg-white/10 active:scale-95">
                View Showcase
              </button>
            </div>
          </motion.div>

          {/* Right Column: Large Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] border border-slate-200 dark:border-white/10 overflow-hidden flex items-center justify-center group relative">
              <img 
                src="/images/showcase.jpg" 
                alt="Konaha Showcase" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#007AFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
