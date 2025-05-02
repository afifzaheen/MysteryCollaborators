"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Filter } from "lucide-react"
import { products } from "@/lib/product-data"

export default function Showcase() {
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.priceValue - b.priceValue
    if (sortBy === "price-desc") return b.priceValue - a.priceValue
    return 0 // featured - maintain original order
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
            alt="SOLARA Product Showcase"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Product <span className="gold-gradient">Showcase</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 animate-fade-in animate-delay-100">
              Explore our collection of luxury tech products designed to elevate your lifestyle with elegance and
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          {/* Filters */}
          <div className="glass p-6 rounded-sm mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <Filter size={18} className="text-gold-500" /> Filter Products
                </h2>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategory("all")}
                    className={`px-4 py-2 text-sm rounded-sm transition-colors ${
                      category === "all"
                        ? "bg-gold-500/20 text-gold-500 border border-gold-500/50"
                        : "border border-zinc-700 text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(cat.value)}
                      className={`px-4 py-2 text-sm rounded-sm transition-colors ${
                        category === cat.value
                          ? "bg-gold-500/20 text-gold-500 border border-gold-500/50"
                          : "border border-zinc-700 text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-auto">
                <label htmlFor="sort" className="block text-sm font-medium text-zinc-400 mb-2">
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full md:w-auto bg-black border border-zinc-700 text-zinc-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className="glass rounded-sm overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.new && (
                    <div className="absolute top-4 left-4 bg-gold-500 text-black text-xs font-bold px-2 py-1 rounded-sm">
                      NEW
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-medium">{product.name}</h3>
                    <span className="text-gold-500 font-medium">{product.price}</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 text-xs">{product.category}</span>
                    <Link
                      href={`/showcase/${product.id}`}
                      className="text-sm text-zinc-300 hover:text-gold-500 flex items-center gap-1 transition-colors"
                    >
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-400">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="section-padding bg-gradient-radial">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
            <div className="w-20 h-1 bg-gold-500/30 mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-3xl mx-auto">
              Our most exclusive and innovative products, designed for those who demand the extraordinary.
            </p>
          </div>

          <div className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden gold-border mb-8">
            <Image
              src="https://images.unsplash.com/photo-1551845728-6820a30c64e2?q=80&w=2069&auto=format&fit=crop"
              alt="SOLARA Luxury Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="p-8 md:p-16 max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">The Quantum Collection</h3>
                <p className="text-zinc-300 mb-6">
                  Experience the future of luxury tech with our flagship collection, featuring revolutionary design and
                  unparalleled functionality.
                </p>
                <Link href="/showcase/collection/quantum" className="btn-primary inline-flex items-center gap-2">
                  Explore Collection <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551376347-075b0121a65b?q=80&w=2071&auto=format&fit=crop"
            alt="Custom orders background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for Something Unique?</h2>
            <p className="text-zinc-300 mb-8">
              We offer custom design services for clients seeking truly one-of-a-kind luxury tech products.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Inquire About Custom Orders <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const categories = [
  { label: "Smart Home", value: "smart-home" },
  { label: "Wearables", value: "wearables" },
  { label: "Audio", value: "audio" },
  { label: "Accessories", value: "accessories" },
]
