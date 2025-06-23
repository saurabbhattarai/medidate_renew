"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import { Leaf, Link, Sparkles, Calendar, Clock } from "lucide-react";

export function Hero() {
  const phoneNumber = "+4915737926162";
  const whatsappMessage = "Hello, I'm interested in booking a Reiki session. Can you please provide more information?";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="w-full py-12 md:py-12 lg:py-12 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-green-200 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-emerald-200 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_500px] lg:gap-12 xl:gap-24 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                <Sparkles className="w-4 h-4 mr-2" />
                Ancient Wisdom, Modern Healing
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-serif text-green-900">
                Harmonize Your Energy With{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                    Serenity Reiki
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100/70 -z-0"></span>
                </span>
              </h1>
              <p className="max-w-[600px] text-green-700 md:text-lg leading-relaxed">
                Experience the transformative synergy of Reiki energy healing
                and ancient wisdom. Our holistic approach restores balance to
                mind, body, and spirit in our tranquil nature-inspired
                sanctuary.
              </p>
            </div>

            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                className="text-white shadow-lg cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                Begin Your Healing Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-300 text-green-700 cursor-pointer"
              >
                <Leaf className="w-5 h-5 mr-2" />
                Learn About Reiki
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                ].map((src, index) => (
                  <div key={index} className="relative">
                    <img
                      src={src}
                      alt={`Client ${index + 1}`}
                      className="w-11 h-11 rounded-full border-3 border-white bg-green-50 object-cover shadow-sm hover:scale-110 transition-transform duration-200"
                    />
                    {index === 0 && (
                      <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center border border-white">
                        ✓
                      </div>
                    )}
                  </div>
                ))}
                <div className="w-11 h-11 rounded-full border-3 border-white bg-green-100 flex items-center justify-center text-green-800 font-medium text-sm shadow-sm">
                  +27
                </div>
              </div>
              <div className="text-sm text-green-600">
                <p className="font-medium">10+ Clients Transformed</p>
                <p className="text-xs">Trusted since 2019</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-green-200/50 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-emerald-200/50 blur-xl"></div>
              <Image
                src="https://images.pexels.com/photos/5240734/pexels-photo-5240734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width="500"
                height="500"
                alt="Peaceful meditation scene"
                className="relative object-cover border-4 border-white shadow-2xl h-full rounded-full"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md border border-green-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-green-700" />
                  </div>
                  <span className="text-sm font-medium text-green-800">
                    Certified Practitioner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}