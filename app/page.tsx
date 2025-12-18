'use client'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] selection:bg-sky-500/30 overflow-x-hidden">
      <Navbar />
      <main className="space-y-0 pb-6">
        <Hero />
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Services />
        </div>
        <div data-aos="fade-up">
          <Pricing />
        </div>
        <div data-aos="fade-up">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  )
}
