import { Leaf, Zap, Heart, Moon, Sun, Sparkles } from "lucide-react"

export function WhyReikiMeditation() {
  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-5 py-2.5 text-sm font-medium text-emerald-800 border border-emerald-200/50 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-700" strokeWidth={2} />
            Harmonious Healing
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-emerald-900 mb-6">
            Why <span className="text-emerald-600">Reiki & Meditation</span>?
          </h2>
          <p className="text-emerald-700/80 md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            In today's fast-paced world, it's easy to become disconnected from our inner peace. 
            Reiki and meditation offer a path back — to balance, clarity, and calm.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Reiki Benefits */}
          <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                <Zap className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-emerald-800">Reiki Healing</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Leaf className="w-3 h-3" />
                </div>
                <span className="text-emerald-700/90">Restores your natural energy flow</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Moon className="w-3 h-3" />
                </div>
                <span className="text-emerald-700/90">Releases blocked emotions gently</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Heart className="w-3 h-3" />
                </div>
                <span className="text-emerald-700/90">Promotes deep physical relaxation</span>
              </li>
            </ul>
          </div>

          {/* Meditation Benefits */}
          <div className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                <Sun className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-emerald-800">Meditation</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className="text-emerald-700/90">Quiets mental chatter and anxiety</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Zap className="w-3 h-3" />
                </div>
                <span className="text-emerald-700/90">Increases present-moment awareness</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Heart className="w-3 h-3" />
                </div>
                <span className="text-emerald-700/90">Deepens connection to inner wisdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Combined Benefits */}
        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 text-center">
          <h3 className="text-2xl font-bold font-serif text-emerald-800 mb-4">Together They Create</h3>
          <p className="text-emerald-700/90 mb-6">
            Both practices work beautifully together: Reiki heals by restoring energy flow, 
            while meditation helps quiet the mind and deepen inner awareness.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-emerald-700 border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            A complete mind-body-spirit reset
          </div>
        </div>
      </div>
    </section>
  )
}