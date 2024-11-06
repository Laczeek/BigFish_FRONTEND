'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBackCircle } from 'react-icons/io5';

export default function GoBackButton() {
	const router = useRouter();

	return (
		<button
			type='button'
			onClick={() => router.back()}
			className='bg-light-accentSecondary dark:bg-dark-accentSecondary p-2 rounded-full hover:scale-105 transition-transform duration-200'
		>
			<IoArrowBackCircle className='text-2xl text-white dark:text-black' />
		</button>
	);
}
