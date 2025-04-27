"use client";
import Image from "next/image";
import { Button } from "../ui/Button";
import { NavLink } from "../ui/NavLink";

export function TheHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <Image
            src="/svg/animated_logo.svg"
            alt="Animated Logo"
            width={0}
            height={0}
            style={{ height: "auto", width: "200px" }}
            unoptimized
          />
        </div>
        <div className="relative flex flex-col items-center">
          <a href="#inicio">
            <Image
              src="/svg/brand.svg"
              alt="Evoutech"
              width={0}
              height={0}
              style={{ height: "auto", width: "200px" }}
              unoptimized
            />
          </a>
          {/* Rotating Text */}
          <div className="absolute bottom-[-20px] left-0 w-full">
            <div className="marquee-container">
              <div className="marquee-content">
                <span>Embalamento, Movimentação e Automação</span>
                <span>Embalamento, Movimentação e Automação</span>
                <span>Embalamento, Movimentação e Automação</span>
                <span>Embalamento, Movimentação e Automação</span>
                <span>Embalamento, Movimentação e Automação</span>
                <span>Embalamento, Movimentação e Automação</span>
                <span>Embalamento, Movimentação e Automação</span>
                <span>Embalamento, Movimentação e Automação</span>
              </div>
            </div>
          </div>
        </div>
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
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }

        .marquee-content span {
          padding-right: 30px;
          font-size: 14px;
          font-weight: bold;
          color: #333;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </header>
  );
}
