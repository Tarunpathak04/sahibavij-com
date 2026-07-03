import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES } from "@/lib/brand";
import { useState } from "react";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Sahiba Vij Jewellery" },
      { name: "description", content: "Browse our collection of necklaces, earrings, rings, bangles in micron gold polish." },
    ],
  }),
  component: ShopPage,
});

// Bridal Sets category hata do
const SHOP_CATEGORIES = CATEGORIES.filter(
  (c) => c.value !== "bridal_sets" && c.label !== "Bridal Sets"
);

function ShopPage() {
  const [cat, setCat] = useState<string>("all");

  const filteredProducts = cat === "all"
    ? products
    : products.filter((p) => p.category === cat);

  return (
    <div style={{ background: "#060006", minHeight: "100vh" }}>
      <div className="container mx-auto px-4 md:px-12 py-16 md:py-24">
        <div className="text-center mb-12">
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#d4af37",
              marginBottom: "12px",
            }}
          >
            The Collection
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              color: "#f2ebe0",
              fontWeight: 300,
            }}
          >
            Shop All
          </h1>
          <div
            style={{
              height: "1px",
              width: "96px",
              background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
              margin: "20px auto 0",
            }}
          />
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          {SHOP_CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => setCat(c.value)}
              style={{
                padding: "8px 20px",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: cat === c.value
                  ? "1px solid #d4af37"
                  : "1px solid rgba(212,175,55,0.3)",
                background: cat === c.value
                  ? "#d4af37"
                  : "transparent",
                color: cat === c.value
                  ? "#060006"
                  : "rgba(212,175,55,0.7)",
                cursor: "pointer",
                borderRadius: "4px",
                transition: "all 0.2s",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p
            className="font-serif"
            style={{
              textAlign: "center",
              color: "#a89585",
              padding: "80px 0",
              fontSize: "1.2rem",
              fontStyle: "italic",
            }}
          >
            Nothing in this category yet — check back soon.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
            }}
            className="md:grid-cols-3 lg:grid-cols-4"
          >
            {filteredProducts.map((p, i) => (
              <ProductCard key={p.id} p={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}