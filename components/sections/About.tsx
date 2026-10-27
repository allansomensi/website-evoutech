import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { FOUNDED, yearsInBusiness } from "@/lib/site";

const timeline = [
  {
    year: String(FOUNDED),
    text: "Começamos com a manutenção de máquinas no setor alimentício.",
  },
  {
    year: "2001",
    text: "Lançamos os primeiros equipamentos próprios, pensados para pequenos e médios produtores.",
  },
  {
    year: "Hoje",
    text: "Máquinas em operação em indústrias de alimentos, bebidas, químicos, cerâmicas e utilidades.",
  },
];

export default function About() {
  return (
    <section
      id="empresa"
      aria-labelledby="empresa-title"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="A empresa"
          id="empresa-title"
          title={`${yearsInBusiness()} anos de chão de fábrica.`}
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:col-start-4 lg:row-start-1">
            <div className="text-ink/70 space-y-5 text-lg leading-relaxed">
              <p>
                A Evoutech nasceu consertando máquinas. Foi dentro das fábricas,
                resolvendo parada de linha, que aprendemos o que um equipamento
                precisa ter para trabalhar todo dia sem dar dor de cabeça.
              </p>
              <p>
                Na Região dos Vinhedos, em Bento Gonçalves, transformamos essa
                experiência em máquinas próprias — com inovação, qualidade e uma
                parceria de verdade com quem produz.
              </p>
            </div>

            <ol className="border-line mt-10 border-t">
              {timeline.map((item) => (
                <li
                  key={item.year}
                  className="border-line grid grid-cols-[5.5rem_1fr] gap-4 border-b py-5"
                >
                  <span className="font-display text-accent text-2xl font-semibold">
                    {item.year}
                  </span>
                  <p className="text-ink/70 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <div className="bg-paper-2 relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/img/about.png"
                alt="Fachada da Evoutech com o logotipo em metal"
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
              />
            </div>
            <p className="text-ink/45 mt-4 font-mono text-[11px] tracking-[0.14em] uppercase">
              Rua Lázaro Giordani, 69 · Bento Gonçalves, RS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
