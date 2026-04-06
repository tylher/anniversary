// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Home',    href: '/'        },
  { label: 'Reasons', href: '/reasons' },
  { label: 'Gallery', href: '/gallery' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-screen z-50 bg-stone-50/70 dark:bg-stone-950/70 backdrop-blur-md shadow-[0_32px_32px_rgba(44,24,16,0.04)] transition-colors duration-500">
      <div className="flex justify-between items-center px-6 sm:px-8 py-4 sm:py-6 max-w-7xl mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className="font-script text-xl sm:text-2xl text-stone-900 dark:text-stone-100"
          onClick={() => setMenuOpen(false)}
        >
          The Anniversary
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-12 font-serif italic text-lg">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-500 hover:text-amber-700 dark:hover:text-amber-300 ${
                  isActive
                    ? 'text-amber-800 dark:text-amber-200 border-b border-amber-800/30'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 group z-40"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-stone-700 dark:bg-stone-300 transition-all duration-300 origin-center ${
            menuOpen ? 'rotate-45 translate-y-1.75' : ''
          }`} />
          <span className={`block h-px w-6 bg-stone-700 dark:bg-stone-300 transition-all duration-300 ${
            menuOpen ? 'opacity-0 scale-x-0' : ''
          }`} />
          <span className={`block h-px w-6 bg-stone-700 dark:bg-stone-300 transition-all duration-300 origin-center ${
            menuOpen ? '-rotate-45 -translate-y-1.75' : ''
          }`} />
        </button>

      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-6 py-6 font-serif italic text-lg border-t border-stone-200/50 dark:border-stone-800/50">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors duration-300 hover:text-amber-700 dark:hover:text-amber-300 ${
                  isActive
                    ? 'text-amber-800 dark:text-amber-200 border-b border-amber-800/30'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar