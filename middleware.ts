import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.SECRET_KEY!);

export async function middleware(request: NextRequest) {
	const isAssetRequest =
		request.nextUrl.pathname.startsWith('/_next') ||
		request.nextUrl.pathname.startsWith('/static') ||
		request.nextUrl.pathname.startsWith('/favicon.ico');

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

	if (!isPublicPage && refreshToken) {
		try {
			await jwtVerify(refreshToken, SECRET_KEY);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
		} catch (err: unknown) {
			console.error(err);
			const response = NextResponse.redirect(
				new URL('/auth?action=login', request.url)
			);
			response.cookies.delete('refreshToken');

			return response;
		}
	}

	if (isPublicPage && refreshToken) {
		return NextResponse.redirect(new URL('/home', request.url));
	}

	return NextResponse.next();
}
