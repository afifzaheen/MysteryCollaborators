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
  },
  {
    id: 2,
    name: "LUXEON Smart Watch Elite",
    description: "Where technology meets luxury. Monitor your health and stay connected with timeless style.",
    price: "$499",
  },
  {
    id: 3,
    name: "LUXEON Home Assistant",
    description: "Your elegant AI companion. Control your smart home with sophisticated voice commands.",
    price: "$299",
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
              <GlassCard className="h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary/20 to-secondary rounded-md mb-6 flex items-center justify-center">
                    {/* Product Image Placeholder */}
                    <svg 
                      className="w-24 h-24 text-primary" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" 
                        fill="currentColor"
                      />
                      <circle cx="12" cy="12" r="5" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <p className="text-primary font-semibold mb-4">{product.price}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full">View Details</Button>
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
