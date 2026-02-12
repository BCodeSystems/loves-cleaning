import Section from "@/components/Section";
import { Briefcase, Building2, Clock, ShieldCheck } from "lucide-react";

type Variant = "commercial" | "residential";

const commercialServices = [
  {
    title: "Office Cleaning",
    description:
      "Routine cleaning for offices including desks, floors, restrooms, and common areas.",
    icon: Briefcase,
  },
  {
    title: "Corporate Buildings",
    description:
      "Comprehensive cleaning for professional buildings and multi-suite offices.",
    icon: Building2,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Daily, weekly, or custom schedules designed around your business hours.",
    icon: Clock,
  },
  {
    title: "Trusted & Insured",
    description:
      "Reliable, insured cleaning professionals you can trust in your workspace.",
    icon: ShieldCheck,
  },
];

const residentialServices = [
  {
    title: "Recurring Home Cleaning",
    description:
      "Weekly, bi-weekly, or monthly cleaning to keep your home consistently fresh and tidy.",
    icon: Briefcase,
  },
  {
    title: "Deep Cleaning",
    description:
      "Detailed top-to-bottom cleaning for kitchens, bathrooms, and high-traffic areas.",
    icon: Building2,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Convenient scheduling options that work around your family’s routine.",
    icon: Clock,
  },
  {
    title: "Trusted & Insured",
    description:
      "Background-checked, insured professionals you can trust in your home.",
    icon: ShieldCheck,
  },
];

type Props = {
  variant: Variant;
};

export default function Services({ variant }: Props) {
  const services = variant === "commercial" ? commercialServices : residentialServices;

  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title={
        variant === "commercial"
          ? "Tailored cleaning solutions for offices and corporate environments"
          : "Professional cleaning services tailored for modern homes"
      }
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                <Icon className="h-6 w-6 text-brand" />
              </div>

              <h3 className="text-base font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}