import Image from "next/image";
import React, { useEffect } from "react";

interface Machine {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface MachineModalProps {
  machine: Machine | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MachineModal({
  machine,
  isOpen,
  onClose,
}: MachineModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !machine) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/30 p-4 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl scale-100 transform overflow-y-auto rounded-2xl bg-white opacity-100 shadow-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 rounded-full bg-gray-100 p-2 text-gray-600 hover:cursor-pointer hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="sm:w-1/2">
            <Image
              src={machine.image}
              alt={machine.name}
              width={0}
              height={0}
              className="h-64 w-full object-cover sm:h-full sm:rounded-l-2xl"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          {/* Details */}
          <div className="p-6 sm:w-1/2">
            <h3
              id="modal-title"
              className="text-2xl font-bold text-gray-900 sm:text-3xl"
            >
              {machine.name}
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              {machine.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
