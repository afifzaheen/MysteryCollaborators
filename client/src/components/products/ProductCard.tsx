import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="h-full flex flex-col">
        <div className="aspect-w-1 aspect-h-1 rounded-t-lg bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center p-6">
          {/* Product Image Placeholder */}
          <svg 
            className="w-32 h-32 text-primary" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1" />
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" />
            <path d="M9 12 L15 12" stroke="currentColor" strokeWidth="1" />
            <path d="M12 9 L12 15" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <span className="inline-block bg-secondary/50 text-primary text-xs px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          <h3 className="text-xl font-display font-semibold mb-2 text-foreground">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-primary font-bold">{product.price}</span>
            <Button variant="outline" size="sm" className="group">
              Details 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ProductCard;
