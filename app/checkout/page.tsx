"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight, CreditCard, Truck, MapPin, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import { formatPrice } from "@/lib/utils"

type CheckoutStep = "information" | "shipping" | "payment" | "review"

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("information")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { items, subtotal, clearCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()

  // Form state
  const [formData, setFormData] = useState({
    // Contact
    email: user?.email || "",
    phone: "",

    // Shipping
    firstName: user?.name?.split(" ")[0] || "",
    lastName: user?.name?.split(" ")[1] || "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",

    // Payment
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",

    // Shipping method
    shippingMethod: "standard",
  })

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.push("/showcase")
    }
  }, [items, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (currentStep === "information") {
      setCurrentStep("shipping")
    } else if (currentStep === "shipping") {
      setCurrentStep("payment")
    } else if (currentStep === "payment") {
      setCurrentStep("review")
    } else if (currentStep === "review") {
      handlePlaceOrder()
    }
  }

  const handlePlaceOrder = async () => {
    setIsSubmitting(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and redirect to success page
    clearCart()
    router.push("/checkout/success")
  }

  // Calculate shipping cost based on method
  const shippingCost = formData.shippingMethod === "express" ? 25 : 0

  // Calculate total
  const total = subtotal + shippingCost

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/showcase" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Checkout Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-playfair font-bold gold-gradient">SOLARA</span>
            </Link>
            <div className="flex justify-center items-center mb-8">
              <div className={`flex items-center ${currentStep === "information" ? "text-gold-500" : "text-zinc-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === "information"
                      ? "bg-gold-500 text-black"
                      : currentStep !== "information"
                        ? "bg-gold-500/20 text-gold-500"
                        : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {currentStep !== "information" ? <Check size={16} /> : 1}
                </div>
                <span className="ml-2">Information</span>
              </div>

              <ChevronRight size={16} className="mx-2 text-zinc-600" />

              <div className={`flex items-center ${currentStep === "shipping" ? "text-gold-500" : "text-zinc-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === "shipping"
                      ? "bg-gold-500 text-black"
                      : currentStep === "payment" || currentStep === "review"
                        ? "bg-gold-500/20 text-gold-500"
                        : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {currentStep === "payment" || currentStep === "review" ? <Check size={16} /> : 2}
                </div>
                <span className="ml-2">Shipping</span>
              </div>

              <ChevronRight size={16} className="mx-2 text-zinc-600" />

              <div className={`flex items-center ${currentStep === "payment" ? "text-gold-500" : "text-zinc-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === "payment"
                      ? "bg-gold-500 text-black"
                      : currentStep === "review"
                        ? "bg-gold-500/20 text-gold-500"
                        : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {currentStep === "review" ? <Check size={16} /> : 3}
                </div>
                <span className="ml-2">Payment</span>
              </div>

              <ChevronRight size={16} className="mx-2 text-zinc-600" />

              <div className={`flex items-center ${currentStep === "review" ? "text-gold-500" : "text-zinc-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === "review" ? "bg-gold-500 text-black" : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  4
                </div>
                <span className="ml-2">Review</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="glass p-6 rounded-sm">
                <form onSubmit={handleSubmit}>
                  {/* Information Step */}
                  {currentStep === "information" && (
                    <div>
                      <h2 className="text-xl font-medium mb-6">Contact Information</h2>

                      <div className="space-y-4 mb-8">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                            Email Address
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>
                      </div>

                      <h2 className="text-xl font-medium mb-6">Shipping Address</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-zinc-400 mb-2">
                            First Name
                          </label>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-zinc-400 mb-2">
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="address" className="block text-sm font-medium text-zinc-400 mb-2">
                            Address
                          </label>
                          <input
                            id="address"
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="apartment" className="block text-sm font-medium text-zinc-400 mb-2">
                            Apartment, suite, etc. (optional)
                          </label>
                          <input
                            id="apartment"
                            name="apartment"
                            type="text"
                            value={formData.apartment}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-zinc-400 mb-2">
                            City
                          </label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-zinc-400 mb-2">
                            State / Province
                          </label>
                          <input
                            id="state"
                            name="state"
                            type="text"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-zinc-400 mb-2">
                            ZIP / Postal Code
                          </label>
                          <input
                            id="zipCode"
                            name="zipCode"
                            type="text"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-zinc-400 mb-2">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Japan">Japan</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Shipping Step */}
                  {currentStep === "shipping" && (
                    <div>
                      <h2 className="text-xl font-medium mb-6">Shipping Method</h2>

                      <div className="space-y-4 mb-8">
                        <label className="block glass p-4 rounded-sm cursor-pointer border border-transparent hover:border-gold-500/50 transition-colors">
                          <div className="flex items-start">
                            <input
                              type="radio"
                              name="shippingMethod"
                              value="standard"
                              checked={formData.shippingMethod === "standard"}
                              onChange={handleChange}
                              className="mt-1 mr-3"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="font-medium">Standard Shipping</h3>
                                  <p className="text-zinc-400 text-sm">Delivery in 5-7 business days</p>
                                </div>
                                <span className="text-gold-500">Free</span>
                              </div>
                            </div>
                          </div>
                        </label>

                        <label className="block glass p-4 rounded-sm cursor-pointer border border-transparent hover:border-gold-500/50 transition-colors">
                          <div className="flex items-start">
                            <input
                              type="radio"
                              name="shippingMethod"
                              value="express"
                              checked={formData.shippingMethod === "express"}
                              onChange={handleChange}
                              className="mt-1 mr-3"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="font-medium">Express Shipping</h3>
                                  <p className="text-zinc-400 text-sm">Delivery in 1-2 business days</p>
                                </div>
                                <span className="text-gold-500">$25.00</span>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>

                      <div className="border-t border-zinc-800 pt-6">
                        <h3 className="font-medium mb-4">Shipping Address</h3>
                        <div className="text-zinc-400 text-sm">
                          <p>
                            {formData.firstName} {formData.lastName}
                          </p>
                          <p>{formData.address}</p>
                          {formData.apartment && <p>{formData.apartment}</p>}
                          <p>
                            {formData.city}, {formData.state} {formData.zipCode}
                          </p>
                          <p>{formData.country}</p>
                          <p className="mt-2">{formData.phone}</p>
                          <p>{formData.email}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCurrentStep("information")}
                          className="text-gold-500 text-sm mt-4 hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Payment Step */}
                  {currentStep === "payment" && (
                    <div>
                      <h2 className="text-xl font-medium mb-6">Payment Information</h2>

                      <div className="space-y-4 mb-8">
                        <div>
                          <label htmlFor="cardName" className="block text-sm font-medium text-zinc-400 mb-2">
                            Name on Card
                          </label>
                          <input
                            id="cardName"
                            name="cardName"
                            type="text"
                            value={formData.cardName}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-zinc-400 mb-2">
                            Card Number
                          </label>
                          <input
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                            placeholder="•••• •••• •••• ••••"
                            className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="cardExpiry" className="block text-sm font-medium text-zinc-400 mb-2">
                              Expiration Date
                            </label>
                            <input
                              id="cardExpiry"
                              name="cardExpiry"
                              type="text"
                              value={formData.cardExpiry}
                              onChange={handleChange}
                              required
                              placeholder="MM/YY"
                              className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                            />
                          </div>

                          <div>
                            <label htmlFor="cardCvc" className="block text-sm font-medium text-zinc-400 mb-2">
                              CVC
                            </label>
                            <input
                              id="cardCvc"
                              name="cardCvc"
                              type="text"
                              value={formData.cardCvc}
                              onChange={handleChange}
                              required
                              placeholder="•••"
                              className="w-full bg-black/50 border border-zinc-700 text-white rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-zinc-800 pt-6 space-y-6">
                        <div>
                          <h3 className="font-medium mb-4">Shipping Address</h3>
                          <div className="text-zinc-400 text-sm">
                            <p>
                              {formData.firstName} {formData.lastName}
                            </p>
                            <p>{formData.address}</p>
                            {formData.apartment && <p>{formData.apartment}</p>}
                            <p>
                              {formData.city}, {formData.state} {formData.zipCode}
                            </p>
                            <p>{formData.country}</p>
                            <p className="mt-2">{formData.phone}</p>
                            <p>{formData.email}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setCurrentStep("information")}
                            className="text-gold-500 text-sm mt-4 hover:underline"
                          >
                            Edit
                          </button>
                        </div>

                        <div>
                          <h3 className="font-medium mb-4">Shipping Method</h3>
                          <div className="text-zinc-400 text-sm">
                            <p>
                              {formData.shippingMethod === "standard"
                                ? "Standard Shipping (5-7 business days)"
                                : "Express Shipping (1-2 business days)"}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setCurrentStep("shipping")}
                            className="text-gold-500 text-sm mt-4 hover:underline"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Review Step */}
                  {currentStep === "review" && (
                    <div>
                      <h2 className="text-xl font-medium mb-6">Review Your Order</h2>

                      <div className="space-y-6 mb-8">
                        <div className="border-b border-zinc-800 pb-6">
                          <h3 className="font-medium mb-4 flex items-center">
                            <MapPin size={18} className="text-gold-500 mr-2" />
                            Shipping Address
                          </h3>
                          <div className="text-zinc-400 text-sm">
                            <p>
                              {formData.firstName} {formData.lastName}
                            </p>
                            <p>{formData.address}</p>
                            {formData.apartment && <p>{formData.apartment}</p>}
                            <p>
                              {formData.city}, {formData.state} {formData.zipCode}
                            </p>
                            <p>{formData.country}</p>
                            <p className="mt-2">{formData.phone}</p>
                            <p>{formData.email}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setCurrentStep("information")}
                            className="text-gold-500 text-sm mt-4 hover:underline"
                          >
                            Edit
                          </button>
                        </div>

                        <div className="border-b border-zinc-800 pb-6">
                          <h3 className="font-medium mb-4 flex items-center">
                            <Truck size={18} className="text-gold-500 mr-2" />
                            Shipping Method
                          </h3>
                          <div className="text-zinc-400 text-sm">
                            <p>
                              {formData.shippingMethod === "standard"
                                ? "Standard Shipping (5-7 business days)"
                                : "Express Shipping (1-2 business days)"}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setCurrentStep("shipping")}
                            className="text-gold-500 text-sm mt-4 hover:underline"
                          >
                            Edit
                          </button>
                        </div>

                        <div className="border-b border-zinc-800 pb-6">
                          <h3 className="font-medium mb-4 flex items-center">
                            <CreditCard size={18} className="text-gold-500 mr-2" />
                            Payment Information
                          </h3>
                          <div className="text-zinc-400 text-sm">
                            <p>{formData.cardName}</p>
                            <p>•••• •••• •••• {formData.cardNumber.slice(-4)}</p>
                            <p>Expires {formData.cardExpiry}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setCurrentStep("payment")}
                            className="text-gold-500 text-sm mt-4 hover:underline"
                          >
                            Edit
                          </button>
                        </div>

                        <div>
                          <h3 className="font-medium mb-4 flex items-center">
                            <ShoppingBag size={18} className="text-gold-500 mr-2" />
                            Order Items
                          </h3>
                          <ul className="space-y-4">
                            {items.map((item) => (
                              <li key={item.id} className="flex items-center">
                                <div className="relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0">
                                  <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="ml-4 flex-1">
                                  <h4 className="font-medium">{item.name}</h4>
                                  <p className="text-zinc-400 text-sm">Qty: {item.quantity}</p>
                                </div>
                                <div className="text-gold-500">{item.price}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {currentStep !== "information" && (
                      <button
                        type="button"
                        onClick={() => {
                          if (currentStep === "shipping") setCurrentStep("information")
                          if (currentStep === "payment") setCurrentStep("shipping")
                          if (currentStep === "review") setCurrentStep("payment")
                        }}
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        Back
                      </button>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary ${currentStep === "information" ? "ml-auto" : ""}`}
                    >
                      {isSubmitting ? "Processing..." : currentStep === "review" ? "Place Order" : "Continue"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass p-6 rounded-sm sticky top-24">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>

                <div className="max-h-80 overflow-y-auto mb-6">
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-center">
                        <div className="relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-zinc-400 text-sm">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-gold-500">{item.price}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 border-t border-zinc-800 pt-4">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg pt-2 border-t border-zinc-800">
                    <span>Total</span>
                    <span className="text-gold-500">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
