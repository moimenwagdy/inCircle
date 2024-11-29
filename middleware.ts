// "middleware";
// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "ar"],
//   defaultLocale: "en",
//   localeDetection: false,
// });

// export const config = {
//   matcher: ["/",
//      "/(en|ar)/:path*",
//       "/((?!api|_next).*)"],
// };

import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localeDetection: false,
});

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  // Skip middleware for API routes
  if (url.startsWith("/api")) {
    return NextResponse.next();
  }

  // Apply next-intl middleware for other routes
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/", // Match the homepage
    "/(en|ar)/:path*", // Match localized paths
    "/((?!api|_next).*)", // Exclude internal paths like /api and /_next
  ],
};
