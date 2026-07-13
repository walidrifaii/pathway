"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { consultationPageContent } from "@/features/consultation/data";
import { fieldClassName, formErrorTextClass, formLabelClass } from "@/lib/form-styles";
import { hasErrors, validateConsultationFields, type FieldErrors } from "@/lib/validation";

type ConsultationFormProps = {
  services: { slug: string; title: string }[];
};

export function ConsultationForm({ services }: ConsultationFormProps) {
  const searchParams = useSearchParams();
  const presetService = searchParams.get("service") ?? "";

  const resolvedPreset = useMemo(() => {
    if (services.some((service) => service.slug === presetService)) return presetService;
    return "";
  }, [presetService, services]);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [service, setService] = useState(resolvedPreset);

  useEffect(() => {
    setService(resolvedPreset);
  }, [resolvedPreset]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const values = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const nextErrors = validateConsultationFields(values);
    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setStatus("idle");
      return;
    }

    setStatus("loading");

    const serviceTitle =
      services.find((item) => item.slug === values.service)?.title ?? values.service;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "consultation",
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          service: serviceTitle,
          enquiry: values.message,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Could not send your request. Please try again.");
        return;
      }

      setStatus("success");
      setErrors({});
      form.reset();
      setService("");
    } catch {
      setStatus("error");
      setErrorMessage("Could not send your request. Please try again.");
    }
  }

  function clearError(field: string) {
    if (!errors[field]) return;
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#e8ecf1] bg-white p-6 shadow-[0_12px_40px_rgba(15,39,68,0.08)] sm:p-8"
      noValidate
    >
      <h2 className="font-display text-2xl font-bold text-navy sm:text-[1.75rem]">
        {consultationPageContent.formTitle}
      </h2>
      <p className="mt-2 text-base text-muted">
        Choose a service and share a short message about your situation.
      </p>

      <div className="mt-6 flex flex-col gap-5">
        <div>
          <label htmlFor="fullName" className={formLabelClass}>
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            disabled={status === "loading"}
            className={fieldClassName(Boolean(errors.fullName))}
            placeholder="Your full name"
            onChange={() => clearError("fullName")}
          />
          {errors.fullName ? <p className={formErrorTextClass}>{errors.fullName}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className={formLabelClass}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            disabled={status === "loading"}
            className={fieldClassName(Boolean(errors.email))}
            placeholder="you@example.com"
            onChange={() => clearError("email")}
          />
          {errors.email ? <p className={formErrorTextClass}>{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className={formLabelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={status === "loading"}
            className={fieldClassName(Boolean(errors.phone))}
            placeholder="+61 ..."
            onChange={() => clearError("phone")}
          />
          {errors.phone ? <p className={formErrorTextClass}>{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="service" className={formLabelClass}>
            Service
          </label>
          <select
            id="service"
            name="service"
            value={service}
            disabled={status === "loading"}
            className={fieldClassName(Boolean(errors.service))}
            onChange={(event) => {
              setService(event.target.value);
              clearError("service");
            }}
          >
            <option value="">Select a service</option>
            {services.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
          {errors.service ? <p className={formErrorTextClass}>{errors.service}</p> : null}
        </div>

        <div>
          <label htmlFor="message" className={formLabelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            disabled={status === "loading"}
            className={`${fieldClassName(Boolean(errors.message))} min-h-[140px] resize-y`}
            placeholder="Tell us about your goals, timeline, or questions..."
            onChange={() => clearError("message")}
          />
          {errors.message ? <p className={formErrorTextClass}>{errors.message}</p> : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : consultationPageContent.submitLabel}
      </button>

      {status === "success" ? (
        <p className="mt-4 text-sm text-navy/70" role="status">
          Thanks — your consultation request has been sent. We&apos;ll contact you soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
