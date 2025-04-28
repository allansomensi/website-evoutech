import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="w-full bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 p-8 md:flex-row md:gap-16 md:p-16">
        {/* Texto */}
        <div className="w-full flex-1 text-center md:text-left">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            A Empresa
          </h2>

          <p className="mb-4 text-base leading-relaxed text-gray-300">
            Desde <span className="font-semibold">1996</span>, a{" "}
            <span className="font-semibold">Evoutech</span> transforma desafios
            em soluções. Começamos com manutenção de máquinas no setor
            alimentício e, em <span className="font-semibold">2001</span>,
            lançamos nossos próprios equipamentos, focados em pequenos e médios
            produtores.
          </p>

          <p className="mb-4 text-base leading-relaxed text-gray-300">
            Localizada na{" "}
            <span className="font-semibold">Região dos Vinhedos</span>, em{" "}
            <span className="font-semibold">Bento Gonçalves</span>, entregamos
            inovação, qualidade e parceria real para impulsionar fábricas em
            todo o Brasil.
          </p>

          <p className="text-base leading-relaxed text-gray-300">
            Atuamos nos setores de{" "}
            <span className="font-semibold">alimentos</span>,{" "}
            <span className="font-semibold">bebidas</span>,{" "}
            <span className="font-semibold">químicos</span>,{" "}
            <span className="font-semibold">cerâmicas</span> e{" "}
            <span className="font-semibold">utilidades</span>. Nosso foco é
            claro: <span className="font-bold">Embalamento</span>,{" "}
            <span className="font-bold">Movimentação</span> e{" "}
            <span className="font-bold">Automação</span>.
          </p>
        </div>

        {/* Imagem */}
        <div className="relative aspect-[4/3] w-full max-w-md flex-1 overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/img/about.png"
            alt="Imagem da Empresa"
            fill
            sizes="640px"
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
