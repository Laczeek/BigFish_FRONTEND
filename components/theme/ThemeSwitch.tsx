'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeSwitch() {
	const [isMounted, setIsMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	if (resolvedTheme === 'dark')
		return (
			<button
				className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200 '
				onClick={() => setTheme('light')}
			>
				<FaSun className='mx-auto' />
			</button>
		);

	return (
		<button
			className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
			onClick={() => setTheme('dark')}
		>
			<FaMoon className='mx-auto' />
		</button>
	);
}
