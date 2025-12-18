'use client'
import { Sparkles, Monitor, Palette, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Services() {
  const items = [
    { 
      id: 'live2d',
      title: 'Live2D Model', 
      icon: Sparkles, 
      desc: 'Professional-grade character design & rigging with natural, expressive motion.',
      color: 'text-[#007AFF]'
    },
    { 
      id: 'overlay',
      title: 'Stream Overlay', 
      icon: Monitor, 
      desc: 'Bespoke streaming layouts designed to maximize viewer engagement.',
      color: 'text-[#5856D6]'
    },
    { 
      id: 'identity',
      title: 'Visual Identity', 
      icon: Palette, 
      desc: 'Complete branding kits including logos, palettes, and social media assets.',
      color: 'text-[#32ADE6]'
    },
  ]

  return (
    <section id="services" className="py-32 bg-white dark:bg-[#1C1C1E] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-6 tracking-tight">Expertise.</h2>
            <p className="text-xl text-[#1D1D1F]/50 dark:text-slate-400 font-medium leading-relaxed mx-auto md:mx-0">
              We specialize in the intersection of art and technology, creating virtual identities that resonate with global audiences.
            </p>
          </div>
          <Link href="/services/live2d" className="group flex items-center space-x-2 text-[#007AFF] font-bold text-lg">
            <span>All Services</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-20 md:gap-16">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/services/${item.id}`} className="block group">
                <div className={`${item.color} mb-8 transition-transform group-hover:scale-110 duration-500`}>
                  <item.icon size={44} strokeWidth={1.2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">{item.title}</h3>
                <p className="text-[#1D1D1F]/50 dark:text-slate-400 leading-relaxed font-medium text-lg mb-8">
                  {item.desc}
                </p>
                <div className="w-8 h-1 bg-[#007AFF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
