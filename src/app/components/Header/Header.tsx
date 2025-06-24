"use client"

import { Leaf, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const phoneNumber = "+4915737926162"

  const handleBookSessionClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <header className="px-4 lg:px-6 h-20 flex items-center backdrop-blur-sm bg-green-50/90 sticky top-0 z-50 border-b border-green-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-md">
            <Leaf className="w-6 h-6 text-green-100" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-green-800 font-serif tracking-tight">I love you pukulo love you sanu</span>
            <span className="text-xs text-green-600 -mt-1 tracking-wider">ANCIENT WELLNESS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {["about", "services", "benefits"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="relative text-sm font-medium text-green-700 hover:text-emerald-600 transition-colors group/nav"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover/nav:w-full"></span>
            </Link>
          ))}
          <a
            href={`tel:${phoneNumber}`}
            onClick={handleBookSessionClick}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 text-white text-sm font-medium hover:shadow-md transition-all hover:from-green-700 hover:to-emerald-800 cursor-pointer"
          >
            Book Session
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-green-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-green-700" /> : <Menu className="w-6 h-6 text-green-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-green-50 border-t border-green-200 shadow-md z-40">
          <nav className="flex flex-col items-start px-6 py-4 gap-4">
            {["about", "services", "benefits"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-green-700 hover:text-emerald-600 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
            <a
              href={`tel:${phoneNumber}`}
              onClick={(e) => {
                handleBookSessionClick(e)
                setMobileMenuOpen(false)
              }}
              className="w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 text-white text-sm font-medium hover:shadow-md transition-all hover:from-green-700 hover:to-emerald-800 cursor-pointer"
            >
              Book Session
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}