import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface VideoShowcaseProps {
  videoSrc?: string;
  title?: string;
  description?: string;
}

const VideoShowcase = ({
  videoSrc = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // Sample video as default
  title = "SOLARA Sound Experience",
  description = "Immerse yourself in unparalleled audio quality and luxurious design"
}: VideoShowcaseProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video playback
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Error playing video:", err);
        setHasError(true);
      });
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  // Handle video loaded
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  // Handle video error
  const handleVideoError = () => {
    setHasError(true);
    setIsLoading(false);
  };

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
                      {title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base max-w-xs">
                      {description}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Actual video */}
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  {isLoading && !hasError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                    </div>
                  )}
                  
                  {hasError ? (
                    <div className="text-white/70 text-center">
                      <p className="text-xl mb-2">Unable to play video</p>
                      <p className="text-primary text-sm mb-4">Please check the video source or try again later</p>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setHasError(false);
                          setIsPlaying(false);
                        }}
                      >
                        Go Back
                      </Button>
                    </div>
                  ) : (
                    <video
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full object-cover"
                      controls
                      playsInline
                      onLoadedData={handleVideoLoaded}
                      onError={handleVideoError}
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  
                  <button 
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
                    onClick={() => setIsPlaying(false)}
                  >
                    <X className="h-5 w-5 text-white" />
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