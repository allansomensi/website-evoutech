"use client";

import Image from "next/image";

const logos = [
  { src: "/img/brands/embale_bem.png", alt: "Embale Bem" },
  { src: "/img/brands/gulis.png", alt: "Gulis Sorvetes" },
  { src: "/img/brands/hangar7.png", alt: "Hangar7 Alfajores" },
  { src: "/img/brands/incoterm.png", alt: "Incoterm" },
  { src: "/img/brands/melos.png", alt: "Doces Melos" },
  { src: "/img/brands/nevadda.png", alt: "Nevadda Alfajores" },
  { src: "/img/brands/neveton.png", alt: "Doces Neveton" },
  { src: "/img/brands/rcm.png", alt: "RCM Acessórios de Metal" },
  { src: "/img/brands/santo_antonio.png", alt: "Santo Antônio Alimentos" },
  { src: "/img/brands/selecao.png", alt: "Doces Seleção" },
  { src: "/img/brands/xiski.png", alt: "Xiski Sorvetes" },
];

const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex-shrink-0">
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="150px"
      className="h-auto w-full select-none"
    />
  </div>
);

export default function ClientCarousel() {
  return (
    <section className="overflow-hidden bg-gray-50 py-6 backdrop-blur-lg">
      <div className="animate-marquee flex items-center justify-start space-x-12">
        {logos.concat(logos).map((logo, index) => (
          <Logo key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
