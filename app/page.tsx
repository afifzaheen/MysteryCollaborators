import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2101&auto=format&fit=crop"
            alt="Luxury tech background"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="gold-gradient">Elevate</span> Your Tech Lifestyle
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 animate-fade-in animate-delay-100">
              Experience the perfect fusion of cutting-edge technology and timeless luxury with SOLARA's exclusive
              collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-200">
              <Link href="/showcase" className="btn-primary">
                Explore Collection
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-zinc-700 text-zinc-300 hover:bg-white/5 transition-all duration-300 rounded-sm font-medium"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight size={24} className="text-gold-500 rotate-90" />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-radial">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collections</h2>
            <div className="w-20 h-1 bg-gold-500/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold-500 font-medium">{product.price}</span>
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

          <div className="text-center mt-12">
            <Link href="/showcase" className="btn-primary inline-flex items-center gap-2">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Experience Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury experience"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        </div>

        <div className="container mx-auto container-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The SOLARA Experience</h2>
              <p className="text-zinc-300 mb-8">
                At SOLARA, we believe that technology should not only be functional but also a statement of elegance and
                sophistication. Our products are meticulously crafted to provide an unparalleled experience that
                transcends the ordinary.
              </p>

              <div className="space-y-6">
                {luxuryFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gold-500/10 border border-gold-500/30">
                      <feature.icon size={20} className="text-gold-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-zinc-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-sm overflow-hidden gold-border">
              <Image
                src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury tech lifestyle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-gold-500/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass p-8 rounded-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=2070&auto=format&fit=crop"
            alt="Call to action background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Lifestyle with SOLARA</h2>
            <p className="text-zinc-300 mb-8">
              Join our exclusive community and be the first to experience our latest innovations in luxury tech.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredProducts = [
  {
    id: 1,
    name: "SOLARA Quantum Watch",
    description: "A timepiece that combines classic elegance with cutting-edge smart technology.",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=2338&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "SOLARA Aura Speakers",
    description: "Immersive sound experience with ambient lighting that responds to your music.",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "SOLARA Lumina Phone",
    description: "The ultimate luxury smartphone with a revolutionary holographic display.",
    price: "$3,999",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2329&auto=format&fit=crop",
  },
]

import { Shield, Award, Sparkles } from "lucide-react"

const luxuryFeatures = [
  {
    title: "Premium Materials",
    description:
      "We source only the finest materials from around the world to create products that look and feel exceptional.",
    icon: Sparkles,
  },
  {
    title: "Lifetime Warranty",
    description: "Every SOLARA product comes with our signature lifetime warranty and dedicated support.",
    icon: Shield,
  },
  {
    title: "Award-Winning Design",
    description: "Our designs have been recognized globally for their innovation and aesthetic excellence.",
    icon: Award,
  },
]

const testimonials = [
  {
    text: "SOLARA has redefined what I expect from my tech devices. The attention to detail and quality is unmatched.",
    name: "Alexandra Chen",
    title: "CEO, Design Innovations",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop",
  },
  {
    text: "The SOLARA Quantum Watch has become an essential part of my daily life. It's both a statement piece and incredibly functional.",
    name: "Michael Reynolds",
    title: "Tech Influencer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop",
  },
  {
    text: "From the packaging to the product itself, everything about SOLARA speaks luxury. Worth every penny.",
    name: "Sophia Williams",
    title: "Fashion Editor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2064&auto=format&fit=crop",
  },
]
