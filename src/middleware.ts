import { NextResponse, NextRequest } from "next/server";
export const middleware = async (request: NextRequest) => {
  const accessToken = request.cookies.get("accessToken")?.value;
  if (request.nextUrl.pathname.startsWith("/seller") && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/dashboard") && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/login") && accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
};
export const config = {
  matcher: [
     "/seller/dashboard/:path*",
    "/seller/dashboard-:path*",
    "/seller/:path*",
    "/dashboard-:path/:pathname",
    "/dashboard-:path",
    "/dashboard",
    "/login",
  ],
};
