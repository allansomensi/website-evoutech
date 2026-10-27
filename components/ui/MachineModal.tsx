import Image from "next/image";
import type { Ref } from "react";
import { buttonClasses } from "./ButtonLink";
import { Check, Close, WhatsApp } from "./Icons";
import type { Machine } from "@/lib/machines";
import { whatsappLink } from "@/lib/site";

type Props = {
  machine: Machine | null;
  ref: Ref<HTMLDialogElement>;
};

export default function MachineModal({ machine, ref }: Props) {
  return (
    <dialog
      ref={ref}
      aria-labelledby="machine-title"
      className="machine-dialog text-ink m-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-4xl overflow-hidden rounded-3xl bg-white p-0 shadow-2xl"
      onClick={(e) => {
        // Clique fora do conteúdo (no backdrop) fecha o modal
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      {machine && (
        <div className="grid max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain md:grid-cols-2">
          <div className="relative aspect-[4/3] bg-[#e4e4e4] md:aspect-auto md:min-h-[520px]">
            <Image
              src={machine.image}
              alt={machine.name}
              fill
              sizes="(min-width: 768px) 450px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col p-6 sm:p-8 md:p-10">
            <p className="text-accent font-mono text-[11px] tracking-[0.14em] uppercase">
              {machine.category}
            </p>
            <h3
              id="machine-title"
              className="font-display mt-2 text-4xl font-semibold"
            >
              {machine.name}
            </h3>
            <p className="text-ink/65 mt-4 leading-relaxed">
              {machine.description}
            </p>

            <ul className="divide-line border-line mt-6 divide-y border-y">
              {machine.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 py-3">
                  <Check className="text-accent h-4 w-4 shrink-0" />
                  <span className="text-[0.95rem]">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <a
                href={whatsappLink(
                  `Olá, Evoutech! Gostaria de um orçamento da ${machine.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses("whatsapp", "w-full")}
              >
                <WhatsApp /> Pedir orçamento da {machine.name}
              </a>
            </div>
          </div>

          <form method="dialog" className="absolute top-3 right-3">
            <button
              className="text-ink hover:bg-paper-2 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-colors"
              aria-label="Fechar"
            >
              <Close />
            </button>
          </form>
        </div>
      )}
    </dialog>
  );
}
