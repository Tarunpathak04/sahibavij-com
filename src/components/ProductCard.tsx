import { Link } from "@tanstack/react-router";
import { formatINR } from "@/lib/cart";
import { Sparkles, Eye, ArrowUpRight } from "lucide-react";
import { memo } from "react";

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

// Wrapped in React.memo to prevent unnecessary re-renders
export const ProductCard = memo(function ProductCard({
  p,
  index = 0,
  priority = false, // Pass priority={true} for the top 2-4 products on the screen
}: {
  p: Product;
  index?: number;
  priority?: boolean;
}) {
  const soldOut = p.stock_count <= 0;
  const num = String(index + 1).padStart(2, "0");

  // Smart Preloading: Only fetch secondary images when the user shows intent (hover)
  const handleMouseEnter = () => {
    if (p.images?.length > 1) {
      const img = new Image();
      img.src = p.images[1];
    }
  };

  return (
    <Link
      to="/product/$slug"
      params={{ slug: p.slug }}
      className="group flex flex-col gap-4 sm:gap-5"
      onMouseEnter={handleMouseEnter}
      style={{ willChange: "transform" }}
    >
      <div
        className="
          relative aspect-[4/5] w-full overflow-hidden rounded-[20px] sm:rounded-[28px]
          bg-[#0f0a0d] border border-white/5
          shadow-[0_10px_40px_rgba(0,0,0,0.3)] sm:shadow-[0_20px_80px_rgba(0,0,0,0.55)]
          transition-transform duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_30px_100px_rgba(194,24,91,0.18)]
        "
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={p.images?.[0] || "/placeholder-image.webp"}
            alt={p.name}
            // Eager load top images, lazy load the rest
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
              brightness-[0.92] group-hover:brightness-100
            "
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
        
        <div
          className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            transition-opacity duration-500 pointer-events-none
            bg-[radial-gradient(circle_at_50%_20%,rgba(194,24,91,0.15),transparent_55%)]
          "
        />

        <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-3 z-10 select-none pointer-events-none">
          <span className="font-serif italic text-[5rem] sm:text-[7rem] md:text-[8rem] leading-none text-white/[0.04]">
            {num}
          </span>
        </div>

        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 text-[9px] sm:text-[10px] tracking-[0.35em] text-gold/70 pointer-events-none">
          /{num}
        </div>

        {p.is_limited_edition && !soldOut && (
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-none">
            <div
              className="
                px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#ff5c9f]/20
                bg-[#c2185b]/80 backdrop-blur-sm
                shadow-[0_0_30px_rgba(194,24,91,0.35)]
                flex items-center gap-1.5 sm:gap-2
              "
            >
              <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-gold" />
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-white font-medium">
                Limited
              </span>
            </div>
          </div>
        )}

        {soldOut && (
          <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-none">
            <div
              className="
                px-6 py-2.5 sm:px-7 sm:py-3 rounded-full border border-gold/40
                bg-background/60 backdrop-blur-xl
              "
            >
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-gold">
                Sold Out
              </span>
            </div>
            <p className="mt-3 sm:mt-4 text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-white/50">
              Join Waitlist
            </p>
          </div>
        )}

        <div className="absolute top-0 left-0 w-10 sm:w-14 h-10 sm:h-14 border-t border-l border-gold/0 group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-10 sm:w-14 h-10 sm:h-14 border-b border-r border-gold/0 group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
      </div>

      <div className="flex flex-col px-1 sm:px-2 relative">
        <div className="w-0 h-px bg-gold group-hover:w-12 transition-all duration-500 mb-3 sm:mb-4" />

        <h3
          className="
            font-serif text-[1.25rem] sm:text-[1.5rem] md:text-[1.7rem]
            leading-[1.2] text-cream
            group-hover:text-white transition-colors duration-300
            line-clamp-2
          "
        >
          {p.name}
        </h3>

        <div className="flex items-end justify-between mt-2 sm:mt-3">
          <div className="flex flex-col gap-1">
            <p className="text-xs sm:text-sm tracking-[0.18em] text-gold/90 font-light">
              {formatINR(p.price)}
            </p>
          </div>

          <div
            className="
              flex items-center gap-1.5 sm:gap-2
              opacity-0 translate-x-4
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-500 ease-out
            "
          >
            <div
              className="
                w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-white/10
                bg-white/5 backdrop-blur-sm
                flex items-center justify-center
                hover:bg-white/10 hover:border-gold/30 transition-colors
              "
            >
              <Eye className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white/80" strokeWidth={1.5} />
            </div>
            <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#c2185b]" strokeWidth={2} />
          </div>
        </div>
      </div>
    </Link>
  );
});