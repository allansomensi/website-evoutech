"use client";

import { useEffect, useState } from "react";
import { Logo } from "../brand/Logo";
import { ButtonLink } from "../ui/ButtonLink";
import { ArrowRight, WhatsApp } from "../ui/Icons";
import { nav, site, whatsappLink } from "@/lib/site";

export default function TheHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color] duration-300 ${
        solid
          ? "bg-ink/90 border-b border-white/10 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#inicio"
          aria-label="Evoutech — início"
          className="group -m-2 p-2"
          onClick={() => setMenuOpen(false)}
        >
          <Logo className="[&_.logo-mark]:transition-transform [&_.logo-mark]:duration-700 [&_.logo-mark]:ease-[var(--ease-machine)] group-hover:[&_.logo-mark]:rotate-180" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[0.95rem] text-white/75 transition-colors hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <ButtonLink
              href="#contato"
              variant="light"
              className="h-10 px-5 text-sm"
            >
              Solicitar orçamento
            </ButtonLink>
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="-mr-2 grid h-11 w-11 place-items-center rounded-full lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  menuOpen ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  menuOpen ? "top-[5px] -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`bg-ink fixed inset-x-0 top-16 bottom-0 transition-[opacity,visibility] duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          aria-label="Menu mobile"
          className="flex h-full flex-col justify-between overflow-y-auto px-4 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6"
        >
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display flex items-center justify-between py-4 text-[1.75rem] font-medium"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-white/40">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-3">
            <ButtonLink
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="w-full"
            >
              <WhatsApp /> Conversar no WhatsApp
            </ButtonLink>
            <ButtonLink
              href="#contato"
              onClick={() => setMenuOpen(false)}
              variant="ghost"
              className="w-full"
            >
              Solicitar orçamento <ArrowRight />
            </ButtonLink>
            <p className="pt-4 text-center text-sm text-white/45">
              {site.phone} · {site.email}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
