'use client'
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
  ]

  const servicesLinks = [
    { name: 'Live2D Model', href: '/services/live2d' },
    { name: 'Stream Overlay', href: '/services/overlay' },
    { name: 'Visual Identity', href: '/services/identity' },
  ]

  return (
    <footer className="mt-4 rounded-t-[3rem] bg-white dark:bg-[#1C1C1E] border-t border-x border-slate-200 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tighter">
              KONAHA <span className="text-[#007AFF]">Studio</span>
            </h3>
            <p className="text-[#1D1D1F]/60 dark:text-[#F5F5F7]/60 font-medium leading-relaxed">
              Konaha Studio is your premier creative partner in the virtual frontier. We specialize in high-end Live2D modeling and immersive stream assets designed to elevate your virtual presence.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#1D1D1F]/30 dark:text-white/20 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#1D1D1F]/70 dark:text-[#F5F5F7]/70 hover:text-[#007AFF] font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#1D1D1F]/30 dark:text-white/20 mb-6">Our Services</h4>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#1D1D1F]/70 dark:text-[#F5F5F7]/70 hover:text-[#007AFF] font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#1D1D1F]/30 dark:text-white/20 mb-6">Stay Connected</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {[Instagram, Twitter, Youtube, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-3.5 rounded-2xl bg-[#F5F5F7] dark:bg-black/40 text-[#1D1D1F]/40 dark:text-[#F5F5F7]/40 hover:text-[#007AFF] hover:bg-white dark:hover:bg-white/10 transition-all active:scale-90 border border-transparent hover:border-slate-100 dark:hover:border-white/5 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs font-bold text-[#1D1D1F]/20 dark:text-white/10 uppercase tracking-[0.2em]">Contact Us: hello@neogen.studio</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#1D1D1F]/20 dark:text-white/10 text-[10px] font-bold uppercase tracking-[0.3em]">© 2024 Konaha Studio. Built for the future.</p>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1F]/20 dark:text-white/10 hover:text-[#007AFF] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1F]/20 dark:text-white/10 hover:text-[#007AFF] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
