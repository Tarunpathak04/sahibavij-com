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
    <div style={{ background: "#060006", minHeight: "100vh" }}>
      {/* Keyframes for hero + subtle animations */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .sv-fade-1 { animation: fadeUp 0.9s ease-out 0.1s both; }
        .sv-fade-2 { animation: fadeUp 0.9s ease-out 0.35s both; }
        .sv-fade-3 { animation: fadeUp 0.9s ease-out 0.6s both; }
        .sv-btn-gold:hover {
          box-shadow: 0 0 30px rgba(212,175,55,0.25);
          border-color: rgba(212,175,55,0.8) !important;
        }
        .sv-btn-pink:hover {
          box-shadow: 0 0 34px rgba(212,32,106,0.45);
          transform: translateY(-1px);
        }
        @media (prefers-reduced-motion: reduce) {
          .sv-hero-img, .sv-fade-1, .sv-fade-2, .sv-fade-3 { animation: none !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "92svh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src={heroImg}
            alt=""
            loading="eager"
            className="sv-hero-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "85% center",
              filter: "brightness(1.05) saturate(1.05)",
              animation: "heroZoom 16s ease-out forwards",
            }}
          />
          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.42)",
            }}
          />
          {/* Cinematic vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 60% 40%, transparent 35%, rgba(4,0,4,0.72) 100%)",
            }}
          />
          {/* Gradient to dark */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.1) 55%, #060006 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(20px, 5vw, 64px) clamp(24px, 6vw, 80px) 48px",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          {/* Gold kicker */}
          <div
            className="sv-fade-1"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "18px",
            }}
          >
            <span
              style={{
                width: "44px",
                height: "1px",
                background: "linear-gradient(to right, transparent, #d4af37)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "clamp(8px, 2.2vw, 11px)",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#d4af37",
                fontWeight: 600,
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
              }}
            >
              Handcrafted Luxury
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-serif sv-fade-1"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 8rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "#f2ebe0",
              fontWeight: 300,
              textShadow: "0 4px 24px rgba(0,0,0,0.65)",
              marginBottom: "0",
            }}
          >
            Sahiba
            <br />
            <span
              style={{
                color: "#d4206a",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Vij
            </span>
          </h1>

          {/* Tagline */}
          <div className="sv-fade-2" style={{ marginTop: "26px" }}>
            <div
              style={{
                height: "1px",
                width: "70px",
                background:
                  "linear-gradient(to right, #d4af37, rgba(212,175,55,0.1))",
                marginBottom: "12px",
              }}
            />
            <p
              style={{
                fontSize: "clamp(8px, 2.8vw, 13px)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#FFD700",
                fontWeight: 700,
                textShadow:
                  "0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(255,215,0,0.4)",
              }}
            >
              Every sparkle has its own story
            </p>
            <div
              style={{
                height: "1px",
                width: "70px",
                background:
                  "linear-gradient(to right, #d4af37, rgba(212,175,55,0.1))",
                marginTop: "12px",
              }}
            />
          </div>

          {/* Buttons */}
          <div
            className="sv-fade-3"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "36px",
            }}
          >
            <Link
              to="/shop"
              className="sv-btn-pink"
              style={{
                padding: "14px 32px",
                background:
                  "linear-gradient(135deg, #d4206a 0%, #a51550 100%)",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                fontSize: "11px",
                fontWeight: 700,
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 4px 20px rgba(212,32,106,0.35)",
                transition: "all 0.4s ease",
              }}
            >
              Explore Collection
            </Link>
            <Link
              to="/about"
              className="sv-btn-gold"
              style={{
                padding: "14px 32px",
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(255,255,255,0.04))",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(212,175,55,0.45)",
                color: "#f2ebe0",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                fontSize: "11px",
                fontWeight: 700,
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.4s ease",
              }}
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            paddingBottom: "22px",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "44px",
              background:
                "linear-gradient(to bottom, rgba(212,175,55,0.7), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div
        style={{
          background: "#060006",
          paddingTop: "32px",
          paddingBottom: "16px",
        }}
      >
        <OrnamentalDivider />
      </div>

      {/* ── FEATURED COLLECTION ── */}
      <section style={{ background: "#060006", padding: "0 16px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(212,175,55,0.8)",
                marginBottom: "10px",
              }}
            >
              The Edit
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                color: "#f2ebe0",
                fontWeight: 300,
                marginBottom: "24px",
              }}
            >
              Featured Collection
            </h2>
          </div>

          {featured && featured.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100%, 170px), 1fr))",
                gap: "clamp(12px, 2vw, 20px)",
              }}
            >
              {featured.slice(0, 6).map((product, idx) => (
                <ProductCard key={product.id} p={product} index={idx} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <p
                style={{
                  color: "#a89585",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
              >
                Collection coming soon
              </p>
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link
              to="/shop"
              className="sv-btn-gold"
              style={{
                display: "inline-block",
                border: "1px solid rgba(212,175,55,0.4)",
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.08), transparent)",
                color: "#d4af37",
                padding: "12px 30px",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "9999px",
                transition: "all 0.4s ease",
              }}
            >
              View All Pieces
            </Link>
          </div>
        </div>
      </section>

      {/* ── DESIGNER ── */}
      <section style={{ background: "#060006", padding: "40px 16px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(28px, 4vw, 48px)",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "4/5",
              background: "#0a0508",
              border: "1px solid rgba(212,175,55,0.12)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={founderImg}
              alt="Sahiba Vij"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                background: "#0a0508",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(212,175,55,0.8)",
                marginBottom: "16px",
              }}
            >
              Meet the Designer
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                color: "#f2ebe0",
                fontWeight: 300,
                marginBottom: "20px",
                lineHeight: 1.15,
                overflowWrap: "break-word",
              }}
            >
              A muse with{" "}
              <span style={{ color: "#d4206a", fontStyle: "italic" }}>
                14 years
              </span>{" "}
              of craft
            </h2>
            <p
              style={{
                color: "#a89585",
                lineHeight: 1.8,
                marginBottom: "28px",
                fontSize: "14px",
              }}
            >
              Sahiba Vij blends a Media & Culture Studies background from
              London with fourteen years of jewellery artistry — creating
              cinematic, story-driven pieces that feel luxurious while
              remaining beautifully wearable.
            </p>
            <Link
              to="/about"
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#d4206a",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Read Her Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <NewsletterSection />
    </div>
  );
}

function OrnamentalDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 32px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flex: 1,
          maxWidth: "140px",
        }}
      >
        <span
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "9999px",
            background: "rgba(212,175,55,0.4)",
            display: "inline-block",
          }}
        />
        <div
          style={{
            flex: 1,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(212,175,55,0.5))",
          }}
        />
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "9999px",
            background: "rgba(212,175,55,0.6)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "9999px",
            background: "rgba(212,175,55,0.8)",
            display: "inline-block",
          }}
        />
      </div>

      <div style={{ margin: "0 12px" }}>
        <svg
          width="34"
          height="34"
          viewBox="0 0 32 32"
          fill="none"
          style={{ color: "#d4af37" }}
        >
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
          <circle
            cx="16"
            cy="16"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
            opacity="0.7"
          />
          <circle cx="16" cy="16" r="1.8" fill="currentColor" />
        </svg>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flex: 1,
          maxWidth: "140px",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "9999px",
            background: "rgba(212,175,55,0.8)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "9999px",
            background: "rgba(212,175,55,0.6)",
            display: "inline-block",
          }}
        />
        <div
          style={{
            flex: 1,
            height: "1px",
            background:
              "linear-gradient(to left, transparent, rgba(212,175,55,0.5))",
          }}
        />
        <span
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "9999px",
            background: "rgba(212,175,55,0.4)",
            display: "inline-block",
          }}
        />
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
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });
    setLoading(false);
    if (error && !error.message.includes("duplicate")) {
      toast.error("Couldn't subscribe. Try again.");
    } else {
      toast.success("Welcome to the muse list ✦");
      setEmail("");
    }
  };

  return (
    <section style={{ background: "#060006", padding: "48px 16px 64px" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#d4206a",
            marginBottom: "12px",
          }}
        >
          Join the Muse List
        </p>
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            color: "#f2ebe0",
            fontWeight: 300,
            marginBottom: "12px",
          }}
        >
          Be the first to know
        </h2>
        <div
          style={{
            height: "1px",
            width: "48px",
            background: "#d4af37",
            margin: "16px auto",
          }}
        />
        <p
          style={{
            color: "#a89585",
            fontSize: "13px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          New collections, limited drops, and quiet stories — straight to your
          inbox.
        </p>

        <form
          onSubmit={subscribe}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "14px 20px",
              background: "#0f0a0d",
              border: "1px solid rgba(212,175,55,0.2)",
              borderRadius: "9999px",
              color: "#f2ebe0",
              fontSize: "14px",
              outline: "none",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="sv-btn-pink"
            style={{
              padding: "14px 32px",
              background: "linear-gradient(135deg, #d4206a 0%, #a51550 100%)",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              opacity: loading ? 0.6 : 1,
              transition: "all 0.4s ease",
            }}
          >
            {loading ? "..." : "Subscribe"}
          </button>
        </form>

        <p
          style={{
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(168,149,133,0.4)",
            marginTop: "16px",
          }}
        >
          No spam, only soulful stories.
        </p>
      </div>
    </section>
  );
}