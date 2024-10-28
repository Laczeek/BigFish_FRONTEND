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
	const styles = `inline-block px-6 py-2 rounded-lg transition-colors duration-200 ${
		styleType === 'primary'
			? 'bg-light-primary text-white hover:bg-light-secondaryAccent dark:bg-dark-primary dark:text-dark-textPrimary dark:hover:bg-dark-secondaryAccent'
			: 'bg-transparent text-light-primary border border-light-primary hover:bg-light-secondaryAccent hover:text-white dark:text-dark-primary dark:border-dark-primary dark:hover:bg-dark-secondaryAccent dark:hover:text-white'
	} `;

	return (
		<Link href={href} className={styles}>
			{children}
		</Link>
	);
}
