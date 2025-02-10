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
import QueryClientProivderComponent from "../QueryClient/QueryClient";
import DocumentBG from "../components/DocumentBG/DocumentBG";
import SmallScreenList from "../components/SmallScreenList/SmallScreenList";
import { afacad } from "@/lib/fonts/basicFont";

export const metadata: Metadata = {
  title: {
    default: "inCircle – Social media platform",
    template: `%s | inCircle – Social media platform`,
  },
  description:
    "inCircle is an online social media platform where family and friends connect, chat, and share their special moments securely.",
  keywords: [
    "inCircle",
    "in circle",
    "circle",
    "social network",
    "chat",
    "friends chat",
    "social media",
    "coversation",
    "following",
    "followers",
    "follow",
    "unfollow",
    "family club",
    "friends chat",
    "private community",
    "secure messaging",
    "photo sharing",
    "group communication",
  ],
  authors: [{ name: "Moimen Wagdy", url: "https://moo-portfolio.vercel.app/" }],
  openGraph: {
    title: "inCircle – Social media platform",
    description:
      "inCircle is an online social media platform where family and friends connect, chat, and share their special moments securely.",
    url: "https://in-circle-iota.vercel.app/en",
    siteName: "inCircle",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/finalLogoLarg.png?alt=media&token=5bdeac30-cffb-49dd-b563-efe419592ff7",
        width: 1200,
        height: 630,
        alt: "inCircle - A Private Online Club",
      },
    ],
    type: "website",
  },
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
            <body
              className={`bg-offWhite dark:bg-black ${afacad.className}  relative overflow-x-hidden`}>
              <DocumentBG />
              <ThemeProvider
                attribute="class"
                disableTransitionOnChange
                enableColorScheme={false}>
                <QueryClientProivderComponent>
                  <Navbar />
                  <ProfileAlerts />
                  <SmallScreenList />
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
