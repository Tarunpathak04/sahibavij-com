import { Link } from "@tanstack/react-router";
import { formatINR } from "@/lib/cart";
import { useEffect, useState } from "react";

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
  const lowStock = !soldOut && p.stock_count < 5;
  const num = String(index + 1).padStart(2, "0");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    if (p.images?.length > 1) {
      p.images.slice(1).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [p.images]);

  // Get main image with fallback
  const mainImage = p.images?.[0] || "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80";

  return (
    <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
      <div className="relative overflow-hidden bg-[#0f0a0d] border border-white/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#d4af37]/30 rounded-xl">

        {/* IMAGE CONTAINER - FIXED ASPECT RATIO */}
        <div className="relative w-full aspect-square overflow-hidden bg-[#0f0a0d]">
          
          {/* Image with object-contain to show full image */}
          <img
            src={mainImage}
            alt={p.name}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80";
            }}
            className={`
              w-full h-full object-contain transition-all duration-500 
              group-hover:scale-105 
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              backgroundColor: '#0f0a0d',
              padding: '8px'
            }}
          />

          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a0d] to-[#1a1218] animate-pulse" />
          )}

          {/* Bottom gradient - lighter for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a0d]/70 via-transparent to-transparent pointer-events-none" />

          {/* Collection number - background */}
          <span className="absolute bottom-2 left-3 font-serif text-[56px] sm:text-[70px] leading-none text-[#d4af37]/15 select-none pointer-events-none">
            /{num}
          </span>

          {/* Top right number */}
          <span className="absolute top-3 right-3 text-[10px] tracking-[0.3em] text-[#d4af37]/50">
            /{num}
          </span>

          {/* LIMITED badge */}
          {p.is_limited_edition && !soldOut && (
            <span className="absolute top-3 left-3 bg-[#d4206a]/80 text-white text-[8px] tracking-[0.25em] uppercase px-2.5 py-1 rounded-sm backdrop-blur-sm border border-[#d4206a]/30">
              Limited
            </span>
          )}

          {/* SOLD OUT overlay */}
          {soldOut && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <span className="border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-[0.4em] uppercase px-5 py-2 rounded-full bg-black/30">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* INFO */}
        <div className="px-3 py-3 sm:px-4 sm:py-4">
          <h3 className="font-serif text-base sm:text-lg text-[#f2ebe0] leading-tight group-hover:text-[#d4af37] transition-colors line-clamp-2 min-h-[2.5rem]">
            {p.name}
          </h3>
          <div className="flex items-center justify-between mt-1.5 flex-wrap gap-1">
            <p className={`text-sm font-medium ${soldOut ? "text-[#a89585] line-through" : "text-[#d4af37]"}`}>
              {formatINR(p.price)}
            </p>
            {lowStock && (
              <span className="text-[8px] tracking-[0.15em] uppercase text-rose-400 animate-pulse">
                Only {p.stock_count} left
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}