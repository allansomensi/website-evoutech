import React from "react";

type BadgeType =
  | "alimenticio"
  | "pecas"
  | "automatica"
  | "semi-automatica"
  | "industrial"
  | "default";

interface BadgeProps {
  children: React.ReactNode;
  type?: BadgeType;
}

export default function Badge({ children, type = "default" }: BadgeProps) {
  const baseClasses =
    "rounded-full px-3 py-1 text-xs font-semibold select-none cursor-default ";

  let typeClasses = "";

  switch (type) {
    case "alimenticio":
      typeClasses = "bg-green-500 text-white";
      break;
    case "automatica":
      typeClasses = "bg-gray-700 text-white";
      break;
    case "semi-automatica":
      typeClasses = "bg-emerald-500 text-white";
      break;
    case "industrial":
      typeClasses = "bg-indigo-600 text-white";
      break;
    default:
      typeClasses = "bg-blue-600 text-white";
      break;
  }

  return <span className={baseClasses + typeClasses}>{children}</span>;
}
