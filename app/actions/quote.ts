"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { quoteNeeds } from "@/lib/content";

export type QuoteState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const buckets = new Map<string, { count: number; reset: number }>();

function field(formData: FormData, key: string, max: number) {
  const raw = formData.get(key);
  if (typeof raw !== "string") return "";
  return raw.replace(/\s+/g, " ").trim().slice(0, max);
}

function rateLimit(ip: string) {
  const now = Date.now();
  const hit = buckets.get(ip);
  if (!hit || now > hit.reset) {
    buckets.set(ip, { count: 1, reset: now + 60 * 60 * 1000 });
    return true;
  }
  if (hit.count >= 5) return false;
  hit.count += 1;
  return true;
}

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  if (field(formData, "website", 200)) {
    return {
      ok: true,
      message: "Thanks — we will reply within one business day.",
    };
  }

  const name = field(formData, "name", 80);
  const company = field(formData, "company", 120);
  const email = field(formData, "email", 120);
  const mobile = field(formData, "mobile", 30);
  const details = field(formData, "details", 4000);
  const needRaw = field(formData, "need", 40);
  const need = quoteNeeds.includes(needRaw as (typeof quoteNeeds)[number])
    ? needRaw
    : "";

  if (name.length < 2) {
    return { ok: false, message: "Enter a name so we know who to reply to." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "Enter a valid work email." };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return {
      ok: false,
      message: "Too many inquiries from this connection. Try again later or email sales@gogreenph.com.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      message:
        "Email is not configured yet. Call 0929 641 4990 or write sales@gogreenph.com.",
    };
  }

  const to = process.env.QUOTE_TO || "sales@gogreenph.com";
  const from =
    process.env.RESEND_FROM || "GGPEP Website <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Quote inquiry${need ? ` — ${need}` : ""} from ${name}`,
    text: [
      `Name: ${name}`,
      `Company: ${company || "—"}`,
      `Email: ${email}`,
      `Mobile: ${mobile || "—"}`,
      `Need: ${need || "—"}`,
      "",
      details || "(no project details)",
    ].join("\n"),
  });

  if (error) {
    return {
      ok: false,
      message:
        "The inquiry did not send. Call 0929 641 4990 or write sales@gogreenph.com.",
    };
  }

  return {
    ok: true,
    message: "Thanks — the engineering team has the inquiry. Typical reply within one business day.",
  };
}
