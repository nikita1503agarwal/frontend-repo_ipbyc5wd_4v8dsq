import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Cpu, Users, Sparkles } from 'lucide-react'

const courses = [
  {
    title: 'Modern Web Development',
    desc: 'From HTML/CSS basics to React and APIs — build real, portfolio‑ready projects.',
    age: 'Teens & Adults (14+)',
    icon: Code2,
    color: 'from-blue-500 via-indigo-500 to-purple-500',
  },
  {
    title: 'Kids Robotics Explorer',
    desc: 'Hands-on robotics with drag‑and‑drop coding and sensors. Friendly, playful, creative.',
    age: 'Ages 7–12',
    icon: Cpu,
    color: 'from-indigo-500 via-purple-500 to-blue-500',
  },
  {
    title: 'Private Tech Coaching',
    desc: 'One‑on‑one sessions tailored to your goals: coding, robotics, AI, and more.',
    age: 'All ages',
    icon: Users,
    color: 'from-purple-500 via-blue-500 to-indigo-500',
  },
]

export default function Courses() {
  return (
    <section id="courses" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5 text-blue-300" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Courses & Programs</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition relative overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${c.color} opacity-30`} />
              <div className="relative">
                <div className={`grid place-items-center w-12 h-12 rounded-xl text-white bg-gradient-to-br ${c.color} shadow-lg shadow-blue-500/20 mb-4`}>
                  {React.createElement(c.icon, { className: 'w-6 h-6' })}
                </div>
                <h3 className="text-white font-semibold text-xl leading-tight mb-2">{c.title}</h3>
                <p className="text-blue-100/90 text-sm mb-3">{c.desc}</p>
                <p className="text-xs text-blue-200/80 mb-4">{c.age}</p>
                <div className="flex gap-3">
                  <a href="#enroll" className="rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition-all">Enroll</a>
                  <a href="#contact" className="rounded-lg border border-white/15 bg-white/5 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10 transition-all">Details</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
