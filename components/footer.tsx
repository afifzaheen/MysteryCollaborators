import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-playfair font-bold gold-gradient">SOLARA</span>
            </Link>
            <p className="text-zinc-400 text-sm mb-6">
              Redefining luxury in the tech lifestyle space with innovative products that blend elegance and
              functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-gold-500 transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-gold-500 transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-gold-500 transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-gold-500 transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/showcase" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  Wearables
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  Audio
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-zinc-400 hover:text-gold-500 transition-colors text-sm">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold-500 mr-3 mt-0.5" />
                <span className="text-zinc-400 text-sm">123 Luxury Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold-500 mr-3" />
                <span className="text-zinc-400 text-sm">+1 (800) SOLARA-LUX</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold-500 mr-3" />
                <span className="text-zinc-400 text-sm">info@solaraluxury.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SOLARA Luxury Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-zinc-500 hover:text-gold-500 transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-500 hover:text-gold-500 transition-colors text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
