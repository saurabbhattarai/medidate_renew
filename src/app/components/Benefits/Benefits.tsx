import { Heart, Sparkles, Leaf, Clock, Award } from "lucide-react"
import Image from "next/image"

const benefitsData = [
  {
    id: 1,
    icon: Heart,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-100/80",
    title: "Stress Reduction",
    description: "Deep relaxation and release of tension from body and mind"
  },
  {
    id: 2,
    icon: Sparkles,
    iconColor: "text-green-600",
    bgColor: "bg-green-100/80",
    title: "Enhanced Energy",
    description: "Improved vitality and natural energy flow throughout the body"
  },
  {
    id: 3,
    icon: Leaf,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-100/80",
    title: "Emotional Balance",
    description: "Greater emotional stability and inner peace"
  },
  {
    id: 4,
    icon: Clock,
    iconColor: "text-green-600",
    bgColor: "bg-green-100/80",
    title: "Better Sleep",
    description: "Improved sleep quality and natural circadian rhythms"
  }
]

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-12 lg:py-12 bg-gradient-to-b from-white to-green-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-emerald-100 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-green-100 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100/80 px-5 py-2.5 text-sm font-medium text-green-800 backdrop-blur-sm border border-green-200/50 mb-6">
            <Award className="w-4 h-4 text-green-700" strokeWidth={2} />
            Proven Benefits
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-green-900 mb-4">
            Transform Your <span className="text-emerald-700">Well-being</span>
          </h2>
          <p className="text-green-700/80 md:text-lg leading-relaxed max-w-2xl mx-auto">
            Experience the profound benefits of our integrated approach to healing and wellness.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {benefitsData.map((benefit) => (
            <div 
              key={benefit.id}
              className="relative group overflow-hidden bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-green-100/50 shadow-sm hover:shadow-md transition-all duration-300 h-full"
            >
              {/* Decorative element */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${benefit.bgColor.replace('/80', '/20')} blur-xl -z-10`}></div>
              
              <div className={`w-12 h-12 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4 shadow-inner`}>
                <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold font-serif text-green-900 mb-2">{benefit.title}</h3>
              <p className="text-green-700/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}