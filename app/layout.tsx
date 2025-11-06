import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liminal — Intelligent Thresholds for Adaptive Teams",
  description:
    "Liminal blends real-time intelligence with human intuition to help product teams navigate critical inflection points."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
