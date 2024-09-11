import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center p-24">
      <Hero />
      <Benefits />
      <Contact />
      <FAQ />
    </main>
  );
}
