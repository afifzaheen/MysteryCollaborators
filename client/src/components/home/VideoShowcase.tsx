import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useState } from 'react';

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/80 pointer-events-none"></div>
      
      <Container className="relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Experience <span className="text-primary">SOLARA</span> In Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Witness the perfect fusion of technology and luxury that defines our products.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden glass border border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Video container with aspect ratio */}
          <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
            {!isPlaying ? (
              <>
                {/* Video thumbnail with overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-black/30 flex items-center justify-center">
                  {/* Placeholder gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-black/80 to-primary/5"></div>
                  
                  {/* Gold particles effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.div 
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-primary/80"
                        initial={{ 
                          x: Math.random() * 100 + "%", 
                          y: Math.random() * 100 + "%", 
                          opacity: Math.random() * 0.5 + 0.3
                        }}
                        animate={{ 
                          y: [null, Math.random() * -50],
                          opacity: [null, 0]
                        }}
                        transition={{ 
                          duration: Math.random() * 8 + 4,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Product image */}
                  <img 
                    src="/src/assets/images/products/headphones.svg" 
                    alt="SOLARA Premium Headphones"
                    className="absolute right-8 bottom-0 w-64 h-auto opacity-30 transform rotate-12"
                  />
                  
                  {/* Play button */}
                  <motion.button 
                    className="relative z-10 w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center group"
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-8 w-8 text-primary-foreground group-hover:text-primary-foreground/80 transition-colors" />
                    
                    {/* Ripple effect */}
                    <motion.span 
                      className="absolute inset-0 rounded-full border border-primary/50"
                      animate={{ scale: [1, 1.5, 1.8], opacity: [1, 0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.button>
                  
                  <div className="absolute bottom-8 left-8 text-left">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                      SOLARA Sound Experience
                    </h3>
                    <p className="text-white/70 text-sm md:text-base max-w-xs">
                      Immerse yourself in unparalleled audio quality and luxurious design
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Actual video placeholder - would be replaced with real video */}
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <p className="text-white/70 text-center">
                    Your product video would play here.<br />
                    <span className="text-primary text-sm">(Add your video file to replace this placeholder)</span>
                  </p>
                  
                  <button 
                    className="absolute bottom-4 right-4 px-3 py-1 rounded bg-primary/20 text-white text-sm"
                    onClick={() => setIsPlaying(false)}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
        
        {/* Video caption and CTA */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-6">
            See how our premium products blend into your lifestyle with their elegant design and uncompromising performance.
          </p>
          <Button variant="glass" size="lg">
            Explore Our Collection
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default VideoShowcase;