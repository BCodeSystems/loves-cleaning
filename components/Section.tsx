import React from "react";

type SectionProps = {
  id?: string; // anchor target (services, why-us, etc.)
  title?: string; // main section heading
  eyebrow?: string; // small label above title
  children: React.ReactNode; // section content
};

export default function Section({
  id,
  title,
  eyebrow,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {(title || eyebrow) && (
          <header className="mb-10">
            {eyebrow && (
              <p className="text-sm font-semibold tracking-wide text-brand">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
  );
}