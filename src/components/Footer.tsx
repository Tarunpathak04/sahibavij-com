import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Sparkles,
  Flower2,
  ArrowUpRight,
} from "lucide-react";
import { BRAND } from "@/lib/brand";

export function Footer() {
  const whatsappLink = `https://wa.me/${BRAND.whatsappNumber.replace(
    /\+/g,
    ""
  )}`;

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/5 bg-[#090608]">
      
      {/* BACKGROUND GLOWS */}
      <div
        className="
          absolute
          top-[-10rem]
          left-[-8rem]
          w-[28rem]
          h-[28rem]
          rounded-full
          bg-[#c2185b]/10
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-14rem]
          right-[-8rem]
          w-[30rem]
          h-[30rem]
          rounded-full
          bg-[#ff4d8d]/10
          blur-[160px]
          pointer-events-none
        "
      />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* MAIN FOOTER */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12 lg:gap-16">
          
          {/* BRAND COLUMN */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-gold/20
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_30px_rgba(194,24,91,0.15)]
                "
              >
                <Flower2
                  className="w-5 h-5 text-gold"
                  strokeWidth={1.2}
                />
              </div>

              <div>
                <h3
                  className="
                    font-serif
                    text-[2rem]
                    md:text-[2.4rem]
                    text-cream
                    leading-none
                  "
                >
                  Sahiba Vij
                </h3>

                <p
                  className="
                    mt-1
                    text-[9px]
                    tracking-[0.38em]
                    uppercase
                    text-gold/70
                  "
                >
                  Luxury Jewellery House
                </p>
              </div>
            </div>

            {/* TAGLINE */}
            <p
              className="
                text-[11px]
                tracking-[0.32em]
                uppercase
                text-gold
                font-medium
                leading-relaxed
                max-w-sm
              "
            >
              Every sparkle has its own story
            </p>

            <div className="w-14 h-px bg-gradient-to-r from-gold to-transparent mt-5 mb-6" />

            {/* DESCRIPTION */}
            <p
              className="
                text-sm
                text-white/55
                leading-[1.9]
                max-w-md
                font-light
              "
            >
              Story-driven luxury Indian jewellery crafted in micron gold polish
              — timeless heirlooms designed for the modern muse.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">
              {[
                {
                  href: BRAND.instagram,
                  icon: Instagram,
                },
                {
                  href: whatsappLink,
                  icon: MessageCircle,
                },
                {
                  href: `mailto:${BRAND.email}`,
                  icon: Mail,
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      relative
                      w-11
                      h-11
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      transition-all
                      duration-500
                      hover:border-[#ff5c9f]/30
                      hover:-translate-y-1
                      hover:shadow-[0_0_30px_rgba(194,24,91,0.25)]
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                        bg-gradient-to-br
                        from-[#c2185b]
                        to-[#ff4d8d]
                      "
                    />

                    <Icon
                      className="
                        relative
                        z-10
                        w-4
                        h-4
                        text-mauve
                        group-hover:text-white
                        transition-colors
                      "
                      strokeWidth={1.5}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4
              className="
                text-[10px]
                tracking-[0.35em]
                uppercase
                text-gold
                mb-7
                font-semibold
              "
            >
              Explore
            </h4>

            <ul className="space-y-4">
              {[
                "Shop All",
                "Bridal Collection",
                "Mangtika Collection",
                "Nose Pin Collection",
                "Necklace Collection",
                "Earrings Collection",
                "Ring Collection",
                "Bangle Collection",

              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-white/55
                      text-sm
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <span>{item}</span>

                    <ArrowUpRight
                      className="
                        w-3.5
                        h-3.5
                        opacity-0
                        -translate-x-2
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                        duration-300
                        text-mauve
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4
              className="
                text-[10px]
                tracking-[0.35em]
                uppercase
                text-gold
                mb-7
                font-semibold
              "
            >
              Support
            </h4>

            <ul className="space-y-4">
              {[
                "Track Order",
                "Shipping Info",
                "Returns & Exchange",
                "Size Guide",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/track"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-white/55
                      text-sm
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <span>{item}</span>

                    <ArrowUpRight
                      className="
                        w-3.5
                        h-3.5
                        opacity-0
                        -translate-x-2
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                        duration-300
                        text-mauve
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4
              className="
                text-[10px]
                tracking-[0.35em]
                uppercase
                text-gold
                mb-7
                font-semibold
              "
            >
              Connect
            </h4>

            <div className="space-y-5">
              
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <MapPin
                    className="w-4 h-4 text-mauve"
                    strokeWidth={1.4}
                  />
                </div>

                <p className="text-sm text-white/55 leading-relaxed">
                  {BRAND.address}
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Phone
                    className="w-4 h-4 text-mauve"
                    strokeWidth={1.4}
                  />
                </div>

                <a
                  href={`tel:${BRAND.phone}`}
                  className="
                    text-sm
                    text-white/55
                    hover:text-white
                    transition-colors
                  "
                >
                  {BRAND.phone}
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Mail
                    className="w-4 h-4 text-mauve"
                    strokeWidth={1.4}
                  />
                </div>

                <a
                  href={`mailto:${BRAND.email}`}
                  className="
                    text-sm
                    text-white/55
                    hover:text-white
                    transition-colors
                  "
                >
                  {BRAND.email}
                </a>
              </div>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                mt-8
                px-6
                py-3.5
                rounded-full
                border
                border-[#ff5c9f]/20
                bg-[#c2185b]/10
                backdrop-blur-xl
                hover:border-[#ff5c9f]/40
                hover:shadow-[0_0_40px_rgba(194,24,91,0.25)]
                transition-all
                duration-500
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-r
                  from-[#c2185b]
                  to-[#ff4d8d]
                "
              />

              <MessageCircle
                className="
                  relative
                  z-10
                  w-4
                  h-4
                  text-mauve
                  group-hover:text-white
                "
                strokeWidth={1.5}
              />

              <span
                className="
                  relative
                  z-10
                  text-[10px]
                  tracking-[0.28em]
                  uppercase
                  text-mauve
                  group-hover:text-white
                  font-medium
                "
              >
                Chat on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/5">
        <div
          className="
            container
            mx-auto
            px-6
            md:px-10
            lg:px-16
            py-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p
            className="
              text-[9px]
              tracking-[0.28em]
              uppercase
              text-white/35
            "
          >
            © {new Date().getFullYear()} Sahiba Vij
          </p>

          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold/40" />

            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-gold/50" />

              <p
                className="
                  text-[9px]
                  tracking-[0.3em]
                  uppercase
                  text-white/35
                "
              >
                Crafted With "Love"
              </p>

              <Flower2 className="w-3 h-3 text-gold/50" />
            </div>

            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}