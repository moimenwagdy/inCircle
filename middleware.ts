import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localeDetection: false,
});

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  if (url.startsWith("/api")) {
    return NextResponse.next();
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(en|ar)/:path*", "/((?!api|_next).*)"],
};
