import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type Product } from "@/components/ProductCard";
import { CATEGORIES } from "@/lib/brand";
import { useState } from "react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Sahiba Vij Jewellery" },
      { name: "description", content: "Browse our collection of necklaces, earrings, rings, bangles, and bridal sets in micron gold polish." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [cat, setCat] = useState<string>("all");

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", cat],
    queryFn: async () => {
      let q = supabase.from("products").select("*").order("created_at", { ascending: false });
      if (cat !== "all") q = q.eq("category", cat);
      const { data } = await q;
      return (data ?? []) as Product[];
    },
  });

  return (
    <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Collection</p>
        <h1 className="font-serif text-5xl md:text-7xl text-foreground">Shop All</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
      </div>

      {/* Category Filters - Luxury Style */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {CATEGORIES.map((c) => (
          <button
            key={c.value}
            onClick={() => setCat(c.value)}
            className={`px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
              cat === c.value
                ? "bg-gold text-background"
                : "border border-gold/30 text-muted hover:border-gold hover:text-gold"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      ) : products && products.length === 0 ? (
        <p className="text-center text-muted py-20 font-serif text-xl italic">
          Nothing in this category yet — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {(products ?? []).map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}