import { Link } from "@tanstack/react-router";
import { formatINR } from "@/lib/cart";
import { Sparkles, Eye, ArrowUpRight } from "lucide-react";

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

export function ProductCard({
  p,
  index = 0,
}: {
  p: Product;
  index?: number;
}) {
  const soldOut = p.stock_count <= 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      to="/product/$slug"
      params={{ slug: p.slug }}
      className="group block"
    >
      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-[28px]
          bg-[#0f0a0d]
          border border-white/5
          shadow-[0_20px_80px_rgba(0,0,0,0.55)]
          transition-all
          duration-700
          group-hover:-translate-y-2
          group-hover:shadow-[0_30px_100px_rgba(194,24,91,0.18)]
        "
      >
        {/* IMAGE */}
        <div className="absolute inset-0 overflow-hidden">
          <img
           src={p.images?.[0] || "/placeholder-image.webp"}
            alt={p.name}
            className="
              w-full
              h-full
              object-cover
              scale-[1.01]
              transition-all
              duration-[1400ms]
              ease-out
              group-hover:scale-110
              brightness-[0.88]
              group-hover:brightness-[1]
            "
          />
        </div>

        {/* CINEMATIC OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070507] via-[#070507]/25 to-transparent opacity-95" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

        {/* MAUVE HOVER LIGHT */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-700
            bg-[radial-gradient(circle_at_50%_20%,rgba(194,24,91,0.22),transparent_55%)]
          "
        />

        {/* TOP SHINE */}
        <div
          className="
            absolute
            top-0
            left-[-120%]
            h-full
            w-[45%]
            rotate-12
            bg-white/10
            blur-2xl
            group-hover:left-[130%]
            transition-all
            duration-[1600ms]
          "
        />

        {/* BIG EDITORIAL NUMBER */}
        <div className="absolute bottom-2 right-3 z-10">
          <span
            className="
              font-serif
              italic
              text-[6rem]
              md:text-[8rem]
              leading-none
              text-white/[0.04]
              group-hover:text-mauve/10
              transition-colors
              duration-700
              select-none
            "
          >
            {num}
          </span>
        </div>

        {/* SMALL NUMBER */}
        <div
          className="
            absolute
            top-5
            right-5
            z-10
            text-[10px]
            tracking-[0.35em]
            text-gold/70
            opacity-70
            group-hover:opacity-100
            transition-opacity
            duration-500
          "
        >
          /{num}
        </div>

        {/* LIMITED BADGE */}
        {p.is_limited_edition && !soldOut && (
          <div className="absolute top-5 left-5 z-20">
            <div
              className="
                relative
                overflow-hidden
                px-4
                py-2
                rounded-full
                border
                border-[#ff5c9f]/20
                bg-[#c2185b]/80
                backdrop-blur-xl
                shadow-[0_0_30px_rgba(194,24,91,0.35)]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-white/0
                  via-white/10
                  to-white/0
                "
              />

              <div className="relative flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-gold" />
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.28em]
                    text-white
                    font-medium
                  "
                >
                  Limited Edition
                </span>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY */}
        {p.category && !soldOut && (
          <div
            className="
              absolute
              top-5
              left-5
              z-10
              opacity-0
              group-hover:opacity-100
              translate-y-2
              group-hover:translate-y-0
              transition-all
              duration-500
            "
          >
            <span
              className="
                px-3
                py-1.5
                rounded-full
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                text-[8px]
                tracking-[0.28em]
                uppercase
                text-white/70
              "
            >
              {p.category}
            </span>
          </div>
        )}

        {/* SOLD OUT */}
        {soldOut && (
          <div
            className="
              absolute
              inset-0
              z-30
              bg-black/75
              backdrop-blur-md
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-gold/30 animate-ping" />

              <div
                className="
                  relative
                  px-7
                  py-3
                  rounded-full
                  border
                  border-gold/40
                  bg-background/60
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    text-[10px]
                    tracking-[0.35em]
                    uppercase
                    text-gold
                  "
                >
                  Sold Out
                </span>
              </div>
            </div>

            <p className="mt-4 text-[9px] tracking-[0.25em] uppercase text-white/40">
              Join Waitlist
            </p>
          </div>
        )}

        {/* PRODUCT INFO */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-20
            p-6
          "
        >
          {/* GOLD LINE */}
          <div
            className="
              w-0
              h-px
              bg-gold
              group-hover:w-14
              transition-all
              duration-700
              mb-5
            "
          />

          {/* NAME */}
          <h3
            className="
              font-serif
              text-[1.7rem]
              md:text-[2rem]
              leading-[1.05]
              text-cream
              transition-all
              duration-500
              group-hover:text-white
            "
          >
            {p.name}
          </h3>

          {/* PRICE */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <p
                className="
                  text-sm
                  tracking-[0.18em]
                  text-gold
                  font-light
                "
              >
                {formatINR(p.price)}
              </p>

              {!soldOut &&
                p.stock_count < 10 &&
                p.stock_count > 0 && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.22em]
                        text-rose-300
                      "
                    >
                      Only {p.stock_count} left
                    </span>
                  </div>
                )}
            </div>

            {/* QUICK VIEW */}
            <div
              className="
                flex
                items-center
                gap-2
                opacity-0
                translate-x-4
                group-hover:opacity-100
                group-hover:translate-x-0
                transition-all
                duration-500
              "
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                "
              >
                <Eye className="w-4 h-4 text-white/80" strokeWidth={1.6} />
              </div>

              <ArrowUpRight
                className="
                  w-4
                  h-4
                  text-mauve
                "
                strokeWidth={1.8}
              />
            </div>
          </div>
        </div>

        {/* CORNER LUXURY BORDERS */}
        <div
          className="
            absolute
            top-0
            left-0
            w-14
            h-14
            border-t
            border-l
            border-gold/0
            group-hover:border-gold/30
            transition-all
            duration-700
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-14
            h-14
            border-b
            border-r
            border-gold/0
            group-hover:border-gold/30
            transition-all
            duration-700
          "
        />
      </div>
    </Link>
  );
}