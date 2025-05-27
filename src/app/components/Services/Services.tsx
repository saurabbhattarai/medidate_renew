import { Button } from "../ui/button"
import { Heart, Wind, Flame, Leaf, Calendar, ArrowRight } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="w-full py-12 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-emerald-100 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-green-100 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100/80 px-5 py-2.5 text-sm font-medium text-green-800 backdrop-blur-sm border border-green-200/50">
            <Leaf className="w-4 h-4 text-green-700" strokeWidth={2} />
            Our Healing Services
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-green-900">
            Restorative <span className="text-emerald-700">Wellness</span> Experiences
          </h2>
          <p className="max-w-2xl text-green-700/90 md:text-lg leading-relaxed">
            Discover our carefully crafted healing modalities designed to harmonize your mind, body, and spirit
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100/50 shadow-sm transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-100/30 blur-xl -z-10"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <Heart className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-green-900 mb-3">Individual Reiki</h3>
              <p className="text-green-700/90 mb-5">
                Personalized energy healing sessions to release blockages and restore your natural vitality.
              </p>
              <div className="flex items-center gap-2 text-green-800 mb-6">
                <Calendar className="w-5 h-5" />
                <span className="text-xl font-bold">60-90 min</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold text-green-800">$85</span>
                <span className="text-sm text-green-600">or $75/session (pack of 3)</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white group-hover:shadow-md cursor-pointer">
                Book Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="relative group overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100/50 shadow-sm transition-all duration-300">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-green-100/30 blur-xl -z-10"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <Wind className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-green-900 mb-3">Hawa Meditation</h3>
              <p className="text-green-700/90 mb-5">
                Air element meditation practices to enhance mental clarity and emotional balance through breath awareness.
              </p>
              <div className="flex items-center gap-2 text-green-800 mb-6">
                <Calendar className="w-5 h-5" />
                <span className="text-xl font-bold">45 min</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold text-green-800">$30</span>
                <span className="text-sm text-green-600">$120/month (unlimited)</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white cursor-pointer">
                Join Class <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="relative group overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100/50 shadow-sm transition-all duration-300">
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-green-100/30 blur-xl -z-10"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <Flame className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-green-900 mb-3">Tawa Meditation</h3>
              <p className="text-green-700/90 mb-5">
                Fire element meditation to ignite inner transformation and cultivate personal power and vitality.
              </p>
              <div className="flex items-center gap-2 text-green-800 mb-6">
                <Calendar className="w-5 h-5" />
                <span className="text-xl font-bold">50 min</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold text-green-800">$35</span>
                <span className="text-sm text-green-600">$140/month (unlimited)</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white cursor-pointer">
                Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Breathwork Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-green-200/50">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Wind className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-3xl font-bold font-serif text-green-900 mb-4">Breathwork Sessions</h3>
              <p className="text-green-700/90 text-lg max-w-2xl mx-auto mb-8">
                Transformative breathing techniques combining ancient pranayama with modern breathwork practices for deep healing and spiritual awakening.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm border border-green-100">
                <h4 className="text-xl font-semibold text-green-900 mb-3">Individual Breathwork</h4>
                <p className="text-green-700/90 mb-4">Personalized breathing sessions tailored to your specific needs and goals.</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-800">$60</span>
                  <span className="text-sm text-green-600">75 minutes</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white cursor-pointer">
                  Book Session
                </Button>
              </div>

              <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm border border-green-100">
                <h4 className="text-xl font-semibold text-green-900 mb-3">Group Breathwork</h4>
                <p className="text-green-700/90 mb-4">Community breathing circles for shared healing and collective transformation.</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-800">$25</span>
                  <span className="text-sm text-green-600">60 minutes</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white cursor-pointer">
                  Join Circle
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
