import { Button } from "../ui/button";
import Image from "next/image";
import { Leaf, Sparkles, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export function Hero() {
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
                A sanctuary for healing, balance, and inner peace.
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-serif text-green-900">
                Welcome to Renew flow’s Reiki &
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 ml-3 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                    Meditation Space
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100/70 -z-0"></span>
                </span>
              </h1>
              <p className="max-w-[600px] text-green-700 md:text-lg leading-relaxed">
                Step into a space where energy flows freely, stress melts away,
                and your true self can shine. Whether you're seeking deep
                relaxation, emotional healing, or a way to reconnect with your
                inner calm, you are in the right place.
              </p>
            </div>

            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="bg-gradient-to-r cursor-pointer from-green-600 to-emerald-700 text-white py-2 px-4 rounded-full flex items-center text-sm font-medium"
              >
                Begin your Healing Journey
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-green-300 text-green-700 cursor-pointer"
              >
                <Leaf className="w-5 h-5 mr-2" />
                Learn About Reiki
              </Button>
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
