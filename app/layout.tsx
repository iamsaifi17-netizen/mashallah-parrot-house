import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mashallahparrothouse.pk"),
  title: {
    default: "MashAllah Parrot House | Premium Parrots in Karachi, Pakistan",
    template: "%s | MashAllah Parrot House",
  },
  description:
    "Karachi's trusted premium parrot marketplace. African Grey, Macaw, Cockatiel, Budgie, Lovebirds & Amazon Parrots — ethically raised, health-checked, and delivered across Pakistan.",
  keywords: [
    "parrots for sale Karachi",
    "parrot house Pakistan",
    "African Grey Pakistan",
    "Macaw for sale",
    "buy parrot online Pakistan",
  ],
  openGraph: {
    title: "MashAllah Parrot House | Premium Parrots in Karachi",
    description:
      "Ethically raised, health-checked parrots — African Grey, Macaw, Cockatiel, Budgie, Lovebirds & Amazon Parrots.",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
