import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "LUXEON Pro Wireless Headphones",
    description: "Immersive sound paired with elegant design. Experience crystal clear audio in premium comfort.",
    price: "$349",
    image: "/src/assets/images/products/headphones.svg"
  },
  {
    id: 2,
    name: "LUXEON Smart Watch Elite",
    description: "Where technology meets luxury. Monitor your health and stay connected with timeless style.",
    price: "$499",
    image: "/src/assets/images/products/smartwatch.svg"
  },
  {
    id: 3,
    name: "LUXEON Home Assistant",
    description: "Your elegant AI companion. Control your smart home with sophisticated voice commands.",
    price: "$299",
    image: "/src/assets/images/products/smarthome.svg"
  }
];

const FeaturedProducts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured <span className="text-primary">Products</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our collection of premium tech products designed for the modern connoisseur.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <GlassCard 
                className="h-full flex flex-col group relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 0 25px 5px rgba(212, 175, 55, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Luxury shimmer animation overlay */}
                <div className="absolute -inset-full h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-30 duration-700 transform-gpu group-hover:translate-x-full group-hover:skew-x-12">
                  <div className="h-40 w-40 bg-gradient-to-tr from-primary via-primary/20 to-primary blur-xl rounded-full transform scale-150"></div>
                </div>
                
                <div className="p-6 flex-grow relative z-10">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary/20 to-transparent rounded-md mb-6 flex items-center justify-center">
                    {/* Product Image */}
                    <motion.img 
                      src={product.image} 
                      alt={product.name}
                      className="w-32 h-32 object-contain" 
                      whileHover={{ 
                        scale: 1.1,
                        filter: "drop-shadow(0px 0px 8px rgba(212, 175, 55, 0.5))",
                        transition: { 
                          duration: 0.4,
                          yoyo: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <p className="text-primary font-semibold mb-4">{product.price}</p>
                </div>
                <div className="p-6 pt-0 mt-auto relative z-10">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                  >
                    View Details
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/showcase">
            <Button variant="glass" size="lg">View All Products</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
