export const BRAND = {
  name: "Sahiba Vij",
  tagline: "Every Sparkle Has Its Own Story",
  instagram: "https://www.instagram.com/sahibavijjewels",
  whatsappNumber: "+919830228844",
  email: "sahibavij@hotmail.com",
  address: "DLF Phase 5, Gurugram, Haryana - 122002",
  phone: "+91 9830228844",
};

export const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "Necklace", label: "Necklaces" },
  { value: "Earrings", label: "Earrings" },
  { value: "rings", label: "Rings" },
  { value: "bangles", label: "Bangles" },
  { value: "Mangtika", label: "Mangtika" },
  { value: "nosepin", label: "Nose Pin" },
];

export function generateOrderId() {
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `SV${y}${m}${d}${rand}`;
}