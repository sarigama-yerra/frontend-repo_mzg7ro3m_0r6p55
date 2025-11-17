import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Principles', href: '#principles' },
    { label: 'Products', href: '#products' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-white text-lg sm:text-xl">
            <span className="text-white">Unshakeable</span>{' '}
            <span className="text-neutral-300">Discipline</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors">
              Start Now
            </a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="py-4 grid gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-neutral-200 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-neutral-200">
                Start Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
