import Image from "next/image";
import Section from "@/components/Section";

type Variant = "commercial" | "residential";

const commercialReasons = [
  "Experienced cleaning professionals",
  "Discreet, after-hours service",
  "Customized cleaning plans",
  "Quality assurance guarantee",
  "Trusted & insured team",
  "Responsive customer support",
];

const residentialReasons = [
  "Trusted, background-checked cleaners",
  "Eco-friendly products available",
  "Flexible scheduling",
  "Detail-focused deep cleans",
  "Consistent, reliable service",
  "Easy communication & support",
];

const commercialWhyCopy =
  "We focus on consistency, discretion, and the details that matter in professional environments — so your office always feels clean, organized, and client-ready.";

const residentialWhyCopy =
  "We focus on reliable service and the details that matter at home — so your space stays fresh, comfortable, and ready for everyday life.";

const commercialWhyImage = {
  src: "/modern-office-conference-room.png",
  alt: "Modern office conference room with natural light",
};

const residentialWhyImage = {
  src: "/residential-why-us.jpg",
  alt: "Bright modern kitchen with clean countertops and natural light",
};

type Props = {
  variant: Variant;
};

export default function WhyUs({ variant }: Props) {
  const reasons = variant === "commercial" ? commercialReasons : residentialReasons;
  const copy = variant === "commercial" ? commercialWhyCopy : residentialWhyCopy;
  const image = variant === "commercial" ? commercialWhyImage : residentialWhyImage;

  return (
    <Section
      id="why-us"
      eyebrow="Why Us"
      title={
        variant === "commercial"
          ? "Why businesses choose Loves Cleaning"
          : "Why homeowners choose Loves Cleaning"
      }
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        {/* Image (optional) */}
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:min-h-[380px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        {/* Copy + checklist */}
        <div>
          <p className="text-base leading-7 text-slate-600">{copy}</p>

          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand">
                  ✓
                </span>
                <span className="text-sm leading-6 text-slate-700">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}