import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Link } from "wouter";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-0"></div>
      
      {/* Hero particles/dots pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-4">
              Elevate Your <span className="text-primary">Digital Lifestyle</span> With Luxury
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the perfect fusion of cutting-edge technology and exquisite craftsmanship for the discerning consumer.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/showcase">
                <Button size="xl">Explore Collection</Button>
              </Link>
              <Link href="/about">
                <Button size="xl" variant="outline">Our Story</Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              {/* Circular highlight behind product */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-xl"></div>
              
              {/* Premium headphones product image */}
              <img 
                src="/src/assets/images/products/headphones.svg" 
                alt="LUXEON Premium Headphones"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-auto" 
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
