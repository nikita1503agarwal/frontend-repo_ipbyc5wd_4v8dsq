import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-28">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />

      {/* Aurora/beam overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[40rem] h-[40rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60rem] h-40 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-100"
          >
            Playful. Futuristic. Hands‑on learning.
          </motion.span>

          <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Learn to build the future with InnoTwist
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-blue-100/90 text-lg"
          >
            Web development courses, robotics programs for kids, and private lessons that
            make technology fun, interactive, and creative.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#courses" className="rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-indigo-500/40 transition-all">Explore Courses</a>
            <a href="#events" className="rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 font-semibold hover:bg-white/10 transition-all">Upcoming Events</a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
