"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Heart, ShoppingCart, Star } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { products, getRelatedProducts } from "@/lib/product-data"
import { useCart } from "@/context/cart-context"

export default function ProductDetail() {
  const params = useParams()
  const router = useRouter()
  const productId = Number(params.id)
  const { addItem } = useCart()

  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(null)

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find((p) => p.id === productId)
      setProduct(foundProduct)

      if (foundProduct) {
        setRelatedProducts(getRelatedProducts(foundProduct.category, productId))
        // Set default selected color
        setSelectedColor(foundProduct.colors[0].name)
      }
    }
  }, [productId])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/showcase" className="btn-primary inline-block">
          Return to Showcase
        </Link>
      </div>
    )
  }

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.gallery.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === product.gallery.length - 1 ? 0 : prev + 1))
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceValue: product.priceValue,
      image: product.image,
      quantity: quantity,
      color: selectedColor,
    })
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-black/50 py-4 border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-zinc-400">
            <Link href="/" className="hover:text-gold-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/showcase" className="hover:text-gold-500 transition-colors">
              Showcase
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold-500">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden gold-border group">
                <Image
                  src={product.gallery[selectedImage] || product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={20} />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ArrowRight size={20} />
                </button>

                {product.new && (
                  <div className="absolute top-4 left-4 bg-gold-500 text-black text-xs font-bold px-2 py-1 rounded-sm">
                    NEW
                  </div>
                )}
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-sm overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-gold-500" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < product.rating ? "text-gold-500 fill-gold-500" : "text-zinc-600"}
                    />
                  ))}
                </div>
                <span className="text-zinc-400 text-sm">({product.reviewCount} reviews)</span>
              </div>

              <div className="text-2xl font-bold text-gold-500 mb-6">{product.price}</div>

              <p className="text-zinc-300 mb-8">{product.fullDescription}</p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-gold-500 mr-2 mt-0.5 shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Available Colors</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className="w-8 h-8 rounded-full border border-zinc-700 relative"
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      >
                        {color.name === selectedColor && (
                          <span className="absolute inset-0 rounded-full ring-2 ring-gold-500 ring-offset-2 ring-offset-black"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex border border-zinc-700 rounded-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-12 flex items-center justify-center text-zinc-400 hover:text-white"
                  >
                    -
                  </button>
                  <div className="w-12 h-12 flex items-center justify-center border-x border-zinc-700">{quantity}</div>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-12 flex items-center justify-center text-zinc-400 hover:text-white"
                  >
                    +
                  </button>
                </div>

                <button className="btn-primary flex-1 flex items-center justify-center gap-2" onClick={handleAddToCart}>
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>

                <button className="w-12 h-12 flex items-center justify-center border border-zinc-700 rounded-sm hover:bg-zinc-800 transition-colors">
                  <Heart size={18} className="text-zinc-400" />
                </button>
              </div>

              <div className="glass p-4 rounded-sm">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="flex items-center gap-1">
                    <Check size={16} className="text-gold-500" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check size={16} className="text-gold-500" />
                    <span>30-Day Returns</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check size={16} className="text-gold-500" />
                    <span>3-Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-12 bg-gradient-radial">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Technical Specifications</h2>

          <div className="glass rounded-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {product.specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`p-4 ${index % 2 === 0 ? "bg-transparent" : "bg-white/5"} ${
                    index < product.specifications.length - (product.specifications.length % 2 === 0 ? 2 : 1)
                      ? "border-b border-zinc-700"
                      : ""
                  } ${
                    index % 2 === 0 && index < product.specifications.length - 1 ? "md:border-r md:border-zinc-700" : ""
                  }`}
                >
                  <div className="text-sm text-zinc-400">{spec.name}</div>
                  <div className="font-medium">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">You May Also Like</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div
                key={product.id}
                className="glass rounded-sm overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
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
        </div>
      </section>
    </div>
  )
}
