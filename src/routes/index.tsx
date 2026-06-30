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
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Luxury Background"
            className="w-full h-full object-cover object-[85%_center] lg:object-center brightness-110"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
        </div>

        {/* Hero Content */}
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
              <Link to="/shop" className="px-8 py-4 bg-[#d4206a] text-white uppercase tracking-widest text-xs font-bold rounded-full hover:scale-105 transition-all">
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
      <div className="bg-[#060006] pt-8 pb-2 sm:pt-10">
        <OrnamentalDivider />
      </div>

      {/* FEATURED COLLECTION */}
      <section className="bg-[#060006] container mx-auto px-6 pt-4 pb-2 sm:pb-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-serif text-4xl text-cream font-light">Featured Collection</h2>
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
            <img src={founderImg} alt="Sahiba Vij" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-6">Meet the Designer</p>
            <h2 className="font-serif text-5xl text-cream mb-8 font-light">
              A muse with <span className="text-[#d4206a] italic">14 years</span> of craft
            </h2>
            <p className="text-lg text-muted mb-10">
              Sahiba Vij blends a Media & Culture Studies background from London with fourteen years of jewellery artistry.
            </p>
            <Link to="/about" className="text-sm tracking-[0.3em] uppercase text-[#d4206a] font-bold hover:text-gold transition-all">
              Read Her Story →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================
// Ornamental divider — dots + filigree star
// ============================================
function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center gap-3 px-6">
      <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
      <span className="flex-1 max-w-[80px] h-px bg-gold/40" />
      <span className="w-2 h-2 rounded-full bg-gold/70" />

      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className="text-gold mx-1"
      >
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <line x1="14" y1="2" x2="14" y2="26" />
          <line x1="2" y1="14" x2="26" y2="14" />
          <line x1="5" y1="5" x2="23" y2="23" />
          <line x1="23" y1="5" x2="5" y2="23" />
        </g>
        <circle cx="14" cy="14" r="3.2" fill="currentColor" />
      </svg>

      <span className="w-2 h-2 rounded-full bg-gold/70" />
      <span className="flex-1 max-w-[80px] h-px bg-gold/40" />
      <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
    </div>
  );
}