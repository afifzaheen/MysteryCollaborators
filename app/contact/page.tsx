"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact SOLARA"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Contact <span className="gold-gradient">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 animate-fade-in animate-delay-100">
              We'd love to hear from you. Reach out to our team for inquiries, support, or to schedule a private
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass p-8 rounded-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>

              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-sm mb-6">
                  Thank you for your message! Our team will get back to you shortly.
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Support">Product Support</option>
                    <option value="Custom Order">Custom Order</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Press">Press</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <MapPin size={24} className="text-gold-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Visit Our Flagship Store</h3>
                    <p className="text-zinc-400">
                      123 Luxury Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="text-gold-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Call Us</h3>
                    <p className="text-zinc-400">
                      Customer Support: +1 (800) SOLARA-LUX
                      <br />
                      Sales Inquiries: +1 (800) SOLARA-VIP
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="text-gold-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email Us</h3>
                    <p className="text-zinc-400">
                      General Inquiries: info@solaraluxury.com
                      <br />
                      Support: support@solaraluxury.com
                      <br />
                      Press: press@solaraluxury.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-sm mb-8">
                <h3 className="text-lg font-medium mb-4">Business Hours</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="relative h-[300px] rounded-sm overflow-hidden gold-border">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="SOLARA Flagship Store"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Locations */}
      <section className="section-padding bg-gradient-radial">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Locations</h2>
            <div className="w-20 h-1 bg-gold-500/30 mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-3xl mx-auto">
              Experience SOLARA luxury at our exclusive boutiques around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="glass p-6 rounded-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium mb-3">{location.city}</h3>
                <p className="text-zinc-400 text-sm mb-4">{location.address}</p>
                <p className="text-zinc-500 text-sm">{location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gold-500/30 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-6 pb-6 border-b border-zinc-800 last:border-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const locations = [
  {
    city: "New York",
    address: "123 Luxury Avenue, New York, NY 10001, United States",
    phone: "+1 (800) SOLARA-NY",
  },
  {
    city: "London",
    address: "45 Regent Street, London, W1B 4DY, United Kingdom",
    phone: "+44 20 7123 4567",
  },
  {
    city: "Paris",
    address: "8 Avenue Montaigne, 75008 Paris, France",
    phone: "+33 1 23 45 67 89",
  },
  {
    city: "Tokyo",
    address: "5-2-1 Ginza, Chuo City, Tokyo 104-0061, Japan",
    phone: "+81 3 1234 5678",
  },
  {
    city: "Dubai",
    address: "Dubai Mall, Financial Center Road, Dubai, UAE",
    phone: "+971 4 123 4567",
  },
  {
    city: "Singapore",
    address: "2 Orchard Turn, ION Orchard, Singapore 238801",
    phone: "+65 6123 4567",
  },
]

const faqs = [
  {
    question: "What makes SOLARA products different from other luxury tech brands?",
    answer:
      "SOLARA products combine cutting-edge technology with unparalleled craftsmanship and materials. Each piece is meticulously designed and manufactured with attention to detail that goes beyond industry standards, creating technology that is both functional and a statement of elegance.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on your location. For luxury items, we provide insured shipping and white-glove delivery services.",
  },
  {
    question: "What warranty do SOLARA products come with?",
    answer:
      "All SOLARA products come with our signature 3-year comprehensive warranty. Our premium collections include a lifetime warranty on craftsmanship and materials. We also offer extended warranty options for additional coverage.",
  },
  {
    question: "Can I schedule a private consultation or product demonstration?",
    answer:
      "Absolutely. We offer private consultations and product demonstrations at all our boutique locations. You can schedule an appointment through our website or by contacting your nearest SOLARA store directly.",
  },
  {
    question: "Do you offer custom design services?",
    answer:
      "Yes, we provide bespoke design services for clients seeking truly unique luxury tech products. Our design team works closely with you to create custom pieces that reflect your personal style and requirements.",
  },
]
