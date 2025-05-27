import Image from "next/image";
import { Flower2, Heart } from "lucide-react";

export function Trainer() {
  return (
    <section
      id="trainer"
      className="w-full py-16 md:py-12 lg:py-12 bg-gradient-to-b from-green-50 to-white relative overflow-hidden"
    >
      {/* Decorative background blurs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -left-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-5 py-2.5 text-sm font-medium text-green-800 backdrop-blur-sm border border-green-200/50 mx-auto">
                <Flower2 className="w-4 h-4 text-green-700" strokeWidth={2} />
                Meet Your Guide
              </div>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-green-900">
              Guided by{" "}
              <span className="text-emerald-700">Compassion & Wisdom</span>
            </h2>

            <p className="text-green-700/90 md:text-lg leading-relaxed max-w-[90%]">
              Charchit Devkota brings over 15 years of experience as a certified Reiki Master and Ayurvedic Practitioner. Her intuitive approach gently unlocks the body's healing potential, offering each individual a space of peace, growth, and transformation.
            </p>

            <ul className="space-y-2 text-green-700/90 text-sm pt-2 pl-5 list-disc">
              <li>Certified Reiki Master (Usui Lineage)</li>
              <li>Ayurvedic Lifestyle Counselor</li>
              <li>Trained in Mindfulness-Based Stress Reduction (MBSR)</li>
              <li>Offering one-on-one healing sessions & wellness retreats</li>
            </ul>
          </div>

          {/* Trainer Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Background Frame */}
              <div className="absolute rounded-3xl blur-xl -z-10"></div>

              {/* Main Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/charchit_devkota.webp"
                  fill
                  alt="Reiki Trainer"
                  className="object-cover object-center"
                  priority
                />
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-50/20 to-emerald-900/10 mix-blend-multiply"></div>
              </div>

              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md border border-green-100/50">
                <Heart className="w-6 h-6 text-emerald-600" strokeWidth={2} />
              </div>

              {/* Top-right Label */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-green-100/50">
                <span className="text-sm font-medium text-green-800">
                  Over 15 Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
