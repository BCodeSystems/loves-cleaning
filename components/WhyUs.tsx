import Image from "next/image";
import Section from "@/components/Section";

const reasons = [
  "Experienced cleaning professionals",
  "Eco-friendly cleaning products",
  "Customized cleaning plans",
  "Quality assurance guarantee",
  "Competitive pricing",
  "Responsive customer support",
];

export default function WhyUs() {
  return (
    <Section id="why-us" eyebrow="Why Us" title="Why choose Loves Cleaning?">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        {/* Image (optional) */}
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:min-h-[380px]">
          {/* If you add an image later, place it at /public/images/why-us.jpg */}
          <Image
            src="/images/why-us.jpg"
            alt="Clean professional office"
            fill
            className="object-cover"
          />
        </div>

        {/* Copy + checklist */}
        <div>
          <p className="text-base leading-7 text-slate-600">
            We focus on consistency, discretion, and the details that matter in
            professional environments — so your office always feels clean,
            organized, and client-ready.
          </p>

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