import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Smart Home",
  "Audio",
  "Wearables",
  "Accessories"
];

const products = [
  {
    id: 1,
    name: "LUXEON Elite Headphones",
    description: "Premium wireless headphones with noise cancellation and crystal clear sound in a luxurious design.",
    price: "$349",
    category: "Audio"
  },
  {
    id: 2,
    name: "LUXEON Smart Watch Pro",
    description: "Elegant smartwatch with health tracking, sapphire crystal display, and premium leather band.",
    price: "$499",
    category: "Wearables"
  },
  {
    id: 3,
    name: "LUXEON Home Assistant",
    description: "Voice-activated smart home hub with elegant design that complements any interior.",
    price: "$299",
    category: "Smart Home"
  },
  {
    id: 4,
    name: "LUXEON Wireless Earbuds",
    description: "Ergonomic earbuds with unmatched sound quality and 24-hour battery life.",
    price: "$199",
    category: "Audio"
  },
  {
    id: 5,
    name: "LUXEON Smart Display",
    description: "Premium digital frame that seamlessly integrates with your smart home system.",
    price: "$399",
    category: "Smart Home"
  },
  {
    id: 6,
    name: "LUXEON Phone Case",
    description: "Handcrafted leather phone case with gold accents and personalization options.",
    price: "$89",
    category: "Accessories"
  },
  {
    id: 7,
    name: "LUXEON Charging Dock",
    description: "Elegant wireless charging station for all your devices with ambient lighting.",
    price: "$129",
    category: "Accessories"
  },
  {
    id: 8,
    name: "LUXEON Smart Lighting",
    description: "Premium lighting system that adapts to your mood and activities throughout the day.",
    price: "$249",
    category: "Smart Home"
  }
];

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-0"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
              Our <span className="text-primary">Collection</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover our curated selection of premium tech products
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Product Showcase */}
      <section className="py-16">
        <Container>
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant={activeCategory === category ? "default" : "glass"}
                  onClick={() => setActiveCategory(category)}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="relative"
                >
                  {category}
                  {hoveredCategory === category && (
                    <motion.span
                      layoutId="categoryHighlight"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <GlassCard className="p-12 text-center">
              <p className="text-foreground text-lg mb-4">No products found in this category.</p>
              <Button onClick={() => setActiveCategory("All")}>View All Products</Button>
            </GlassCard>
          )}
        </Container>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Limited <span className="text-primary">Edition</span> Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exclusive pieces crafted in limited quantities for the most discerning collectors
            </p>
          </motion.div>

          <GlassCard 
            className="p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-primary/20 to-secondary rounded-lg flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Gold circular accent behind product */}
                  <div className="absolute w-48 h-48 rounded-full bg-primary/30 blur-xl"></div>
                  
                  {/* Product placeholder with elegant SVG */}
                  <svg 
                    className="relative w-64 h-64 text-primary" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" />
                    <path d="M12 7 L12 2" stroke="currentColor" strokeWidth="1" />
                    <path d="M12 22 L12 17" stroke="currentColor" strokeWidth="1" />
                    <path d="M7 12 L2 12" stroke="currentColor" strokeWidth="1" />
                    <path d="M22 12 L17 12" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                    Limited Edition
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  LUXEON Celestial Collection
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our most exclusive offering, the Celestial Collection combines rare materials with unparalleled craftsmanship. Each piece is numbered and includes a certificate of authenticity.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div>
                    <span className="block text-primary text-2xl font-bold">$1,499</span>
                    <span className="text-sm text-muted-foreground">Limited to 100 pieces</span>
                  </div>
                  <div className="h-10 w-px bg-primary/30"></div>
                  <div className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">Release Date:</span> November 15
                  </div>
                </div>
                <Button size="lg">Reserve Now</Button>
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>

      {/* Specifications and Features */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Premium <span className="text-primary">Materials</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/20 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Aerospace Grade Aluminum</h3>
                    <p className="text-muted-foreground text-sm">Lightweight yet durable, our custom alloy offers superior strength and a premium feel.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/20 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Italian Leather</h3>
                    <p className="text-muted-foreground text-sm">Sourced from the finest tanneries in Italy, our leather ages beautifully over time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/20 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Sapphire Crystal</h3>
                    <p className="text-muted-foreground text-sm">Virtually scratch-proof and optically pure, providing exceptional clarity and durability.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Exceptional <span className="text-primary">Features</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/20 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Advanced Connectivity</h3>
                    <p className="text-muted-foreground text-sm">Seamless integration across all your devices with proprietary wireless technology.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/20 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Biometric Security</h3>
                    <p className="text-muted-foreground text-sm">State-of-the-art security features including fingerprint and facial recognition.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/20 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">Adaptive Technology</h3>
                    <p className="text-muted-foreground text-sm">Products learn from your habits and preferences, becoming more intuitive over time.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
};

export default Showcase;
