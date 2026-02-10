import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        {/* Left: headline + copy + CTAs */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand">
            Commercial Office Cleaning
          </p>

          <h1 className="mt-3 text-4xl tracking-tight text-slate-900 sm:text-5xl">
            Professional cleaning for your business.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Reliable, consistent cleaning for offices like law firms, medical
            suites, and professional buildings — so your space stays spotless
            and client-ready.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm bg-brand"
            >
              {SITE.primaryCta}
            </a>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:min-h-[420px]">
          <Image
            src="/images/hero.jpg" // put hero image here: public/images/hero.jpg
            alt="Clean modern office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}