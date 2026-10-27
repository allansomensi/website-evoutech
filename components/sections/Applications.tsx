import ApplicationArt, { type ArtKind } from "../brand/ApplicationArt";
import { SectionHeading } from "../ui/SectionHeading";

const applications: { title: string; text: string; art: ArtKind }[] = [
  {
    title: "Biscoitos",
    text: "Extrusão, corte e transporte de biscoitos amanteigados e coloniais.",
    art: "biscoitos",
  },
  {
    title: "Doces",
    text: "Embalagem de doces em barra e confeitos em filme contínuo.",
    art: "doces",
  },
  {
    title: "Massas",
    text: "Equipamentos para extrusão e produção de massas alimentícias.",
    art: "massas",
  },
  {
    title: "Peças",
    text: "Embalagem de peças, componentes e pequenos itens metálicos.",
    art: "pecas",
  },
];

const sectors = ["Alimentos", "Bebidas", "Químicos", "Cerâmicas", "Utilidades"];

export default function Applications() {
  return (
    <section
      id="aplicacoes"
      aria-labelledby="aplicacoes-title"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="Aplicações"
          id="aplicacoes-title"
          title="Do biscoito à peça metálica."
        >
          Cada produto tem formato, textura e ritmo próprios. Nossas máquinas
          são pensadas a partir deles — não o contrário.
        </SectionHeading>

        <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-4">
          {applications.map((app, i) => (
            <li
              key={app.title}
              className="group relative flex overflow-hidden rounded-2xl bg-white sm:flex-col"
            >
              <div className="bg-blueprint-ink bg-paper-2/60 relative aspect-square w-28 shrink-0 sm:aspect-[5/4] sm:w-auto">
                <span className="text-ink/40 absolute top-3 left-3 z-10 font-mono text-xs sm:top-4 sm:left-4">
                  0{i + 1}
                </span>
                <ApplicationArt
                  kind={app.art}
                  className="absolute inset-0 h-full w-full p-2 transition-transform duration-500 ease-[var(--ease-machine)] group-hover:scale-[1.04] sm:p-4"
                />
              </div>
              <div className="self-center p-5 sm:self-auto sm:p-6">
                <h3 className="font-display text-xl font-semibold sm:text-2xl">
                  {app.title}
                </h3>
                <p className="text-ink/60 mt-1 text-[0.95rem] leading-relaxed sm:mt-2 sm:text-base">
                  {app.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="border-line mt-10 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink/50 font-mono text-xs tracking-[0.14em] uppercase">
            Setores atendidos
          </p>
          <ul className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <li
                key={sector}
                className="border-line text-ink/75 rounded-full border px-4 py-1.5 text-sm"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
