import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "The Reiki sessions have completely transformed my stress levels. I feel more centered and peaceful than I have in years.",
    name: "Sarah M.",
    role: "Marketing Executive",
    stars: 5
  },
  {
    id: 2,
    quote: "The combination of Reiki and Ayurvedic wisdom has helped me find balance in both my physical and emotional health.",
    name: "Michael R.",
    role: "Teacher",
    stars: 5
  },
  {
    id: 3,
    quote: "I sleep better, feel more energized, and have a deeper connection to my inner self. Truly life-changing.",
    name: "Emma L.",
    role: "Wellness Coach",
    stars: 5
  }
]

export function Testimonials() {
  return ( 
    <section className="w-full py-12 md:py-12 lg:py-12 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-emerald-100 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-green-100 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100/80 px-5 py-2.5 text-sm font-medium text-green-800 backdrop-blur-sm border border-green-200/50 mb-6">
            <Quote className="w-4 h-4 text-green-700" strokeWidth={2} />
            Client Transformations
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-green-900 mb-4">
            Voices of <span className="text-emerald-700">Healing</span>
          </h2>
          <p className="text-green-700/80 md:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover how our approach has touched the lives of those seeking balance and wellness.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group overflow-hidden bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-green-100/50 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
            >
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-emerald-100/20 blur-xl -z-10"></div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>

              <blockquote className="text-green-700/90 mb-6 flex-grow">
                <p className="before:content-['“'] after:content-['”']">{testimonial.quote}</p>
              </blockquote>
              <div className="mt-auto">
                <div className="font-semibold text-green-900 text-lg">{testimonial.name}</div>
                <div className="text-sm text-green-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}