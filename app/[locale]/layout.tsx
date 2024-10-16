import type { Metadata } from "next";
import "./globals.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const metadata: Metadata = {
  title: "IN social club",
  description:
    "an online club where family and friends connect, chat, and share moments together.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const messages = await getMessages();
  const locale = params.locale;

  console.log(locale);
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
