"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { fieldClassName, formErrorTextClass, formLabelClass } from "@/lib/form-styles";
import {
  hasErrors,
  validateContactFields,
  type FieldErrors,
  type ValidationMessages,
} from "@/lib/validation";

export function ContactForm() {
  const t = useTranslations("contact");
  const tValidation = useTranslations("validation");
  const tCommon = useTranslations("common");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validationMessages(): ValidationMessages {
    return {
      fullNameRequired: tValidation("fullNameRequired"),
      fullNameShort: tValidation("fullNameShort"),
      emailRequired: tValidation("emailRequired"),
      emailInvalid: tValidation("emailInvalid"),
      phoneRequired: tValidation("phoneRequired"),
      phoneInvalid: tValidation("phoneInvalid"),
      serviceRequired: tValidation("serviceRequired"),
      messageRequired: tValidation("messageRequired"),
      messageShort: tValidation("messageShort"),
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const values = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      enquiry: String(formData.get("enquiry") ?? ""),
    };

    const nextErrors = validateContactFields(values, validationMessages());
    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setStatus("idle");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          enquiry: values.enquiry,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || tValidation("sendFailed"));
        return;
      }

      setStatus("success");
      setErrors({});
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(tValidation("sendFailed"));
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
      <h2 className="font-display text-2xl font-bold text-navy sm:text-[1.75rem]">{t("formTitle")}</h2>

      <div className="mt-6 flex flex-col gap-5">
        <div>
          <label htmlFor="fullName" className={formLabelClass}>
            {t("fullName")}
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            disabled={status === "loading"}
            className={fieldClassName(Boolean(errors.fullName))}
            placeholder={t("fullName")}
            onChange={() => clearError("fullName")}
          />
          {errors.fullName ? <p className={formErrorTextClass}>{errors.fullName}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className={formLabelClass}>
            {t("emailAddress")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            disabled={status === "loading"}
            className={fieldClassName(Boolean(errors.email))}
            placeholder={t("emailAddress")}
            onChange={() => clearError("email")}
          />
          {errors.email ? <p className={formErrorTextClass}>{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className={formLabelClass}>
            {t("phoneNumber")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={status === "loading"}
            className={fieldClassName(Boolean(errors.phone))}
            placeholder={t("phoneNumber")}
            onChange={() => clearError("phone")}
          />
          {errors.phone ? <p className={formErrorTextClass}>{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="enquiry" className={formLabelClass}>
            {t("enquiry")}
          </label>
          <textarea
            id="enquiry"
            name="enquiry"
            rows={5}
            disabled={status === "loading"}
            className={`${fieldClassName(Boolean(errors.enquiry))} min-h-[140px] resize-y`}
            placeholder={t("enquiry")}
            onChange={() => clearError("enquiry")}
          />
          {errors.enquiry ? <p className={formErrorTextClass}>{errors.enquiry}</p> : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? tCommon("sending") : t("submit")}
      </button>

      {status === "success" ? (
        <p className="mt-4 text-sm text-navy/70" role="status">
          {t("success")}
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
