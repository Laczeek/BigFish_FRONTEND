import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const isAssetRequest =
		request.nextUrl.pathname.startsWith('/_next') || // Next.js internal assets
		request.nextUrl.pathname.startsWith('/static') || // Static folder assets
		request.nextUrl.pathname.startsWith('/favicon.ico'); // Favicon

	if (isAssetRequest) {
		return NextResponse.next();
	}

	const refreshToken = request.cookies.get('refreshToken')?.value;
	const isPublicPage = ['/auth', '/'].includes(request.nextUrl.pathname);

	if (!isPublicPage && !refreshToken) {
		return NextResponse.redirect(
			new URL('/auth?action=login', request.url)
		);
	}

	if (isPublicPage && refreshToken) {
		return NextResponse.redirect(new URL('/home', request.url));
	}

	return NextResponse.next();
}
