'use client'
import { motion } from 'framer-motion'
import { Zap, Shield, Clock, MessageSquare } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: 'Next-Gen Rigging',
      desc: 'We use proprietary ultra-smooth rigging techniques that set a new industry standard for fluid expressions.'
    },
    {
      icon: Shield,
      title: 'Full Ownership',
      desc: 'You receive full commercial rights to your model and assets. Your identity is 100% yours.'
    },
    {
      icon: Clock,
      title: 'Efficient Workflow',
      desc: 'Our refined production process ensures high-quality results within a predictable 4-8 week timeline.'
    },
    {
      icon: MessageSquare,
      title: 'Dedicated Support',
      desc: 'We provide weekly updates and direct communication to ensure your vision is realized perfectly.'
    }
  ]

  return (
    <section className="py-32 bg-white dark:bg-[#1C1C1E] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-8 tracking-tight leading-tight">
              Why <span className="text-[#007AFF]">Konaha</span> <br /> is the right choice.
            </h2>
            <p className="text-xl text-[#1D1D1F]/60 dark:text-slate-400 font-medium leading-relaxed mb-12 mx-auto lg:mx-0">
              We combine artistic mastery with technical excellence to deliver virtual identities that don't just look good—they feel alive.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <div className="px-6 py-3 rounded-full bg-[#007AFF]/5 text-[#007AFF] text-sm font-bold uppercase tracking-widest">Innovation</div>
              <div className="px-6 py-3 rounded-full bg-[#007AFF]/5 text-[#007AFF] text-sm font-bold uppercase tracking-widest">Quality</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#007AFF] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <item.icon className="text-white" size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-3">{item.title}</h3>
                <p className="text-[#1D1D1F]/50 dark:text-slate-400 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

