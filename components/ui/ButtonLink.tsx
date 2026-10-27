import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "light" | "ghost" | "whatsapp";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-lo",
  light: "bg-white text-ink hover:bg-paper-2",
  ghost:
    "text-current ring-1 ring-current/25 ring-inset hover:bg-current/5 hover:ring-current/50",
  whatsapp: "bg-[#1fa855] text-white hover:bg-[#188a45]",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export const buttonClasses = (variant: Variant = "primary", extra = "") =>
  `inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold whitespace-nowrap transition-colors duration-200 select-none ${variants[variant]} ${extra}`;

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <a className={buttonClasses(variant, className)} {...rest}>
      {children}
    </a>
  );
}
