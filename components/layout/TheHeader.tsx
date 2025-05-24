"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { NavLink } from "../ui/NavLink";

export default function TheHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white px-4 py-6 transition-all duration-300 sm:px-6 lg:px-8 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-center space-x-0 sm:flex-row sm:space-x-2 md:ml-14">
          <div className="flex items-center">
            <Image
              src="/svg/animated_logo.svg"
              alt="Animated Logo"
              width={150}
              height={40}
              style={{ height: "auto", width: "clamp(120px, 15vw, 300px)" }}
              priority
              unoptimized
            />
          </div>

          <div className="relative flex flex-col items-center">
            <a href="#">
              <Image
                src="/svg/brand.svg"
                alt="Evoutech"
                width={150}
                height={40}
                style={{ height: "auto", width: "clamp(120px, 15vw, 300px)" }}
                unoptimized
              />
            </a>

            {/* Rotating Text */}
            <div className="absolute bottom-[-18px] left-0 hidden w-full sm:block">
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

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 font-medium text-gray-700 lg:flex xl:gap-10">
          <NavLink href="#inicio">Início</NavLink>
          <NavLink href="#aplicacoes">Aplicações</NavLink>
          <NavLink href="#maquinas">Máquinas</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <Button
            href="#contato"
            className="mr-6 text-sm whitespace-nowrap md:text-base"
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col items-center justify-center p-2 lg:hidden"
          aria-label="Menu"
        >
          <span
            className={`mb-1.5 block h-0.5 w-6 bg-gray-800 transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          ></span>
          <span
            className={`mb-1.5 block h-0.5 w-6 bg-gray-800 transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 text-center font-medium text-gray-700">
          <NavLink href="#inicio" onClick={() => setMobileMenuOpen(false)}>
            Início
          </NavLink>
          <NavLink href="#aplicacoes" onClick={() => setMobileMenuOpen(false)}>
            Aplicações
          </NavLink>
          <NavLink href="#maquinas" onClick={() => setMobileMenuOpen(false)}>
            Máquinas
          </NavLink>
          <NavLink href="#sobre" onClick={() => setMobileMenuOpen(false)}>
            Sobre
          </NavLink>
          <NavLink href="#contato" onClick={() => setMobileMenuOpen(false)}>
            Contato
          </NavLink>

          {/* CTA Button for mobile */}
          <div className="pt-2 md:hidden">
            <Button href="#contato" className="w-full text-sm">
              Solicitar Orçamento
            </Button>
          </div>
        </nav>
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
          font-size: 16px;
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
