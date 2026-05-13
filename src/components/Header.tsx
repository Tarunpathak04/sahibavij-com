import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import { BRAND } from "@/lib/brand";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/track", label: "Track Order" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const items = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-gold/20 py-2" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo - Left aligned */}
            <Link to="/" className="group shrink-0">
              <span className="font-serif text-2xl md:text-3xl tracking-tight text-foreground group-hover:text-gold transition-colors duration-300">
                {BRAND.name}
              </span>
              <div className="gold-rule w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-1" />
            </Link>

            {/* Desktop Navigation - Center aligned */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 transform -translate-x-1/2">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="text-xs tracking-[0.3em] uppercase text-foreground/70 hover:text-gold transition-all duration-300 whitespace-nowrap"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Cart & Menu - Right aligned */}
            <div className="flex items-center gap-2 shrink-0">
              <Link 
                to="/cart" 
                className="relative p-2 text-foreground/80 hover:text-gold transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.2} />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-background text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>
              
              <button
                className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X className="w-6 h-6" strokeWidth={1.2} /> : <Menu className="w-6 h-6" strokeWidth={1.2} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content hiding under fixed header */}
      <div className="h-20 md:h-24" />

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 top-20 bg-background/98 backdrop-blur-lg z-40 md:hidden">
          <div className="container px-6 py-8 flex flex-col gap-2">
            {NAV.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-4 text-sm tracking-[0.3em] uppercase text-foreground/70 hover:text-gold border-b border-gold/10 transition-all duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}