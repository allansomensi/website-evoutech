import { Button } from "@/components/ui/Button";
import { Typewriter } from "../ui/Typewriter";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay Filter */}
      <div className="absolute inset-0 bg-blue-900/50 backdrop-brightness-75"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Máquinas Para{" "}
          <Typewriter
            words={[
              "Embalar Biscoitos",
              "Aplicar Etiquetas",
              "Produzir Biscoitos",
              "Produzir Massas",
            ]}
          ></Typewriter>
        </h1>
        <Button>Faça seu Orçamento</Button>
      </div>
    </section>
  );
}
