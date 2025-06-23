import { Leaf, Zap, Hand, Heart, Eye, Shield, Sun, Sparkles } from "lucide-react"

export function ReikiJourney() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-5 py-2.5 text-sm font-medium text-emerald-800 border border-emerald-200/50 mb-6">
            <Leaf className="w-4 h-4 text-emerald-700" strokeWidth={2} />
            The Sacred Path
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-emerald-900 mb-4">
            The Reiki <span className="text-emerald-600">Energy Journey</span>
          </h2>
          <p className="text-emerald-700/80 md:text-lg leading-relaxed max-w-2xl mx-auto">
            A transformative five-step process that harmonizes your energy with universal life force
          </p>
        </div>

        {/* Simple steps layout */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500 text-white text-lg font-bold flex items-center justify-center mb-4">
              1
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Intention Setting</h3>
            </div>
            <p className="text-emerald-700/90">
              Every session begins with a shared focus — your physical, emotional, or spiritual goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500 text-white text-lg font-bold flex items-center justify-center mb-4">
              2
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Grounding</h3>
            </div>
            <p className="text-emerald-700/90">
              The practitioner connects with universal energy and enters a calm, meditative state.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500 text-white text-lg font-bold flex items-center justify-center mb-4">
              3
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Energy Scanning</h3>
            </div>
            <p className="text-emerald-700/90">
              Using hands or intuitive senses, the practitioner scans your aura and chakras.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500 text-white text-lg font-bold flex items-center justify-center mb-4">
              4
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Energy Channeling</h3>
            </div>
            <p className="text-emerald-700/90">
              Universal life force energy is directed through the practitioner's hands.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500 text-white text-lg font-bold flex items-center justify-center mb-4">
              5
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Integration</h3>
            </div>
            <p className="text-emerald-700/90">
              Energy is sealed with light and gratitude. You'll feel grounded and at peace.
            </p>
          </div>

          {/* Final note */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
             <div className="w-12 h-12 rounded-lg bg-emerald-500 text-white text-lg font-bold flex items-center justify-center mb-4">
              6
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Sun className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Sacred Return</h3>
            </div>
            <p className="text-emerald-700/90">
              Every Reiki session is a sacred return to wholeness, meeting you exactly where you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}