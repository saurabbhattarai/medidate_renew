import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-white border-t border-green-100">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold font-serif text-slate-800">
                Renew Flow
              </span>
            </Link>
            <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
              Transforming lives through ancient healing wisdom and modern
              wellness practices.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white hover:bg-green-50 rounded-full flex items-center justify-center transition-all border border-green-200 shadow-sm hover:shadow-md hover:border-green-300"
              >
                <Facebook className="w-5 h-5 text-slate-600 hover:text-green-600" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white hover:bg-green-50 rounded-full flex items-center justify-center transition-all border border-green-200 shadow-sm hover:shadow-md hover:border-green-300"
              >
                <Instagram className="w-5 h-5 text-slate-600 hover:text-green-600" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white hover:bg-green-50 rounded-full flex items-center justify-center transition-all border border-green-200 shadow-sm hover:shadow-md hover:border-green-300"
              >
                <Twitter className="w-5 h-5 text-slate-600 hover:text-green-600" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-800 font-serif">
              Explore
            </h3>
            <nav className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-slate-600 hover:text-green-600 transition-colors text-lg"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-slate-600 hover:text-green-600 transition-colors text-lg"
              >
                Services
              </Link>
              <Link
                href="#benefits"
                className="text-slate-600 hover:text-green-600 transition-colors text-lg"
              >
                Benefits
              </Link>
              <Link
                href="#"
                className="text-slate-600 hover:text-green-600 transition-colors text-lg"
              >
                Practitioners
              </Link>
              <Link
                href="/contact"
                className="text-slate-600 hover:text-green-600 transition-colors text-lg"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-800 font-serif">
              Get in Touch
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-slate-600">
                  <div className="font-medium text-slate-700 text-lg">
                    Visit Our Center
                  </div>
                  <div className="mt-1">
                    Bühlstrasse 18, 37073, <br />
                    Göttingen.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-slate-600">
                  <div className="font-medium text-slate-700 text-lg">
                    +4915737926162
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-slate-600">
                  <div className="font-medium text-slate-700 text-lg">
                    contact@renewflow.de
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="border-t border-green-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Renew Flow. All rights reserved.
          </p>
          <nav className="flex gap-8">
            <Link
              href="#"
              className="text-slate-500 hover:text-green-600 text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-slate-500 hover:text-green-600 text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-slate-500 hover:text-green-600 text-sm transition-colors"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
