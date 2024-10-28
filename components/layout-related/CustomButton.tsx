'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	additionalClasses?: string;
	styleType: 'primary' | 'secondary';
}

export default function CustomButton({
	children,
	styleType,
    additionalClasses,
	...props
}: CustomButtonProps) {
	const styles = `${additionalClasses}  px-6 py-2 rounded-lg transition-colors duration-200 ${
		styleType === 'primary'
			? 'bg-light-primary text-white hover:bg-light-secondaryAccent dark:bg-dark-primary dark:text-dark-textPrimary dark:hover:bg-dark-secondaryAccent'
			: 'bg-transparent text-light-primary border border-light-primary hover:bg-light-secondaryAccent hover:text-white dark:text-dark-primary dark:border-dark-primary dark:hover:bg-dark-secondaryAccent dark:hover:text-white'
	} `;

	return (
		<button {...props} className={styles}>
			{children}
		</button>
	);
}
