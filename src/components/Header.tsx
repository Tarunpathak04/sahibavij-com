import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import logoImg from "@/assets/Logo.jpeg";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/shop", label: "SHOP" },
  { to: "/about", label: "OUR STORY" },
  { to: "/track", label: "TRACK ORDER" },
  { to: "/contact", label: "CONTACT" },
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

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/98 backdrop-blur-md py-3 shadow-2xl border-b border-cream/15"
            : "bg-gradient-to-b from-background/95 via-background/60 to-transparent backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img 
                src={logoImg} 
                alt="Sahiba Vij Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300 hover:opacity-80"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 transform -translate-x-1/2 bg-cream/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-cream/10">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="relative px-4 lg:px-6 py-2 text-xs lg:text-sm tracking-[0.25em] text-cream/70 hover:text-mauve transition-all duration-300 font-light uppercase rounded-full hover:bg-cream/10"
                  activeProps={{ className: "text-mauve bg-cream/10" }}
                >
                  {n.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rotate-45 bg-mauve opacity-0 group-data-[active=true]:opacity-100 transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Right Icons - Favourites now clickable */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Favourites - Now a Link, not button */}
              <Link 
                to="/wishlist" 
                className="hidden sm:block text-cream/60 hover:text-mauve transition-all duration-300"
              >
                <Heart className="w-5 h-5" strokeWidth={1.2} />
              </Link>
              
              <Link
                to="/cart"
                className="relative text-cream/70 hover:text-mauve transition-all duration-300 group"
              >
                <div className="relative">
                  <ShoppingBag
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.3}
                  />
                  {count > 0 && (
                    <span className="absolute -top-2.5 -right-2.5 bg-gradient-to-br from-mauve to-mauve/80 w-5 h-5 rounded-full text-[9px] text-background flex items-center justify-center font-bold shadow-lg ring-2 ring-cream/30">
                      {count}
                    </span>
                  )}
                </div>
              </Link>
              
              <button
                className="md:hidden text-cream/70 hover:text-mauve transition-all duration-300"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div
            className={`h-px bg-gradient-to-r from-transparent via-mauve/40 to-transparent transition-all duration-700 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </header>

      <div className="h-16 md:h-20" />

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40 md:hidden">
          <div className="container px-6 py-10 flex flex-col gap-1 h-full">
            <div className="flex justify-center mb-8 pb-4 border-b border-cream/10">
              <img src={logoImg} alt="Logo" className="h-12 w-auto" />
            </div>

            {NAV.map((n, idx) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-4 px-6 text-base tracking-[0.25em] text-cream/80 hover:text-mauve transition-all duration-300 font-light uppercase text-center"
                style={{ animation: `fadeIn 0.5s ease-out ${idx * 0.05}s both` }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}