import { createFileRoute, Link } from "@tanstack/react-router";
import { cart, formatINR, useCart } from "@/lib/cart";
import { BRAND, generateOrderId } from "@/lib/brand";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

const schema = z.object({
  customer_name: z.string().trim().min(1).max(200),
  customer_phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  customer_address: z.string().trim().min(5).max(1000),
  customer_city: z.string().trim().min(1).max(100),
  customer_state: z.string().trim().min(1).max(100),
  customer_pincode: z.string().regex(/^[0-9]{6}$/, "Pincode must be 6 digits"),
  notes: z.string().max(500).optional(),
});

function CheckoutPage() {
  const items = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const [submitting, setSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    total: number;
    name: string;
    address: string;
    itemList: string;
  } | null>(null);

  if (items.length === 0 && !confirmedOrder) {
    return (
      <div className="container py-32 text-center">
        <h1 className="font-serif text-3xl text-foreground mb-4">Your cart is empty</h1>
        <Link to="/shop" className="text-gold border-b border-gold">
          Browse the collection
        </Link>
      </div>
    );
  }

  if (confirmedOrder) {
    const message = encodeURIComponent(
      `Hi Sahiba Vij team! I just placed an order.\nOrder ID: ${confirmedOrder.orderId}\nItems: ${confirmedOrder.itemList}\nTotal: ${formatINR(confirmedOrder.total)}\nName: ${confirmedOrder.name}\nAddress: ${confirmedOrder.address}\nPlease confirm my order. Thank you!`
    );
    const waUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${message}`;

    return (
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-2xl text-center">
        <CheckCircle2 className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
        <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-3">Order Placed</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          Thank you, {confirmedOrder.name.split(" ")[0]}!
        </h1>
        <div className="gold-divider w-24 mx-auto mb-8" />

        <div className="bg-card rounded-md p-8 mb-8 border border-[#d4af37]/20">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
            Your Order ID
          </p>
          <p className="font-serif text-3xl md:text-4xl text-foreground mb-6 tracking-wider">
            {confirmedOrder.orderId}
          </p>
          <div className="text-sm text-foreground/75 italic">{confirmedOrder.itemList}</div>
          <p className="text-lg mt-3 font-medium text-[#d4af37]">
            {formatINR(confirmedOrder.total)}
          </p>
        </div>

        {/* WhatsApp button — pink */}
        
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center justify-center gap-3
            w-full max-w-md
            bg-gradient-to-r from-[#d4206a] to-[#e84d8a]
            text-white py-5 rounded-full
            text-sm tracking-[0.2em] uppercase font-bold
            shadow-[0_8px_30px_rgba(212,32,106,0.35)]
            hover:shadow-[0_8px_40px_rgba(212,32,106,0.55)]
            hover:scale-[1.02]
            transition-all duration-300
          "
        >
          <MessageCircle className="w-5 h-5" />
          Confirm Your Order on WhatsApp
        </a>

        <p className="mt-6 text-foreground/75 leading-relaxed">
          We'll confirm your order, share payment details, and dispatch within 24–48 hours.
        </p>
        <p className="mt-3 text-sm italic text-muted-foreground">
          Save your Order ID to track your order anytime.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/track"
            className="px-6 py-2.5 rounded-full border border-[#d4af37]/50 text-[#d4af37] text-xs tracking-[0.2em] uppercase hover:bg-[#d4af37]/10 transition-all"
          >
            Track Order
          </Link>
          <Link
            to="/shop"
            className="px-6 py-2.5 rounded-full border border-[#d4206a]/40 text-[#d4206a] text-xs tracking-[0.2em] uppercase hover:bg-[#d4206a]/10 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }

    setSubmitting(true);
    const orderId = generateOrderId();
    const itemsPayload = items.map((i) => ({
      id: i.id, name: i.name, price: i.price, quantity: i.quantity,
    }));

    const { error } = await supabase.from("orders").insert({
      order_id: orderId,
      ...parsed.data,
      items: itemsPayload,
      total: subtotal,
      status: "Pending Confirmation",
      payment_method: "whatsapp_confirmation",
    });
    setSubmitting(false);

    if (error) {
      console.error(error);
      toast.error("Couldn't place order. Please try again.");
      return;
    }

    const itemList = items.map((i) => `${i.name} x${i.quantity}`).join(", ");
    const fullAddress = `${parsed.data.customer_address}, ${parsed.data.customer_city}, ${parsed.data.customer_state} - ${parsed.data.customer_pincode}`;
    setConfirmedOrder({
      orderId,
      total: subtotal,
      name: parsed.data.customer_name,
      address: fullAddress,
      itemList,
    });
    cart.clear();
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Checkout</h1>
      <div className="gold-divider w-24 mb-10" />

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_400px] gap-12">
        <div className="space-y-5">
          <Field name="customer_name" label="Full Name" required />
          <Field name="customer_phone" label="Phone (10 digits)" required pattern="[0-9]{10}" inputMode="numeric" />
          <Field name="customer_address" label="Delivery Address" required textarea />
          <div className="grid sm:grid-cols-3 gap-4">
            <Field name="customer_city" label="City" required />
            <Field name="customer_state" label="State" required />
            <Field name="customer_pincode" label="Pincode" required pattern="[0-9]{6}" inputMode="numeric" />
          </div>
          <Field name="notes" label="Order Notes (optional)" textarea />

          <div className="bg-card border border-[#d4af37]/20 rounded-md p-6 mt-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-2">Payment</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              We confirm every order personally on WhatsApp. Payment options:{" "}
              <strong>Cash on Delivery, UPI, or Bank Transfer</strong> — discussed during confirmation.
            </p>
          </div>
        </div>

        <aside className="bg-card rounded-md p-6 md:p-8 h-fit lg:sticky lg:top-24 border border-[#d4af37]/10">
          <h2 className="font-serif text-2xl text-foreground mb-6">Order Summary</h2>
          <div className="space-y-3 mb-4">
            {items.map((i) => (
              <div key={i.id} className="flex justify-between text-sm">
                <span className="text-foreground/80">
                  {i.name} <span className="text-muted-foreground">×{i.quantity}</span>
                </span>
                <span>{formatINR(i.price * i.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="gold-divider my-4" />
          <div className="flex justify-between text-lg font-medium mb-6">
            <span>Total</span>
            <span className="text-[#d4af37]">{formatINR(subtotal)}</span>
          </div>

          {/* Place Order — pink button */}
          <button
            disabled={submitting}
            className="
              w-full py-4 rounded-full
              bg-gradient-to-r from-[#d4206a] to-[#e84d8a]
              text-white text-sm tracking-[0.2em] uppercase font-bold
              shadow-[0_8px_30px_rgba(212,32,106,0.3)]
              hover:shadow-[0_8px_40px_rgba(212,32,106,0.5)]
              hover:scale-[1.02]
              transition-all duration-300
              disabled:opacity-50 disabled:scale-100
            "
          >
            {submitting ? "Placing Order…" : "Place Order ✦"}
          </button>

          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">
            Confirm via WhatsApp after placing
          </p>
        </aside>
      </form>
    </div>
  );
}

function Field({
  name, label, required, textarea, pattern, inputMode,
}: {
  name: string;
  label: string;
  required?: boolean;
  textarea?: boolean;
  pattern?: string;
  inputMode?: "numeric" | "text";
}) {
  const cls =
    "w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-[#d4206a] focus:ring-2 focus:ring-[#d4206a]/20 transition-all duration-300";
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.2em] uppercase text-foreground/70 mb-2">
        {label}{required && " *"}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={3} className={cls} />
      ) : (
        <input name={name} required={required} pattern={pattern} inputMode={inputMode} className={cls} />
      )}
    </label>
  );
}