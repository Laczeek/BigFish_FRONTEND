import type { Metadata } from 'next';
import { Bitter } from 'next/font/google';

import Providers from './providers';
import MainNav from '@/components/layout-related/MainNav';
import Footer from '@/components/layout-related/Footer';
import Alert from '@/components/layout-related/Alert';

import './globals.css';

const bitter = Bitter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Big Fish',
	description:
		'The ideal portal for lovers of fishing, competition and for those who want to develop their passion. ',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={bitter.className} suppressHydrationWarning>
			<body className='flex bg-light-bgPrimary dark:bg-dark-bgPrimary text-light-textPrimary dark:text-dark-textPrimary min-h-screen '>
				<Providers>
					<Alert />
					<MainNav />
					<div className='grow'>
						<main className='container mx-auto px-2  py-4 min-h-[calc(100%-48px)]'>
							{children}
						</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
