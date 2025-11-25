// components/Navbar.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Greg
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#home" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/progetti" className="text-gray-700 hover:text-blue-600 transition">
              Progetti
            </Link>
            <Link href="/servizi" className="text-gray-700 hover:text-blue-600 transition">
              Servizi
            </Link>
            <Link href="/#tecnologie" className="text-gray-700 hover:text-blue-600 transition">
              Tech Stack
            </Link>
            <Link 
              href="/#contatti" 
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition"
            >
              Contattami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/#home" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/progetti" className="text-gray-700 hover:text-blue-600">
                Progetti
              </Link>
              <Link href="/servizi" className="text-gray-700 hover:text-blue-600">
                Servizi
              </Link>
              <Link href="/#tecnologie" className="text-gray-700 hover:text-blue-600">
                Tech Stack
              </Link>
              <Link href="/#contatti" className="text-blue-600 font-semibold">
                Contattami
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}