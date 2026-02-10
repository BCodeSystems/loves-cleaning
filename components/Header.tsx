import Image from "next/image";
import { SITE } from "@/lib/constants";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-start px-6 py-4 lg:px-8">
        {/* Logo + name */}
        <a href="#top" className="flex items-center gap-3">
          <div className="relative h-[88px] w-[88px]">
            <Image
              src={SITE.logo}
              alt={`${SITE.name} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-normal tracking-tight text-slate-900">
            {SITE.name}
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="ml-auto hidden items-center gap-12 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}