export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  images: string[];
  stock_count: number;
  is_featured: boolean;
  is_limited_edition: boolean;
  description?: string | null;
  story?: string | null;
  materials?: string | null;
  care_info?: string | null;
};

export const products: Product[] = [
  // ============================================
  // RINGS CATEGORY — REAL PRODUCTS (Sahiba approved)
  // ⚠️ IMAGE MAPPING VERIFY KARO:
  // RA = multi-row pavé silver dome ring (Silver Statement Ring — ₹5450)
  // RB = leaf-band single stone silver ring (Classic Silver — ₹4750)
  // RC = gold floral mehendi polish ring (Radiant Floral — ₹4000)
  // RD = kundan cushion-cut gold ring (Vintage Kundan — ₹4200)
  // RE = concentric halo silver ring (Celestial Halo — ₹3300)
  // Agar folder mein images alag order mein hain toh images array swap kar dena.
  // ============================================

  // RA - Silver Statement Ring (₹5450)
  {
    id: "RA",
    name: "Silver Statement Ring",
    slug: "silver-statement-ring",
    price: 5450,
    category: "rings",
    images: [
      "/products/rings/RA1.webp",
      "/products/rings/RA2.webp",
      "/products/rings/RA3.webp",
    ],
    stock_count: 10,
    is_featured: true,
    is_limited_edition: false,
    description:
      "Designed to make a lasting impression, this exquisite silver-finish ring features a brilliant round-cut center stone, beautifully framed by multiple rows of sparkling stones. A perfect blend of elegance and glamour, it's crafted to elevate both everyday looks and special occasions. A timeless piece that radiates brilliance from every angle.",
    story:
      "Made to order — each piece is crafted specially for you. Production time: 10 days.",
    materials:
      "Premium silver finish · Round-cut center stone with multi-row pavé detailing · Custom sizes available · Made in silver",
    care_info:
      "Wipe with a soft cloth after wear. Avoid perfume and water contact. Store separately in a dry pouch.",
  },

  // RB - Classic Silver Statement Ring (₹4750)
  {
    id: "RB",
    name: "Classic Silver Statement Ring",
    slug: "classic-silver-statement-ring",
    price: 4750,
    category: "rings",
    images: [
      "/products/rings/RB1.webp",
      "/products/rings/RB2.webp",
      "/products/rings/RB3.webp",
    ],
    stock_count: 10,
    is_featured: true,
    is_limited_edition: false,
    description:
      "A timeless statement ring crafted in a premium silver finish, featuring a brilliant round-cut stone at its center with an intricately detailed band for added elegance. Designed to complement both everyday wear and special occasions, this ring brings together classic sophistication and contemporary style. A beautiful piece that adds effortless sparkle to every look.",
    story:
      "Made to order — each piece is crafted specially for you. Production time: 10 days.",
    materials:
      "Premium silver finish · Brilliant round-cut center stone · Intricately crafted band · Custom sizes available",
    care_info:
      "Wipe with a soft cloth after wear. Avoid perfume and water contact. Store separately in a dry pouch.",
  },

  // RC - Radiant Floral Statement Ring (₹4000)
  {
    id: "RC",
    name: "Radiant Floral Statement Ring",
    slug: "radiant-floral-statement-ring",
    price: 4000,
    category: "rings",
    images: [
      "/products/rings/RC1.webp",
      "/products/rings/RC2.webp",
      "/products/rings/RC3.webp",
    ],
    stock_count: 10,
    is_featured: true,
    is_limited_edition: false,
    description:
      "Inspired by the timeless beauty of blooming flowers, this exquisite floral statement adjustable ring is crafted with brilliant marquise and round-cut Swarovski stones, beautifully set in a luxurious mehendi polish finish.",
    story:
      "Made to order — each piece is crafted specially for you. Production time: 10 days.",
    materials:
      "Marquise & round-cut Swarovski stones · Mehendi polish finish · Adjustable size",
    care_info:
      "Wipe with a soft cloth after wear. Avoid perfume and water contact. Store separately in a dry pouch.",
  },

  // RD - Vintage Kundan Statement Ring (₹4200)
  {
    id: "RD",
    name: "Vintage Kundan Statement Ring",
    slug: "vintage-kundan-statement-ring",
    price: 4200,
    category: "rings",
    images: [
      "/products/rings/RD1.webp",
      "/products/rings/RD2.webp",
      "/products/rings/RD3.webp",
    ],
    stock_count: 10,
    is_featured: true,
    is_limited_edition: false,
    description:
      "Celebrate timeless elegance with this handcrafted Kundan-inspired statement adjustable ring, featuring a luminous cushion-cut centerpiece framed by delicately set pear-shaped stones. The intricate floral vine detailing adds a touch of regal charm, while the warm micron gold-tone finish enhances its classic appeal.",
    story:
      "Made to order — each piece is crafted specially for you. Production time: 10 days.",
    materials:
      "Cushion-cut centerpiece · Pear-shaped stones · Micron gold-tone finish · Adjustable size",
    care_info:
      "Wipe with a soft cloth after wear. Avoid perfume and water contact. Store separately in a dry pouch.",
  },

  // RE - Celestial Halo Statement Ring (₹3300)
  {
    id: "RE",
    name: "Celestial Halo Statement Ring",
    slug: "celestial-halo-statement-ring",
    price: 3300,
    category: "rings",
    images: [
      "/products/rings/RE1.webp",
      "/products/rings/RE2.webp",
      "/products/rings/RE3.webp",
    ],
    stock_count: 10,
    is_featured: true,
    is_limited_edition: false,
    description:
      "A masterpiece of brilliance and craftsmanship, this statement adjustable ring features a captivating floral-inspired center surrounded by dazzling round and baguette-cut Swarovski stones. The concentric halo design creates extraordinary sparkle, while the sleek silver-tone finish lends a modern, luxurious appeal.",
    story:
      "Made to order — each piece is crafted specially for you. Production time: 10 days.",
    materials:
      "Round & baguette-cut Swarovski stones · Concentric halo design · Silver-tone finish · Adjustable size",
    care_info:
      "Wipe with a soft cloth after wear. Avoid perfume and water contact. Store separately in a dry pouch.",
  },

  // RF - Gold Band Ring
  {
    id: "RF",
    name: "Gold Band Ring",
    slug: "gold-band-ring",
    price: 5000,
    category: "rings",
    images: [
      "/products/rings/RF1.webp",
      "/products/rings/RF2.webp",
      "/products/rings/RF3.webp",
    ],
    stock_count: 10,
    is_featured: false,
    is_limited_edition: false,
    description: "Simple yet elegant gold band ring.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth.",
  },
  // RG - Rose Gold Ring
  {
    id: "RG",
    name: "Rose Gold Ring",
    slug: "rose-gold-ring",
    price: 5000,
    category: "rings",
    images: [
      "/products/rings/RG1.webp",
      "/products/rings/RG2.webp",
      "/products/rings/RG3.webp",
    ],
    stock_count: 6,
    is_featured: false,
    is_limited_edition: false,
    description: "Beautiful rose gold ring with delicate design.",
    materials: "Rose gold-tone finish",
    care_info: "Wipe with soft cloth.",
  },
  // RH - Sapphire Ring
  {
    id: "RH",
    name: "Sapphire Ring",
    slug: "sapphire-ring",
    price: 5000,
    category: "rings",
    images: [
      "/products/rings/RH1.webp",
      "/products/rings/RH2.webp",
      "/products/rings/RH3.webp",
    ],
    stock_count: 3,
    is_featured: false,
    is_limited_edition: false,
    description: "Royal sapphire-tone ring with gold accents.",
    materials: "Gold-tone finish, blue stones",
    care_info: "Wipe with soft cloth.",
  },
  // RI - Pearl Ring
  {
    id: "RI",
    name: "Pearl Ring",
    slug: "pearl-ring",
    price: 5000,
    category: "rings",
    images: [
      "/products/rings/RI1.webp",
      "/products/rings/RI2.webp",
      "/products/rings/RI3.webp",
    ],
    stock_count: 7,
    is_featured: false,
    is_limited_edition: false,
    description: "Elegant pearl ring with gold setting.",
    materials: "Gold-tone finish, pearl",
    care_info: "Wipe with soft cloth.",
  },
  // RJ - Vintage Gold Ring
  {
    id: "RJ",
    name: "Vintage Gold Ring",
    slug: "vintage-gold-ring",
    price: 5000,
    category: "rings",
    images: [
      "/products/rings/RJ1.webp",
      "/products/rings/RJ2.webp",
      "/products/rings/RJ3.webp",
    ],
    stock_count: 4,
    is_featured: false,
    is_limited_edition: false,
    description: "Vintage inspired gold ring with intricate detailing.",
    story: "Inspired by the royal heritage of India.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth. Store in a dry place.",
  },

  // ============================================
  // BANGLES CATEGORY — sab ₹5,000
  // ============================================
  // BA - Gold Bangle
  {
    id: "BA",
    name: "Gold Bangle",
    slug: "gold-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BA1.webp", "/products/bangles/BA2.webp"],
    stock_count: 10,
    is_featured: true,
    is_limited_edition: false,
    description: "Elegant gold bangle with intricate design.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth. Avoid water contact.",
  },
  // BB - Diamond Bangle
  {
    id: "BB",
    name: "Diamond Bangle",
    slug: "diamond-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BB1.webp", "/products/bangles/BB2.webp"],
    stock_count: 3,
    is_featured: true,
    is_limited_edition: true,
    description: "Exquisite stone-studded bangle for special occasions.",
    story: "A celebration of timeless elegance.",
    materials: "Micron gold polish finish, crystal stones",
    care_info: "Wipe with soft cloth. Store separately.",
  },
  // BC - Rose Gold Bangle
  {
    id: "BC",
    name: "Rose Gold Bangle",
    slug: "rose-gold-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BC1.webp", "/products/bangles/BC2.webp"],
    stock_count: 7,
    is_featured: false,
    is_limited_edition: false,
    description: "Beautiful rose gold bangle with elegant finish.",
    materials: "Rose gold-tone finish",
    care_info: "Wipe with soft cloth.",
  },
  // BD - Pearl Bangle
  {
    id: "BD",
    name: "Pearl Bangle",
    slug: "pearl-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BD1.webp", "/products/bangles/BD2.webp"],
    stock_count: 6,
    is_featured: false,
    is_limited_edition: false,
    description: "Elegant pearl bangle with gold setting.",
    materials: "Gold-tone finish, pearls",
    care_info: "Wipe with soft cloth.",
  },
  // BE - Emerald Bangle
  {
    id: "BE",
    name: "Emerald Bangle",
    slug: "emerald-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BE1.jpg", "/products/bangles/BE2.webp"],
    stock_count: 4,
    is_featured: true,
    is_limited_edition: true,
    description: "Stunning emerald-tone bangle with vintage charm.",
    materials: "Micron gold polish finish, green stones",
    care_info: "Wipe with soft cloth.",
  },
  // BF - Sapphire Bangle
  {
    id: "BF",
    name: "Sapphire Bangle",
    slug: "sapphire-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BF1.webp", "/products/bangles/BF2.webp"],
    stock_count: 5,
    is_featured: false,
    is_limited_edition: false,
    description: "Royal sapphire-tone bangle with gold accents.",
    materials: "Gold-tone finish, blue stones",
    care_info: "Wipe with soft cloth.",
  },
  // BG - Vintage Gold Bangle
  {
    id: "BG",
    name: "Vintage Gold Bangle",
    slug: "vintage-gold-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BG1.webp", "/products/bangles/BG2.webp"],
    stock_count: 8,
    is_featured: true,
    is_limited_edition: false,
    description: "Vintage inspired gold bangle with intricate detailing.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth. Store in a dry place.",
  },
  // BH - Platinum Bangle
  {
    id: "BH",
    name: "Platinum Bangle",
    slug: "platinum-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BH1.webp", "/products/bangles/BH2.webp"],
    stock_count: 2,
    is_featured: true,
    is_limited_edition: true,
    description: "Exclusive silver-tone bangle for special occasions.",
    story: "A symbol of eternal love and commitment.",
    materials: "Silver-tone finish",
    care_info: "Wipe with soft cloth. Store separately.",
  },
  // BI - Ruby Bangle
  {
    id: "BI",
    name: "Ruby Bangle",
    slug: "ruby-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BI1.webp", "/products/bangles/BI2.webp"],
    stock_count: 3,
    is_featured: false,
    is_limited_edition: true,
    description: "Beautiful ruby-tone bangle with gold detailing.",
    materials: "Gold-tone finish, red stones",
    care_info: "Wipe with soft cloth.",
  },
  // BJ - Gold Cuff Bangle
  {
    id: "BJ",
    name: "Gold Cuff Bangle",
    slug: "gold-cuff-bangle",
    price: 5000,
    category: "bangles",
    images: ["/products/bangles/BJ1.webp", "/products/bangles/BJ2.webp"],
    stock_count: 9,
    is_featured: false,
    is_limited_edition: false,
    description: "Stylish gold cuff bangle with modern design.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth.",
  },

  // ============================================
  // NOSE PIN CATEGORY — sab ₹5,000
  // ============================================
  // NA - Gold Nose Pin
  {
    id: "NA",
    name: "Gold Nose Pin",
    slug: "gold-nose-pin",
    price: 5000,
    category: "nosepin",
    images: [
      "/products/nosepin/NA1.webp",
      "/products/nosepin/NA2.webp",
      "/products/nosepin/NA3.webp",
    ],
    stock_count: 10,
    is_featured: true,
    is_limited_edition: false,
    description: "Elegant gold nose pin with intricate design.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth.",
  },
  // NB - Diamond Nose Pin
  {
    id: "NB",
    name: "Diamond Nose Pin",
    slug: "diamond-nose-pin",
    price: 5000,
    category: "nosepin",
    images: [
      "/products/nosepin/NB1.webp",
      "/products/nosepin/NB2.webp",
      "/products/nosepin/NB3.webp",
    ],
    stock_count: 5,
    is_featured: true,
    is_limited_edition: true,
    description: "Exquisite stone-studded nose pin for special occasions.",
    story: "A symbol of elegance and tradition.",
    materials: "Silver-tone finish, crystal stones",
    care_info: "Wipe with soft cloth. Store separately.",
  },
  // NC - Rose Gold Nose Pin
  {
    id: "NC",
    name: "Rose Gold Nose Pin",
    slug: "rose-gold-nose-pin",
    price: 5000,
    category: "nosepin",
    images: [
      "/products/nosepin/NC1.webp",
      "/products/nosepin/NC2.webp",
      "/products/nosepin/NC3.webp",
    ],
    stock_count: 8,
    is_featured: false,
    is_limited_edition: false,
    description: "Beautiful rose gold nose pin with elegant finish.",
    materials: "Rose gold-tone finish",
    care_info: "Wipe with soft cloth.",
  },
  // ND - Pearl Nose Pin
  {
    id: "ND",
    name: "Pearl Nose Pin",
    slug: "pearl-nose-pin",
    price: 5000,
    category: "nosepin",
    images: [
      "/products/nosepin/ND1.webp",
      "/products/nosepin/ND2.webp",
      "/products/nosepin/ND3.webp",
    ],
    stock_count: 12,
    is_featured: false,
    is_limited_edition: false,
    description: "Elegant pearl nose pin with gold setting.",
    materials: "Gold-tone finish, pearl",
    care_info: "Wipe with soft cloth.",
  },
  // NE - Ruby Nose Pin
  {
    id: "NE",
    name: "Ruby Nose Pin",
    slug: "ruby-nose-pin",
    price: 5000,
    category: "nosepin",
    images: [
      "/products/nosepin/NE1.webp",
      "/products/nosepin/NE2.webp",
      "/products/nosepin/NE3.webp",
    ],
    stock_count: 4,
    is_featured: true,
    is_limited_edition: true,
    description: "Beautiful ruby-tone nose pin with gold detailing.",
    materials: "Gold-tone finish, red stones",
    care_info: "Wipe with soft cloth.",
  },

  // ============================================
  // Earrings CATEGORY — sab ₹5,000
  // ============================================
  // EA - Gold Earrings
  {
    id: "EA",
    name: "Gold Earrings",
    slug: "gold-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/EA1.webp",
      "/products/Earrings/EA2.webp",
      "/products/Earrings/EA3.webp",
    ],
    stock_count: 8,
    is_featured: true,
    is_limited_edition: false,
    description: "Elegant gold earrings with timeless design.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth.",
  },
  // EB - Diamond Earrings
  {
    id: "EB",
    name: "Diamond Earrings",
    slug: "diamond-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/EB1.webp",
      "/products/Earrings/EB2.webp",
      "/products/Earrings/EB3.webp",
    ],
    stock_count: 3,
    is_featured: true,
    is_limited_edition: true,
    description: "Exquisite stone-studded earrings with brilliant sparkle.",
    story: "A celebration of timeless elegance and grace.",
    materials: "Silver-tone finish, crystal stones",
    care_info: "Wipe with soft cloth. Store separately.",
  },
  // EC - Rose Gold Earrings
  {
    id: "EC",
    name: "Rose Gold Earrings",
    slug: "rose-gold-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/EC1.webp",
      "/products/Earrings/EC2.webp",
      "/products/Earrings/EC3.webp",
    ],
    stock_count: 6,
    is_featured: false,
    is_limited_edition: false,
    description: "Beautiful rose gold earrings with elegant finish.",
    materials: "Rose gold-tone finish",
    care_info: "Wipe with soft cloth.",
  },
  // ED - Pearl Earrings
  {
    id: "ED",
    name: "Pearl Earrings",
    slug: "pearl-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/ED1.webp",
      "/products/Earrings/ED2.webp",
      "/products/Earrings/ED3.webp",
    ],
    stock_count: 7,
    is_featured: false,
    is_limited_edition: false,
    description: "Elegant pearl earrings with gold setting.",
    materials: "Gold-tone finish, pearls",
    care_info: "Wipe with soft cloth.",
  },
  // EE - Emerald Earrings
  {
    id: "EE",
    name: "Emerald Earrings",
    slug: "emerald-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/EE1.webp",
      "/products/Earrings/EE2.webp",
      "/products/Earrings/EE3.webp",
    ],
    stock_count: 4,
    is_featured: true,
    is_limited_edition: true,
    description: "Stunning emerald-tone earrings with vintage charm.",
    materials: "Micron gold polish finish, green stones",
    care_info: "Wipe with soft cloth.",
  },
  // EF - Sapphire Earrings
  {
    id: "EF",
    name: "Sapphire Earrings",
    slug: "sapphire-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/EF1.webp",
      "/products/Earrings/EF2.webp",
      "/products/Earrings/EF3.webp",
    ],
    stock_count: 5,
    is_featured: false,
    is_limited_edition: false,
    description: "Royal sapphire-tone earrings with gold accents.",
    materials: "Gold-tone finish, blue stones",
    care_info: "Wipe with soft cloth.",
  },
  // EG - Vintage Gold Earrings
  {
    id: "EG",
    name: "Vintage Gold Earrings",
    slug: "vintage-gold-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/EG1.webp",
      "/products/Earrings/EG2.webp",
      "/products/Earrings/EG3.webp",
    ],
    stock_count: 6,
    is_featured: true,
    is_limited_edition: false,
    description: "Vintage inspired gold earrings with intricate detailing.",
    story: "Inspired by the royal heritage of India.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth. Store in a dry place.",
  },
  // EH - Ruby Earrings
  {
    id: "EH",
    name: "Ruby Earrings",
    slug: "ruby-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/EH1.webp",
      "/products/Earrings/EH2.webp",
      "/products/Earrings/EH3.webp",
    ],
    stock_count: 3,
    is_featured: true,
    is_limited_edition: true,
    description: "Beautiful ruby-tone earrings with gold detailing.",
    materials: "Gold-tone finish, red stones",
    care_info: "Wipe with soft cloth.",
  },
  // EI - Platinum Earrings
  {
    id: "EI",
    name: "Platinum Earrings",
    slug: "platinum-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/EI1.webp",
      "/products/Earrings/EI2.webp",
    ],
    stock_count: 2,
    is_featured: true,
    is_limited_edition: true,
    description: "Exclusive silver-tone earrings for special occasions.",
    story: "A symbol of eternal love and commitment.",
    materials: "Silver-tone finish",
    care_info: "Wipe with soft cloth. Store separately.",
  },
  // EJ - Crystal Gold Earrings
  {
    id: "EJ",
    name: "Crystal Gold Earrings",
    slug: "crystal-gold-earrings",
    price: 5000,
    category: "Earrings",
    images: [
      "/products/Earrings/EJ1.webp",
      "/products/Earrings/EJ2.webp",
      "/products/Earrings/EJ3.webp",
    ],
    stock_count: 5,
    is_featured: false,
    is_limited_edition: false,
    description: "Elegant crystal gold earrings with sparkling finish.",
    materials: "Micron gold polish finish, crystals",
    care_info: "Wipe with soft cloth.",
  },

  // ============================================
  // MANGTIKA CATEGORY — sab ₹5,000
  // ============================================
  // MA - Gold Mangtika
  {
    id: "MA",
    name: "Gold Mangtika",
    slug: "gold-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/MA1.webp",
      "/products/Mangtika/MA2.webp",
      "/products/Mangtika/MA3.webp",
      "/products/Mangtika/MA4.webp",
    ],
    stock_count: 7,
    is_featured: true,
    is_limited_edition: false,
    description: "Elegant gold Mangtika with intricate traditional design.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth. Store in a dry place.",
  },
  // MB - Diamond Mangtika
  {
    id: "MB",
    name: "Diamond Mangtika",
    slug: "diamond-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/MB1.webp",
      "/products/Mangtika/MB2.webp",
      "/products/Mangtika/MB3.webp",
      "/products/Mangtika/MB4.webp",
    ],
    stock_count: 4,
    is_featured: true,
    is_limited_edition: true,
    description: "Exquisite stone-studded Mangtika with brilliant sparkle.",
    story: "A symbol of eternal love and traditional elegance.",
    materials: "Silver-tone finish, crystal stones",
    care_info: "Wipe with soft cloth. Store separately.",
  },
  // MC - Rose Gold Mangtika
  {
    id: "MC",
    name: "Rose Gold Mangtika",
    slug: "rose-gold-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/MC1.webp",
      "/products/Mangtika/MC2.webp",
      "/products/Mangtika/MC3.webp",
      "/products/Mangtika/MC4.webp",
    ],
    stock_count: 6,
    is_featured: false,
    is_limited_edition: false,
    description: "Beautiful rose gold Mangtika with elegant finish.",
    materials: "Rose gold-tone finish",
    care_info: "Wipe with soft cloth.",
  },
  // MD - Pearl Mangtika
  {
    id: "MD",
    name: "Pearl Mangtika",
    slug: "pearl-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/MD1.webp",
      "/products/Mangtika/MD2.webp",
      "/products/Mangtika/MD3.webp",
      "/products/Mangtika/MD4.webp",
    ],
    stock_count: 8,
    is_featured: false,
    is_limited_edition: false,
    description: "Elegant pearl Mangtika with gold setting.",
    materials: "Gold-tone finish, pearls",
    care_info: "Wipe with soft cloth.",
  },
  // ME - Emerald Mangtika
  {
    id: "ME",
    name: "Emerald Mangtika",
    slug: "emerald-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/ME1.webp",
      "/products/Mangtika/ME2.webp",
      "/products/Mangtika/ME3.webp",
      "/products/Mangtika/ME4.webp",
    ],
    stock_count: 5,
    is_featured: true,
    is_limited_edition: true,
    description: "Stunning emerald-tone Mangtika with vintage charm.",
    materials: "Micron gold polish finish, green stones",
    care_info: "Wipe with soft cloth.",
  },
  // MF - Sapphire Mangtika
  {
    id: "MF",
    name: "Sapphire Mangtika",
    slug: "sapphire-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/MF1.webp",
      "/products/Mangtika/MF2.webp",
      "/products/Mangtika/MF3.webp",
      "/products/Mangtika/MF4.webp",
    ],
    stock_count: 5,
    is_featured: false,
    is_limited_edition: false,
    description: "Royal sapphire-tone Mangtika with gold accents.",
    materials: "Gold-tone finish, blue stones",
    care_info: "Wipe with soft cloth.",
  },
  // MG - Vintage Gold Mangtika
  {
    id: "MG",
    name: "Vintage Gold Mangtika",
    slug: "vintage-gold-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/MG1.webp",
      "/products/Mangtika/MG2.webp",
      "/products/Mangtika/MG3.webp",
      "/products/Mangtika/MG4.webp",
    ],
    stock_count: 6,
    is_featured: true,
    is_limited_edition: false,
    description: "Vintage inspired gold Mangtika with intricate detailing.",
    story: "Inspired by the royal heritage of India.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth. Store in a dry place.",
  },
  // MH - Ruby Mangtika
  {
    id: "MH",
    name: "Ruby Mangtika",
    slug: "ruby-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/MH1.webp",
      "/products/Mangtika/MH2.webp",
      "/products/Mangtika/MH3.webp",
      "/products/Mangtika/MH4.webp",
    ],
    stock_count: 4,
    is_featured: true,
    is_limited_edition: true,
    description: "Beautiful ruby-tone Mangtika with gold detailing.",
    materials: "Gold-tone finish, red stones",
    care_info: "Wipe with soft cloth.",
  },
  // MI - Platinum Mangtika
  {
    id: "MI",
    name: "Platinum Mangtika",
    slug: "platinum-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/MI1.webp",
      "/products/Mangtika/MI2.webp",
      "/products/Mangtika/MI3.webp",
      "/products/Mangtika/MI4.webp",
    ],
    stock_count: 2,
    is_featured: true,
    is_limited_edition: true,
    description: "Exclusive silver-tone Mangtika for special occasions.",
    story: "A symbol of eternal love and commitment.",
    materials: "Silver-tone finish",
    care_info: "Wipe with soft cloth. Store separately.",
  },
  // MJ - Crystal Gold Mangtika
  {
    id: "MJ",
    name: "Crystal Gold Mangtika",
    slug: "crystal-gold-Mangtika",
    price: 5000,
    category: "Mangtika",
    images: [
      "/products/Mangtika/MJ1.webp",
      "/products/Mangtika/MJ2.webp",
      "/products/Mangtika/MJ3.webp",
      "/products/Mangtika/MJ4.webp",
    ],
    stock_count: 7,
    is_featured: false,
    is_limited_edition: false,
    description: "Elegant crystal gold Mangtika with sparkling finish.",
    materials: "Micron gold polish finish, crystals",
    care_info: "Wipe with soft cloth.",
  },

  // ============================================
  // NECKLACE CATEGORY — sab ₹5,000
  // ============================================
  // NLA - Gold Necklace
  {
    id: "NLA",
    name: "Gold Necklace",
    slug: "gold-necklace",
    price: 5000,
    category: "Necklace",
    images: ["/products/Necklace/NA1.webp", "/products/Necklace/NA2.webp"],
    stock_count: 6,
    is_featured: true,
    is_limited_edition: false,
    description: "Elegant gold necklace with intricate traditional design.",
    materials: "Micron gold polish finish",
    care_info: "Wipe with soft cloth. Store in a dry place.",
  },
  // NLB - Diamond Necklace
  {
    id: "NLB",
    name: "Diamond Necklace",
    slug: "diamond-necklace",
    price: 5000,
    category: "Necklace",
    images: ["/products/Necklace/NB1.webp", "/products/Necklace/NB2.webp"],
    stock_count: 4,
    is_featured: true,
    is_limited_edition: true,
    description: "Exquisite stone-studded necklace with brilliant sparkle.",
    story: "A symbol of eternal love and traditional elegance.",
    materials: "Silver-tone finish, crystal stones",
    care_info: "Wipe with soft cloth. Store separately.",
  },
  // NLC - Rose Gold Necklace
  {
    id: "NLC",
    name: "Rose Gold Necklace",
    slug: "rose-gold-necklace",
    price: 5000,
    category: "Necklace",
    images: ["/products/Necklace/NC1.webp", "/products/Necklace/NC2.webp"],
    stock_count: 5,
    is_featured: false,
    is_limited_edition: false,
    description: "Beautiful rose gold necklace with elegant finish.",
    materials: "Rose gold-tone finish",
    care_info: "Wipe with soft cloth.",
  },
  // NLD - Pearl Necklace
  {
    id: "NLD",
    name: "Pearl Necklace",
    slug: "pearl-necklace",
    price: 5000,
    category: "Necklace",
    images: ["/products/Necklace/ND1.webp", "/products/Necklace/ND2.webp"],
    stock_count: 7,
    is_featured: false,
    is_limited_edition: false,
    description: "Elegant pearl necklace with gold setting.",
    materials: "Gold-tone finish, pearls",
    care_info: "Wipe with soft cloth.",
  },
  // NLE - Emerald Necklace
  {
    id: "NLE",
    name: "Emerald Necklace",
    slug: "emerald-necklace",
    price: 5000,
    category: "Necklace",
    images: ["/products/Necklace/NE1.webp", "/products/Necklace/NE2.webp"],
    stock_count: 3,
    is_featured: true,
    is_limited_edition: true,
    description: "Stunning emerald-tone necklace with vintage charm.",
    materials: "Micron gold polish finish, green stones",
    care_info: "Wipe with soft cloth.",
  },
];

export const getProductBySlug = (slug: string) => {
  return products.find((p) => p.slug === slug);
};

export const getRelatedProducts = (
  productId: string,
  category: string,
  limit = 4
) => {
  return products
    .filter((p) => p.category === category && p.id !== productId)
    .slice(0, limit);
};