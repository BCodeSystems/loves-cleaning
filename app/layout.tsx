import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Loves Cleaning | Commercial Office Cleaning",
  description:
    "Reliable commercial office cleaning for professional spaces like law firms, medical offices, and suites.",
  metadataBase: new URL("https://loves-cleaning.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" }, // fallback
      { url: "/favicon.svg", type: "image/svg+xml" }, // modern browsers
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}