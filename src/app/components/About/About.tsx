import { Heart, Sparkles, Leaf, Flower2 } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-12 lg:py-12 bg-gradient-to-b from-white to-green-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-emerald-100 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-green-100 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex justify-center ">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100/80 px-5 py-2.5 text-sm font-medium text-green-800 backdrop-blur-sm border border-green-200/50 mx-auto">
                <Heart className="w-4 h-4 text-green-70" strokeWidth={2} />
                Our Healing Philosophy
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-green-900">
              Harmonizing{" "}
              <span className="text-emerald-700">Ancient Wisdom</span> with
              Modern Wellness
            </h2>
            <p className="text-green-700/90 md:text-lg leading-relaxed max-w-[90%]">
              At Renew flow, we weave together the gentle energy healing of
              Reiki with the timeless wisdom of Ayurveda. Our holistic approach
              nurtures your body's innate healing intelligence while addressing
              root causes of imbalance through sacred energy work, mindful
              meditation, and conscious living.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-green-100/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Sparkles
                    className="w-5 h-5 text-amber-600"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-800 mb-1">
                    Energy Healing
                  </h3>
                  <p className="text-sm text-green-600/90">
                    Gentle Reiki techniques to restore your natural energy flow
                    and vitality
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-green-100/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Leaf className="w-5 h-5 text-green-600" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-green-800 mb-1">
                    Ayurvedic Wisdom
                  </h3>
                  <p className="text-sm text-green-600/90">
                    Time-tested principles adapted for modern wellness and
                    balance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-3xl blur-xl -z-10"></div>

              {/* Image with organic styling */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl border-4 border-white/80 shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/6633936/pexels-photo-6633936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  fill
                  alt="Peaceful meditation space"
                  className="object-cover object-center"
                  priority
                />
                {/* Overlay to blend with theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-50/20 to-emerald-900/10 mix-blend-multiply"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md border border-green-100/50">
                <svg
                  className="w-6 h-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 9.77a6 6 0 0 0-.86.052l-.892.15c-2.013.339-3.498 2.102-3.498 4.178a3.25 3.25 0 0 1-1.43 2.696l-.1.069a3.4 3.4 0 0 1-.823.406l-1.157.39a.75.75 0 0 1-.48-1.422l1.159-.39q.246-.083.462-.228l.102-.069a1.75 1.75 0 0 0 .767-1.452c0-2.797 2.003-5.195 4.748-5.657l.89-.15A7 7 0 0 1 12 8.271c.387 0 .807.02 1.112.072l.89.15c2.746.462 4.748 2.86 4.748 5.657c0 .586.29 1.13.768 1.452l.101.069q.217.145.463.228l1.158.39a.75.75 0 0 1-.48 1.422l-1.157-.39a3.4 3.4 0 0 1-.822-.406l-.101-.069a3.25 3.25 0 0 1-1.43-2.696c0-2.076-1.485-3.839-3.497-4.178l-.892-.15a6 6 0 0 0-.86-.051m-3.1 5.78a.75.75 0 1 1 1.2.9l-.924 1.233l-.022.029a5 5 0 0 1-.34.42a2.75 2.75 0 0 1-1.007.67c-.155.058-.316.098-.52.15l-.035.008l-1.794.449a.935.935 0 0 0 .227 1.841h.684c1.546 0 3.05-.501 4.287-1.429L12.55 18.4a.75.75 0 1 1 .9 1.2l-.904.678l.491.185c.534.2.775.29 1.017.366a9.3 9.3 0 0 0 2.243.407c.253.014.51.014 1.08.014h.939a.935.935 0 0 0 .226-1.841l-1.473-.369l-.082-.02c-.476-.119-.851-.212-1.186-.406a3 3 0 0 1-.29-.192c-.308-.234-.54-.543-.833-.936l-.051-.067l-.727-.969a.75.75 0 1 1 1.2-.9l.727.969c.368.491.471.618.591.709q.063.046.132.087c.13.075.287.121.883.27l1.473.368a2.435 2.435 0 0 1-.59 4.797h-.963c-.539 0-.84 0-1.14-.017a10.8 10.8 0 0 1-2.607-.473c-.286-.09-.568-.195-1.072-.384l-1.432-.537a8.65 8.65 0 0 1-4.733 1.411h-.684a2.435 2.435 0 0 1-.59-4.797l1.793-.448c.255-.064.324-.082.384-.105c.173-.066.33-.17.458-.304c.044-.047.088-.102.246-.313z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* <Flower2 className="w-6 h-6 text-emerald-600" strokeWidth={2} /> */}
              </div>

              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-green-100/50">
                <span className="text-sm font-medium text-green-800">
                  Since 2010
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
