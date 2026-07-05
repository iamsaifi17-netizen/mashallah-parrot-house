import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes safely, avoiding conflicting utility duplication
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BUSINESS = {
  name: "MashAllah Parrot House",
  city: "Karachi, Pakistan",
  phone: "+923145022494",
  phoneDisplay: "+92 314 5022494",
  whatsapp: "923145022494",
  email: "info@mashallahparrothouse.pk",
  hours: "9:00 AM – 11:00 PM, All Week",
};

// Builds a wa.me deep link pre-filled with a message about a specific bird (or general inquiry)
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${BUSINESS.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function formatPKR(amount: number) {
  return `Rs ${amount.toLocaleString("en-PK")}`;
}
