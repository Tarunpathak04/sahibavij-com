import { Link } from "@tanstack/react-router";
import { formatINR } from "@/lib/cart";
import { useEffect } from "react";

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

  useEffect(() => {
    if (p.images?.length > 1) {
      p.images.slice(1).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [p.images]);

  return (
    <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
      <div className="relative overflow-hidden bg-[#0f0a0d] border border-white/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#d4af37]/30 rounded-xl">

        {/* IMAGE — square on mobile, 4/5 on desktop */}
        <div className="relative w-full aspect-square sm:aspect-[3/4] overflow-hidden">
          <img
            src={p.images?.[0] || "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"}
            alt={p.name}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80";
            }}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
          />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a0d]/90 via-transparent to-transparent pointer-events-none" />

          {/* Collection number */}
          <span className="absolute bottom-2 left-3 font-serif text-[56px] sm:text-[70px] leading-none text-[#d4af37]/20 select-none pointer-events-none">
            /{num}
          </span>

          {/* Top right number */}
          <span className="absolute top-3 right-3 text-[10px] tracking-[0.3em] text-[#d4af37]/60">
            /{num}
          </span>

          {/* LIMITED badge */}
          {p.is_limited_edition && !soldOut && (
            <span className="absolute top-3 left-3 bg-[#6b2040] text-white text-[8px] tracking-[0.25em] uppercase px-2.5 py-1 rounded-sm">
              Limited
            </span>
          )}

          {/* SOLD OUT overlay */}
          {soldOut && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/65">
              <span className="border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-[0.4em] uppercase px-5 py-2">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* INFO */}
        <div className="px-3 py-3 sm:px-4 sm:py-4">
          <h3 className="font-serif text-base sm:text-lg text-[#f2ebe0] leading-tight group-hover:text-[#d4af37] transition-colors line-clamp-2">
            {p.name}
          </h3>
          <div className="flex items-center justify-between mt-1.5">
            <p className={`text-sm ${soldOut ? "text-[#a89585] line-through" : "text-[#d4af37]"}`}>
              {formatINR(p.price)}
            </p>
            {lowStock && (
              <span className="text-[9px] tracking-[0.15em] uppercase text-rose-400">
                Only {p.stock_count} left
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}