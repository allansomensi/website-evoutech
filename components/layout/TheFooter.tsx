import { Logo } from "../brand/Logo";
import { nav, site } from "@/lib/site";

export default function TheFooter() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#inicio"
              aria-label="Evoutech — voltar ao início"
              className="inline-block text-white"
            >
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {site.tagline}. Máquinas projetadas e fabricadas em Bento
              Gonçalves (RS) desde 1996.
            </p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.14em] text-white/40 uppercase">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.14em] text-white/40 uppercase">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.address.street} — {site.address.district}
                  <br />
                  {site.address.city} — {site.address.state},{" "}
                  {site.address.postalCode}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Evoutech. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://allansomensi.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              Allan Somensi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
