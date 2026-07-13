export type FieldErrors = Record<string, string>;

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string) {
  const cleaned = value.replace(/[\s().+-]/g, "");
  return /^\d{8,15}$/.test(cleaned);
}

export function required(value: string, label: string) {
  if (!value.trim()) return `${label} is required.`;
  return "";
}

export function validateContactFields(input: {
  fullName: string;
  email: string;
  phone?: string;
  enquiry: string;
}): FieldErrors {
  const errors: FieldErrors = {};

  const nameError = required(input.fullName, "Full name");
  if (nameError) errors.fullName = nameError;
  else if (input.fullName.trim().length < 2) errors.fullName = "Enter your full name.";

  const emailError = required(input.email, "Email");
  if (emailError) errors.email = emailError;
  else if (!isValidEmail(input.email)) errors.email = "Enter a valid email address.";

  if (input.phone?.trim() && !isValidPhone(input.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  const enquiryError = required(input.enquiry, "Message");
  if (enquiryError) errors.enquiry = enquiryError;
  else if (input.enquiry.trim().length < 10) {
    errors.enquiry = "Please write at least 10 characters.";
  }

  return errors;
}

export function validateConsultationFields(input: {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};

  const nameError = required(input.fullName, "Full name");
  if (nameError) errors.fullName = nameError;
  else if (input.fullName.trim().length < 2) errors.fullName = "Enter your full name.";

  const emailError = required(input.email, "Email");
  if (emailError) errors.email = emailError;
  else if (!isValidEmail(input.email)) errors.email = "Enter a valid email address.";

  const phoneError = required(input.phone, "Phone");
  if (phoneError) errors.phone = phoneError;
  else if (!isValidPhone(input.phone)) errors.phone = "Enter a valid phone number.";

  if (!input.service.trim()) errors.service = "Please select a service.";

  const messageError = required(input.message, "Message");
  if (messageError) errors.message = messageError;
  else if (input.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }

  return errors;
}

export function hasErrors(errors: FieldErrors) {
  return Object.keys(errors).length > 0;
}
