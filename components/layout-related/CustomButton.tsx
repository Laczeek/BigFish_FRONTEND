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
	const styles = `${
		additionalClasses ? additionalClasses : ''
	}  px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer  disabled:opacity-40 disabled:pointer-events-none ${
		styleType === 'primary'
			? 'bg-light-accentPrimary text-white border-2 border-transparent  dark:bg-dark-accentPrimary dark:text-black'
			: 'bg-transparent border-2 border-light-accentPrimary dark:border-dark-accentPrimary'
	} `;

	return (
		<button {...props} className={styles}>
			{children}
		</button>
	);
}
