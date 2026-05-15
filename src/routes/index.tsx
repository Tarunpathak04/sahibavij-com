import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type Product } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-dark.jpg";
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
    <div className="bg-background min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Luxury Background" 
            className="w-full h-full object-cover"
          />
          {/* Clean Gradient - No Blur */}
          <div className="absolute inset-0 bg-gradient-to-r 
            from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t 
            from-background/80 via-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-4xl md:max-w-5xl">
              {/* Sahiba Vij - 10% Smaller than before */}
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] text-cream font-light tracking-tight leading-[0.95] animate-fade-up">
                Sahiba
                <br />
                <span className="text-mauve italic block mt-2 animate-fade-up" style={{animationDelay: "0.1s"}}>
                  Vij
                </span>
              </h1>
              
              {/* Tagline - Clean and Visible */}
              <div className="my-8 sm:my-10 animate-fade-up" style={{animationDelay: "0.2s"}}>
                <div className="w-16 h-px bg-gold mb-5" />
                <p className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.3em] text-gold uppercase font-light">
                  EVERY SPARKLE HAS ITS OWN STORY
                </p>
                <div className="w-16 h-px bg-gold mt-5" />
              </div>
              
              {/* Description */}
              <p className="text-cream/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl animate-fade-up" style={{animationDelay: "0.3s"}}>
                We are proud to boast flowers that are days fresher than you can buy from a shop or the market, as we obtain our flowers directly from the growers and deliver you in one of our bespoke, refrigerated vans.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Clean */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-between items-center px-5 sm:px-8 md:px-12 lg:px-16 text-[9px] sm:text-[10px] tracking-[0.25em] text-cream/40">
          <span>ENG</span>
          <div className="flex gap-4 sm:gap-5">
            <span>Q Search</span>
            <span>IN</span>
            <span>5/15/2026</span>
          </div>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="bg-surface py-20 sm:py-24 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <p className="text-muted text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto leading-relaxed">
            We are proud to bring you the finest blooms, handpicked from our own gardens 
            and curated with an editor's eye for beauty, impermanence, and quiet luxury.
          </p>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 md:py-28">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Signature Pieces</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream">Featured Collection</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured?.slice(0, 3).map((product, idx) => (
            <ProductCard key={product.id} p={product} index={idx} />
          ))}
        </div>
      </section>

      {/* DESIGNER SECTION */}
      <section className="bg-background">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] overflow-hidden">
            <img src={founderImg} alt="Sahiba Vij" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center p-8 sm:p-10 md:p-14 bg-surface">
            <div>
              <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Meet the Designer</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.2] mb-4">
                A muse with <span className="text-mauve italic">14 years</span> of craft
              </h2>
              <div className="w-12 h-px bg-gold mb-6" />
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                Sahiba Vij blends a Media & Culture Studies background from London with 14 years of jewellery design — creating cinematic, story-driven pieces that feel luxurious yet remain beautifully accessible.
              </p>
              <Link to="/about" className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-mauve hover:text-gold transition-colors">
                Read Her Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />
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
      toast.success("Welcome to the muse list");
      setEmail("");
    }
  };

  return (
    <section className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 md:py-28">
      <div className="text-center max-w-md sm:max-w-lg mx-auto">
        <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Join the Muse List</p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream mb-3">Be the first to know</h2>
        <p className="text-muted text-sm sm:text-base mb-8">New collections, limited drops, and quiet stories — straight to your inbox.</p>
        <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 bg-background border border-gold/20 text-cream placeholder:text-muted/50 focus:outline-none focus:border-mauve transition-colors text-sm"
          />
          <button disabled={loading} className="px-8 py-3 bg-mauve text-background text-[11px] tracking-[0.3em] uppercase hover:bg-gold transition-all duration-500 disabled:opacity-50">
            {loading ? "..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}