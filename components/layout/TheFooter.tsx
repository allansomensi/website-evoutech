import Image from "next/image";

export function TheFooter() {
  return (
    <footer className="bg-zinc-900 px-4 py-8 text-zinc-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
        {/* Logo */}
        <div>
          <div className="mb-2 flex items-center justify-center space-x-2 md:justify-start">
            <Image
              src="/svg/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="brightness-0 invert"
              unoptimized
            />
            <Image
              src="/svg/brand.svg"
              alt="Evoutech"
              width={151}
              height={28}
              className="brightness-0 invert"
              unoptimized
            />
          </div>
          <p className="text-sm">Embalagem, Movimentação e Automação.</p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Contato</h3>
          <ul className="space-y-1 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:contato@evoutech.com.br"
                className="transition hover:text-zinc-300"
              >
                contato@evoutech.com.br
              </a>
            </li>
            <li>
              Telefone:{" "}
              <a
                href="tel:+5554991535354"
                className="transition hover:text-zinc-300"
              >
                (54) 99153-5354
              </a>
            </li>
          </ul>
        </div>

        {/* Localização */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Endereço</h3>
          <ul className="space-y-1 text-sm">
            <li>Rua Lázaro Giordani - Jardim Gloria</li>
            <li>Bento Gonçalves - RS, 95700-000</li>
          </ul>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="mt-8 border-t border-zinc-700 pt-4 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Evoutech. Todos os direitos reservados.
        Desenvolvido por{" "}
        <a
          href="https://allansomensi.com.br"
          className="text-zinc-500 transition hover:text-zinc-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Allan Somensi
        </a>
      </div>
    </footer>
  );
}
