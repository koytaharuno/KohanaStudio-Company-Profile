'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const tiers = [
    { 
      name: 'Bust Up', 
      price: '60$', 
      features: ['Head to Chest Illustration', 'Basic Rigging', '3 Custom Expressions', 'Raw Source Files'],
      recommended: false 
    },
    { 
      name: 'Half Body', 
      price: '120$', 
      features: ['Head to Hip Illustration', 'Advanced Rigging', '5 Custom Expressions', 'Essential Overlays'],
      recommended: true 
    },
    { 
      name: 'Full Body', 
      price: '180$', 
      features: ['Full Body Illustration', 'Ultra Smooth Rigging', 'Unlimited Expressions', 'Premium Streaming Kit'],
      recommended: false 
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-[#1C1C1E] border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-4">Investment Plans</h2>
          <p className="text-[#1D1D1F]/60 dark:text-[#F5F5F7]/60 font-medium text-lg">Premium quality at competitive rates.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <motion.div 
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] transition-all duration-500 ${
                t.recommended 
                  ? 'bg-[#F5F5F7] dark:bg-white/5 border-2 border-[#007AFF] shadow-2xl scale-[1.03] z-10' 
                  : 'bg-[#F5F5F7] dark:bg-black/20 border border-slate-100 dark:border-white/5'
              }`}
            >
              <h3 className="text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">{t.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-black text-[#007AFF]">IDR {t.price}</span>
                <span className="text-[#1D1D1F]/40 dark:text-white/20 ml-2 font-bold text-sm tracking-widest">PACK</span>
              </div>
              <ul className="space-y-4 mb-10">
                {t.features.map(f => (
                  <li key={f} className="flex items-center text-[#1D1D1F]/70 dark:text-[#F5F5F7]/70 font-medium text-[15px]">
                    <div className="w-5 h-5 rounded-full bg-[#007AFF] flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="text-white" size={12} strokeWidth={4} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold text-[15px] transition-all ${
                t.recommended 
                  ? 'bg-[#007AFF] text-white hover:bg-[#0071E3] shadow-lg shadow-blue-500/20' 
                  : 'bg-white dark:bg-white/10 text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-slate-50 dark:hover:bg-white/20'
              }`}>
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
