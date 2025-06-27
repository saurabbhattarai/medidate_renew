import { Button } from "../ui/button"
import { Leaf, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      {/* Decorative elements - more subtle */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-green-200 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-emerald-200 blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-green-100 blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Badge - smaller */}
          <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-xs font-medium text-green-800 shadow-sm">
            <Sparkles className="w-3 h-3 mr-1.5" />A sanctuary for healing
          </div>

          {/* Main Heading - more compact */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-green-900 leading-snug">
              Welcome to{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                  Renew Flow
                </span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-green-200/50 -z-0 rounded-md"></span>
              </span>
              <br />
              Reiki & Meditation
            </h1>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-green-700 leading-relaxed font-light">
              Step into a space where energy flows freely, stress melts away, and your true self can shine.
            </p>
          </div>

          {/* CTA Section - smaller */}
          <div className="pt-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r cursor-pointer from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-6 py-3 text-base font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03]"
              >
                <Leaf className="w-4 h-4 mr-2" />
                Begin Your Journey
              </Button>
            </Link>
          </div>

          {/* Trust indicators - more compact */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-green-600 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Certified Reiki Master</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Holistic Approach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements - smaller and fewer */}
      <div className="absolute top-16 left-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-24 right-8 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-500"></div>
    </section>
  )
}