import { createFileRoute, Link } from "@tanstack/react-router";
import { cart, formatINR, useCart } from "@/lib/cart";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const items = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">Your cart is empty</h1>
        <p className="text-muted mb-8 font-serif italic">Begin your story.</p>
        <Link to="/shop" className="inline-block border border-gold px-8 py-3 text-gold text-sm tracking-[0.3em] uppercase hover:bg-gold hover:text-background transition-all duration-500">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
      <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">Your Cart</h1>
      <div className="gold-rule w-24 mb-12" />

      <div className="grid lg:grid-cols-[1fr_400px] gap-12">
        <div className="space-y-4">
          {items.map((i) => (
            <div key={i.id} className="flex gap-4 bg-surface p-4 border border-gold/10">
              <Link to="/product/$slug" params={{ slug: i.slug }} className="w-24 h-24 md:w-28 md:h-28 overflow-hidden flex-shrink-0">
                <img src={i.image} alt={i.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 flex flex-col">
                <Link to="/product/$slug" params={{ slug: i.slug }}>
                  <h3 className="font-serif text-xl text-foreground hover:text-gold transition-colors">{i.name}</h3>
                </Link>
                <p className="text-gold mt-1">{formatINR(i.price)}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center border border-gold/30">
                    <button onClick={() => cart.setQty(i.id, i.quantity - 1)} className="p-2 hover:text-gold transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 text-sm">{i.quantity}</span>
                    <button onClick={() => cart.setQty(i.id, i.quantity + 1)} className="p-2 hover:text-gold transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button onClick={() => cart.remove(i.id)} className="text-muted hover:text-rose transition-colors p-2">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="bg-surface border border-gold/10 p-6 md:p-8 h-fit lg:sticky lg:top-24">
          <h2 className="font-serif text-2xl text-foreground mb-6">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2">
              <span className="text-muted">Subtotal</span>
              <span className="text-foreground">{formatINR(subtotal)}</span>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <span className="text-muted">Shipping</span>
              <span className="text-gold italic">Calculated on confirmation</span>
            </div>
            <div className="gold-rule my-4" />
            <div className="flex justify-between text-lg font-medium pt-2">
              <span className="text-foreground">Total</span>
              <span className="text-gold">{formatINR(subtotal)}</span>
            </div>
          </div>
          
          <Link to="/checkout" className="w-full inline-flex items-center justify-center gap-2 bg-gold text-background py-4 mt-8 text-sm tracking-[0.2em] uppercase hover:bg-gold-soft transition-all duration-300">
            Proceed to Checkout <ArrowRight className="w-4 h-4" />
          </Link>
          
          <p className="text-xs text-center text-muted mt-6 italic">
            We confirm every order personally on WhatsApp.
          </p>
        </aside>
      </div>
    </div>
  );
}