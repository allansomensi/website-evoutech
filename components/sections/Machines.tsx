"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import MachineModal from "../ui/MachineModal";
import { SectionHeading } from "../ui/SectionHeading";
import { Plus } from "../ui/Icons";
import { machines, type Machine } from "@/lib/machines";

export default function Machines() {
  const [selected, setSelected] = useState<Machine | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = (machine: Machine) => {
    setSelected(machine);
    dialogRef.current?.showModal();
  };

  return (
    <section
      id="maquinas"
      aria-labelledby="maquinas-title"
      className="border-line border-t bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Máquinas"
          id="maquinas-title"
          title="Linha própria, projetada e fabricada aqui."
        >
          Equipamentos robustos, de manutenção simples, para quem precisa
          produzir mais com padrão — sem depender de importação.
        </SectionHeading>

        <ul className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-y-10 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-20 lg:grid-cols-4">
          {machines.map((machine, i) => (
            <li
              key={machine.slug}
              className="w-[80%] shrink-0 snap-start sm:w-auto"
            >
              <button
                type="button"
                onClick={() => open(machine)}
                aria-haspopup="dialog"
                className="group block w-full cursor-pointer text-left"
              >
                <div className="relative aspect-[12/13] overflow-hidden rounded-2xl bg-[#e4e4e4]">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-machine)] group-hover:scale-[1.04]"
                  />
                  <span className="text-ink/70 absolute top-4 left-4 rounded-full bg-white/85 px-2.5 py-1 font-mono text-[11px] backdrop-blur">
                    0{i + 1}
                  </span>
                  <span className="bg-ink group-hover:bg-accent absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-full text-white transition-colors duration-200">
                    <Plus className="h-5 w-5" />
                  </span>
                </div>
                <p className="text-accent mt-5 font-mono text-[11px] tracking-[0.14em] uppercase">
                  {machine.category}
                </p>
                <h3 className="font-display mt-1.5 text-2xl font-semibold">
                  {machine.name}
                </h3>
                <p className="text-ink/60 mt-1.5 leading-relaxed">
                  {machine.summary}
                </p>
                <span className="text-ink decoration-ink/20 group-hover:decoration-accent mt-3 inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4 transition-colors">
                  Ver detalhes
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="text-ink/40 mt-4 font-mono text-[11px] tracking-[0.14em] uppercase sm:hidden">
          Deslize para ver todas →
        </p>
      </div>

      <MachineModal ref={dialogRef} machine={selected} />
    </section>
  );
}
