import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { residentialVariant } from "@/lib/landingVariants";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ResidentialPage() {
  return (
    <>
      <Header />
      <Hero variant={residentialVariant} />
      <Services variant="residential" />
      <WhyUs variant="residential" />
      <Contact variant="residential" />
      <Footer />
    </>
  );
}