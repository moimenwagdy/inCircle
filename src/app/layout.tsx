import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IN social club",
  description:
    "a online club where family and friends connect, chat, and share moments together.",
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
