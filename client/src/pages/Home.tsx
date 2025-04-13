import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutPreview from '@/components/home/AboutPreview';
import { Container } from '@/components/ui/container';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
        <Container>
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Our <span className="text-primary">Clients</span> Say
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <p className="text-foreground mb-4">"The quality and craftsmanship of LUXEON products is unmatched. My smart watch receives compliments everywhere I go."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">JD</div>
                <div className="ml-3">
                  <p className="text-foreground font-semibold">James Davis</p>
                  <p className="text-xs text-muted-foreground">CEO, TechVentures</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <p className="text-foreground mb-4">"The attention to detail is exceptional. LUXEON doesn't just sell tech, they sell an experience that begins from the moment you open the packaging."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">SL</div>
                <div className="ml-3">
                  <p className="text-foreground font-semibold">Sophia Lee</p>
                  <p className="text-xs text-muted-foreground">Interior Designer</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <p className="text-foreground mb-4">"Not only are their products beautifully designed, but the performance is unmatched. My LUXEON home assistant has changed the way I interact with my space."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">MR</div>
                <div className="ml-3">
                  <p className="text-foreground font-semibold">Michael Rodriguez</p>
                  <p className="text-xs text-muted-foreground">Architect</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <Container>
          <GlassCard 
            className="max-w-4xl mx-auto p-12 border border-primary/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Elevate Your Digital Experience
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join the exclusive community of LUXEON users and discover how technology can be both functional and exquisite.
              </p>
              <Link href="/contact">
                <Button size="lg">Contact Us Today</Button>
              </Link>
            </div>
          </GlassCard>
        </Container>
      </section>
    </motion.div>
  );
};

export default Home;
