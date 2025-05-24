import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Produção de Biscoitos",
    image: "img/products/biscoitos.png",
    link: "#",
  },
  {
    title: "Embaladora de Doces",
    image: "img/products/doces.png",
    link: "#",
  },
  {
    title: "Produção de Massas",
    image: "img/products/massas.png",
    link: "#",
  },
  {
    title: "Embaladora de Peças",
    image: "img/products/pecas.png",
    link: "#",
  },
];

export default function Applications() {
  return (
    <section id="aplicacoes" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-12 text-3xl font-extrabold text-gray-800 sm:text-4xl lg:text-5xl">
          Aplicações
        </h2>

        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.link}
              className="group relative h-40 w-40 overflow-hidden rounded-full bg-white shadow-md sm:h-44 sm:w-44 md:h-48 md:w-48"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="px-2 text-center text-base font-semibold text-white sm:text-lg">
                  {product.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
