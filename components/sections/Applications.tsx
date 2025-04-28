import Image from "next/image";
import { Button } from "../ui/Button";

const products = [
  {
    title: "Produção de Biscoitos",
    subtitle: "Máquinas para produção de biscoitos.",
    image: "img/products/biscoitos.png",
  },
  {
    title: "Embaladora de Doces",
    subtitle: "Máquinas para embalamento de doces.",
    image: "img/products/doces.png",
  },
  {
    title: "Produção de Massas",
    subtitle: "Máquinas para produção de massas.",
    image: "img/products/massas.png",
  },
  {
    title: "Embaladora de Peças",
    subtitle: "Máquinas para embalamento de peças diversas.",
    image: "img/products/pecas.png",
  },
];

export default function Applications() {
  return (
    <section id="aplicacoes" className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-12 text-4xl font-bold text-gray-800">Aplicações</h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-white shadow-md">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={160}
                  height={160}
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">{product.subtitle}</p>
              <div className="h-1 w-10 bg-blue-900"></div>
              <Button>Saiba mais &raquo;</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
