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

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || "587");

    if (!smtpUser || !smtpPass) {
      console.error("SMTP_USER or SMTP_PASS is not set");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || contactInfo.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${config.appName}" <${fromEmail}>`,
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
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Enquiry:</strong></p>
        <p>${enquiry.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
