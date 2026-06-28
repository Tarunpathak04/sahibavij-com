import { createFileRoute } from "@tanstack/react-router";
import { ProductCard, type Product } from "@/components/ProductCard";
import { CATEGORIES } from "@/lib/brand";
import { useState } from "react";


import E1 from "@/assets/E1.webp";
import E2 from "@/assets/E2.webp";
import E3 from "@/assets/E3.webp";
import E4 from "@/assets/E4.webp";
import E5 from "@/assets/E5.webp";
import E6 from "@/assets/E6.webp";
import E7 from "@/assets/E7.webp";
import E8 from "@/assets/E8.webp";
import E9 from "@/assets/E9.webp";
import E10 from "@/assets/E10.webp";
import M1 from "@/assets/M1.webp";
import M2 from "@/assets/M2.webp";
import M3 from "@/assets/M3.webp";
import M4 from "@/assets/M4.webp";
import M5 from "@/assets/M5.webp";
import M6 from "@/assets/M6.webp";
import M7 from "@/assets/M7.webp";
import M8 from "@/assets/M8.webp";
import M9 from "@/assets/M9.webp";
import M10 from "@/assets/M10.webp";
import M11 from "@/assets/M11.webp";
import M12 from "@/assets/M12.webp";
import M13 from "@/assets/M13.webp";
import M14 from "@/assets/M14.webp";
import M15 from "@/assets/M15.webp";
import M16 from "@/assets/M16.webp";
import M17 from "@/assets/M17.webp";
import M18 from "@/assets/M18.webp";
import M19 from "@/assets/M19.webp";
import M20 from "@/assets/M20.webp";
import M21 from "@/assets/M21.webp";
import M22 from "@/assets/M22.webp";
import M23 from "@/assets/M23.webp";
import M24 from "@/assets/M24.webp";
import M25 from "@/assets/M25.webp";
import R1 from "@/assets/R1.webp";
import R2 from "@/assets/R2.webp";
import R3 from "@/assets/R3.webp";
import R4 from "@/assets/R4.webp";
import R5 from "@/assets/R5.webp";
import R6 from "@/assets/R6.webp";
import R7 from "@/assets/R7.webp";
import R8 from "@/assets/R8.webp";
import R9 from "@/assets/R9.webp";
import R10 from "@/assets/R10.webp";
import R11 from "@/assets/R11.webp";
import R12 from "@/assets/R12.webp";
import R13 from "@/assets/R13.webp";
import R14 from "@/assets/R14.webp";
import R15 from "@/assets/R15.webp";
import R16 from "@/assets/R16.webp";
import R17 from "@/assets/R17.webp";
import R18 from "@/assets/R18.webp";
import R19 from "@/assets/R19.webp";
import R20 from "@/assets/R20.webp";
import R21 from "@/assets/R21.webp";
import R22 from "@/assets/R22.webp";
import R23 from "@/assets/R23.webp";
import R24 from "@/assets/R24.webp";
import R25 from "@/assets/R25.webp";
import R26 from "@/assets/R26.webp";
import R27 from "@/assets/R27.webp";
import R28 from "@/assets/R28.webp";
import R29 from "@/assets/R29.webp";
import R30 from "@/assets/R30.webp";
import N1 from "@/assets/N1.webp";
import N2 from "@/assets/N2.webp";
import N3 from "@/assets/N3.webp";
import N4 from "@/assets/N4.webp";
import N5 from "@/assets/N5.webp";
import N6 from "@/assets/N6.webp";
import N7 from "@/assets/N7.webp";
import N8 from "@/assets/N8.webp";
import N9 from "@/assets/N9.webp";
import N10 from "@/assets/N10.webp";
import N11 from "@/assets/N11.webp";
import N12 from "@/assets/N12.webp";
import N13 from "@/assets/N13.webp";
import B1 from "@/assets/B1.png";
import B2 from "@/assets/B2.webp";
import B3 from "@/assets/B3.webp";
import B4 from "@/assets/B4.webp";
import B5 from "@/assets/B5.webp";
import B6 from "@/assets/B6.webp";
import B7 from "@/assets/B7.webp";
import B8 from "@/assets/B8.webp";
import B9 from "@/assets/B9.webp";
import B10 from "@/assets/B10.webp";
import B11 from "@/assets/B11.webp";
import B12 from "@/assets/B12.webp";
import B13 from "@/assets/B13.webp";
import B14 from "@/assets/B14.webp";
import B15 from "@/assets/B15.jpg";
import B16 from "@/assets/B16.webp";
import B17 from "@/assets/B17.webp";
import B18 from "@/assets/B18.webp";
import B19 from "@/assets/B19.webp";

const PRODUCTS: Product[] = [

  { id: "p1",  name: "Product 1",  slug: "product-1",  price: 999, category: "Earrings", images: [E1],  stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p2",  name: "Product 2",  slug: "product-2",  price: 999, category: "Earrings", images: [E2],  stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p3",  name: "Product 3",  slug: "product-3",  price: 999, category: "Earrings", images: [E3],  stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p4",  name: "Product 4",  slug: "product-4",  price: 999, category: "Earrings", images: [E4],  stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p5",  name: "Product 5",  slug: "product-5",  price: 999, category: "Earrings", images: [E5],  stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p6",  name: "Product 6",  slug: "product-6",  price: 999, category: "Earrings", images: [E6],  stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p7",  name: "Product 7",  slug: "product-7",  price: 999, category: "Earrings", images: [E7],  stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p8",  name: "Product 8",  slug: "product-8",  price: 999, category: "Earrings", images: [E8],  stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p9",  name: "Product 9",  slug: "product-9",  price: 999, category: "Earrings", images: [E9],  stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p10", name: "Product 10", slug: "product-10", price: 999, category: "Earrings", images: [E10], stock_count: 2, is_featured: true, is_limited_edition: false },
  { id: "p11", name: "Product 11", slug: "product-11", price: 999, category: "Mangtika", images: [M1],  stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p12", name: "Product 12", slug: "product-12", price: 999, category: "Mangtika", images: [M2],  stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p13", name: "Product 13", slug: "product-13", price: 999, category: "Mangtika", images: [M3],  stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p14", name: "Product 14", slug: "product-14", price: 999, category: "Mangtika", images: [M4],  stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p15", name: "Product 15", slug: "product-15", price: 999, category: "Mangtika", images: [M5],  stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p16", name: "Product 16", slug: "product-16", price: 999, category: "Mangtika", images: [M6],  stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p17", name: "Product 17", slug: "product-17", price: 999, category: "Mangtika", images: [M7],  stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p18", name: "Product 18", slug: "product-18", price: 999, category: "Mangtika", images: [M8],  stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p19", name: "Product 19", slug: "product-19", price: 999, category: "Mangtika", images: [M9],  stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p20", name: "Product 20", slug: "product-20", price: 999, category: "Mangtika", images: [M10], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p21", name: "Product 21", slug: "product-21", price: 999, category: "Mangtika", images: [M11], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p22", name: "Product 22", slug: "product-22", price: 999, category: "Mangtika", images: [M12], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p23", name: "Product 23", slug: "product-23", price: 999, category: "Mangtika", images: [M13], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p24", name: "Product 24", slug: "product-24", price: 999, category: "Mangtika", images: [M14], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p25", name: "Product 25", slug: "product-25", price: 999, category: "Mangtika", images: [M15], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p26", name: "Product 26", slug: "product-26", price: 999, category: "Mangtika", images: [M16], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p27", name: "Product 27", slug: "product-27", price: 999, category: "Mangtika", images: [M17], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p28", name: "Product 28", slug: "product-28", price: 999, category: "Mangtika", images: [M18], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p29", name: "Product 29", slug: "product-29", price: 999, category: "Mangtika", images: [M19], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p30", name: "Product 30", slug: "product-30", price: 999, category: "Mangtika", images: [M20], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p31", name: "Product 31", slug: "product-31", price: 999, category: "Mangtika", images: [M21], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p32", name: "Product 32", slug: "product-32", price: 999, category: "Mangtika", images: [M22], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p33", name: "Product 33", slug: "product-33", price: 999, category: "Mangtika", images: [M23], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p34", name: "Product 34", slug: "product-34", price: 999, category: "Mangtika", images: [M24], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p35", name: "Product 35", slug: "product-35", price: 999, category: "Mangtika", images: [M25], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p36", name: "Product 36", slug: "product-36", price: 999, category: "Ring", images: [R1], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p37", name: "Product 37", slug: "product-37", price: 999, category: "Ring", images: [R2], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p38", name: "Product 38", slug: "product-38", price: 999, category: "Ring", images: [R3], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p39", name: "Product 39", slug: "product-39", price: 999, category: "Ring", images: [R4], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p40", name: "Product 40", slug: "product-40", price: 999, category: "Ring", images: [R5], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p41", name: "Product 41", slug: "product-41", price: 999, category: "Ring", images: [R6], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p42", name: "Product 42", slug: "product-42", price: 999, category: "Ring", images: [R7], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p43", name: "Product 43", slug: "product-43", price: 999, category: "Ring", images: [R8], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p44", name: "Product 44", slug: "product-44", price: 999, category: "Ring", images: [R9], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p45", name: "Product 45", slug: "product-45", price: 999, category: "Ring", images: [R10], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p46", name: "Product 46", slug: "product-46", price: 999, category: "Ring", images: [R11], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p47", name: "Product 47", slug: "product-47", price: 999, category: "Ring", images: [R12], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p48", name: "Product 48", slug: "product-48", price: 999, category: "Ring", images: [R13], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p49", name: "Product 49", slug: "product-49", price: 999, category: "Ring", images: [R14], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p50", name: "Product 50", slug: "product-50", price: 999, category: "Ring", images: [R15], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p51", name: "Product 51", slug: "product-51", price: 999, category: "Ring", images: [R16], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p52", name: "Product 52", slug: "product-52", price: 999, category: "Ring", images: [R17], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p53", name: "Product 53", slug: "product-53", price: 999, category: "Ring", images: [R18], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p54", name: "Product 54", slug: "product-54", price: 999, category: "Ring", images: [R19], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p55", name: "Product 55", slug: "product-55", price: 999, category: "Ring", images: [R20], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p56", name: "Product 56", slug: "product-56", price: 999, category: "Ring", images: [R21], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p57", name: "Product 57", slug: "product-57", price: 999, category: "Ring", images: [R22], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p58", name: "Product 58", slug: "product-58", price: 999, category: "Ring", images: [R23], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p59", name: "Product 59", slug: "product-59", price: 999, category: "Ring", images: [R24], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p60", name: "Product 60", slug: "product-60", price: 999, category: "Ring", images: [R25], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p61", name: "Product 61", slug: "product-61", price: 999, category: "Ring", images: [R26], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p62", name: "Product 62", slug: "product-62", price: 999, category: "Ring", images: [R27], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p63", name: "Product 63", slug: "product-63", price: 999, category: "Ring", images: [R28], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p64", name: "Product 64", slug: "product-64", price: 999, category: "Ring", images: [R29], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p65", name: "Product 65", slug: "product-65", price: 999, category: "Ring", images: [R30], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p66", name: "Product 66", slug: "product-66", price: 999, category: "Nose Pin", images: [N1], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p67", name: "Product 67", slug: "product-67", price: 999, category: "Nose Pin", images: [N2], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p68", name: "Product 68", slug: "product-68", price: 999, category: "Nose Pin", images: [N3], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p69", name: "Product 69", slug: "product-69", price: 999, category: "Nose Pin", images: [N4], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p70", name: "Product 70", slug: "product-70", price: 999, category: "Nose Pin", images: [N5], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p71", name: "Product 71", slug: "product-71", price: 999, category: "Nose Pin", images: [N6], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p72", name: "Product 72", slug: "product-72", price: 999, category: "Nose Pin", images: [N7], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p73", name: "Product 73", slug: "product-73", price: 999, category: "Nose Pin", images: [N8], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p74", name: "Product 74", slug: "product-74", price: 999, category: "Nose Pin", images: [N9], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p75", name: "Product 75", slug: "product-75", price: 999, category: "Nose Pin", images: [N10], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p76", name: "Product 76", slug: "product-76", price: 999, category: "Nose Pin", images: [N11], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p77", name: "Product 77", slug: "product-77", price: 999, category: "Nose Pin", images: [N12], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p78", name: "Product 78", slug: "product-78", price: 999, category: "Nose Pin", images: [N13], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p79", name: "Product 79", slug: "product-79", price: 999, category: "Bangles", images: [B1], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p80", name: "Product 80", slug: "product-80", price: 999, category: "Bangles", images: [B2], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p81", name: "Product 81", slug: "product-81", price: 999, category: "Bangles", images: [B3], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p82", name: "Product 82", slug: "product-82", price: 999, category: "Bangles", images: [B4], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p83", name: "Product 83", slug: "product-83", price: 999, category: "Bangles", images: [B5], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p84", name: "Product 84", slug: "product-84", price: 999, category: "Bangles", images: [B6], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p85", name: "Product 85", slug: "product-85", price: 999, category: "Bangles", images: [B7], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p86", name: "Product 86", slug: "product-86", price: 999, category: "Bangles", images: [B8], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p87", name: "Product 87", slug: "product-87", price: 999, category: "Bangles", images: [B9], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p88", name: "Product 88", slug: "product-88", price: 999, category: "Bangles", images: [B10], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p89", name: "Product 89", slug: "product-89", price: 999, category: "Bangles", images: [B11], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p90", name: "Product 90", slug: "product-90", price: 999, category: "Bangles", images: [B12], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p91", name: "Product 91", slug: "product-91", price: 999, category: "Bangles", images: [B13], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p92", name: "Product 92", slug: "product-92", price: 999, category: "Bangles", images: [B14], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p93", name: "Product 93", slug: "product-93", price: 999, category: "Bangles", images: [B15], stock_count: 2, is_featured: true, is_limited_edition: false },

{ id: "p94", name: "Product 94", slug: "product-94", price: 999, category: "Bangles", images: [B16], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p95", name: "Product 95", slug: "product-95", price: 999, category: "Bangles", images: [B17], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p96", name: "Product 96", slug: "product-96", price: 999, category: "Bangles", images: [B18], stock_count: 2, is_featured: true, is_limited_edition: false },
{ id: "p97", name: "Product 97", slug: "product-97", price: 999, category: "Bangles", images: [B19], stock_count: 2, is_featured: true, is_limited_edition: false },
];

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

  const products = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

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

      {products.length === 0 ? (
        <p className="text-center text-muted py-20 font-serif text-xl italic">
          Nothing in this category yet — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}