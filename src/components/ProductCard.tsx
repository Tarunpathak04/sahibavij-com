import { Link } from "@tanstack/react-router";
import { formatINR } from "@/lib/cart";

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
    <Link
      to="/product/$slug"
      params={{ slug: p.slug }}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface">
        <img
          src={p.images[0]}
          alt={p.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Number */}
        <span className="absolute bottom-4 left-4 font-serif text-[80px] leading-none text-gold/20 select-none">
          /{num}
        </span>
        
        {p.is_limited_edition && !soldOut && (
          <span className="absolute top-4 left-4 bg-gold text-background text-[9px] tracking-[0.2em] uppercase px-3 py-1">
            Limited
          </span>
        )}
        
        {soldOut && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center backdrop-blur-sm">
            <span className="border border-gold text-gold px-6 py-2 text-xs tracking-[0.3em] uppercase">
              Sold Out
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors duration-300">
          {p.name}
        </h3>
        <p className="text-sm text-muted mt-1">{formatINR(p.price)}</p>
      </div>
    </Link>
  );
}