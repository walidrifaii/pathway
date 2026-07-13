import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactInfo } from "@/constants/contact";
import { config } from "@/constants/config";

type ContactBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  enquiry?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const enquiry = body.enquiry?.trim() ?? "";

    if (!fullName || !email || !enquiry) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and enquiry." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const smtpHost = process.env.MAIL_HOST || process.env.SMTP_HOST;
    const smtpPort = Number(process.env.MAIL_PORT || process.env.SMTP_PORT || "587");
    const smtpUser = process.env.MAIL_USERNAME || process.env.SMTP_USER;
    const smtpPass = process.env.MAIL_PASSWORD || process.env.SMTP_PASS;
    const encryption = (process.env.MAIL_ENCRYPTION || "tls").toLowerCase();
    const fromAddress =
      process.env.MAIL_FROM_ADDRESS || process.env.CONTACT_FROM_EMAIL || smtpUser || "";
    const fromName = process.env.MAIL_FROM_NAME || config.appName;
    const toEmail = process.env.CONTACT_TO_EMAIL || contactInfo.email || fromAddress;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("Mail env vars missing (MAIL_HOST / MAIL_USERNAME / MAIL_PASSWORD)");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      // 465 = implicit SSL; 587 usually uses STARTTLS
      secure: encryption === "ssl" && smtpPort === 465,
      requireTLS: encryption === "tls" || (encryption === "ssl" && smtpPort === 587),
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Enquiry:",
        enquiry,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Enquiry:</strong></p>
        <p>${escapeHtml(enquiry).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);

    const message =
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "EAUTH"
        ? "Email login failed. Check MAIL_USERNAME and MAIL_PASSWORD."
        : "Could not send your message. Please try again.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
