import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Due Owl — Automated late-invoice reminders",
  description:
    "Automated invoice reminders. Seamless flow. Endless growth. Due Owl follows up on late invoices so your cash flow keeps moving.",
  metadataBase: new URL("https://dueowl.com"),
  openGraph: {
    title: "Due Owl — Automated late-invoice reminders",
    description:
      "Automated invoice reminders. Seamless flow. Endless growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen font-sans antialiased" style={{ background: "#4BA3E3" }}>
        {children}
      </body>
    </html>
  );
}
