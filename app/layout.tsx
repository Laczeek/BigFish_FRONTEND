import type { Metadata } from 'next';
import { Bitter } from 'next/font/google';

import Providers from './providers';
import MainNav from '@/components/layout-related/MainNav';
import Footer from '@/components/layout-related/Footer';
import './globals.css';

const bitter = Bitter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Big Fish',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={bitter.className} suppressHydrationWarning>
			<body className='flex bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary min-h-screen'>
				<Providers>
					<MainNav />
					<div className='grow'>
						<main className='container mx-auto px-2  py-4 h-[calc(100%-48px)]'>
							{children}
						</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
