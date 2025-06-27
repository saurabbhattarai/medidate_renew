import { Leaf, Zap, Hand, Heart, Eye, Shield, Sun, Sparkles } from "lucide-react"

export function ReikiJourney() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-5 py-2.5 text-sm font-medium text-emerald-800 border border-emerald-200/50 mb-6">
            <Leaf className="w-4 h-4 text-emerald-700" strokeWidth={2} />
            Reiki Healing Sessions
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-emerald-900 mb-4">
            Gentle Energy Therapy for <span className="text-emerald-600">Holistic Well-being</span>
          </h2>
          <p className="text-emerald-700/80 md:text-lg leading-relaxed max-w-2xl mx-auto">
            A gentle, non-invasive energy therapy that supports emotional, physical, and spiritual well-being.
          </p>
        </div>

        {/* What Reiki can help with */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stress */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Stress & Anxiety</h3>
            </div>
            <p className="text-emerald-700/90">
              Helps release emotional tension and promotes deep relaxation.
            </p>
          </div>

          {/* Pain */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Chronic Pain</h3>
            </div>
            <p className="text-emerald-700/90">
              Supports relief from persistent pain and fatigue.
            </p>
          </div>

          {/* Sleep */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Sleep Disturbances</h3>
            </div>
            <p className="text-emerald-700/90">
              Promotes restful sleep and balances circadian rhythms.
            </p>
          </div>

          {/* Energy */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Energetic Balance</h3>
            </div>
            <p className="text-emerald-700/90">
              Clears and aligns your chakras and energy field.
            </p>
          </div>

          {/* Session details */}
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <Sun className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-serif text-emerald-800">Session Details</h3>
            </div>
            <p className="text-emerald-700/90 mb-3">
              Each session includes a short consultation and grounding.
            </p>
            <p className="text-emerald-700/90 font-medium">
              Available in-person or as distant healing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}