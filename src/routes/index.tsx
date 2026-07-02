import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type Product } from "@/components/ProductCard";
import heroImg from "@/assets/hero.png";
import founderImg from "@/assets/founder-dark.jpg";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { data: featured } = useQuery({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("is_featured", true)
        .limit(6);

      return (data ?? []) as Product[];
    },
  });

  return (
    <div className="relative bg-background min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full lg:min-h-[100svh] overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Luxury Background"
            className="w-full h-full object-cover object-[85%_center] lg:object-center brightness-110"
          />
          <div className="absolute inset-0 bg-black/35" />
          {/* Gradient ends in exact same color as sections below — no hard seam */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#060006]" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-start lg:justify-center px-6 pt-16 pb-10 sm:px-12 sm:pt-20">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <h1 className="font-serif text-[4.5rem] sm:text-[6rem] leading-[0.9] tracking-tight text-cream font-light animate-fade-up">
              Sahiba<br />
              <span className="text-[#d4206a] italic font-medium">Vij</span>
            </h1>

            <div className="mt-6 sm:mt-8 flex flex-col items-start animate-fade-up">
              <div className="w-20 h-px bg-gold mb-4" />
              <p
                className="text-sm sm:text-lg tracking-[0.35em] text-[#FFD700] uppercase font-bold"
                style={{
                  textShadow:
                    "0 2px 10px rgba(0,0,0,0.85), 0 0 18px rgba(255,215,0,0.35)",
                }}
              >
                Every sparkle has its own story
              </p>
              <div className="w-20 h-px bg-gold mt-4" />
            </div>

            <div className="flex flex-wrap gap-4 mt-8 sm:mt-10 animate-fade-up">
              <Link
                to="/shop"
                className="px-8 py-4 bg-[#d4206a] text-white uppercase tracking-widest text-xs font-bold rounded-full hover:scale-105 transition-all"
              >
                Explore Collection
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-cream uppercase tracking-widest text-xs font-bold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/20 hover:border-white/50 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ORNAMENTAL DIVIDER */}
      <div className="bg-[#060006] pt-6 pb-4">
        <OrnamentalDivider />
      </div>

      {/* FEATURED COLLECTION */}
      <section className="bg-[#060006] container mx-auto px-6 pt-4 pb-2 sm:pb-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-serif text-4xl text-cream font-light">
            Featured Collection
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured?.slice(0, 3).map((product, idx) => (
            <ProductCard key={product.id} p={product} index={idx} />
          ))}
        </div>
      </section>

      {/* DESIGNER */}
      <section className="bg-[#060006] py-2 sm:py-4 lg:py-6">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={founderImg}
              alt="Sahiba Vij"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-6">
              Meet the Designer
            </p>
            <h2 className="font-serif text-5xl text-cream mb-8 font-light">
              A muse with{" "}
              <span className="text-[#d4206a] italic">14 years</span> of craft
            </h2>
            <p className="text-lg text-muted mb-10">
              Sahiba Vij blends a Media & Culture Studies background from London
              with fourteen years of jewellery artistry.
            </p>
            <Link
              to="/about"
              className="text-sm tracking-[0.3em] uppercase text-[#d4206a] font-bold hover:text-gold transition-all"
            >
              Read Her Story →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================
// Ornamental divider — detailed filigree
// ============================================
function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center px-8">

      {/* Left side */}
      <div className="flex items-center gap-2 flex-1 max-w-[140px]">
        <span className="w-1 h-1 rounded-full bg-[#d4af37]/40" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
        <span
          className="w-2 h-2 rounded-full bg-[#d4af37]/80 ring-1 ring-[#d4af37]/30 ring-offset-1"
          style={{ ringOffsetColor: "#060006" }}
        />
      </div>

      {/* Center 8-point filigree star */}
      <div className="mx-3 flex items-center justify-center">
        <svg
          width="34"
          height="34"
          viewBox="0 0 32 32"
          fill="none"
          className="text-[#d4af37]"
        >
          {/* 8 spokes */}
          <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <line x1="16" y1="2"    x2="16" y2="30" />
            <line x1="2"  y1="16"   x2="30" y2="16" />
            <line x1="5.5" y1="5.5" x2="26.5" y2="26.5" />
            <line x1="26.5" y1="5.5" x2="5.5" y2="26.5" />
          </g>
          {/* Tip dots on each spoke */}
          <circle cx="16" cy="3.5"  r="1"   fill="currentColor" opacity="0.55" />
          <circle cx="16" cy="28.5" r="1"   fill="currentColor" opacity="0.55" />
          <circle cx="3.5" cy="16"  r="1"   fill="currentColor" opacity="0.55" />
          <circle cx="28.5" cy="16" r="1"   fill="currentColor" opacity="0.55" />
          <circle cx="7"   cy="7"   r="0.8" fill="currentColor" opacity="0.4" />
          <circle cx="25"  cy="7"   r="0.8" fill="currentColor" opacity="0.4" />
          <circle cx="7"   cy="25"  r="0.8" fill="currentColor" opacity="0.4" />
          <circle cx="25"  cy="25"  r="0.8" fill="currentColor" opacity="0.4" />
          {/* Center ring + dot */}
          <circle cx="16" cy="16" r="4"   fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
          <circle cx="16" cy="16" r="1.8" fill="currentColor" />
        </svg>
      </div>

      {/* Right side — mirror */}
      <div className="flex items-center gap-2 flex-1 max-w-[140px]">
        <span
          className="w-2 h-2 rounded-full bg-[#d4af37]/80 ring-1 ring-[#d4af37]/30 ring-offset-1"
          style={{ ringOffsetColor: "#060006" }}
        />
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        <span className="w-1 h-1 rounded-full bg-[#d4af37]/40" />
      </div>

    </div>
  );
}