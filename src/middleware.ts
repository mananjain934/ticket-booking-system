import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const { token } = req.nextauth;

    // Admin routes protection
    if (pathname.startsWith('/admin') && token?.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Organizer routes protection
    if (pathname.startsWith('/organizer') && token?.role !== 'ORGANIZER') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Customer routes (like /bookings, /checkout) can be protected here or left for default auth check
    if (
      (pathname.startsWith('/bookings') || pathname.startsWith('/checkout')) &&
      !token
    ) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  },
  {
    callbacks: {
      // Must return true to execute the middleware function above
      authorized: ({ token }) => !!token,
    },
  }
);

// Define which routes this middleware applies to
export const config = {
  matcher: ['/admin/:path*', '/organizer/:path*', '/bookings/:path*', '/checkout/:path*'],
};
