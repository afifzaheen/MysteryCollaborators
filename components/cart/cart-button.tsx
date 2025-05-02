"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function CartButton() {
  const { setIsCartOpen, totalItems } = useCart()

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-zinc-300 hover:text-gold-500 transition-colors"
      aria-label="Open cart"
    >
      <ShoppingBag size={20} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-gold-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      )}
    </button>
  )
}
