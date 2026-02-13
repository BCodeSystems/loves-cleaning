"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";
import type { LandingVariant } from "@/lib/landingVariants";

type Props = {
  variant: LandingVariant;
};

export default function Hero({ variant }: Props) {
  const { hero } = variant;
  const pathname = usePathname();
  const isCommercial = pathname === "/commercial";
  const isResidential = pathname === "/residential";

  return (
    <section id="top" className="bg-white">
      <div className="relative h-[75vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className={`absolute inset-0 ${hero.overlayClassName ?? "bg-black/40"}`} />

        {/* Commercial / Residential Toggle */}
        <div className="absolute right-6 top-6 z-20">
          <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm p-1 text-sm shadow-md">
            <a
              href="/commercial"
              aria-current={isCommercial ? "page" : undefined}
              className={`rounded-full px-4 py-2 font-medium transition ${
                isCommercial
                  ? "bg-brand text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Commercial
            </a>
            <a
              href="/residential"
              aria-current={isResidential ? "page" : undefined}
              className={`rounded-full px-4 py-2 font-medium transition ${
                isResidential
                  ? "bg-brand text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Residential
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold tracking-wide text-white/80">
              {hero.eyebrow}
            </p>

            <h1 className="mt-3 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">{hero.subhead}</p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
              >
                {SITE.primaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}