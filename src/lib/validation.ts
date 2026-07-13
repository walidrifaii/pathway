export type FieldErrors = Record<string, string>;

export type ValidationMessages = {
  fullNameRequired: string;
  fullNameShort: string;
  emailRequired: string;
  emailInvalid: string;
  phoneRequired: string;
  phoneInvalid: string;
  serviceRequired: string;
  messageRequired: string;
  messageShort: string;
};

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string) {
  const cleaned = value.replace(/[\s().+-]/g, "");
  return /^\d{8,15}$/.test(cleaned);
}

export function validateContactFields(
  input: {
    fullName: string;
    email: string;
    phone?: string;
    enquiry: string;
  },
  messages: ValidationMessages,
): FieldErrors {
  const errors: FieldErrors = {};

  if (!input.fullName.trim()) errors.fullName = messages.fullNameRequired;
  else if (input.fullName.trim().length < 2) errors.fullName = messages.fullNameShort;

  if (!input.email.trim()) errors.email = messages.emailRequired;
  else if (!isValidEmail(input.email)) errors.email = messages.emailInvalid;

  if (input.phone?.trim() && !isValidPhone(input.phone)) {
    errors.phone = messages.phoneInvalid;
  }

  if (!input.enquiry.trim()) errors.enquiry = messages.messageRequired;
  else if (input.enquiry.trim().length < 10) errors.enquiry = messages.messageShort;

  return errors;
}

export function validateConsultationFields(
  input: {
    fullName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  },
  messages: ValidationMessages,
): FieldErrors {
  const errors: FieldErrors = {};

  if (!input.fullName.trim()) errors.fullName = messages.fullNameRequired;
  else if (input.fullName.trim().length < 2) errors.fullName = messages.fullNameShort;

  if (!input.email.trim()) errors.email = messages.emailRequired;
  else if (!isValidEmail(input.email)) errors.email = messages.emailInvalid;

  if (!input.phone.trim()) errors.phone = messages.phoneRequired;
  else if (!isValidPhone(input.phone)) errors.phone = messages.phoneInvalid;

  if (!input.service.trim()) errors.service = messages.serviceRequired;

  if (!input.message.trim()) errors.message = messages.messageRequired;
  else if (input.message.trim().length < 10) errors.message = messages.messageShort;

  return errors;
}

export function hasErrors(errors: FieldErrors) {
  return Object.keys(errors).length > 0;
}
