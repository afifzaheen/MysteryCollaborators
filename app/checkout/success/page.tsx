"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function CheckoutSuccessPage() {
  const { items } = useCart()
  const router = useRouter()

  // Generate a random order number
  const orderNumber = Math.floor(10000000 + Math.random() * 90000000)

  // Redirect if no items were purchased
  useEffect(() => {
    if (items.length > 0) {
      router.push("/checkout")
    }
  }, [items, router])

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass p-8 rounded-sm">
            <CheckCircle size={64} className="text-gold-500 mx-auto mb-6" />

            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-zinc-300 mb-8">Your order has been received and is now being processed.</p>

            <div className="bg-black/30 p-4 rounded-sm mb-8">
              <p className="text-zinc-400 mb-2">Order Number:</p>
              <p className="text-xl font-medium">{orderNumber}</p>
            </div>

            <p className="text-zinc-400 mb-8">
              A confirmation email has been sent to your email address. You can track your order status in your account.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/account/orders" className="btn-primary">
                Track Your Order
              </Link>
              <Link
                href="/showcase"
                className="px-6 py-3 border border-zinc-700 text-zinc-300 hover:bg-white/5 transition-all duration-300 rounded-sm font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
