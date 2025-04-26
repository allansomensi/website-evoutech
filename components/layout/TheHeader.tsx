import Image from "next/image";
import { Button } from "../ui/Button";
import { NavLink } from "../ui/NavLink";

export function TheHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} unoptimized />
        <Image
          src="/brand.svg"
          alt="Evoutech"
          width={151}
          height={28}
          unoptimized
        />
      </div>

      {/* Links */}
      <nav className="hidden space-x-10 text-base font-medium text-gray-700 md:flex">
        <NavLink href="#inicio">Início</NavLink>
        <NavLink href="#maquinas">Máquinas</NavLink>
        <NavLink href="#aplicacoes">Aplicações</NavLink>
        <NavLink href="#empresa">A Empresa</NavLink>
        <NavLink href="#contato">Contato</NavLink>
      </nav>

      <div className="ml-6">
        <Button>Solicitar Orçamento</Button>
      </div>
    </header>
  );
}
