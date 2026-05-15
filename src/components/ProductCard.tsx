import { Link } from "@tanstack/react-router";
import { formatINR } from "@/lib/cart";
import { Sparkles, Eye } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  images: string[];
  stock_count: number;
  is_featured: boolean;
  is_limited_edition: boolean;
};

export function ProductCard({ p, index = 0 }: { p: Product; index?: number }) {
  const soldOut = p.stock_count <= 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface rounded-sm shadow-2xl transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
        {/* Product Image */}
        <img
          src={p.images[0]}
          alt={p.name}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100"
        />
        
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
        
        {/* Hover Reveal Layer */}
        <div className="absolute inset-0 bg-mauve/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Editorial Number - Bottom Right Large */}
        <div className="absolute bottom-3 right-3 z-10">
          <div className="relative">
            <span className="font-serif italic text-7xl md:text-8xl font-light text-mauve/15 leading-none">
              {num}
            </span>
            <div className="absolute -bottom-1 right-0 w-8 h-px bg-gold/0 group-hover:bg-gold/50 transition-all duration-500" />
          </div>
        </div>
        
        {/* Editorial Number - Top Right Small */}
        <div className="absolute top-4 right-4 z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
          <span className="font-serif text-sm tracking-[0.2em] text-gold">/{num}</span>
        </div>
        
        {/* LIMITED Badge - Premium */}
        {p.is_limited_edition && !soldOut && (
          <div className="absolute top-4 left-4 z-10">
            <div className="relative">
              <span className="relative z-10 bg-mauve text-background text-[8px] tracking-[0.25em] uppercase px-3 py-1.5 shadow-lg">
                Limited Edition
              </span>
              <Sparkles className="absolute -top-2 -right-3 w-3 h-3 text-gold animate-pulse" />
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        {p.category && !soldOut && (
          <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
            <span className="bg-cream/10 backdrop-blur-sm text-cream/70 text-[8px] tracking-[0.2em] uppercase px-2 py-1 border border-cream/20">
              {p.category}
            </span>
          </div>
        )}
        
        {/* Sold Out Overlay - Luxury */}
        {soldOut && (
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center z-20">
            <div className="relative">
              <div className="absolute inset-0 border border-gold/30 rounded-full animate-ping" />
              <span className="relative block px-6 py-2.5 border border-gold text-gold text-[10px] tracking-[0.3em] uppercase bg-background/50">
                Sold Out
              </span>
            </div>
            <p className="text-[8px] text-muted mt-3 tracking-wider">Join Waitlist</p>
          </div>
        )}
        
        {/* Product Info - Bottom Left with Animation */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
          {/* Gold Line Reveal */}
          <div className="w-8 h-px bg-gold/0 group-hover:bg-gold/60 transition-all duration-700 mb-3" />
          
          {/* Product Name */}
          <h3 className="font-serif text-xl md:text-2xl text-cream group-hover:text-mauve transition-colors duration-500 leading-tight mb-1">
            {p.name}
          </h3>
          
          {/* Price with Animation */}
          <div className="flex items-center gap-3 mt-2">
            <p className="text-sm tracking-[0.15em] text-gold font-light">
              {formatINR(p.price)}
            </p>
            {!soldOut && p.stock_count < 10 && p.stock_count > 0 && (
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
                <span className="text-[8px] text-rose-400 tracking-wider">
                  Only {p.stock_count} left
                </span>
              </div>
            )}
          </div>
          
          {/* Quick View Button - Hover Reveal */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-10 transition-all duration-500 mt-2">
            <div className="flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase text-mauve/70 group-hover:text-mauve">
              <Eye className="w-3 h-3" strokeWidth={1.5} />
              <span>Quick View</span>
              <div className="w-6 h-px bg-mauve/30 group-hover:w-10 transition-all duration-500" />
            </div>
          </div>
        </div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/0 group-hover:border-gold/30 transition-all duration-700" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/0 group-hover:border-gold/30 transition-all duration-700" />
      </div>
    </Link>
  );
}