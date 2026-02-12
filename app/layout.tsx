import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://loves-cleaning.com"),
  title: {
    default: "Loves Cleaning",
    template: "%s | Loves Cleaning",
  },
  description:
    "Professional residential and commercial cleaning services. Reliable, consistent, and detail-focused cleaning for homes and offices.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Loves Cleaning",
    description:
      "Professional residential and commercial cleaning services.",
    url: "https://loves-cleaning.com",
    siteName: "Loves Cleaning",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loves Cleaning Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Loves Cleaning",
    description:
      "Professional residential and commercial cleaning services.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}