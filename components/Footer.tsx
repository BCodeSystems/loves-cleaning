import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Footer Navigation */}
        <div className="mb-8 flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="/commercial"
              className="hover:text-white transition"
            >
              Commercial
            </a>
            <a
              href="/residential"
              className="hover:text-white transition"
            >
              Residential
            </a>
            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          <p className="text-sm text-slate-400">
            Built by{" "}
            <a
              href={SITE.builtByUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline underline-offset-4 decoration-white/30 hover:decoration-white"
            >
              {SITE.builtByName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}