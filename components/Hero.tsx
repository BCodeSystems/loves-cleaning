import Image from "next/image";
import { SITE } from "@/lib/constants";
import type { LandingVariant } from "@/lib/landingVariants";

type Props = {
  variant: LandingVariant;
};

export default function Hero({ variant }: Props) {
  const { hero } = variant;

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