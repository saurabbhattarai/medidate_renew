import { Button } from "../ui/button";
import {
  Heart,
  Wind,
  Flame,
  Leaf,
  Calendar,
  ArrowRight,
  Zap,
  Globe,
  Users,
  Clock,
} from "lucide-react";

export function Services() {
  return (
    <section
      id="services"
      className="w-full py-12 bg-gradient-to-b from-green-50 to-white relative overflow-hidden"
    >
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
            Restorative <span className="text-emerald-700">Wellness</span>{" "}
            Experiences
          </h2>
          <p className="max-w-2xl text-green-700/90 md:text-lg leading-relaxed">
            Discover our carefully crafted healing modalities designed to
            harmonize your mind, body, and spirit
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-3">
          {/* Energy Reset */}
          <div className="relative group overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100/50 shadow-sm transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-100/30 blur-xl -z-10"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <Zap className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-green-900 mb-3">
                ENERGY RESET
              </h3>
              <p className="text-green-700/90 mb-5">
                A 60-minute 1:1 Reiki session to realign your aura and restore
                energetic flow.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-green-800">
                  <span className="text-emerald-600">✓</span>
                  <span>Chakra scan & balancing</span>
                </div>
                <div className="flex items-start gap-2 text-green-800">
                  <span className="text-emerald-600">✓</span>
                  <span>Hands-on or distance Reiki</span>
                </div>
                <div className="flex items-start gap-2 text-green-800">
                  <span className="text-emerald-600">✓</span>
                  <span>Light breath awareness</span>
                </div>
              </div>
              <div className="bg-emerald-50/60 rounded-lg p-4 mb-6 border border-emerald-100">
                <p className="text-emerald-800 font-medium">
                  Perfect for: stress, tension, fatigue, or emotional heaviness
                </p>
                <p className="text-emerald-700 mt-2">
                  🌀 Feel clear, calm, and recharged
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white group-hover:shadow-md cursor-pointer">
                Book Session{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Hawa & Heal */}
          <div className="relative group overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100/50 shadow-sm transition-all duration-300">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-green-100/30 blur-xl -z-10"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <Wind className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-green-900 mb-3">
                HAWA & HEAL
              </h3>
              <p className="text-green-700/90 mb-5">
                A 75-minute session combining Hawa meditation with Reiki energy
                healing.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-green-800">
                  <span className="text-emerald-600">✓</span>
                  <span>Breath-led grounding ritual</span>
                </div>
                <div className="flex items-start gap-2 text-green-800">
                  <span className="text-emerald-600">✓</span>
                  <span>Reiki for emotional release</span>
                </div>
                <div className="flex items-start gap-2 text-green-800">
                  <span className="text-emerald-600">✓</span>
                  <span>Chakra & nervous system reset</span>
                </div>
              </div>
              <div className="bg-emerald-50/60 rounded-lg p-4 mb-6 border border-emerald-100">
                <p className="text-emerald-800 font-medium">
                  Perfect for: anxiety, overthinking, lack of focus
                </p>
                <p className="text-emerald-700 mt-2">
                  🧘‍♀️ Feel deeply present, grounded, and light
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white cursor-pointer">
                Experience Now{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Soul Align */}
          <div className="relative group overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100/50 shadow-sm transition-all duration-300">
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-green-100/30 blur-xl -z-10"></div>
            <div className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <Flame className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-green-900 mb-3">
                SOUL ALIGN
              </h3>
              <p className="text-green-700/90 mb-5">
                A 90-minute advanced session focused on clearing & activating
                all 7 chakras.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-green-800">
                  <span className="text-emerald-600">✓</span>
                  <span>Guided chakra meditation</span>
                </div>
                <div className="flex items-start gap-2 text-green-800">
                  <span className="text-emerald-600">✓</span>
                  <span>Reiki attunement</span>
                </div>
                <div className="flex items-start gap-2 text-green-800">
                  <span className="text-emerald-600">✓</span>
                  <span>Intention setting & energy sealing</span>
                </div>
              </div>
              <div className="bg-emerald-50/60 rounded-lg p-4 mb-6 border border-emerald-100">
                <p className="text-emerald-800 font-medium">
                  Perfect for: inner transformation and spiritual connection
                </p>
                <p className="text-emerald-700 mt-2">
                  💫 Feel in tune with your true self
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white cursor-pointer">
                Begin Journey{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-green-200/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900">
                    Available Worldwide
                  </h3>
                  <p className="text-green-700/90">
                    Distance healing sessions with the same powerful effects
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900">
                    Group Sessions
                  </h3>
                  <p className="text-green-700/90">
                    Shared healing experiences for communities
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-emerald-700 font-medium max-w-2xl mx-auto">
                ✨ Each session is sacred, intentional, and completely
                personalized to your energy needs.
              </p>
            </div>
          </div>
        </div>
      </div>
         <div className="bg-white p-8 rounded-xl border border-green-100 mt-7">
          <div className="flex items-start gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-green-900">
                Special Friday Sessions
              </h3>
              <div className="mt-2 flex items-center gap-2 text-green-700">
                <Clock className="w-4 h-4" />
                <span className="text-sm">
                  18:00 - 21:00 (Extended Healing)
                </span>
              </div>
              <p className="mt-2 text-sm text-green-600">
                Enjoy our special extended group healing sessions every Friday
                evening. Perfect for deep relaxation and energy reset.
              </p>
              <div className="mt-4 pt-4 border-t border-green-50">
                <h3 className="font-medium text-green-900">Regular Sessions</h3>
                <p className="mt-1 text-sm text-green-600">
                  Book private sessions Monday-Thursday between 9:00-17:00
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
