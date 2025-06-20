"use client";

import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gray-900">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Filter */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="relative mb-6 w-full max-w-7xl overflow-hidden py-10 text-5xl leading-24 font-bold md:text-7xl">
          <span
            className="inline-block whitespace-nowrap text-shadow-2xs"
            style={{
              animation: "marquee 30s linear infinite",
            }}
          >
            Embalamento     Movimentação     Automação     Embalamento    
            Movimentação     Automação     Embalamento     Movimentação    
            Automação    
          </span>
        </h1>

        <Button
          href="#contato"
          className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Faça seu Orçamento
        </Button>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </section>
  );
}
