import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type Product } from "@/components/ProductCard";
import heroImg from "@/assets/hero.png";
import jewelryImg from "@/assets/Pic3.png";
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
    <div className="relative bg-background min-h-screen overflow-hidden">
  
      {/* GLOBAL LUXURY FLOWER TEXTURE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* MAIN FULLPAGE FLOWER TEXTURE */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "140% auto",
            backgroundPosition: "center top",
            opacity: 0.16,
            filter: "brightness(0.8) contrast(1.15)",
          }}
        />

        {/* INVERTED FLOWERS FROM BOTTOM */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "140% auto",
            backgroundPosition: "center bottom",
            transform: "rotate(180deg)",
            opacity: 0.12,
            mixBlendMode: "screen",
            filter: "brightness(1) contrast(1.2)",
          }}
        />

        {/* PINK CINEMATIC GLOW */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(212,32,106,0.12) 0%, transparent 65%)",
          }}
        />

        {/* DARK DEPTH */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">
      
        {/* GLOBAL FLOWER BACKGROUND OVERLAY */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          
          {/* TOP FLOWERS */}
          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-[600px]
              md:h-[1200px]
              opacity-[0.10]
            "
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            }}
          />

          {/* BOTTOM INVERTED FLOWERS */}
          <div
            className="
              absolute
              bottom-0
              left-0
              w-full
              h-[600px]
              md:h-[1400px]
              opacity-[0.08]
            "
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
              backgroundRepeat: "no-repeat",
              transform: "rotate(180deg)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            }}
          />

          {/* CENTER GLOW */}
          <div
            className="
              absolute
              inset-0
              opacity-30
            "
            style={{
              background:
                "radial-gradient(circle at center, rgba(212,32,106,0.08), transparent 65%)",
            }}
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10">
          
          {/* HERO SECTION - FIXED WITH TEXT HIGHER */}
          <section className="relative w-full min-h-screen overflow-hidden">
            
            {/* BACKGROUND */}
            <div className="absolute inset-0">
              <img
                src={heroImg}
                alt="Luxury Background"
                className="w-full h-full object-cover scale-105"
              />

              {/* Dark luxury overlays */}
              <div className="absolute inset-0 bg-black/45" />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-background via-background/50 to-transparent
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-background/80 via-transparent to-background/20
                "
              />
            </div>

            {/* Decorative Elements */}
            <div className="hero-flower animate-sway opacity-40" />
            <div className="corner-flower corner-tl opacity-30" />
            <div className="corner-flower corner-br opacity-30" />

            {/* SOFT PINK GRADIENT */}
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[70%] h-[85%] pointer-events-none z-0"
              style={{
                background: "radial-gradient(ellipse at 25% 50%, rgba(212,32,106,0.25) 0%, rgba(212,32,106,0.1) 50%, transparent 80%)",
                filter: "blur(80px)"
              }}
            />

            {/* CONTENT - MOVED UP */}
            <div className="relative z-10 h-full flex items-start pt-20 sm:pt-24 md:pt-28 lg:pt-20">
              <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
                
                <div className="grid lg:grid-cols-2 items-start gap-6 sm:gap-8 lg:gap-10">
                  
                  {/* LEFT SIDE - MOVED HIGHER */}
                  <div className="text-left mt-8 sm:mt-10 md:mt-12 lg:mt-0">
                    
                    {/* MAIN TITLE - UPPER POSITION */}
                    <h1
                      className="
                        font-serif
                        text-[3.5rem]
                        sm:text-[4.5rem]
                        md:text-[5.5rem]
                        lg:text-[7rem]
                        xl:text-[9rem]
                        leading-[0.88]
                        tracking-tight
                        text-cream
                        font-light
                        animate-fade-up
                        relative
                        z-10
                        -mt-4
                        sm:-mt-6
                        md:-mt-8
                      "
                    >
                      Sahiba
                      <br />

                      <span
                        className="
                          text-[#d4206a]
                          italic
                          block
                          ml-1
                          mt-1
                          text-[0.82em]
                          relative
                          z-10
                          font-medium
                        "
                        style={{ animationDelay: "0.1s" }}
                      >
                        Vij
                      </span>
                    </h1>

                    {/* TAGLINE */}
                    <div
                      className="mt-4 sm:mt-5 md:mt-6 animate-fade-up relative z-10"
                      style={{ animationDelay: "0.12s" }}
                    >
                      <div className="w-16 sm:w-20 md:w-24 h-px bg-gold mb-3 sm:mb-4" />

                      <p
                        className="
                          text-[10px]
                          sm:text-sm
                          md:text-base
                          lg:text-lg
                          xl:text-xl
                          tracking-[0.25em]
                          sm:tracking-[0.35em]
                          text-gold
                          uppercase
                          font-semibold
                          leading-relaxed
                          whitespace-nowrap
                          [text-shadow:_0_2px_12px_rgba(184,168,138,0.25)]
                        "
                      >
                        Every sparkle has its own story
                      </p>

                      <div className="w-16 sm:w-20 md:w-24 h-px bg-gold mt-3 sm:mt-4" />
                    </div>

                    {/* BUTTONS */}
                    <div
                      className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 mt-5 sm:mt-6 md:mt-8 animate-fade-up"
                      style={{ animationDelay: "0.14s" }}
                    >
                      <Link
                        to="/shop"
                        className="
                          group
                          relative
                          px-6 sm:px-8 md:px-10
                          py-3 sm:py-3.5 md:py-4
                          bg-[#1a0a0f]
                          text-cream
                          uppercase
                          tracking-[0.25em]
                          sm:tracking-[0.3em]
                          text-[9px]
                          sm:text-[10px]
                          md:text-[11px]
                          font-semibold
                          transition-all
                          duration-400
                          overflow-hidden
                          border border-[#d4206a]/40
                          shadow-[0_0_20px_rgba(212,32,106,0.3)]
                          hover:shadow-[0_0_35px_rgba(212,32,106,0.6)]
                          hover:scale-105
                          hover:-translate-y-1
                          active:scale-95
                          hover:border-[#d4206a]/80
                          text-center
                          min-w-[140px]
                          sm:min-w-[160px]
                          md:min-w-[180px]
                        "
                      >
                        <span className="relative z-10">Explore Collection</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#d4206a]/0 via-[#d4206a]/20 to-[#d4206a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </Link>

                      <Link
                        to="/about"
                        className="
                          px-6 sm:px-8 md:px-10
                          py-3 sm:py-3.5 md:py-4
                          border border-gold/40
                          text-gold
                          uppercase
                          tracking-[0.25em]
                          sm:tracking-[0.3em]
                          text-[9px]
                          sm:text-[10px]
                          md:text-[11px]
                          font-medium
                          hover:bg-gold/10
                          hover:border-gold
                          hover:text-gold
                          transition-all
                          duration-400
                          hover:scale-105
                          hover:-translate-y-1
                          text-center
                          min-w-[120px]
                          sm:min-w-[140px]
                          md:min-w-[160px]
                        "
                      >
                        Our Story
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT SIDE - Jewelry Image - POSITIONED BETTER */}
                  <div
                    className="
                      relative
                      flex
                      justify-center
                      lg:justify-end
                      items-start
                      lg:items-center
                      animate-fade-up
                      mt-2 sm:mt-4 lg:mt-0
                    "
                    style={{ animationDelay: "0.2s" }}
                  >
                    
                    {/* Glow */}
                    <div
                      className="
                        absolute
                        w-[70%]
                        sm:w-[80%]
                        h-[70%]
                        sm:h-[80%]
                        bg-gold/20
                        blur-[80px]
                        sm:blur-[100px]
                        md:blur-[120px]
                        rounded-full
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                      "
                    />

                    {/* Jewellery Image - ADJUSTED POSITION */}
                    <img
                      src={jewelryImg}
                      alt="Sahiba Vij Signature Jewelry"
                      className="
                        relative
                        w-[180px]
                        sm:w-[250px]
                        md:w-[350px]
                        lg:w-[450px]
                        xl:w-[550px]
                        h-auto
                        object-contain
                        drop-shadow-[0_25px_80px_rgba(0,0,0,0.8)]
                        hover:scale-[1.02]
                        transition-transform
                        duration-700
                        -mt-8
                        sm:-mt-12
                        md:-mt-16
                        lg:mt-0
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BRAND INTRO */}
          <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
            
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                
                <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-8 sm:w-10 md:w-12 h-px bg-gold/40" />
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-gold/70">Since 2012</span>
                  <div className="w-8 sm:w-10 md:w-12 h-px bg-gold/40" />
                </div>

                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-cream leading-[1.3] mb-4 sm:mb-5 md:mb-6 font-light tracking-wide">
                  Jewellery that feels like poetry,
                  <br />
                  designed for{" "}
                  <span className="text-[#d4206a] italic font-medium">timeless souls</span>
                  <span className="text-gold text-3xl sm:text-4xl inline-block ml-1 sm:ml-2">.</span>
                </h2>

                <div className="w-12 sm:w-14 md:w-16 h-px bg-gold mx-auto my-4 sm:my-5 md:my-6" />

                <p className="text-muted text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed max-w-3xl mx-auto font-light tracking-wide px-2">
                  Timeless jewellery crafted for those who seek quiet luxury,
                  cinematic beauty, and elegance that lasts beyond trends.
                </p>

                <div className="mt-6 sm:mt-7 md:mt-8">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 mx-auto opacity-30">
                    <div className="hero-flower w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURED SECTION */}
          <section className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-28 relative">
            
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] uppercase text-gold mb-2 sm:mb-3">
                Signature Pieces
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream">
                Featured Collection
              </h2>

              <div className="w-10 sm:w-12 h-px bg-gold mx-auto mt-4 sm:mt-5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {featured?.slice(0, 3).map((product, idx) => (
                <ProductCard key={product.id} p={product} index={idx} />
              ))}
            </div>
          </section>

          {/* DESIGNER SECTION */}
          <section className="bg-background relative overflow-hidden">
            <div className="grid md:grid-cols-2 min-h-[500px] sm:min-h-[550px] md:min-h-[650px]">
              
              {/* IMAGE */}
              <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[650px] overflow-hidden">
                
                <img
                  src={founderImg}
                  alt="Sahiba Vij"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-top
                    scale-[1.02]
                  "
                />

                <div className="absolute inset-0 bg-black/20" />

                <div
                  className="
                    absolute
                    top-0
                    right-0
                    h-full
                    w-[25%]
                    sm:w-[30%]
                    md:w-[35%]
                  "
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(5,0,5,0.55) 40%, rgba(5,0,5,0.95) 100%)",
                    backdropFilter: "blur(2px)",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 40%, rgba(212,32,106,0.18), transparent 60%)",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div
                className="
                  relative
                  flex
                  items-center
                  px-6
                  sm:px-8
                  md:px-12
                  lg:px-16
                  xl:px-20
                  py-12
                  sm:py-16
                  md:py-20
                  bg-[#060006]
                "
              >
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at left center, rgba(212,32,106,0.15), transparent 60%)",
                  }}
                />

                <div className="relative z-10">
                  
                  <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] uppercase text-gold mb-3 sm:mb-4 md:mb-5">
                    Meet the Designer
                  </p>

                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] mb-4 sm:mb-5 md:mb-6 lg:mb-7 font-light">
                    A muse with{" "}
                    <span className="text-[#d4206a] italic">
                      14 years
                    </span>{" "}
                    of craft
                  </h2>

                  <div className="w-12 sm:w-14 md:w-16 h-px bg-gold mb-5 sm:mb-6 md:mb-7" />

                  <p className="text-muted text-sm sm:text-base leading-[1.8] sm:leading-[2] mb-6 sm:mb-7 md:mb-8 max-w-xl">
                    Sahiba Vij blends a Media & Culture Studies background from
                    London with fourteen years of jewellery artistry — creating
                    cinematic, story-driven pieces that feel luxurious while
                    remaining beautifully wearable.
                  </p>

                  <Link
                    to="/about"
                    className="
                      inline-flex
                      items-center
                      gap-2 sm:gap-3
                      text-[10px]
                      sm:text-[11px]
                      tracking-[0.25em]
                      sm:tracking-[0.35em]
                      uppercase
                      text-[#d4206a]
                      hover:text-gold
                      transition-all
                      duration-300
                      group
                    "
                  >
                    Read Her Story
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* NEWSLETTER - MUSE SECTION */}
          <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/10 to-background" />
            
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#d4206a]/20 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 relative z-10">
              <div className="text-center max-w-2xl mx-auto">
                
                <div className="mb-4 sm:mb-5">
                  <div className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mx-auto opacity-40">
                    <div className="hero-flower w-full h-full" />
                  </div>
                </div>

                <p className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#d4206a] mb-3 sm:mb-4 font-medium">
                  Join the Muse List
                </p>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream mb-3 sm:mb-4 font-light">
                  Be the first to know
                </h2>

                <div className="w-10 sm:w-12 md:w-14 h-px bg-gold mx-auto my-4 sm:my-5" />

                <p className="text-muted text-xs sm:text-sm mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-md mx-auto px-2">
                  New collections, limited drops, and quiet stories — straight to your inbox.
                </p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const email = (e.target as any).email.value;
                    if (!email.includes("@")) {
                      toast.error("Enter a valid email");
                      return;
                    }
                    // Subscribe logic here
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto px-2 sm:px-0"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="
                      flex-1
                      px-4 sm:px-5
                      py-3 sm:py-3.5
                      bg-background
                      border border-gold/20
                      text-cream
                      placeholder:text-muted/50
                      focus:outline-none
                      focus:border-[#d4206a]
                      transition-colors
                      rounded-sm
                      text-sm sm:text-base
                    "
                  />

                  <button
                    type="submit"
                    className="
                      px-6 sm:px-8
                      py-3 sm:py-3.5
                      bg-[#1a0a0f]
                      text-cream
                      text-[10px]
                      sm:text-[11px]
                      tracking-[0.25em]
                      sm:tracking-[0.35em]
                      uppercase
                      font-medium
                      border border-[#d4206a]/40
                      shadow-[0_0_20px_rgba(212,32,106,0.2)]
                      hover:shadow-[0_0_30px_rgba(212,32,106,0.4)]
                      hover:border-[#d4206a]/70
                      hover:scale-105
                      transition-all
                      duration-500
                      rounded-sm
                      w-full sm:w-auto
                    "
                  >
                    Subscribe
                  </button>
                </form>

                <p className="text-[9px] sm:text-[10px] text-muted/50 mt-5 sm:mt-6 tracking-wide">
                  No spam, only soulful stories.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}