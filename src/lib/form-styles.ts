export const formFieldClass =
  "w-full rounded-md border border-[#d8dde5] bg-white px-4 py-3 text-base text-navy placeholder:text-[#9aa3b2] outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/25 disabled:opacity-60";

export const formFieldErrorClass =
  "w-full rounded-md border border-red-400 bg-white px-4 py-3 text-base text-navy placeholder:text-[#9aa3b2] outline-none transition-colors focus:border-red-500 focus:ring-2 focus:ring-red-200 disabled:opacity-60";

export const formLabelClass = "mb-1.5 block text-sm font-semibold text-navy";

export const formErrorTextClass = "mt-1.5 text-sm text-red-600";

export function fieldClassName(hasError: boolean) {
  return hasError ? formFieldErrorClass : formFieldClass;
}
