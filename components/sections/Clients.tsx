import Image from "next/image";

const logos = [
  { src: "/img/brands/embale_bem.png", alt: "Embale Bem", w: 788, h: 160 },
  { src: "/img/brands/gulis.png", alt: "Gulis Sorvetes", w: 274, h: 168 },
  { src: "/img/brands/hangar7.png", alt: "Hangar 7 Alfajores", w: 313, h: 292 },
  { src: "/img/brands/incoterm.png", alt: "Incoterm", w: 725, h: 183 },
  { src: "/img/brands/melos.png", alt: "Doces Melos", w: 250, h: 137 },
  { src: "/img/brands/nevadda.png", alt: "Nevadda Alfajores", w: 630, h: 161 },
  { src: "/img/brands/guimaraes.png", alt: "Guimarães", w: 268, h: 89 },
  { src: "/img/brands/lumibras.png", alt: "Lumibras", w: 294, h: 74 },
  { src: "/img/brands/porteno.png", alt: "Porteño Alfajores", w: 619, h: 637 },
  {
    src: "/img/brands/selecao_patrulhense.png",
    alt: "Seleção Patrulhense",
    w: 965,
    h: 317,
  },
  {
    src: "/img/brands/rcm.png",
    alt: "RCM Acessórios de Metal",
    w: 243,
    h: 137,
  },
  { src: "/img/brands/neveton.png", alt: "Doces J. Neveton", w: 161, h: 146 },
  {
    src: "/img/brands/brownie_dos_guris.png",
    alt: "Brownie dos Guris",
    w: 613,
    h: 254,
  },
  {
    src: "/img/brands/santo_antonio.png",
    alt: "Santo Antônio Alimentos",
    w: 154,
    h: 127,
  },
  { src: "/img/brands/selecao.png", alt: "Doces Seleção", w: 680, h: 435 },
];

export default function Clients() {
  return (
    <section aria-labelledby="clientes-title" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-line flex flex-col gap-2 border-t pt-10 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="clientes-title"
            className="font-display text-3xl font-semibold sm:text-4xl"
          >
            Quem produz com a Evoutech
          </h2>
          <p className="text-ink/55">
            Indústrias que confiam nos nossos equipamentos.
          </p>
        </div>

        <ul className="border-line bg-line mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <li
              key={logo.src}
              className="group bg-paper flex h-24 items-center justify-center p-3 sm:h-32 sm:p-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                sizes="160px"
                className={`h-auto w-auto max-w-[84%] object-contain sm:max-w-[78%] ${
                  logo.w / logo.h < 1.4
                    ? "max-h-14 sm:max-h-[4.5rem]"
                    : logo.w / logo.h > 3.5
                      ? "max-h-8 sm:max-h-10"
                      : "max-h-11 sm:max-h-14"
                } transition duration-300 select-none [@media(hover:hover)]:opacity-70 [@media(hover:hover)]:grayscale [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:grayscale-0`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
