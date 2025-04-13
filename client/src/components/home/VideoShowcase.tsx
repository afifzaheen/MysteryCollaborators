import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Play, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';

interface VideoShowcaseProps {
  videoSrc?: string;
  title?: string;
  description?: string;
}

const VideoShowcase = ({
  videoSrc = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // Sample video as default
  title = "SOLARA Luxury Tech",
  description = "Where technology meets unparalleled elegance"
}: VideoShowcaseProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play video on first load, but muted
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.error("Error auto-playing video:", err);
      });
    }
  }, []);

  // Handle video playback
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(err => {
        console.error("Error playing video:", err);
        setHasError(true);
      });
    } else if (videoRef.current && !isPlaying) {
      // When not in playing mode, we mute and continue playing in the background
      videoRef.current.muted = true;
      setIsMuted(true);
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

  // Scroll down to content
  const scrollToContent = () => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      window.scrollTo({
        top: height - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center"
    >
      {/* Full-screen background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          </div>
        )}
        
        {hasError ? (
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-background/95 to-black/90 flex items-center justify-center">
            <div className="text-white/70 text-center">
              <p className="text-xl mb-2">Unable to play video</p>
              <p className="text-primary text-sm mb-4">Please check the video source or try again later</p>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            playsInline
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            muted={isMuted}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 pointer-events-none"></div>
      </div>
      
      {/* Content overlay */}
      <Container className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div 
          className="text-center mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            {description}
          </p>
          
          {/* Play button for unmuted video */}
          {!isPlaying && (
            <motion.button 
              className="relative mb-12 w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center group"
              onClick={() => setIsPlaying(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Play className="h-8 w-8 text-primary-foreground group-hover:text-primary-foreground/80 transition-colors" />
              
              {/* Ripple effect */}
              <motion.span 
                className="absolute inset-0 rounded-full border border-primary/50"
                animate={{ scale: [1, 1.5, 1.8], opacity: [1, 0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
          )}
          
          {/* Control buttons when in playing mode */}
          {isPlaying && (
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button 
                className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors border border-white/10"
                onClick={() => setIsPlaying(false)}
              >
                <X className="h-4 w-4 mr-2" />
                Close
              </button>
            </motion.div>
          )}
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/showcase">
              <Button size="lg" className="px-8 py-6 text-lg">
                Explore Collection
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button
            onClick={scrollToContent}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default VideoShowcase;