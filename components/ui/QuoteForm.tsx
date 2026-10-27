"use client";

import { useState, type FormEvent } from "react";
import { buttonClasses } from "./ButtonLink";
import { WhatsApp } from "./Icons";
import { site, whatsappLink } from "@/lib/site";

const interests = [
  "Biscomak P120",
  "Biscomak P200",
  "Rotuladora",
  "Flex Cod",
  "Projeto sob medida",
  "Outro / não sei ainda",
];

const field =
  "mt-2 block w-full rounded-xl border border-line bg-paper/60 px-4 py-3 text-base text-ink placeholder:text-ink/35 transition-colors focus:border-accent focus:bg-white focus:outline-none focus-visible:outline-none";
const label = "block text-sm font-medium text-ink/80";

export default function QuoteForm() {
  const [error, setError] = useState(false);

  const buildMessage = (data: FormData) => {
    const get = (k: string) => String(data.get(k) ?? "").trim();
    return [
      "Olá, Evoutech! Gostaria de um orçamento.",
      "",
      `Nome: ${get("nome")}`,
      get("empresa") && `Empresa: ${get("empresa")}`,
      `Interesse: ${get("interesse")}`,
      get("mensagem") && `\n${get("mensagem")}`,
    ]
      .filter((line) => line !== "")
      .join("\n");
  };

  const validate = (form: HTMLFormElement) => {
    const valid = form.checkValidity();
    setError(!valid);
    if (!valid) form.reportValidity();
    return valid;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    const message = buildMessage(new FormData(form));
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const sendEmail = (form: HTMLFormElement | null) => {
    if (!form || !validate(form)) return;
    const body = buildMessage(new FormData(form));
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Orçamento pelo site",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-6 shadow-[0_1px_0_rgb(11_15_20/0.04),0_24px_60px_-30px_rgb(11_15_20/0.35)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className={label}>
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            required
            autoComplete="name"
            placeholder="Seu nome"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="empresa" className={label}>
            Empresa <span className="text-ink/40 font-normal">(opcional)</span>
          </label>
          <input
            id="empresa"
            name="empresa"
            autoComplete="organization"
            placeholder="Nome da empresa"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interesse" className={label}>
            Interesse
          </label>
          <div className="relative">
            <select
              id="interesse"
              name="interesse"
              required
              defaultValue=""
              className={`${field} invalid:text-ink/35 appearance-none pr-10`}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {interests.map((item) => (
                <option key={item} value={item} className="text-ink">
                  {item}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-ink/50 pointer-events-none absolute top-1/2 right-4 mt-1 h-4 w-4 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className={label}>
            Conte sobre a sua produção{" "}
            <span className="text-ink/40 font-normal">(opcional)</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            placeholder="Ex.: produzimos 200 kg/dia de biscoitos e queremos automatizar o corte."
            className={`${field} resize-y`}
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          Preencha seu nome e escolha uma opção de interesse.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className={buttonClasses("whatsapp", "cursor-pointer")}
        >
          <WhatsApp /> Enviar pelo WhatsApp
        </button>
        <button
          type="button"
          onClick={(e) => sendEmail(e.currentTarget.form)}
          className="text-ink/70 decoration-ink/20 hover:text-ink hover:decoration-ink/60 h-12 cursor-pointer rounded-full px-4 text-sm font-semibold underline underline-offset-4 transition-colors"
        >
          Prefiro enviar por e-mail
        </button>
      </div>
      <p className="text-ink/45 mt-4 text-xs">
        A mensagem já vai pronta — é só confirmar o envio.
      </p>
    </form>
  );
}
