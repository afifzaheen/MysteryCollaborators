import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

const AboutPreview = () => {
  return (
    <section className="py-20 relative">
      {/* Background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Crafting <span className="text-primary">Luxury</span> Tech Experiences
            </h2>
            <p className="text-muted-foreground mb-6">
              At LUXEON, we believe technology should be more than functional—it should be an 
              expression of sophistication and personal style. Founded by a team of designers 
              and engineers, we set out to create products that seamlessly integrate into the 
              lives of those who appreciate the finer things.
            </p>
            <p className="text-muted-foreground mb-8">
              Each LUXEON product is meticulously crafted using premium materials and cutting-edge 
              technology, resulting in pieces that are as beautiful as they are functional. 
              Our commitment to excellence extends beyond our products to every interaction 
              with our discerning clientele.
            </p>
            <Button asChild>
              <Link href="/about">
                <a>Discover Our Story</a>
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
              {/* Image placeholder with SVG */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-background/50 flex items-center justify-center">
                <svg 
                  className="w-36 h-36 text-primary/50" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="10" y="10" width="80" height="80" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" />
                  <path d="M35 50 L65 50" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 35 L50 65" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              
              {/* Gold accent element */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-primary/20 blur-lg"></div>
              <div className="absolute top-10 left-10 w-16 h-16 rounded-full border border-primary/40"></div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass p-4 rounded-lg text-center">
                <p className="text-primary text-3xl font-display font-bold">7+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <p className="text-primary text-3xl font-display font-bold">50K+</p>
                <p className="text-sm text-muted-foreground">Satisfied Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
