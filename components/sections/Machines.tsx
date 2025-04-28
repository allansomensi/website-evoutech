"use client";

import Image from "next/image";
import React from "react";
import Badge from "../ui/Badge";

const machines = [
  {
    id: 1,
    name: "BISCOMAK P120",
    description:
      "Ideal para produção de biscoitos amanteigados tipo colonial. Extrusão automática, corte programado e transporte dos biscoitos para as bandejas, garantindo agilidade e padronização.",
    image: "/img/machines/biscomak_p120.jpg",
    tags: ["Automática", "Alimentício"],
  },
  {
    id: 2,
    name: "BISCOMAK P200",
    description:
      "Equipamento de alta produção para massas e biscoitos por extrusão, com dois cilindros extrusores robustos. Largura útil de 300 a 1.500mm, ideal para fornos contínuos e produção em grande escala.",
    image: "/img/machines/biscomak_p200.jpg",
    tags: ["Alimentício", "Industrial"],
  },
  {
    id: 3,
    name: "ROTULADORA",
    description:
      "Máquina rotuladora semi-automática, ideal para aplicação de etiquetas e rótulos auto-adesivos, oferecendo uma solução econômica e versátil para aumentar a produtividade.",
    image: "/img/machines/rotuladora.jpg",
    tags: ["Semi-Automática", "Industrial"],
  },
  {
    id: 4,
    name: "FLEX COD",
    description:
      "Datador eletrônico para máquinas com filme contínuo, projetado para altas taxas de produção (250 ciclos/min). Marca a cada meia ou uma volta, com dígitos em latão no sistema Flex Code.",
    image: "/img/machines/flex_cod.jpg",
    tags: ["Automática", "Industrial"],
  },
];

export default function Machines() {
  return (
    <div
      id="maquinas"
      className="bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-12 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          Nossas Máquinas
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {machines.map((machine) => (
            <div
              key={machine.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  width={0}
                  height={0}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 flex flex-wrap gap-2">
                  {machine.tags.map((tag) => (
                    <Badge
                      key={tag}
                      type={
                        tag.toLowerCase() === "alimentício"
                          ? "alimenticio"
                          : tag.toLowerCase() === "peças metálicas"
                            ? "pecas"
                            : tag.toLowerCase() === "semi-automática"
                              ? "semi-automatica"
                              : tag.toLowerCase() === "automática"
                                ? "automatica"
                                : tag.toLowerCase() === "industrial"
                                  ? "industrial"
                                  : "default"
                      }
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {machine.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {machine.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
