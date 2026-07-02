import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X, Heart, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import logoImg from "@/assets/Logo.png";

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

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#07030a]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-gradient-to-b from-[#090306]/98 to-[#090306]/75"
        }`}
      >
        {/* Subtle top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-14">
          <div className="flex items-center justify-between h-[90px] sm:h-[100px] md:h-[88px] lg:h-[108px]">

            {/* LOGO */}
            <Link to="/" className="shrink-0 group">
              <img
                src={logoImg}
                alt="Sahiba Vij"
                className="h-[88px] sm:h-[96px] md:h-[80px] lg:h-[100px] w-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(212,175,55,0.25)]"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="relative px-5 lg:px-6 py-2 text-[11px] tracking-[0.22em] uppercase text-[#b8a898] font-medium transition-all duration-300 hover:text-[#f1d49a] group"
                  activeProps={{ className: "text-[#f1d49a]" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent group-hover:w-4/5 transition-all duration-500" />
                </Link>
              ))}

              {/* Gold divider */}
              <div className="w-px h-5 bg-[#d4af37]/20 mx-2" />

              {/* Cart in nav — desktop only */}
              <Link to="/cart" className="relative p-2.5 text-[#b8a898] hover:text-[#f1d49a] transition-all duration-300 group">
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute top-1 right-1 w-[18px] h-[18px] rounded-full bg-[#d4af37] text-[#090306] text-[8px] font-bold flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>
            </nav>

            {/* MOBILE RIGHT — only cart + hamburger, tight gap */}
            <div className="flex md:hidden items-center gap-1">
              <Link to="/cart" className="relative p-2 text-[#d8c7b7] hover:text-[#f1d49a] transition-all">
                <ShoppingBag className="w-[20px] h-[20px]" strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#d4af37] text-[#090306] text-[8px] font-bold flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>

              <button
                className="p-2 text-[#d8c7b7] hover:text-[#f1d49a] transition-all"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open
                  ? <X className="w-6 h-6" strokeWidth={1.5} />
                  : <Menu className="w-6 h-6" strokeWidth={1.5} />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Bottom glow line — only when scrolled */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </header>

      {/* SPACER */}
      <div className="h-[90px] sm:h-[100px] md:h-[88px] lg:h-[108px]" />

      {/* MOBILE MENU — full screen overlay */}
      {open && (
        <div className="fixed inset-0 top-[90px] sm:top-[100px] z-40 md:hidden">
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-[#07030a]/97 backdrop-blur-xl" />

          <div className="relative h-full flex flex-col px-6 py-8 overflow-y-auto">

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src={logoImg} alt="Logo" className="h-32 w-auto object-contain opacity-80" />
            </div>

            {/* Gold divider */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <span className="text-[#d4af37]/60 text-xs tracking-[0.4em] uppercase">Menu</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2">
              {NAV.map((n, i) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="group relative py-4 px-6 text-center rounded-xl text-sm tracking-[0.25em] uppercase font-medium text-[#c4b4a4] border border-[#ffffff08] bg-[#ffffff03] hover:text-[#f1d49a] hover:border-[#d4af37]/20 hover:bg-[#d4af37]/5 transition-all duration-300"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  activeProps={{ className: "text-[#f1d49a] border-[#d4af37]/30 bg-[#d4af37]/8" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#d4af37]/30 group-hover:text-[#d4af37]/60 transition-colors text-xs">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Bottom tagline */}
            <div className="mt-auto pt-8 text-center">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37]/30">
                Every Sparkle Has Its Own Story
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}