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
    // RINGS CATEGORY
    // ============================================
    // RA - Royal Amber Ring
    {
      id: "RA",
      name: "Royal Amber Ring",
      slug: "royal-amber-ring",
      price: 24999,
      category: "rings",
      images: [
        "/products/rings/RA1.webp",
        "/products/rings/RA2.webp",
        "/products/rings/RA3.webp",
      ],
      stock_count: 5,
      is_featured: true,
      is_limited_edition: true,
      description: "A stunning ring with royal amber stones...",
      story: "Inspired by the royal courts of Rajasthan...",
      materials: "18K Gold Plated, Amber Stones",
      care_info: "Wipe with soft cloth..."
    },
    // RB - Regal Blue Ring
    {
      id: "RB",
      name: "Regal Blue Ring",
      slug: "regal-blue-ring",
      price: 18999,
      category: "rings",
      images: [
        "/products/rings/RB1.webp",
        "/products/rings/RB2.webp",
        "/products/rings/RB3.webp",
      ],
      stock_count: 3,
      is_featured: false,
      is_limited_edition: false,
      description: "Elegant blue sapphire ring with intricate gold detailing.",
      materials: "18K Gold Plated, Blue Sapphire",
      care_info: "Wipe with soft cloth."
    },
    // RC - Classic Gold Ring
    {
      id: "RC",
      name: "Classic Gold Ring",
      slug: "classic-gold-ring",
      price: 15999,
      category: "rings",
      images: [
        "/products/rings/RC1.webp",
        "/products/rings/RC2.webp",
        "/products/rings/RC3.webp",
      ],
      stock_count: 8,
      is_featured: true,
      is_limited_edition: false,
      description: "Timeless classic gold ring for everyday elegance.",
      materials: "18K Gold Plated",
      care_info: "Wipe with soft cloth."
    },
    // RD - Diamond Halo Ring
    {
      id: "RD",
      name: "Diamond Halo Ring",
      slug: "diamond-halo-ring",
      price: 49999,
      category: "rings",
      images: [
        "/products/rings/RD1.webp",
        "/products/rings/RD2.webp",
        "/products/rings/RD3.webp",
      ],
      stock_count: 2,
      is_featured: true,
      is_limited_edition: true,
      description: "Exquisite diamond halo ring with brilliant cut diamonds.",
      story: "A symbol of eternal love and commitment.",
      materials: "18K Gold Plated, Diamond",
      care_info: "Wipe with soft cloth. Store separately."
    },
    // RE - Emerald Cut Ring
    {
      id: "RE",
      name: "Emerald Cut Ring",
      slug: "emerald-cut-ring",
      price: 35999,
      category: "rings",
      images: [
        "/products/rings/RE1.webp",
        "/products/rings/RE2.webp",
        "/products/rings/RE3.webp",
      ],
      stock_count: 4,
      is_featured: false,
      is_limited_edition: false,
      description: "Stunning emerald cut ring with vintage charm.",
      materials: "18K Gold Plated, Emerald",
      care_info: "Wipe with soft cloth."
    },
    // RF - Gold Band Ring
    {
      id: "RF",
      name: "Gold Band Ring",
      slug: "gold-band-ring",
      price: 12999,
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
      materials: "18K Gold Plated",
      care_info: "Wipe with soft cloth."
    },
    // RG - Rose Gold Ring
    {
      id: "RG",
      name: "Rose Gold Ring",
      slug: "rose-gold-ring",
      price: 21999,
      category: "rings",
      images: [
        "/products/rings/RG1.webp",
        "/products/rings/RG2.webp",
        "/products/rings/RG3.webp",
      ],
      stock_count: 6,
      is_featured: true,
      is_limited_edition: false,
      description: "Beautiful rose gold ring with delicate design.",
      materials: "Rose Gold Plated",
      care_info: "Wipe with soft cloth."
    },
    // RH - Sapphire Ring
    {
      id: "RH",
      name: "Sapphire Ring",
      slug: "sapphire-ring",
      price: 28999,
      category: "rings",
      images: [
        "/products/rings/RH1.webp",
        "/products/rings/RH2.webp",
        "/products/rings/RH3.webp",
      ],
      stock_count: 3,
      is_featured: false,
      is_limited_edition: true,
      description: "Royal sapphire ring with gold accents.",
      materials: "18K Gold Plated, Sapphire",
      care_info: "Wipe with soft cloth."
    },
    // RI - Pearl Ring
    {
      id: "RI",
      name: "Pearl Ring",
      slug: "pearl-ring",
      price: 16999,
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
      materials: "18K Gold Plated, Pearl",
      care_info: "Wipe with soft cloth."
    },
    // RJ - Vintage Gold Ring
    {
      id: "RJ",
      name: "Vintage Gold Ring",
      slug: "vintage-gold-ring",
      price: 32999,
      category: "rings",
      images: [
        "/products/rings/RJ1.webp",
        "/products/rings/RJ2.webp",
        "/products/rings/RJ3.webp",
      ],
      stock_count: 4,
      is_featured: true,
      is_limited_edition: true,
      description: "Vintage inspired gold ring with intricate detailing.",
      story: "Inspired by the royal heritage of India.",
      materials: "18K Gold Plated",
      care_info: "Wipe with soft cloth. Store in a dry place."
    },

    // ============================================
    // BANGLES CATEGORY
    // ============================================
    // BA - Gold Bangle
    {
      id: "BA",
      name: "Gold Bangle",
      slug: "gold-bangle",
      price: 29999,
      category: "bangles",
      images: [
        "/products/bangles/BA1.webp",
        "/products/bangles/BA2.webp",
      ],
      stock_count: 10,
      is_featured: true,
      is_limited_edition: false,
      description: "Elegant gold bangle with intricate design.",
      materials: "18K Gold Plated",
      care_info: "Wipe with soft cloth. Avoid water contact."
    },
    // BB - Diamond Bangle
    {
      id: "BB",
      name: "Diamond Bangle",
      slug: "diamond-bangle",
      price: 45999,
      category: "bangles",
      images: [
        "/products/bangles/BB1.webp",
        "/products/bangles/BB2.webp",
      ],
      stock_count: 3,
      is_featured: true,
      is_limited_edition: true,
      description: "Exquisite diamond bangle for special occasions.",
      story: "A celebration of timeless elegance.",
      materials: "18K Gold Plated, Diamond",
      care_info: "Wipe with soft cloth. Store separately."
    },
    // BC - Rose Gold Bangle
    {
      id: "BC",
      name: "Rose Gold Bangle",
      slug: "rose-gold-bangle",
      price: 25999,
      category: "bangles",
      images: [
        "/products/bangles/BC1.webp",
        "/products/bangles/BC2.webp",
      ],
      stock_count: 7,
      is_featured: false,
      is_limited_edition: false,
      description: "Beautiful rose gold bangle with elegant finish.",
      materials: "Rose Gold Plated",
      care_info: "Wipe with soft cloth."
    },
    // BD - Pearl Bangle
    {
      id: "BD",
      name: "Pearl Bangle",
      slug: "pearl-bangle",
      price: 19999,
      category: "bangles",
      images: [
        "/products/bangles/BD1.webp",
        "/products/bangles/BD2.webp",
      ],
      stock_count: 6,
      is_featured: false,
      is_limited_edition: false,
      description: "Elegant pearl bangle with gold setting.",
      materials: "18K Gold Plated, Pearl",
      care_info: "Wipe with soft cloth."
    },
    // BE - Emerald Bangle
    {
      id: "BE",
      name: "Emerald Bangle",
      slug: "emerald-bangle",
      price: 38999,
      category: "bangles",
      images: [
        "/products/bangles/BE1.jpg",
        "/products/bangles/BE2.webp",
      ],
      stock_count: 4,
      is_featured: true,
      is_limited_edition: true,
      description: "Stunning emerald bangle with vintage charm.",
      materials: "18K Gold Plated, Emerald",
      care_info: "Wipe with soft cloth."
    },
    // BF - Sapphire Bangle
    {
      id: "BF",
      name: "Sapphire Bangle",
      slug: "sapphire-bangle",
      price: 32999,
      category: "bangles",
      images: [
        "/products/bangles/BF1.webp",
        "/products/bangles/BF2.webp",
      ],
      stock_count: 5,
      is_featured: false,
      is_limited_edition: false,
      description: "Royal sapphire bangle with gold accents.",
      materials: "18K Gold Plated, Sapphire",
      care_info: "Wipe with soft cloth."
    },
    // BG - Vintage Gold Bangle
    {
      id: "BG",
      name: "Vintage Gold Bangle",
      slug: "vintage-gold-bangle",
      price: 27999,
      category: "bangles",
      images: [
        "/products/bangles/BG1.webp",
        "/products/bangles/BG2.webp",
      ],
      stock_count: 8,
      is_featured: true,
      is_limited_edition: false,
      description: "Vintage inspired gold bangle with intricate detailing.",
      materials: "18K Gold Plated",
      care_info: "Wipe with soft cloth. Store in a dry place."
    },
    // BH - Platinum Bangle
    {
      id: "BH",
      name: "Platinum Bangle",
      slug: "platinum-bangle",
      price: 55999,
      category: "bangles",
      images: [
        "/products/bangles/BH1.webp",
        "/products/bangles/BH2.webp",
      ],
      stock_count: 2,
      is_featured: true,
      is_limited_edition: true,
      description: "Exclusive platinum bangle for special occasions.",
      story: "A symbol of eternal love and commitment.",
      materials: "Platinum",
      care_info: "Wipe with soft cloth. Store separately."
    },
    // BI - Ruby Bangle
    {
      id: "BI",
      name: "Ruby Bangle",
      slug: "ruby-bangle",
      price: 41999,
      category: "bangles",
      images: [
        "/products/bangles/BI1.webp",
        "/products/bangles/BI2.webp",
      ],
      stock_count: 3,
      is_featured: false,
      is_limited_edition: true,
      description: "Beautiful ruby bangle with gold detailing.",
      materials: "18K Gold Plated, Ruby",
      care_info: "Wipe with soft cloth."
    },
    // BJ - Gold Cuff Bangle
    {
      id: "BJ",
      name: "Gold Cuff Bangle",
      slug: "gold-cuff-bangle",
      price: 23999,
      category: "bangles",
      images: [
        "/products/bangles/BJ1.webp",
        "/products/bangles/BJ2.webp",
      ],
      stock_count: 9,
      is_featured: false,
      is_limited_edition: false,
      description: "Stylish gold cuff bangle with modern design.",
      materials: "18K Gold Plated",
      care_info: "Wipe with soft cloth."
    },

    // ============================================
    // NOSE PIN CATEGORY (NEW)
    // ============================================
    // NA - Gold Nose Pin
    {
        id: "NA",
        name: "Gold Nose Pin",
        slug: "gold-nose-pin",
        price: 4999,
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
        materials: "18K Gold Plated",
        care_info: "Wipe with soft cloth."
      },
      // NB - Diamond Nose Pin
      {
        id: "NB",
        name: "Diamond Nose Pin",
        slug: "diamond-nose-pin",
        price: 8999,
        category: "nosepin",
        images: [
          "/products/nosepin/NB1.webp",
          "/products/nosepin/NB2.webp",
          "/products/nosepin/NB3.webp",
        ],
        stock_count: 5,
        is_featured: true,
        is_limited_edition: true,
        description: "Exquisite diamond nose pin for special occasions.",
        story: "A symbol of elegance and tradition.",
        materials: "18K Gold Plated, Diamond",
        care_info: "Wipe with soft cloth. Store separately."
      },
      // NC - Rose Gold Nose Pin
      {
        id: "NC",
        name: "Rose Gold Nose Pin",
        slug: "rose-gold-nose-pin",
        price: 3999,
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
        materials: "Rose Gold Plated",
        care_info: "Wipe with soft cloth."
      },
      // ND - Pearl Nose Pin
      {
        id: "ND",
        name: "Pearl Nose Pin",
        slug: "pearl-nose-pin",
        price: 2999,
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
        materials: "18K Gold Plated, Pearl",
        care_info: "Wipe with soft cloth."
      },
      // NE - Ruby Nose Pin
      {
        id: "NE",
        name: "Ruby Nose Pin",
        slug: "ruby-nose-pin",
        price: 6999,
        category: "nosepin",
        images: [
          "/products/nosepin/NE1.webp",
          "/products/nosepin/NE2.webp",
          "/products/nosepin/NE3.webp",
        ],
        stock_count: 4,
        is_featured: true,
        is_limited_edition: true,
        description: "Beautiful ruby nose pin with gold detailing.",
        materials: "18K Gold Plated, Ruby",
        care_info: "Wipe with soft cloth."
      },
  ];
  
  export const getProductBySlug = (slug: string) => {
    return products.find(p => p.slug === slug);
  };
  
  export const getRelatedProducts = (productId: string, category: string, limit = 4) => {
    return products.filter(p => p.category === category && p.id !== productId).slice(0, limit);
  };