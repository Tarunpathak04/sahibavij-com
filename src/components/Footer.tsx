import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, MapPin, Phone, Sparkles, Flower2 } from "lucide-react";
import { BRAND } from "@/lib/brand";

export function Footer() {
  const whatsappLink = `https://wa.me/${BRAND.whatsappNumber.replace(/\+/g, '')}`;

  return (
    <footer className="bg-surface/80 border-t border-mauve/15 mt-20">
      {/* Main Footer */}
      <div className="container mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-5 h-5 text-gold" strokeWidth={1.2} />
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">From Our Garden</h3>
            </div>
            <p className="text-[10px] tracking-[0.3em] text-muted/70 mb-3 italic">Every Sparkle Says Its Own Story</p>
            <div className="gold-rule w-12 mb-5" />
            <p className="text-muted text-sm leading-relaxed max-w-md">
              Story-driven luxury Indian jewellery in micron gold polish — wearable heirlooms for the modern muse.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href={BRAND.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full border border-mauve/25 flex items-center justify-center text-mauve hover:bg-mauve hover:text-cream transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-3.5 h-3.5" strokeWidth={1.2} />
              </a>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-mauve/25 flex items-center justify-center text-mauve hover:bg-mauve hover:text-cream transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.2} />
              </a>
              <a 
                href={`mailto:${BRAND.email}`}
                className="w-9 h-9 rounded-full border border-mauve/25 flex items-center justify-center text-mauve hover:bg-mauve hover:text-cream transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-3.5 h-3.5" strokeWidth={1.2} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Shop All", "New Arrivals", "Best Sellers", "Limited Edition", "Bridal Collection"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-muted text-sm hover:text-mauve transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Support</h4>
            <ul className="space-y-3">
              {["Track Order", "Shipping Info", "Returns & Exchange", "Size Guide", "FAQs"].map((item) => (
                <li key={item}>
                  <Link to="/track" className="text-muted text-sm hover:text-mauve transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-mauve mt-0.5 shrink-0" strokeWidth={1.2} />
                <p className="text-muted text-sm leading-relaxed">{BRAND.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-mauve" strokeWidth={1.2} />
                <a href={`tel:${BRAND.phone}`} className="text-muted text-sm hover:text-mauve transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-mauve" strokeWidth={1.2} />
                <a href={`mailto:${BRAND.email}`} className="text-muted text-sm hover:text-mauve transition-colors">
                  {BRAND.email}
                </a>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-mauve/10 border border-mauve/25 rounded-full hover:bg-mauve hover:text-cream transition-all duration-300 group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-mauve group-hover:text-cream" strokeWidth={1.2} />
              <span className="text-[10px] tracking-[0.2em] uppercase text-mauve group-hover:text-cream">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-mauve/15">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[8px] tracking-[0.2em] uppercase text-muted/50">
            © {new Date().getFullYear()} SAHIBA VIJ — FROM OUR GARDEN
          </p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-gold/50" />
            <p className="text-[8px] tracking-[0.2em] uppercase text-muted/40">
              CRAFTED WITH LOVE IN GURUGRAM
            </p>
            <Flower2 className="w-3 h-3 text-gold/50" />
          </div>
        </div>
      </div>
    </footer>
  );
}