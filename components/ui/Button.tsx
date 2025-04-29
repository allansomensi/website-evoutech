import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function Button({ children, href = "", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`focus:ring-opacity-30 cursor-pointer rounded-full bg-blue-600 px-6 py-2.5 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none sm:px-4 sm:py-2 sm:text-base ${className}`}
    >
      {children}
    </Link>
  );
}
