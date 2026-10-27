import LazyVideo from "../ui/LazyVideo";
import { ButtonLink } from "../ui/ButtonLink";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight } from "../ui/Icons";

const steps = [
  {
    title: "Diagnóstico",
    text: "Entendemos o produto, o volume de produção e o espaço disponível na sua fábrica.",
  },
  {
    title: "Projeto",
    text: "Desenvolvemos a solução mecânica e de automação para o seu caso — nada de adaptação genérica.",
  },
  {
    title: "Fabricação",
    text: "Construímos o equipamento na nossa estrutura em Bento Gonçalves (RS).",
  },
  {
    title: "Instalação e suporte",
    text: "Acompanhamos a partida da máquina e seguimos por perto com assistência técnica.",
  },
];

export default function CustomProjects() {
  return (
    <section
      id="sob-medida"
      aria-labelledby="sob-medida-title"
      className="bg-ink py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Sob medida"
          id="sob-medida-title"
          tone="dark"
          title="Não encontrou a máquina certa? A gente projeta."
        >
          Além da linha própria, desenvolvemos equipamentos especiais de
          embalamento, movimentação e automação para necessidades específicas.
        </SectionHeading>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:col-span-6">
            <div className="bg-ink-3 relative overflow-hidden rounded-2xl">
              <LazyVideo
                src="/videos/operacao.mp4"
                poster="/img/operacao-poster.jpg"
                label="Equipamento Evoutech embalando produtos em filme contínuo"
                className="aspect-[4/3] w-full object-cover"
              />
              <span className="bg-ink/70 absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] text-white/80 uppercase backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 motion-reduce:animate-none" />
                Em operação
              </span>
            </div>
            <figcaption className="mt-3 text-sm text-white/45">
              Embaladora em filme contínuo na linha de produção.
            </figcaption>
          </figure>

          <div className="flex flex-col lg:col-span-6">
            <ol className="border-t border-white/10">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[3rem_1fr] gap-x-2 border-b border-white/10 py-6"
                >
                  <span className="text-accent-hi pt-1 font-mono text-xs">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-white/60">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <ButtonLink href="#contato" variant="light">
                Apresentar meu projeto <ArrowRight />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
