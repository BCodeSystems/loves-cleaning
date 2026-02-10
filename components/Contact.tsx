"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
      source: SITE.domain, // useful later in Google Sheets
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
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <p className="-mt-6 mb-10 text-base text-slate-600">
        Ready to experience spotless cleaning? Contact us for a free quote.
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
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <a
                    className="mt-1 block text-sm text-slate-600"
                    href={`tel:${SITE.phone}`}
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <Mail className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <a
                    className="mt-1 block text-sm text-slate-600"
                    href={`mailto:${SITE.email}`}
                  >
                    {SITE.email}
                  </a>
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
              <div>
                <label className="text-sm font-medium text-slate-900">Name</label>
                <input
                  name="name"
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

              <div>
                <label className="text-sm font-medium text-slate-900">Phone</label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand"
                  placeholder="(optional)"
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
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>

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