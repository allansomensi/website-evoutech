import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
import Hero from "@/components/sections/Hero";
import Applications from "@/components/sections/Applications";
import Machines from "@/components/sections/Machines";
import CustomProjects from "@/components/sections/CustomProjects";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export default function Home() {
  return (
    <>
      <TheHeader />
      <main id="conteudo">
        <Hero />
        <Applications />
        <Machines />
        <CustomProjects />
        <About />
        <Clients />
        <Contact />
      </main>
      <TheFooter />
      <WhatsAppFab />
    </>
  );
}
