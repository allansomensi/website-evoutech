import Image from "next/image";
import QuoteForm from "../ui/QuoteForm";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowUpRight, Mail, Phone, Pin, WhatsApp } from "../ui/Icons";
import { site, whatsappLink } from "@/lib/site";

const channels = [
  {
    icon: WhatsApp,
    label: "WhatsApp",
    value: site.phone,
    href: whatsappLink(),
    external: true,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Pin,
    label: "Endereço",
    value: `${site.address.street} — ${site.address.district}, ${site.address.city} (${site.address.state})`,
    href: site.mapsUrl,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="border-line bg-paper-2/50 border-t py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Contato"
          id="contato-title"
          title="Vamos conversar sobre a sua produção."
        >
          Conte o que você produz e o volume que precisa atingir. Indicamos o
          equipamento certo — ou desenvolvemos um.
        </SectionHeading>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ul className="divide-line border-line divide-y border-y">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="text-ink group-hover:bg-accent grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white transition-colors group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="text-ink/45 block font-mono text-[11px] tracking-[0.14em] uppercase">
                        {label}
                      </span>
                      <span className="text-ink mt-0.5 block font-medium break-words">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight className="text-ink/30 group-hover:text-accent h-4 w-4 shrink-0 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 hidden items-center gap-5 rounded-2xl bg-white p-5 lg:flex">
              <Image
                src="/svg/qr_whatsapp.svg"
                alt="QR Code para conversar com a Evoutech no WhatsApp"
                width={104}
                height={104}
                unoptimized
                className="h-26 w-26 shrink-0"
              />
              <p className="text-ink/60 text-sm leading-relaxed">
                <span className="text-ink block font-semibold">
                  Está no computador?
                </span>
                Aponte a câmera do celular para o código e fale direto com a
                gente pelo WhatsApp.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
