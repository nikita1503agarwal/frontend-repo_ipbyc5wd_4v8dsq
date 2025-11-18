import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react'

const events = [
  {
    title: 'Weekend Web Dev Bootcamp',
    date: 'Nov 23-24, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'InnoTwist Campus',
    tag: 'Bootcamp',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Kids Robotics Play Lab',
    date: 'Dec 7, 2025',
    time: '11:00 AM - 1:00 PM',
    location: 'Makerspace Room B',
    tag: 'Workshop',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Tech Meetup: AI for Beginners',
    date: 'Dec 15, 2025',
    time: '6:00 PM - 8:00 PM',
    location: 'Community Hall',
    tag: 'Meetup',
    color: 'from-purple-500 to-blue-500',
  },
]

export default function Events() {
  return (
    <section id="events" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5 text-blue-300" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Upcoming Events</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition overflow-hidden"
            >
              <div className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${e.color} text-white mb-3`}>
                {e.tag}
              </div>
              <h3 className="text-white font-semibold text-lg leading-tight mb-3 group-hover:text-blue-100 transition-colors">{e.title}</h3>
              <div className="space-y-2 text-blue-100/90 text-sm">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {e.date}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {e.time}</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {e.location}</div>
              </div>
              <div className="mt-4">
                <a href="#enroll" className="inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 py-2 font-semibold shadow hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all">Reserve Spot</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
