import Link from 'next/link';
import { ReactNode } from 'react';

interface CustomLinkProps {
	href: string;
	styleType: 'primary' | 'secondary';
	children: ReactNode;
}

export default function CustomLink({
	href,
	styleType,
	children,
}: CustomLinkProps) {
	const styles = `inline-block px-6 py-2 rounded-lg transition-transform duration-200 hover:scale-105  transition-transform ${
		styleType === 'primary'
			? 'bg-light-accentSecondary border-2 border-transparent text-white dark:bg-dark-accentSecondary  duration-200'
			: 'bg-transparent border-2 border-light-accentPrimary dark:border-dark-accentPrimary  duration-200'
	} `;

	return (
		<Link href={href} className={styles}>
			{children}
		</Link>
	);
}
