'use client'
import { useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqData = {
    General: [
      { 
        q: "What is the typical completion time for a project?", 
        a: "A standard project typically takes 4 to 8 weeks to complete. This timeline includes character illustration, layering for Live2D, and the complex rigging process. The exact duration depends on the complexity of your design, the number of expressions requested, and our current production queue. We provide regular weekly updates so you can track the progress of your model." 
      },
      { 
        q: "How does the commissioning process work?", 
        a: "Our process is divided into four main phases: 1) Concept & Consultation, where we finalize your design. 2) Illustration phase, where we create the high-resolution art. 3) Rigging phase, where we add movement and physics. 4) Final Testing & Delivery, where we ensure everything works perfectly in VTube Studio. You will receive a detailed timeline and checklist at the start of your commission." 
      }
    ],
    Technical: [
      { 
        q: "What technical features are included in the rigging?", 
        a: "Our rigging includes a full range of motion for the XYZ axes (Head and Body), advanced eye tracking (including physics for eyelashes), fluid mouth movements with vowel shapes, and dynamic physics for hair, clothing, and accessories. We also include a standard set of 3 to 5 custom expressions depending on your chosen package, ensuring your model feels alive and reactive during your streams." 
      },
      { 
        q: "Which files will I receive upon completion?", 
        a: "You will receive a complete production package ready for immediate use. This includes: the layered .PSD source file (High-Res), the compiled .moc3 file for VTube Studio, a physics settings file (.physics3.json), the model configuration file (.model3.json), all necessary texture atlases, and a detailed PDF guide on how to set up and optimize your model for your specific tracking hardware." 
      }
    ],
    Commercial: [
      { 
        q: "Do I have full commercial rights to my model?", 
        a: "Yes, once the final payment is cleared and the files are delivered, you hold full commercial rights to use the model for streaming, content creation, merchandising, and brand partnerships. NEO-GEN Studio retains only the right to use the model and assets in our professional portfolio and promotional materials, unless a Non-Disclosure Agreement (NDA) is specifically requested and agreed upon." 
      },
      { 
        q: "What is your revision policy?", 
        a: "We want you to be absolutely thrilled with your new identity. We offer unlimited minor tweaks during the sketching phase to ensure the design is perfect. After approval of the sketch, we include 3 major revisions during the coloring phase and 2 minor adjustments to the rigging after the final delivery. Major design changes after the illustration phase has been completed may incur additional fees." 
      }
    ]
  }

  const categories = Object.keys(faqData)

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#1C1C1E] border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-6 tracking-tight">Support & FAQ</h2>
          <p className="text-[#1D1D1F]/50 dark:text-[#F5F5F7]/50 font-medium max-w-xl mx-auto">Everything you need to know about our process, technology, and commercial terms.</p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setOpenIndex(null)
              }}
              className={`px-6 py-2.5 rounded-full text-[13px] font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#007AFF] text-white shadow-lg shadow-blue-500/20'
                  : 'bg-[#F5F5F7] dark:bg-white/5 text-[#1D1D1F]/40 dark:text-[#F5F5F7]/40 hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {faqData[activeCategory as keyof typeof faqData].map((f, i) => (
                <div 
                  key={i} 
                  className={`rounded-[2rem] transition-all duration-500 border ${
                    openIndex === i 
                      ? 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-2xl shadow-black/5' 
                      : 'bg-[#F5F5F7] dark:bg-black/20 border-transparent hover:border-slate-200 dark:hover:border-white/5'
                  } overflow-hidden`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                    className="w-full flex items-center justify-between p-7 text-left transition-all"
                  >
                    <span className={`font-bold text-[17px] pr-8 ${
                      openIndex === i ? 'text-[#007AFF]' : 'text-[#1D1D1F] dark:text-[#F5F5F7]'
                    }`}>{f.q}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      openIndex === i ? 'bg-[#007AFF] text-white rotate-180' : 'bg-slate-200 dark:bg-white/10 text-[#1D1D1F]/30 dark:text-white/20'
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="px-7 pb-8 pt-2 text-[#1D1D1F]/60 dark:text-[#F5F5F7]/60 font-medium text-[16px] leading-relaxed max-w-2xl">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
