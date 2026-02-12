import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { commercialVariant } from "@/lib/landingVariants";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function CommercialPage() {
  return (
    <>
      <Header/>
      <Hero variant={commercialVariant} />
      <Services variant="commercial" />
      <WhyUs variant="commercial" />
      <Contact variant="commercial" />
      <Footer />
    </>
  );
}