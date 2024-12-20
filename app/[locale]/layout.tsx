import type { Metadata } from "next";
import "./globals.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import SessionWrapper from "../components/sessionWrapper/sessionWrapper";
import Navbar from "../components/Header/Navbar/Navbar";
import "/app/[locale]/globals.css";
import StoreProvider from "@/store/StoreProvider";
import ProfileAlerts from "../components/ProfileAlerts/ProfileAlerts";
import QueryClientProivderComponent from "../QueryClinet/QueryClient";

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

  return (
    <SessionWrapper>
      <StoreProvider>
        <NextIntlClientProvider messages={messages}>
          <html lang={locale} suppressHydrationWarning>
            <body className="bg-offWhite dark:bg-black font-basicFont">
              <ThemeProvider
                attribute="class"
                disableTransitionOnChange
                enableColorScheme={false}>
                <QueryClientProivderComponent>
                  <Navbar />
                  <ProfileAlerts />
                  {children}
                </QueryClientProivderComponent>
              </ThemeProvider>
            </body>
          </html>
        </NextIntlClientProvider>
      </StoreProvider>
    </SessionWrapper>
  );
}
