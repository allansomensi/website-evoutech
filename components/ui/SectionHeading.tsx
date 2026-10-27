import type { ReactNode } from "react";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: "light" | "dark";
  id?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
  tone = "light",
  id,
}: Props) {
  const dark = tone === "dark";
  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-10">
      <p
        className={`font-mono text-xs tracking-[0.14em] uppercase md:col-span-3 md:pt-3 ${
          dark ? "text-white/50" : "text-ink/50"
        }`}
      >
        <span className={dark ? "text-accent-hi" : "text-accent"}>{index}</span>
        <span className="mx-2">/</span>
        {eyebrow}
      </p>
      <div className="md:col-span-9">
        <h2
          id={id}
          className={`font-display text-[2.1rem] leading-[1.02] font-semibold text-balance sm:text-5xl lg:text-[3.5rem] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {children && (
          <div
            className={`mt-5 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg ${
              dark ? "text-white/65" : "text-ink/65"
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
