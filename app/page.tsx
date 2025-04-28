import Hero from "@/components/sections/Hero";
import TheHeader from "@/components/layout/TheHeader";
import Applications from "@/components/sections/Applications";
import ClientCarousel from "@/components/sections/ClientCarousel";
import TheFooter from "@/components/layout/TheFooter";
import About from "@/components/sections/About";
import CTABanner from "@/components/sections/CTABanner";
import Machines from "@/components/sections/Machines";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <TheHeader />
      <Hero />
      <Applications />
      <Machines />
      <About />
      <CTABanner />
      <ClientCarousel />
      <TheFooter />
    </div>
  );
}
