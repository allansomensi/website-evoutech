export const FOUNDED = 1996;

export const site = {
  name: "Evoutech",
  url: "https://www.evoutech.com.br",
  tagline: "Embalamento, Movimentação e Automação",
  description:
    "Fabricante de máquinas de embalagem, movimentação e automação industrial em Bento Gonçalves (RS). Desde 1996 atendendo pequenas e médias indústrias de todo o Brasil.",
  email: "contato@evoutech.com.br",
  phone: "(54) 99153-5354",
  phoneHref: "tel:+5554991535354",
  whatsappNumber: "5554991535354",
  address: {
    street: "Rua Lázaro Giordani, 69",
    district: "Jardim Glória",
    city: "Bento Gonçalves",
    state: "RS",
    postalCode: "95700-000",
  },
  mapsUrl: "https://maps.app.goo.gl/oBhLGYvcVAbLxH3w8",
};

export function whatsappLink(
  text = "Olá, Evoutech! Gostaria de fazer um orçamento.",
) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function yearsInBusiness() {
  return new Date().getFullYear() - FOUNDED;
}

export const nav = [
  { href: "#aplicacoes", label: "Aplicações" },
  { href: "#maquinas", label: "Máquinas" },
  { href: "#sob-medida", label: "Sob medida" },
  { href: "#empresa", label: "Empresa" },
  { href: "#contato", label: "Contato" },
];
