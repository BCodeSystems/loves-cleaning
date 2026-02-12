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

    const webhookUrl = "https://script.google.com/macros/s/AKfycbww-CisNKFfcbPIwJATbdw_Ubf97vsoWODTtThaJiAq2h_DAtJLgc47IA4GzXLQlpuqHg/exec";

    if (webhookUrl) {
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
    }

    // If no webhook configured yet, log to server so the form still works end-to-end.
    console.log("Lead received (no webhook configured):", sheetRow);

    return NextResponse.json({ ok: true, warning: "LEADS_WEBHOOK_URL not set" });
  } catch (err) {
    console.error("/api/lead error:", err);
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}