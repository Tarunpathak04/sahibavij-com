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
        h-[1200px]
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
        h-[1400px]
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
      {/* HERO SECTION */}
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

        {/* SOFT PINK GRADIENT BEHIND SAHIBA VIJ */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[70%] h-[85%] pointer-events-none z-0"
          style={{
            background: "radial-gradient(ellipse at 25% 50%, rgba(212,32,106,0.25) 0%, rgba(212,32,106,0.1) 50%, transparent 80%)",
            filter: "blur(80px)"
          }}
        />

        {/* Secondary extended glow */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[85%] h-[100%] pointer-events-none z-0"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, rgba(212,32,106,0.08) 0%, rgba(212,32,106,0.03) 60%, transparent 90%)",
            filter: "blur(100px)"
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center pt-28 lg:pt-20 pb-16">
          <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20">
            
            <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-6">
              
              {/* LEFT SIDE */}
              <div className="text-left">
                
                {/* MAIN TITLE */}
                <h1
                  className="
                    font-serif
                    text-[4.5rem]
                    sm:text-[5.5rem]
                    md:text-[7rem]
                    lg:text-[8rem]
                    xl:text-[9rem]
                    leading-[0.88]
                    tracking-tight
                    text-cream
                    font-light
                    animate-fade-up
                    relative
                    z-10
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
                  className="mt-10 animate-fade-up relative z-10"
                  style={{ animationDelay: "0.12s" }}
                >
                  <div className="w-24 h-px bg-gold mb-5" />

                  <p
                    className="
                      text-sm
                      sm:text-base
                      md:text-lg
                      lg:text-xl
                      tracking-[0.35em]
                      text-gold
                      uppercase
                      font-semibold
                      leading-relaxed
                      whitespace-nowrap
                      [text-shadow:_0_2px_12px_rgba(184,168,138,0.25)]
                    "
                  >
                    Every sparkle says its own story
                  </p>

                  <div className="w-24 h-px bg-gold mt-5" />
                </div>

                {/* BUTTONS - Dark button with pink glow - SAME SHOT MEIN */}
                <div
                  className="flex flex-wrap gap-5 mt-10 animate-fade-up"
                  style={{ animationDelay: "0.14s" }}
                >
                  <Link
                    to="/shop"
                    className="
                      group
                      relative
                      px-10 py-4
                      bg-[#1a0a0f]
                      text-cream
                      uppercase
                      tracking-[0.3em]
                      text-[11px]
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
                    "
                  >
                    <span className="relative z-10">Explore Collection</span>
                    {/* Pink gradient glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d4206a]/0 via-[#d4206a]/20 to-[#d4206a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>

                  <Link
                    to="/about"
                    className="
                      px-10 py-4
                      border border-gold/40
                      text-gold
                      uppercase
                      tracking-[0.3em]
                      text-[11px]
                      font-medium
                      hover:bg-gold/10
                      hover:border-gold
                      hover:text-gold
                      transition-all
                      duration-400
                      hover:scale-105
                      hover:-translate-y-1
                    "
                  >
                    Our Story
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE - Jewelry Image */}
              <div
                className="
                  relative
                  flex
                  justify-center
                  lg:justify-end
                  items-center
                  animate-fade-up
                "
                style={{ animationDelay: "0.2s" }}
              >
                
                {/* Glow */}
                <div
                  className="
                    absolute
                    w-[80%]
                    h-[80%]
                    bg-gold/20
                    blur-[120px]
                    rounded-full
                  "
                />

                {/* Jewellery Image */}
                <img
                  src={jewelryImg}
                  alt="Sahiba Vij Signature Jewelry"
                  className="
                    relative
                    w-[320px]
                    sm:w-[420px]
                    md:w-[500px]
                    lg:w-[620px]
                    xl:w-[700px]
                    h-auto
                    object-contain
                    drop-shadow-[0_25px_80px_rgba(0,0,0,0.8)]
                    hover:scale-[1.02]
                    transition-transform
                    duration-700
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND INTRO - IMPROVED SECTION (Story wali chhoti) */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
        
        {/* Subtle gold glow behind */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Decorative divider top */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold/40" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold/70">Since 2012</span>
              <div className="w-12 h-px bg-gold/40" />
            </div>

            {/* Main heading - SMALLER */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.3] mb-6 font-light tracking-wide">
              Jewellery that feels like poetry,
              <br />
              designed for{" "}
              <span className="text-[#d4206a] italic font-medium">timeless souls</span>
              <span className="text-gold text-4xl inline-block ml-2">.</span>
            </h2>

            {/* Gold divider */}
            <div className="w-16 h-px bg-gold mx-auto my-6" />

            {/* Description - SMALLER */}
            <p className="text-muted text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
              Timeless jewellery crafted for those who seek quiet luxury,
              cinematic beauty, and elegance that lasts beyond trends.
            </p>

            {/* Small decorative flower */}
            <div className="mt-8">
              <div className="w-5 h-5 mx-auto opacity-30">
                <div className="hero-flower w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-20 md:py-28 relative">
        
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-3">
            Signature Pieces
          </p>

          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            Featured Collection
          </h2>

          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured?.slice(0, 3).map((product, idx) => (
            <ProductCard key={product.id} p={product} index={idx} />
          ))}
        </div>
      </section>
{/* DESIGNER SECTION */}
<section className="bg-background relative overflow-hidden">
  <div className="grid md:grid-cols-2 min-h-[650px]">
    
    {/* IMAGE */}
    <div className="relative min-h-[500px] md:min-h-[650px] overflow-hidden">
      
      {/* IMAGE */}
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

      {/* LEFT DARK DEPTH */}
      <div className="absolute inset-0 bg-black/20" />

      {/* RIGHT DISSOLVE EFFECT */}
      <div
        className="
          absolute
          top-0
          right-0
          h-full
          w-[35%]
        "
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(5,0,5,0.55) 40%, rgba(5,0,5,0.95) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* BOTTOM FADE */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* PINK GLOW */}
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
        px-8
        sm:px-12
        md:px-16
        lg:px-20
        py-16
        bg-[#060006]
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at left center, rgba(212,32,106,0.15), transparent 60%)",
        }}
      />

      <div className="relative z-10">
        
        <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-5">
          Meet the Designer
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream leading-[1.1] mb-7 font-light">
          A muse with{" "}
          <span className="text-[#d4206a] italic">
            14 years
          </span>{" "}
          of craft
        </h2>

        <div className="w-16 h-px bg-gold mb-7" />

        <p className="text-muted text-base leading-[2] mb-8 max-w-xl">
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
            gap-3
            text-[11px]
            tracking-[0.35em]
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

      {/* NEWSLETTER - MUSE SECTION IMPROVED */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/10 to-background" />
        
        {/* Pink glow behind muse section */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#d4206a]/20 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            
            {/* Decorative flower */}
            <div className="mb-5">
              <div className="w-7 h-7 mx-auto opacity-40">
                <div className="hero-flower w-full h-full" />
              </div>
            </div>

            <p className="text-[11px] tracking-[0.35em] uppercase text-[#d4206a] mb-4 font-medium">
              Join the Muse List
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4 font-light">
              Be the first to know
            </h2>

            <div className="w-14 h-px bg-gold mx-auto my-5" />

            <p className="text-muted text-sm mb-8 leading-relaxed max-w-md mx-auto">
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
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="
                  flex-1
                  px-5 py-3.5
                  bg-background
                  border border-gold/20
                  text-cream
                  placeholder:text-muted/50
                  focus:outline-none
                  focus:border-[#d4206a]
                  transition-colors
                  rounded-sm
                "
              />

              <button
                type="submit"
                className="
                  px-8 py-3.5
                  bg-[#1a0a0f]
                  text-cream
                  text-[11px]
                  tracking-[0.35em]
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
                "
              >
                Subscribe
              </button>
            </form>

            {/* Small text */}
            <p className="text-[10px] text-muted/50 mt-6 tracking-wide">
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