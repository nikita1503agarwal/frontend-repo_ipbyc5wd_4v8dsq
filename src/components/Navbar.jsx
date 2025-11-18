import React from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#events', label: 'Events' },
  { href: '#courses', label: 'Courses' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/70 via-indigo-900/60 to-purple-900/60 backdrop-blur-xl shadow-[0_8px_40px_rgba(59,130,246,0.25)]">
          <div className="flex items-center justify-between py-3 px-4">
            <a href="#home" className="group inline-flex items-center gap-3">
              <div className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg">
                <motion.span
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                >
                  <Rocket className="w-5 h-5" />
                </motion.span>
                <Sparkles className="w-4 h-4 text-white/80 absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="block text-white font-bold tracking-tight text-lg">InnoTwist</span>
                <span className="block text-xs text-blue-200/80 -mt-1">Tech Education Center</span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-blue-100/90 hover:text-white transition-colors text-sm">
                  {l.label}
                </a>
              ))}
              <a href="#enroll" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-4 py-2 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-indigo-500/40 transition-all">
                Enroll Now
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 p-2 text-white/90">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 pb-4 flex flex-col gap-3">
                  {links.map(l => (
                    <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-blue-100/90 hover:text-white hover:bg-white/5 transition">
                      {l.label}
                    </a>
                  ))}
                  <a href="#enroll" className="rounded-lg px-3 py-2 text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-center font-semibold">
                    Enroll Now
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
