"use client";

import { useState, type FormEvent } from "react";
import { contactPageContent } from "@/features/contact/data";

const fieldClass =
  "w-full rounded-md border border-[#d8dde5] bg-white px-4 py-3 text-base text-navy placeholder:text-[#9aa3b2] outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/25";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#e8ecf1] bg-white p-6 shadow-[0_12px_40px_rgba(15,39,68,0.08)] sm:p-8"
      noValidate
    >
      <h2 className="font-display text-2xl font-bold text-navy sm:text-[1.75rem]">
        {contactPageContent.formTitle}
      </h2>

      <div className="mt-6 flex flex-col gap-4">
        <label className="sr-only" htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Full Name"
          className={fieldClass}
          autoComplete="name"
        />

        <label className="sr-only" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className={fieldClass}
          autoComplete="email"
        />

        <label className="sr-only" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className={fieldClass}
          autoComplete="tel"
        />

        <label className="sr-only" htmlFor="enquiry">
          Your Enquiry
        </label>
        <textarea
          id="enquiry"
          name="enquiry"
          required
          rows={5}
          placeholder="Your Enquiry"
          className={`${fieldClass} min-h-[140px] resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gold-hover"
      >
        {contactPageContent.submitLabel}
      </button>

      {submitted ? (
        <p className="mt-4 text-sm text-navy/70" role="status">
          Thanks — your message has been received. We&apos;ll be in touch soon.
        </p>
      ) : null}
    </form>
  );
}
