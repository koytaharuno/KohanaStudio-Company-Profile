'use client'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Sparkles, Monitor, Palette, ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'

const serviceData = {
  live2d: {
    title: 'Live2D Model',
    icon: Sparkles,
    color: 'bg-[#007AFF]',
    image: '/images/live2d.jpeg',
    description: 'Professional Live2D model creation from illustration to ready-to-use rigging. We focus on natural expressions and smooth movements for the best streaming experience.',
    features: [
      'High-Res Character Illustration (PSD Layered)',
      'Full Body Rigging (XYZ movement)',
      'Custom Expressions (Blush, Cry, Angry, etc.)',
      'Dynamic Hair & Clothing Physics',
      'VTube Studio & PrprLive Compatible'
    ]
  },
  overlay: {
    title: 'Stream Overlay',
    icon: Monitor,
    color: 'bg-[#5856D6]',
    image: '/images/stream.jpeg',
    description: 'Exclusive stream layouts reflecting your VTuber persona. Our overlays are designed to increase viewer interaction and professional presence.',
    features: [
      'Game & Just Chatting Layouts',
      'Animated Alert Box & Notifications',
      'Stinger Transitions (WebM)',
      'Schedule & Social Media Panels',
      'Custom Music & Chatbox Integration'
    ]
  },
  identity: {
    title: 'Visual Identity',
    icon: Palette,
    color: 'bg-[#32ADE6]',
    image: '/images/visuality.jpeg',
    description: 'Building a strong brand for your virtual career. We help create consistent visual elements across all platforms.',
    features: [
      'Custom Logo Design (Type & Icon)',
      'Social Media Banners & Profile Kits',
      'Color Palette & Typography Guide',
      'Initial Merchandise Concepts',
      'Multi-format Logo Assets'
    ]
  }
}

export default function ServiceDetail() {
  const params = useParams()
  const id = params.id as string
  const service = serviceData[id as keyof typeof serviceData]

  if (!service) return <div>Service not found</div>

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-black transition-colors duration-500">
      <Navbar />

      <main className="pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center space-x-2 text-[#007AFF] mb-12 font-bold group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center text-center lg:text-left">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-8 tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl text-[#1D1D1F]/60 dark:text-slate-400 leading-relaxed mb-12 font-medium mx-auto lg:mx-0">
                {service.description}
              </p>

              <div className="space-y-4 mb-12 w-full max-w-lg lg:max-w-none text-left">
                <h3 className="text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-6 text-center lg:text-left">What you'll get:</h3>
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 text-[#1D1D1F]/70 dark:text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-full bg-[#007AFF] flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} strokeWidth={4} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="px-10 py-4 bg-[#007AFF] hover:bg-[#0071E3] text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 transition-all active:scale-95">
                Start Project
              </button>
            </motion.div>

            {/* Right Content - Service Specific Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto max-h-[80vh] object-contain border border-slate-200 dark:border-white/10 rounded-3xl transition-transform duration-1000 group-hover:scale-[1.02] shadow-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
