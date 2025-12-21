'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white dark:bg-[#1C1C1E] transition-colors duration-500">

      {/* Dynamic Background Glows (Keep these in background) */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-sky-300/10 dark:bg-sky-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
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
            <p className="text-lg md:text-xl text-[#1D1D1F]/60 dark:text-slate-400 mb-12 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
              Join <strong>Konaha Studio</strong> to bridge the gap between imagination and reality with industry-leading Live2D models.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6">
              <button className="px-10 py-4 bg-[#007AFF] hover:bg-[#0071E3] text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.05] active:scale-95">
                Start Your Journey
              </button>
              <button className="px-10 py-4 glass text-[#1D1D1F] dark:text-[#F5F5F7] rounded-full font-bold text-lg transition-all hover:bg-white dark:hover:bg-white/10 active:scale-95">
                View Showcase
              </button>
            </div>
          </motion.div>

          {/* Right Column: Large Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative group">
              <img
                src="/images/menu1.jpeg"
                alt="Konaha Showcase"
                className="w-full h-auto max-h-[75vh] object-contain border border-slate-200 dark:border-white/10 rounded-3xl transition-transform duration-1000 group-hover:scale-[1.02] shadow-sm"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#007AFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
