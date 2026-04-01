// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home',    href: '/'        },
  { label: 'Reasons', href: '/reasons' },
//   { label: 'Letter',  href: '/letter'  },
  { label: 'Gallery', href: '/gallery' },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-100 bg-stone-50/70 dark:bg-stone-950/70 backdrop-blur-md shadow-[0_32px_32px_rgba(44,24,16,0.04)] transition-colors duration-500">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">

        <Link href="/" className="font-script text-2xl text-stone-900 dark:text-stone-100">
          The Anniversary
        </Link>

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

      </div>
    </nav>
  )
}

export default Navbar;