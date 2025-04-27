import Image from "next/image";
import { Button } from "../ui/Button";
import { NavLink } from "../ui/NavLink";

export function TheHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-4 shadow-sm">
      {/* Logo */}
      <div className="ml-10 flex items-center space-x-2">
        <Image
          src="/svg/animated_logo.svg"
          alt="Animated Logo"
          width={150}
          height={51}
          unoptimized
        />
        <Image
          src="/svg/brand.svg"
          alt="Evoutech"
          width={151}
          height={28}
          unoptimized
        />
      </div>

      {/* Links */}
      <nav className="hidden gap-15 font-medium text-gray-700 md:flex">
        <NavLink href="#inicio">Início</NavLink>
        <NavLink href="#aplicacoes">Aplicações</NavLink>
        <NavLink href="#maquinas">Máquinas</NavLink>
        <NavLink href="#empresa">A Empresa</NavLink>
        <NavLink href="#contato">Contato</NavLink>
      </nav>

      <div className="ml-6">
        <Button>Solicitar Orçamento</Button>
      </div>
    </header>
  );
}
