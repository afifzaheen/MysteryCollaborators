"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { formatPrice } from "@/lib/utils"

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, isCartOpen, setIsCartOpen, totalItems, subtotal } = useCart()

  // Close cart when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false)
      }
    }

    if (isCartOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isCartOpen, setIsCartOpen])

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isCartOpen])

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

      {/* Cart sidebar */}
      <div className="relative w-full max-w-md bg-black border-l border-zinc-800 animate-slide-left">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-800">
            <h2 className="text-xl font-medium flex items-center">
              <ShoppingBag size={20} className="mr-2 text-gold-500" />
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm bg-gold-500 text-black px-2 py-0.5 rounded-full">{totalItems}</span>
              )}
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-zinc-700 mb-4" />
                <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
                <p className="text-zinc-400 mb-6">Explore our collection and add some luxury to your life.</p>
                <button onClick={() => setIsCartOpen(false)} className="btn-primary">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="glass p-4 rounded-sm animate-fade-in">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-sm overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-zinc-400 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-gold-500 text-sm mb-2">{item.price}</p>
                        {item.color && <p className="text-zinc-400 text-xs mb-2">Color: {item.color}</p>}
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-zinc-800">
              <div className="mb-4 space-y-2">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2 border-t border-zinc-800">
                  <span>Total</span>
                  <span className="text-gold-500">{formatPrice(subtotal)}</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="btn-primary w-full flex items-center justify-center mb-2"
                onClick={() => setIsCartOpen(false)}
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-zinc-400 hover:text-white text-sm py-2 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
