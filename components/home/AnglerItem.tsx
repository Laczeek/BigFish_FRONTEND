'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AnglerItem() {
	return (
		<Link href={'#'}>
			<motion.article
				className='bg-light-bgSidenav dark:bg-dark-primary  p-4 rounded-lg opacity-80'
				whileHover={{ scale: 1.05, opacity: 1 }}
			>
				<img
					src='https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D'
					alt='Image of someone'
					height={150}
					className='w-full'
				/>
				<h3 className='font-bold mt-2'>John Shwarz</h3>
				<p className='text-light-textSecondary dark:text-dark-textSecondary'>
					Poland
				</p>
				<p className='text-light-textSecondary dark:text-dark-textSecondary'>
					Number caught : 6
				</p>
				<p className='text-light-textSecondary dark:text-dark-textSecondary'>
					Observations: 431
				</p>
			</motion.article>
		</Link>
	);
}
