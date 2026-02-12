export type LandingVariant = {
    key: "commercial" | "residential";
    navLabel: string;
    hero: {
      eyebrow: string;
      headline: string;
      subhead: string;
      imageSrc: string;
      imageAlt: string;
      overlayClassName?: string; // optional tweaks
    };
  };
  
  export const commercialVariant: LandingVariant = {
    key: "commercial",
    navLabel: "Commercial",
    hero: {
      eyebrow: "Commercial Office Cleaning",
      headline: "Professional cleaning for your business.",
      subhead:
        "Reliable, consistent cleaning for offices like law firms, medical suites, and professional buildings — so your space stays spotless and client-ready.",
      imageSrc: "/commercial-office-cleaning-hero-2400.jpg",
      imageAlt:
        "Modern corporate office lobby with glass walls and clean tiled floors",
      overlayClassName: "bg-black/15",
    },
  };
  
  export const residentialVariant: LandingVariant = {
    key: "residential",
    navLabel: "Residential",
    hero: {
      eyebrow: "Residential Cleaning",
      headline: "A spotless home — without the stress.",
      subhead:
        "Recurring or deep cleans for apartments and homes — reliable service that keeps your space fresh, tidy, and guest-ready.",
      imageSrc: "/residential-cleaning-hero.jpg",
      imageAlt: "Bright, clean modern home interior with natural light",
      overlayClassName: "bg-black/35",
    },
  };