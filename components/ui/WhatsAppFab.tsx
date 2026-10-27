"use client";

import { useEffect, useState } from "react";
import { WhatsApp } from "./Icons";
import { whatsappLink } from "@/lib/site";

/** Atalho flutuante para o WhatsApp no celular, exibido depois do hero. */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const contact = document.getElementById("contato");
      const atContact =
        !!contact && contact.getBoundingClientRect().top < window.innerHeight;
      setVisible(pastHero && !atContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1fa855] text-white shadow-[0_10px_30px_-8px_rgb(0_0_0/0.45)] transition-[opacity,translate] duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}
