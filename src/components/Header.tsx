import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import logoImg from "@/assets/Logo.png";

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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#090306] py-2 border-b border-[#3a2730]"
            : "bg-gradient-to-b from-[#090306] via-[#090306]/95 to-[#090306]/80 py-3"
        }`}
      >
        {/* TOP GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,40,70,0.14),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-5 md:px-8 lg:px-14">
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <Link to="/" className="shrink-0 group">
              <div className="relative flex items-center">
                
                {/* Glow */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-[#d4af37]/15
                    via-[#b76e79]/20
                    to-[#d4af37]/15
                    blur-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                  "
                />

                <img
                  src={logoImg}
                  alt="Sahiba Vij"
                  className="
                    relative
                    h-16
                    sm:h-20
                    md:h-24
                    lg:h-28
                    w-auto
                    object-contain
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>
            </Link>

            {/* NAVIGATION */}
            <nav className="hidden md:flex items-center">
              <div
                className="
                  relative
                  flex
                  items-center
                  rounded-full
                  px-2
                  py-1.5
                  border
                  border-[#8f6b53]
                  bg-[#12070d]
                  shadow-[0_0_20px_rgba(0,0,0,0.35)]
                "
              >
                {/* inner ring */}
                <div className="absolute inset-0 rounded-full ring-1 ring-[#c7a878]/10" />

                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="
                      relative
                      px-7
                      lg:px-8
                      py-2.5
                      text-[11px]
                      tracking-[0.30em]
                      uppercase
                      text-[#d8c7b7]
                      font-semibold
                      transition-all
                      duration-300
                      rounded-full
                      hover:text-[#f1d49a]
                    "
                    activeProps={{
                      className: "text-[#f1d49a]",
                    }}
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-5 shrink-0">
              
              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="
                  hidden sm:flex
                  text-[#d8c7b7]
                  hover:text-[#f1d49a]
                  transition-all
                  duration-300
                "
              >
                <Heart className="w-[19px] h-[19px]" strokeWidth={1.5} />
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="
                  relative
                  text-[#d8c7b7]
                  hover:text-[#f1d49a]
                  transition-all
                  duration-300
                "
              >
                <div className="relative">
                  <ShoppingBag
                    className="w-[19px] h-[19px]"
                    strokeWidth={1.5}
                  />

                  {count > 0 && (
                    <span
                      className="
                        absolute
                        -top-2
                        -right-2
                        w-5
                        h-5
                        rounded-full
                        bg-[#d4af37]
                        text-[#090306]
                        text-[9px]
                        font-bold
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {count}
                    </span>
                  )}
                </div>
              </Link>

              {/* MOBILE MENU */}
              <button
                className="
                  md:hidden
                  text-[#d8c7b7]
                  hover:text-[#f1d49a]
                  transition-all
                "
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <X className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-[#c7a878]/30 to-transparent" />
        </div>
      </header>

      {/* SPACER */}
      <div className="h-24 md:h-28" />

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 top-20 bg-[#090306] z-40 md:hidden">
          <div className="container px-6 py-10 flex flex-col gap-3">
            
            {/* Mobile Logo */}
            <div className="flex justify-center mb-8">
              <img
                src={logoImg}
                alt="Logo"
                className="h-24 object-contain"
              />
            </div>

            {/* Links */}
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="
                  py-4
                  text-center
                  rounded-xl
                  text-sm
                  tracking-[0.3em]
                  uppercase
                  font-semibold
                  text-[#d8c7b7]
                  bg-[#12070d]
                  border
                  border-[#2a1a20]
                  hover:text-[#f1d49a]
                  transition-all
                "
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