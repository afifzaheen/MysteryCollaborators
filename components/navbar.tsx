"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"
import { usePathname } from "next/navigation"
import CartButton from "@/components/cart/cart-button"
import { useAuth } from "@/context/auth-context"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Showcase", href: "/showcase" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold gold-gradient">SOLARA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-gold-500 ${
                  pathname === link.href ? "text-gold-500" : "text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <CartButton />

              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-sm text-zinc-300 hover:text-gold-500 transition-colors">
                    <User size={20} />
                    <span className="hidden lg:inline">{user.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-black border border-zinc-800 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <Link
                        href="/account"
                        className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-gold-500"
                      >
                        My Account
                      </Link>
                      <Link
                        href="/account/orders"
                        className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-gold-500"
                      >
                        Order History
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-gold-500"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href="/auth/login"
                  className="text-sm text-zinc-300 hover:text-gold-500 transition-colors flex items-center"
                >
                  <User size={20} className="mr-1" />
                  <span className="hidden lg:inline">Sign In</span>
                </Link>
              )}

              <Link href="/contact" className="btn-primary text-sm">
                Get in Touch
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <CartButton />
            <button className="text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base transition-colors hover:text-gold-500 ${
                  pathname === link.href ? "text-gold-500" : "text-zinc-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  href="/account"
                  className="text-base text-zinc-300 hover:text-gold-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  My Account
                </Link>
                <Link
                  href="/account/orders"
                  className="text-base text-zinc-300 hover:text-gold-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Order History
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                  className="text-base text-zinc-300 hover:text-gold-500 transition-colors text-left"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="text-base text-zinc-300 hover:text-gold-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}

            <Link href="/contact" className="btn-primary text-center text-sm mt-2" onClick={() => setIsOpen(false)}>
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
