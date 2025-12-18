'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  const serviceItems = [
    { name: 'Live2D Model', id: 'live2d' },
    { name: 'Stream Overlay', id: 'overlay' },
    { name: 'Visual Identity', id: 'identity' }
  ]

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 md:px-8">
      <div className={`max-w-6xl mx-auto rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 glass ${
        isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-5'
      }`}>
        <div className="px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="text-lg md:text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] whitespace-nowrap">
            KONAHA <span className="text-[#007AFF]">Studio</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[15px] text-[#1D1D1F]/70 dark:text-slate-300 hover:text-[#007AFF] font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-[15px] text-[#1D1D1F]/70 dark:text-slate-300 hover:text-[#007AFF] font-medium transition-colors">About</Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-[15px] text-[#1D1D1F]/70 dark:text-slate-300 hover:text-[#007AFF] font-medium transition-colors">
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-3 w-52 glass rounded-2xl overflow-hidden p-2"
                  >
                    {serviceItems.map((item) => (
                      <Link 
                        key={item.id}
                        href={`/services/${item.id}`}
                        className="block px-4 py-2 text-[14px] text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-[#007AFF] hover:text-white rounded-xl transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#pricing" className="text-[15px] text-[#1D1D1F]/70 dark:text-slate-300 hover:text-[#007AFF] font-medium transition-colors">Pricing</Link>
            
            <div className="flex items-center space-x-3 border-l border-slate-200 dark:border-slate-800 ml-4 pl-4">
              <button 
                onClick={toggleTheme}
                className="p-2 text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-all"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button className="px-5 py-2 bg-[#007AFF] text-white rounded-full text-[14px] font-semibold hover:bg-[#0071E3] transition-all active:scale-95 shadow-lg shadow-blue-500/20">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center space-x-2 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-all"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className="p-2 text-[#1D1D1F] dark:text-[#F5F5F7]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-2 glass rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10"
          >
            <div className="p-6 space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-[#1D1D1F]/60 dark:text-slate-400">About</Link>
              <div className="pt-4 pb-2 border-t border-slate-100 dark:border-white/5 space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/30 dark:text-slate-500 ml-1">Our Services</p>
                {serviceItems.map(item => (
                  <Link key={item.id} href={`/services/${item.id}`} onClick={() => setIsMenuOpen(false)} className="block text-[#007AFF] font-bold text-lg">{item.name}</Link>
                ))}
              </div>
              <button className="w-full py-4 bg-[#007AFF] text-white rounded-[1.25rem] font-black text-lg shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
