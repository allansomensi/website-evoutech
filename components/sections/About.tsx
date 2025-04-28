// components/About.tsx

import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="w-full bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 p-8 md:flex-row md:p-16">
        {/* Imagem */}
        <div className="relative order-1 h-[400px] w-full max-w-md flex-1 overflow-hidden rounded-xl shadow-2xl md:order-none">
          <Image
            src="/img/about.png"
            alt="Imagem da Empresa"
            width={640}
            height={640}
            className="object-cover"
          />
        </div>

        {/* Texto */}
        <div className="max-w-2xl flex-1 text-center md:text-left">
          <h2 className="mb-6 text-4xl font-bold text-white">A Empresa</h2>

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
            <span className="font-semibold">bebidas</span>,
            <span className="font-semibold">químicos</span>,{" "}
            <span className="font-semibold">cerâmicas</span> e{" "}
            <span className="font-semibold">utilidades</span>. Nosso foco é
            claro: <span className="font-bold">Embalamento</span>,{" "}
            <span className="font-bold">Movimentação</span> e{" "}
            <span className="font-bold">Automação</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
