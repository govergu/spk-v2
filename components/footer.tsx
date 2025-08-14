import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-spk-dark text-white">
      <div className="px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-spk-blue">
                <span className="text-sm font-bold">SPK</span>
              </div>
              <span className="font-montserrat text-lg font-bold">
                SPK Cleaning Service
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional cleaning services across Australia. Specializing in
              commercial cleaning, specialized sanitation, and eco-friendly
              solutions.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-spk-blue" />
              <span>24/7 Emergency Service Available</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/commercial"
                  className="text-gray-300 hover:text-spk-blue transition-colors"
                >
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/specialized"
                  className="text-gray-300 hover:text-spk-blue transition-colors"
                >
                  Specialized Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="text-gray-300 hover:text-spk-blue transition-colors"
                >
                  Maintenance Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-spk-blue transition-colors"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-spk-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-spk-blue transition-colors"
                >
                  Blog & Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-spk-blue transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-spk-blue transition-colors"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-lg font-semibold">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-spk-blue mt-0.5" />
                <div>
                  <p className="font-medium">1800-SPK-CLEAN</p>
                  <p className="text-gray-300">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-spk-blue mt-0.5" />
                <div>
                  <p>info@spkcleaning.com.au</p>
                  <p className="text-gray-300">quotes@spkcleaning.com.au</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-spk-blue mt-0.5" />
                <div>
                  <p>Serving NSW, QLD, VIC</p>
                  <p className="text-gray-300">Australia-wide coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © 2024 SPK Cleaning Service. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-spk-blue transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-spk-blue transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-spk-blue transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
