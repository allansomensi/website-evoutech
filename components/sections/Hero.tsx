import MachineLogo from "../brand/MachineLogo";
import { ButtonLink } from "../ui/ButtonLink";
import { ArrowRight } from "../ui/Icons";
import { FOUNDED, yearsInBusiness } from "@/lib/site";

const facts = [
  { value: String(FOUNDED), label: "Início das atividades" },
  { value: "2001", label: "Primeira máquina própria" },
  { value: "5", label: "Setores industriais atendidos" },
  { value: "Sob medida", label: "Projetos especiais" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="bg-blueprint bg-ink relative overflow-hidden text-white"
    >
      {/* Brilho suave atrás da máquina */}
      <div
        aria-hidden="true"
        className="bg-accent/20 pointer-events-none absolute top-1/3 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-[120px] lg:left-[70%]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <div className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs tracking-[0.14em] text-white/55 uppercase">
              <span className="text-accent-hi">●</span>&nbsp; Bento Gonçalves,
              RS · desde {FOUNDED}
            </p>

            <h1
              id="hero-title"
              className="font-display mt-6 text-[2.6rem] leading-[0.98] font-semibold text-balance sm:text-6xl lg:text-[4.1rem]"
            >
              Máquinas que embalam, movem e automatizam a sua produção.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/65">
              Há {yearsInBusiness()} anos a Evoutech projeta e fabrica
              equipamentos para pequenas e médias indústrias de todo o Brasil —
              de extrusoras de biscoito a rotuladoras e datadores.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contato">
                Solicitar orçamento <ArrowRight />
              </ButtonLink>
              <ButtonLink href="#maquinas" variant="ghost">
                Conhecer as máquinas
              </ButtonLink>
            </div>
          </div>

          <figure className="relative -mx-4 sm:mx-0 lg:col-span-7">
            <div className="relative sm:rounded-2xl sm:border sm:border-white/10 sm:bg-white/[0.02] sm:p-6 lg:p-8">
              <span
                aria-hidden="true"
                className="absolute top-3 right-4 hidden font-mono text-[10px] tracking-[0.14em] text-white/35 uppercase sm:block"
              >
                EVT · Selagem flow-pack
              </span>
              <MachineLogo className="h-auto w-full" />
            </div>
            <figcaption className="sr-only">
              O símbolo da Evoutech animado como a mordaça rotativa de uma
              embaladora.
            </figcaption>
          </figure>
        </div>

        <dl className="mt-14 grid grid-cols-2 border-t border-white/10 lg:mt-20 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col py-6 pr-4 sm:py-8 ${
                i % 2 === 1 ? "border-l border-white/10 pl-4 sm:pl-6" : ""
              } ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-6" : ""
              }`}
            >
              <dt className="order-2 mt-1 text-sm text-white/50">
                {fact.label}
              </dt>
              <dd className="font-display order-1 text-2xl font-semibold sm:text-3xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
