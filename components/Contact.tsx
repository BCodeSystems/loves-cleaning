"use client";

import { useEffect, useMemo, useState } from "react";
import Section from "@/components/Section";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

type Variant = "commercial" | "residential";

type Props = {
  variant: Variant;
};

export default function Contact({ variant }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Bot-resistance: avoid rendering contact details in initial HTML.
  const [mounted, setMounted] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Build contact details client-side (reduces basic scraping).
  const phoneDisplay = useMemo(() => String(SITE.phone || "").trim(), []);
  const phoneHref = useMemo(() => {
    const digits = phoneDisplay.replace(/[^0-9]/g, "");
    return digits ? `tel:${digits}` : "#";
  }, [phoneDisplay]);

  const emailDisplay = useMemo(() => String(SITE.email || "").trim(), []);
  const emailHref = useMemo(() => (emailDisplay ? `mailto:${emailDisplay}` : "#"), [emailDisplay]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot (spam trap): bots often fill hidden fields
    const websiteTrap = String(data.get("website") || "").trim();
    if (websiteTrap) {
      // Pretend success (quietly drop spam)
      setStatus("success");
      form.reset();
      return;
    }

    // Simple human verification checkbox
    const isHuman = data.get("human") === "on";
    if (!isHuman) {
      setStatus("error");
      setError("Please confirm you’re human by checking the box.");
      return;
    }

    const payload = {
      // Timestamp will be added server-side in the /api/lead route
      contactName: String(data.get("contactName") || "").trim(),
      businessName: String(data.get("businessName") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
      status: "New", // default lead status for the Sheet
      variant,
      source: SITE.domain,
      human: true,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Failed to submit.");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        variant === "commercial" ? "Get a tailored cleaning plan for your business" : "Come Home to a Cleaner Space"
      }
    >
      <p className="-mt-6 mb-10 text-base text-slate-600">
        {variant === "commercial"
          ? "Tell us about your office and preferred schedule — we’ll follow up quickly."
          : "Tell us about your home and what you need cleaned — we’ll follow up quickly."}
      </p>

      <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: contact info */}
          <div className="pt-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <Phone className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Call</p>
                  {mounted && showPhone ? (
                    <a
                      className="mt-1 block text-sm text-slate-600"
                      href={phoneHref}
                    >
                      {phoneDisplay}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowPhone(true)}
                      className="mt-1 inline-flex text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
                    >
                      Show phone number
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <Mail className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  {mounted && showEmail ? (
                    <a
                      className="mt-1 block text-sm text-slate-600"
                      href={emailHref}
                    >
                      {emailDisplay}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowEmail(true)}
                      className="mt-1 inline-flex text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
                    >
                      Show email address
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <MapPin className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Service Area</p>
                  <p className="mt-1 text-sm text-slate-600">{SITE.serviceArea}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
          >
            <div className="grid gap-4">
              {/* Honeypot field (hidden). Real users won't see this. */}
              <div className="hidden">
                <label className="text-sm font-medium text-slate-900">
                  Website
                </label>
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-900">Name</label>
                <input
                  name="contactName"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-900">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder="you@email.com"
                />
              </div>

              {variant === "commercial" && (
                <div>
                  <label className="text-sm font-medium text-slate-900">
                    Business Name
                  </label>
                  <input
                    name="businessName"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand"
                    placeholder="Company / office name"
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-slate-900">Phone</label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder={variant === "commercial" ? "Required" : "Optional"}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-900">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder={
                    variant === "commercial"
                      ? "Square footage, number of restrooms, frequency, preferred hours..."
                      : "Home size, bedrooms/bathrooms, deep clean vs recurring, any priorities..."
                  }
                />
              </div>

              <label className="mt-2 flex items-start gap-3 text-sm text-slate-700">
                <input
                  name="human"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                />
                <span>I’m human (check to verify)</span>
              </label>

              <button
                disabled={status === "submitting"}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-brand">
                  Sent — we’ll get back to you shortly.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-red-600">{error}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}