import Articles from "@/components/articles";
import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import GoodHands from "@/components/good-hands";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Trust from "@/components/trust";


export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center p-24">
      <Hero />
      <Trust />
      <Benefits />
      <Features />
      <GoodHands />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
