import { Hero } from "@/components/sections/Hero";
import { TheHeader } from "@/components/layout/TheHeader";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <TheHeader />
      <Hero />
    </div>
  );
}
