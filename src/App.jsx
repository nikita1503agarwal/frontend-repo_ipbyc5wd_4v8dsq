import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Courses from './components/Courses'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global gradient background */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />
      {/* Soft noise/mesh */}
      <div className="absolute inset-0 -z-0 opacity-[0.15] bg-[radial-gradient(circle_at_20%_20%,#60a5fa_0%,transparent_40%),radial-gradient(circle_at_80%_30%,#8b5cf6_0%,transparent_45%),radial-gradient(circle_at_50%_80%,#3b82f6_0%,transparent_40%)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />

        {/* Divider wave */}
        <div className="relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Events />

        {/* Micro CTA */}
        <section id="about" className="relative py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_50%)]" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Learning that feels like play — and prepares you for tomorrow
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-blue-100/90 max-w-2xl mx-auto"
            >
              Our sessions blend creativity, hands‑on projects, and real‑world tech. Whether you’re 7 or 70, we make innovation accessible and exciting.
            </motion.p>
          </div>
        </section>

        <Courses />

        {/* Enrollment anchor */}
        <section id="enroll" className="relative py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.12),transparent_40%)]" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-white"
            >
              Ready to twist your future with tech?
            </motion.h4>
            <p className="mt-3 text-blue-100/90">Enroll today and join a community of builders, makers, and curious minds.</p>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all">Get in Touch</a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default App
