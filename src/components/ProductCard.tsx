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
      <div
        className="rounded-xl overflow-hidden border border-white/5 transition-all duration-300 group-hover:border-[#d4af37]/30"
        style={{ background: "#0a0508" }}
      >
        {/* IMAGE BOX — square, contain, no crop ever */}
        <div
          style={{
            width: "100%",
            paddingBottom: "100%",
            position: "relative",
            background: "#0a0508",
          }}
        >
          <img
            src={
              p.images?.[0] ||
              "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
            }
            alt={p.name}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80";
            }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              padding: "8px",
            }}
          />

          {/* Gradient bottom */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(10,5,8,0.85) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />

          {/* Collection number */}
          <span
            style={{
              position: "absolute",
              bottom: "6px",
              left: "10px",
              fontFamily: "serif",
              fontSize: "48px",
              lineHeight: 1,
              color: "rgba(212,175,55,0.18)",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            /{num}
          </span>

          {/* Top right number */}
          <span
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              fontSize: "9px",
              letterSpacing: "0.3em",
              color: "rgba(212,175,55,0.5)",
            }}
          >
            /{num}
          </span>

          {/* LIMITED */}
          {p.is_limited_edition && !soldOut && (
            <span
              style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                background: "#6b2040",
                color: "white",
                fontSize: "8px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: "2px",
              }}
            >
              Limited
            </span>
          )}

          {/* SOLD OUT */}
          {soldOut && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.7)",
              }}
            >
              <span
                style={{
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "#d4af37",
                  fontSize: "10px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  padding: "6px 16px",
                }}
              >
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* INFO */}
        <div style={{ padding: "10px 12px 12px" }}>
          <h3
            className="font-serif line-clamp-2"
            style={{
              fontSize: "13px",
              color: "#f2ebe0",
              lineHeight: 1.3,
              marginBottom: "4px",
            }}
          >
            {p.name}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: soldOut ? "#a89585" : "#d4af37",
                textDecoration: soldOut ? "line-through" : "none",
              }}
            >
              {formatINR(p.price)}
            </p>
            {lowStock && (
              <span
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#fb7185",
                }}
              >
                Only {p.stock_count} left
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}