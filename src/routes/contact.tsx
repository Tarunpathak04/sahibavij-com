import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/lib/brand";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Sahiba Vij" }] }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) return toast.error(parsed.error.errors[0].message);
    setSending(true);
    const text = encodeURIComponent(`Hi! I'm ${parsed.data.name} (${parsed.data.email}).\n\n${parsed.data.message}`);
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${text}`, "_blank");
    toast.success("Opening WhatsApp to send your message ✦");
    setSending(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 max-w-5xl">
      <div className="text-center mb-16">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Say Hello</p>
        <h1 className="font-serif text-6xl md:text-7xl text-foreground">Let's Talk</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
        <p className="mt-6 text-muted max-w-xl mx-auto">
          For custom orders, styling advice, or just to say hi — we'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <a href={`https://wa.me/${BRAND.whatsappNumber}`} target="_blank" rel="noreferrer" 
            className="flex items-center gap-5 bg-surface p-5 border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gold">WhatsApp</p>
              <p className="font-serif text-lg text-foreground">Chat with us</p>
            </div>
          </a>
          
          <a href={BRAND.instagram} target="_blank" rel="noreferrer" 
            className="flex items-center gap-5 bg-surface p-5 border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gold">Instagram</p>
              <p className="font-serif text-lg text-foreground">@sahibavij</p>
            </div>
          </a>
          
          <a href={`mailto:${BRAND.email}`} 
            className="flex items-center gap-5 bg-surface p-5 border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gold">Email</p>
              <p className="font-serif text-lg text-foreground">{BRAND.email}</p>
            </div>
          </a>
        </div>

        <form onSubmit={submit} className="bg-surface border border-gold/10 p-6 md:p-8 space-y-5">
          <h2 className="font-serif text-2xl text-foreground mb-4">Send a message</h2>
          <input 
            name="name" required maxLength={100} 
            placeholder="Your name" 
            className="w-full px-4 py-3 bg-background border border-gold/20 focus:border-gold outline-none transition-colors text-foreground placeholder:text-muted/50"
          />
          <input 
            name="email" type="email" required maxLength={255} 
            placeholder="Your email" 
            className="w-full px-4 py-3 bg-background border border-gold/20 focus:border-gold outline-none transition-colors text-foreground placeholder:text-muted/50"
          />
          <textarea 
            name="message" required maxLength={1000} rows={4} 
            placeholder="How can we help?" 
            className="w-full px-4 py-3 bg-background border border-gold/20 focus:border-gold outline-none transition-colors text-foreground placeholder:text-muted/50 resize-none"
          />
          <button 
            disabled={sending} 
            className="w-full bg-gold text-background py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold-soft transition-all duration-300 disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send via WhatsApp"}
          </button>
        </form>
      </div>
    </div>
  );
}