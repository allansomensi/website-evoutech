import Image from "next/image";

const logos = [
  { src: "/img/brands/embale_bem.png", alt: "Embale Bem" },
  { src: "/img/brands/gulis.png", alt: "Gulis Sorvetes" },
  { src: "/img/brands/hangar7.png", alt: "Hangar7 Alfajores" },
  { src: "/img/brands/incoterm.png", alt: "Incoterm" },
  { src: "/img/brands/melos.png", alt: "Doces Melos" },
  { src: "/img/brands/nevadda.png", alt: "Nevadda Alfajores" },
  { src: "/img/brands/guimaraes.png", alt: "Guimarães" },
  { src: "/img/brands/lumibras.png", alt: "Lumibras" },
  { src: "/img/brands/porteno.png", alt: "Porteno Alfajores" },
  { src: "/img/brands/selecao_patrulhense.png", alt: "Seleção Patrulhense" },
  { src: "/img/brands/rcm.png", alt: "RCM Acessórios de Metal" },
  { src: "/img/brands/neveton.png", alt: "Doces Neveton" },
  { src: "/img/brands/brownie_dos_guris.png", alt: "Brownie dos Guris" },
  { src: "/img/brands/santo_antonio.png", alt: "Santo Antônio Alimentos" },
  { src: "/img/brands/selecao.png", alt: "Doces Seleção" },
];

const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center justify-center p-4">
    <Image
      src={src}
      alt={alt}
      width={150}
      height={100}
      className="h-auto max-h-20 w-auto object-contain select-none"
    />
  </div>
);

export default function Clients() {
  return (
    <section className="bg-white/60 py-10 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Nossos Clientes
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <Logo key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
