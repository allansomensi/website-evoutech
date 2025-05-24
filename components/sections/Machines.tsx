"use client";

import Image from "next/image";
import React, { useState } from "react";
import MachineModal from "../ui/MachineModal";

type Machine = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const machines = [
  {
    id: 1,
    name: "BISCOMAK P120",
    description:
      "Ideal para produção de biscoitos amanteigados tipo colonial. Extrusão automática, corte programado e transporte dos biscoitos para as bandejas, garantindo agilidade e padronização.",
    image: "/img/machines/biscomak_p120.jpg",
  },
  {
    id: 2,
    name: "BISCOMAK P200",
    description:
      "Equipamento de alta produção para massas e biscoitos por extrusão, com dois cilindros extrusores robustos. Largura útil de 300 a 1.500mm, ideal para fornos contínuos e produção em grande escala.",
    image: "/img/machines/biscomak_p200.jpg",
  },
  {
    id: 3,
    name: "ROTULADORA",
    description:
      "Máquina rotuladora semi-automática, ideal para aplicação de etiquetas e rótulos auto-adesivos, oferecendo uma solução econômica e versátil para aumentar a produtividade.",
    image: "/img/machines/rotuladora.jpg",
  },
  {
    id: 4,
    name: "FLEX COD",
    description:
      "Datador eletrônico para máquinas com filme contínuo, projetado para altas taxas de produção (250 ciclos/min). Marca a cada meia ou uma volta, com dígitos em latão no sistema Flex Code.",
    image: "/img/machines/flex_cod.jpg",
  },
];

export default function Machines() {
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (machine: Machine) => {
    setSelectedMachine(machine);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMachine(null), 300);
  };

  return (
    <div id="maquinas" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-12 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          Nossas Máquinas
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {machines.map((machine) => (
            <div
              key={machine.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => openModal(machine)}
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

      <MachineModal
        machine={selectedMachine}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
