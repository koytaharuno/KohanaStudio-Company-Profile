'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Rocket, Users, Globe, Award, Heart, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const journey = [
    {
      year: '2021',
      title: 'The Foundation',
      desc: 'Founded by digital artists and rigging enthusiasts with a vision to redefine virtual storytelling.'
    },
    {
      year: '2022',
      title: 'Breaking Frontiers',
      desc: 'Successfully launched over 50+ high-end models for independent creators across Southeast Asia and Japan.'
    },
    {
      year: '2023',
      title: 'Innovation Peak',
      desc: 'Introduced our proprietary ultra-smooth rigging technique, setting a new industry standard.'
    },
    {
      year: '2024',
      title: 'The Future',
      desc: 'Expanding into a full-service agency, helping next-gen creators build their entire virtual brand.'
    }
  ]

  const partners = [
    { name: 'StreamTech Solutions', logo: 'ST' },
    { name: 'Nova Art Japan', logo: 'NA' },
    { name: 'V-Unity Global', logo: 'VG' },
    { name: 'CyberCore Media', logo: 'CM' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Navbar />

      <main className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Hero Section */}
          <div className="mb-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-[7rem] font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tighter leading-[0.95] mb-12">
                Behind the <br /> <span className="text-[#007AFF]">Konaha Legacy.</span>
              </h1>
              <p className="text-2xl md:text-3xl text-[#1D1D1F]/50 dark:text-[#F5F5F7]/50 max-w-3xl font-medium leading-relaxed">
                We don't just build models. We weave digital souls that connect creators with their communities across the virtual world.
              </p>
            </motion.div>
          </div>

          {/* Story / Journey Section - Vertical Timeline Style (Flat) */}
          <div className="mb-48 relative">
            <div className="mb-24">
              <h2 className="text-sm font-black text-[#007AFF] uppercase tracking-[0.3em] mb-4">Chronicle</h2>
              <div className="h-1 w-12 bg-[#007AFF] rounded-full" />
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 dark:bg-white/10" />

              <div className="space-y-32">
                {journey.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`relative flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-2 w-2 h-2 rounded-full bg-[#007AFF] z-10 shadow-[0_0_10px_rgba(0,122,255,0.5)]" />
                    
                    <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-16">
                      <div className={`${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="block text-4xl font-black text-slate-100 dark:text-white/5 mb-4">{item.year}</span>
                        <h4 className="text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-4 tracking-tight">{item.title}</h4>
                        <p className="text-lg text-[#1D1D1F]/50 dark:text-[#F5F5F7]/50 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values Section (Flat) */}
          <div className="mb-48 border-y border-slate-100 dark:border-white/5 py-32">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-12 tracking-tight">
                  Driven by <br /> Passion & Innovation.
                </h2>
                <div className="space-y-12">
                  <div className="flex items-start gap-6">
                    <Award className="text-[#007AFF] mt-1" size={28} strokeWidth={1.5} />
                    <div>
                      <h4 className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">Unmatched Quality</h4>
                      <p className="text-[#1D1D1F]/50 dark:text-[#F5F5F7]/50 font-medium text-lg leading-relaxed">Every stroke and every line of code is crafted to perfection, ensuring your model stands out.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <Heart className="text-pink-500 mt-1" size={28} strokeWidth={1.5} />
                    <div>
                      <h4 className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">Creator-Centric</h4>
                      <p className="text-[#1D1D1F]/50 dark:text-[#F5F5F7]/50 font-medium text-lg leading-relaxed">We listen to your vision. Your model is a reflection of your personality, and we honor that.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-12">
                {[
                  { Icon: Rocket, label: 'Growth', color: 'text-blue-500' },
                  { Icon: ShieldCheck, label: 'Trust', color: 'text-sky-500' },
                  { Icon: Users, label: 'Community', color: 'text-[#5AC8FA]' },
                  { Icon: Globe, label: 'Global', color: 'text-[#007AFF]' }
                ].map((item, i) => (
                  <div key={i} className="text-center md:text-left">
                    <item.Icon className={`${item.color} mb-6 mx-auto md:mx-0`} size={40} strokeWidth={1} />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-[#1D1D1F]/30 dark:text-white/20">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-48">
            <h2 className="text-xs font-black text-center text-[#1D1D1F]/20 dark:text-white/10 uppercase tracking-[0.4em] mb-20">Collaborations</h2>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 grayscale opacity-30 hover:opacity-100 transition-all duration-700">
              {partners.map((partner) => (
                <div key={partner.name} className="group flex flex-col items-center">
                  <span className="text-3xl font-black text-[#1D1D1F] dark:text-white mb-2">{partner.logo}</span>
                  <span className="text-[10px] font-bold text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section (Flat) */}
          <div className="text-center py-20">
            <h2 className="text-5xl md:text-7xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-12 tracking-tight">
              Let's build <br /> your <span className="text-[#007AFF]">legend.</span>
            </h2>
            <Link href="/contact" className="inline-flex items-center space-x-4 px-12 py-6 bg-[#007AFF] text-white rounded-full font-black text-xl hover:bg-[#0071E3] transition-all active:scale-95 group">
              <span>Order Now</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
