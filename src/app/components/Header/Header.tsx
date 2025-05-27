import { Leaf, Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center backdrop-blur-sm bg-green-50/90 sticky top-0 z-50 border-b border-green-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-md">
            <Leaf className="w-6 h-6 text-green-100" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-green-800 font-serif tracking-tight">Serenity Reiki</span>
            <span className="text-xs text-green-600 -mt-1 tracking-wider">AYURVEDIC WELLNESS</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center">
          <Link 
            href="#about" 
            className="relative text-sm font-medium text-green-700 hover:text-emerald-600 transition-colors group/nav"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link 
            href="#services" 
            className="relative text-sm font-medium text-green-700 hover:text-emerald-600 transition-colors group/nav"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link 
            href="#benefits" 
            className="relative text-sm font-medium text-green-700 hover:text-emerald-600 transition-colors group/nav"
          >
            Benefits
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link 
            href="#contact" 
            className="px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 text-white text-sm font-medium hover:shadow-md transition-all hover:from-green-700 hover:to-emerald-800"
          >
            Book Session
          </Link>
        </nav>

        <button className="md:hidden p-2 rounded-lg hover:bg-green-100 transition-colors">
          <Menu className="w-6 h-6 text-green-700" />
        </button>
      </div>
    </header>
  )
}