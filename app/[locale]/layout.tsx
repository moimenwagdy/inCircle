import type { Metadata } from "next";
import "./globals.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import SessionWrapper from "../components/sessionWrapper/sessionWrapper";
import Navbar from "../components/Header/Navbar/Navbar";
// const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const metadata: Metadata = {
  title: "inCircle",
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
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <SessionWrapper>
      <NextIntlClientProvider messages={messages}>
        <html lang={locale} dir={dir} className="dark">
          <body>
            <ThemeProvider attribute="class">
              <Navbar />
              {children}
            </ThemeProvider>
          </body>
        </html>
      </NextIntlClientProvider>
    </SessionWrapper>
  );
}
