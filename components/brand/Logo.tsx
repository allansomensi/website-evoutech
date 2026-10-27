import { LOGO_PATH, WORDMARK_PATH } from "./paths";

type Props = { className?: string };

export function LogoMark({ className }: Props) {
  return (
    <svg
      viewBox="6 18 263 263"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={LOGO_PATH} />
    </svg>
  );
}

export function Wordmark({ className }: Props) {
  return (
    <svg
      viewBox="11 7 742 129"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={WORDMARK_PATH} />
    </svg>
  );
}

export function Logo({ className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="logo-mark h-8 w-8 shrink-0" />
      <Wordmark className="h-[1.15rem] w-auto" />
      <span className="sr-only">Evoutech</span>
    </span>
  );
}
