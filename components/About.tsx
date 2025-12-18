'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#1C1C1E] border-b border-slate-200 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            data-aos="fade-right"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] border-slate-100 border-2 dark:border-white/5 overflow-hidden group relative">
               <img 
                 src="/images/showcase.jpg" 
                 alt="About Konaha" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>
          
          <motion.div
            data-aos="fade-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight leading-tight">
              Crafting <span className="text-[#007AFF]">World-Class</span> <br /> Digital Entities.
            </h2>
            <p className="text-[#1D1D1F]/60 dark:text-[#F5F5F7]/60 text-lg leading-relaxed mb-10 font-medium">
              Konaha Studio isn't just about technical rigging. We are your creative partners in crafting iconic personas. We blend high-end aesthetics with the latest motion technology to create models with true personality.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-slate-100 dark:border-white/5 pt-12">
              {[
                { label: 'Successful Projects', val: '20+' },
                { label: 'Client Satisfaction', val: '99.9%' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-5xl font-bold text-[#007AFF] mb-2 tracking-tight">{stat.val}</div>
                  <div className="text-[#1D1D1F]/30 dark:text-white/20 font-bold text-xs uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
