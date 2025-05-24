import Hero from "@/components/sections/Hero";
import TheHeader from "@/components/layout/TheHeader";
import Applications from "@/components/sections/Applications";
import TheFooter from "@/components/layout/TheFooter";
import About from "@/components/sections/About";
import CTABanner from "@/components/sections/CTABanner";
import Machines from "@/components/sections/Machines";
import SpecialMachines from "@/components/sections/SpecialMachines";
import Contact from "@/components/sections/Contact";
import Clients from "@/components/sections/Clients";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <TheHeader />
      <Hero />
      <Applications />
      <Machines />
      <CTABanner />
      <SpecialMachines />
      <About />
      <Contact />
      <Clients />
      <TheFooter />
    </div>
  );
}
