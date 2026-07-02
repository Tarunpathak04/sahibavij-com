import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type Product } from "@/components/ProductCard";
import heroImg from "@/assets/hero.png";
import founderImg from "@/assets/founder-dark.jpg";
import { useState } from "react";
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
    <div className="relative bg-[#060006] min-h-screen">

      {/* HERO */}
      <section className="relative w-full min-h-[88svh] lg:min-h-[100svh] overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Luxury Background"
            loading="eager"
            className="w-full h-full object-cover object-[85%_center] lg:object-center brightness-110"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#060006]" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-8 pb-12 sm:px-12 sm:pt-16">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <h1
              className="font-serif leading-[0.9] tracking-tight text-[#f2ebe0] font-light"
              style={{ fontSize: "clamp(3.2rem, 10vw, 6rem)" }}
            >
              Sahiba
              <br />
              <span className="text-[#d4206a] italic font-medium">Vij</span>
            </h1>

            <div className="mt-5 sm:mt-8 flex flex-col items-start">
              <div className="w-16 sm:w-20 h-px bg-[#d4af37] mb-3" />
              <p
                className="tracking-[0.32em] text-[#FFD700] uppercase font-bold"
                style={{
                  fontSize: "clamp(9px, 2.5vw, 13px)",
                  textShadow: "0 2px 10px rgba(0,0,0,0.85), 0 0 18px rgba(255,215,0,0.35)",
                }}
              >
                Every sparkle has its own story
              </p>
              <div className="w-16 sm:w-20 h-px bg-[#d4af37] mt-3" />
            </div>

            <div className="flex flex-wrap gap-3 mt-7 sm:mt-10">
              <Link
                to="/shop"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#d4206a] text-white uppercase tracking-widest text-[10px] sm:text-xs font-bold rounded-full hover:opacity-90 hover:scale-105 transition-all"
              >
                Explore Collection
              </Link>
              <Link
                to="/about"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-[#f2ebe0] uppercase tracking-widest text-[10px] sm:text-xs font-bold rounded-full hover:bg-white/20 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ORNAMENTAL DIVIDER */}
      <div className="bg-[#060006] pt-8 pb-4">
        <OrnamentalDivider />
      </div>

      {/* FEATURED COLLECTION */}
      <section className="bg-[#060006] px-4 sm:px-6 pb-8">
        <div className="container mx-auto">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f2ebe0] font-light">
              Featured Collection
            </h2>
          </div>

          {featured && featured.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {featured.slice(0, 6).map((product, idx) => (
                <ProductCard key={product.id} p={product} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#a89585] text-sm tracking-widest uppercase">
                Collection coming soon
              </p>
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border border-[#d4af37]/40 text-[#d4af37] px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-[#d4af37]/10 transition-all rounded-full"
            >
              View All Pieces
            </Link>
          </div>
        </div>
      </section>

      {/* DESIGNER */}
      <section className="bg-[#060006] py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={founderImg}
              alt="Sahiba Vij"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37]/80 mb-4">
              Meet the Designer
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#f2ebe0] mb-6 font-light">
              A muse with{" "}
              <span className="text-[#d4206a] italic">14 years</span>{" "}
              of craft
            </h2>
            <p className="text-[#a89585] leading-relaxed mb-8">
              Sahiba Vij blends a Media & Culture Studies background from London
              with fourteen years of jewellery artistry — creating cinematic,
              story-driven pieces that feel luxurious while remaining beautifully
              wearable.
            </p>
            <Link
              to="/about"
              className="text-xs tracking-[0.3em] uppercase text-[#d4206a] font-bold hover:text-[#d4af37] transition-all"
            >
              Read Her Story →
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />
    </div>
  );
}

function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center px-8">
      <div className="flex items-center gap-2 flex-1 max-w-[140px]">
        <span className="w-1 h-1 rounded-full bg-[#d4af37]/40" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
        <span className="w-2 h-2 rounded-full bg-[#d4af37]/80" />
      </div>

      <div className="mx-3">
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="text-[#d4af37]">
          <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <line x1="16" y1="2" x2="16" y2="30" />
            <line x1="2" y1="16" x2="30" y2="16" />
            <line x1="5.5" y1="5.5" x2="26.5" y2="26.5" />
            <line x1="26.5" y1="5.5" x2="5.5" y2="26.5" />
          </g>
          <circle cx="16" cy="3.5" r="1" fill="currentColor" opacity="0.55" />
          <circle cx="16" cy="28.5" r="1" fill="currentColor" opacity="0.55" />
          <circle cx="3.5" cy="16" r="1" fill="currentColor" opacity="0.55" />
          <circle cx="28.5" cy="16" r="1" fill="currentColor" opacity="0.55" />
          <circle cx="7" cy="7" r="0.8" fill="currentColor" opacity="0.4" />
          <circle cx="25" cy="7" r="0.8" fill="currentColor" opacity="0.4" />
          <circle cx="7" cy="25" r="0.8" fill="currentColor" opacity="0.4" />
          <circle cx="25" cy="25" r="0.8" fill="currentColor" opacity="0.4" />
          <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
          <circle cx="16" cy="16" r="1.8" fill="currentColor" />
        </svg>
      </div>

      <div className="flex items-center gap-2 flex-1 max-w-[140px]">
        <span className="w-2 h-2 rounded-full bg-[#d4af37]/80" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        <span className="w-1 h-1 rounded-full bg-[#d4af37]/40" />
      </div>
    </div>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Enter a valid email");
    setLoading(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email });
    setLoading(false);
    if (error && !error.message.includes("duplicate")) {
      toast.error("Couldn't subscribe. Try again.");
    } else {
      toast.success("Welcome to the muse list ✦");
      setEmail("");
    }
  };

  return (
    <section className="bg-[#060006] py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4206a] mb-3">
          Join the Muse List
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#f2ebe0] font-light mb-4">
          Be the first to know
        </h2>
        <div className="w-12 h-px bg-[#d4af37] mx-auto my-4" />
        <p className="text-[#a89585] mb-8 text-sm leading-relaxed">
          New collections, limited drops, and quiet stories — straight to your inbox.
        </p>

        <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-[#0f0a0d] border border-[#d4af37]/20 text-[#f2ebe0] placeholder:text-[#a89585]/50 focus:outline-none focus:border-[#d4206a] transition-colors rounded-full text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-[#d4206a] text-white uppercase text-xs font-bold tracking-widest hover:opacity-90 transition-all rounded-full disabled:opacity-50"
          >
            {loading ? "..." : "Subscribe"}
          </button>
        </form>

        <p className="text-[9px] tracking-[0.2em] uppercase text-[#a89585]/50 mt-5">
          No spam, only soulful stories.
        </p>
      </div>
    </section>
  );
}