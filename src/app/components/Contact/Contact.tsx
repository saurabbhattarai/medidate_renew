"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../ui/button";
import { Phone, Mail, MapPin, Leaf, Send } from "lucide-react";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS values
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
          (result) => {
            console.log(result.text);
            setSubmitStatus({
              success: true,
              message: "Message sent successfully! We'll get back to you soon.",
            });
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            setSubmitStatus({
              success: false,
              message: "Failed to send message. Please try again later.",
            });
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-12 lg:py-12 bg-gradient-to-b from-green-50/30 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-emerald-100 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-green-100 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100/80 px-5 py-2.5 text-sm font-medium text-green-800 backdrop-blur-sm border border-green-200/50">
              <Leaf className="w-4 h-4 text-green-700" strokeWidth={2} />
              Get in Touch
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-green-900">
              Begin Your <span className="text-emerald-700">Healing Journey</span>
            </h2>
            <p className="text-green-700/90 md:text-lg leading-relaxed">
              Ready to experience the transformative power of Reiki meditation? Contact us to schedule your first session or learn more about our programs.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100/80 rounded-full flex items-center justify-center shadow-inner">
                  <Phone className="w-5 h-5 text-emerald-600" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold text-lg text-green-900">Phone</div>
                  <div className="text-green-700/90">(555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100/80 rounded-full flex items-center justify-center shadow-inner">
                  <Mail className="w-5 h-5 text-green-600" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold text-lg text-green-900">Email</div>
                  <div className="text-green-700/90">hello@serenityreiki.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100/80 rounded-full flex items-center justify-center shadow-inner">
                  <MapPin className="w-5 h-5 text-emerald-600" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold text-lg text-green-900">Location</div>
                  <div className="text-green-700/90">123 Wellness Way, Peaceful Valley, CA 90210</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-green-100/50 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-bold font-serif text-green-900 mb-6">Schedule Your Session</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-green-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-green-200 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition-all outline-none"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-green-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-green-200 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition-all outline-none"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-green-200 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-green-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-green-200 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-green-700 mb-1">Service</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-green-200 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition-all outline-none appearance-none"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Individual Reiki Session">Individual Reiki Session</option>
                  <option value="Group Meditation Class">Group Meditation Class</option>
                  <option value="ancient Consultation">Ancient Consultation</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-green-200 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="Tell us about your wellness goals..."
                  required
                ></textarea>
              </div>
              
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.success
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}