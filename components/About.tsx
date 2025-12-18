'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#1C1C1E] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            data-aos="fade-right"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative group">
               <img 
                 src="/images/menu.jpeg" 
                 alt="About Konaha" 
                 className="w-full h-auto object-contain border border-slate-200 dark:border-white/10 rounded-3xl transition-transform duration-1000 group-hover:scale-[1.02] shadow-sm"
               />
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
          
          <motion.div
            data-aos="fade-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight leading-tight">
              Crafting <span className="text-[#007AFF]">World-Class</span> <br /> Digital Entities.
            </h2>
            <p className="text-[#1D1D1F]/60 dark:text-slate-400 text-lg leading-relaxed mb-10 font-medium mx-auto lg:mx-0">
              Konaha Studio isn't just about technical rigging. We are your creative partners in crafting iconic personas. We blend high-end aesthetics with the latest motion technology to create models with true personality.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-slate-100 dark:border-white/10 pt-12 items-center lg:items-start">
              {[
                { label: 'Successful Projects', val: '20+' },
                { label: 'Client Satisfaction', val: '99.9%' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-5xl font-bold text-[#007AFF] mb-2 tracking-tight">{stat.val}</div>
                  <div className="text-[#1D1D1F]/30 dark:text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
