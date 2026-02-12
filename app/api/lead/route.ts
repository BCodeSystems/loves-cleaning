import { NextResponse } from "next/server";

type LeadPayload = {
  contactName?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  message?: string;
  status?: string;
  variant?: "commercial" | "residential";
  source?: string;
  human?: boolean;
  // Honeypot fields (may or may not be present)
  website?: string;
  company?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    // Honeypot: if these are filled, treat as spam
    const websiteTrap = String(body.website || "").trim();
    const companyTrap = String(body.company || "").trim();
    if (websiteTrap || companyTrap) {
      return NextResponse.json({ ok: true });
    }

    // Human checkbox: must be true
    if (body.human !== true) {
      return NextResponse.json(
        { ok: false, error: "Human verification failed." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const contactName = String(body.contactName || "").trim();
    const businessName = String(body.businessName || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();
    const status = String(body.status || "New").trim() || "New";
    const variant = body.variant === "residential" ? "residential" : "commercial";
    const source = String(body.source || "").trim();

    if (!contactName || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const sheetRow = {
      timestamp,
      contactName,
      businessName: variant === "commercial" ? businessName : "",
      email,
      phone,
      message,
      status,
      variant,
      source,
    };

    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("LEADS_WEBHOOK_URL environment variable is not set.");
      return NextResponse.json(
        { ok: false, error: "Server configuration error." },
        { status: 500 }
      );
    }
    const resp = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sheetRow),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      console.error("Lead webhook failed:", resp.status, text);
      return NextResponse.json(
        { ok: false, error: "Failed to submit lead." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/lead error:", err);
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
export {};
