import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  hoverEffect = true, 
  ...motionProps 
}) => {
  return (
    <motion.div
      className={cn(
        "glass rounded-lg border border-primary/20 bg-black/30 backdrop-blur-md shadow-lg",
        hoverEffect && "hover:-translate-y-1 hover:shadow-primary/20 transition-all duration-300",
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export { GlassCard };
