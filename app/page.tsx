import { Hero } from "@/components/sections/Hero";
import { TheHeader } from "@/components/layout/TheHeader";
import { Applications } from "@/components/sections/Applications";
import ClientCarousel from "@/components/sections/ClientCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <TheHeader />
      <Hero />
      <Applications />
      <ClientCarousel />
    </div>
  );
}
