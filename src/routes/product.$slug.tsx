import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ShoppingBag, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard, type Product } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { cart, formatINR } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Product find karo
  const product = products.find((p) => p.slug === slug);
  const related = product 
    ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  useEffect(() => {
    setActiveImg(0);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="container py-32 text-center font-serif text-2xl">
        Piece not found.
      </div>
    );
  }

  const soldOut = product.stock_count <= 0;
  const lowStock = !soldOut && product.stock_count < 5;

  const addToCart = () => {
    cart.add({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: Number(product.price),
      image: product.images[0] || "",
    });
    toast.success("Added to cart ✦");
  };

  const notifyMe = () => {
    toast.success("We'll notify you when this beauty is back!");
  };

  const nextImage = () => {
    setActiveImg((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImg((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product?.images.length]);

  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div
              className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl cursor-zoom-in"
              style={{ background: "#0a0508", aspectRatio: "1/1" }}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={product.images[activeImg] || product.images[0]}
                alt={`${product.name} - View ${activeImg + 1}`}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
                style={{ padding: "8px", background: "#0a0508" }}
              />

              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <span className="text-xs text-white/80 tracking-wider">
                    {activeImg + 1} / {product.images.length}
                  </span>
                </div>
              )}

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-md p-2 rounded-full border border-white/10 transition-all hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-md p-2 rounded-full border border-white/10 transition-all hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}

              {soldOut && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <span className="bg-gold text-accent-foreground font-serif text-xl tracking-[0.3em] uppercase px-8 py-3 rounded-full">
                    Sold Out
                  </span>
                </div>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      i === activeImg
                        ? "border-gold shadow-lg shadow-gold/20 scale-105"
                        : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                    {i === activeImg && <div className="absolute inset-0 bg-gold/5" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 capitalize">
              {product.category}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-foreground/90 mb-6">
              {formatINR(Number(product.price))}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-gold text-accent-foreground text-xs tracking-wider uppercase px-3 py-1.5 rounded-full font-medium">
                <Sparkles className="w-3 h-3" /> Micron Gold Polish
              </span>
              {product.is_limited_edition && (
                <span className="border border-gold text-gold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full">
                  Limited Edition
                </span>
              )}
              {lowStock && (
                <span className="text-xs italic text-wine py-1.5">
                  Only {product.stock_count} left
                </span>
              )}
            </div>

            {product.story && (
              <blockquote className="border-l-2 border-gold pl-5 my-8 font-serif italic text-lg md:text-xl text-foreground/80 leading-relaxed">
                "{product.story}"
              </blockquote>
            )}

            {product.description && (
              <p className="text-foreground/75 leading-relaxed mb-8">
                {product.description}
              </p>
            )}

            {soldOut ? (
              <button
                onClick={notifyMe}
                className="w-full py-4 rounded-full bg-card border-2 border-gold text-primary text-sm tracking-[0.2em] uppercase hover:bg-secondary transition-all"
              >
                Sold Out — Notify Me
              </button>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={addToCart}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-gold-soft transition-all"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToCart();
                    navigate({ to: "/cart" });
                  }}
                  className="flex-1 py-4 rounded-full bg-gold text-accent-foreground text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold/80 transition-all"
                >
                  Buy Now
                </button>
              </div>
            )}

            <div className="mt-10 space-y-4 text-sm">
              {product.materials && (
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-gold mb-1">
                    Materials
                  </p>
                  <p className="text-foreground/75">{product.materials}</p>
                </div>
              )}
              {product.care_info && (
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-gold mb-1">
                    Care
                  </p>
                  <p className="text-foreground/75">{product.care_info}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="container mx-auto px-4 md:px-8 py-16 border-t border-border/50">
          <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-10">
            You may also love
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}