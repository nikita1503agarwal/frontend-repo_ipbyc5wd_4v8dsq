import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg">InnoTwist</h3>
            <p className="text-blue-100/90 mt-2 text-sm">Igniting curiosity and creativity through technology.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p className="text-blue-100/90 text-sm">hello@innotwist.io</p>
            <p className="text-blue-100/90 text-sm">+1 (555) 012-3456</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Visit</h4>
            <p className="text-blue-100/90 text-sm">123 Innovation Drive, Tech City</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-blue-200/70 text-xs">© {new Date().getFullYear()} InnoTwist. All rights reserved.</div>
      </div>
    </footer>
  )
}
