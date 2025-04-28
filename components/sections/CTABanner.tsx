import { Button } from "../ui/Button";

export default function CTABanner() {
  return (
    <div className="relative h-[400px] w-full bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500">
      {/* Overlay para aumentar o contraste */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Conteúdo centralizado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold text-shadow-md sm:text-4xl">
          Consulte-nos para Projetos de Máquinas de Embalagem Personalizada
        </h1>
        <p className="mb-6 text-lg opacity-80 sm:text-xl">
          Soluções de embalagem sob medida, com inovação e qualidade para
          atender às suas necessidades específicas.
        </p>
        <Button className="transform rounded-full bg-sky-600 px-8 py-4 font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-sky-700 hover:ring-2 hover:ring-sky-600">
          Entre em Contato
        </Button>
      </div>
    </div>
  );
}
