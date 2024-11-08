'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFishFins } from 'react-icons/fa6';
import { TbFishHook } from 'react-icons/tb';
import { FaTrophy } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

export default function AnglerItem() {
	return (
		<Link href={'/angler/johny'}>
			<motion.article
				className='rounded-lg overflow-hidden shadow shadow-light-border dark:shadow-dark-border'
				whileHover={{ scale: 1.03 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			>
				<img
					src='https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D'
					alt='Image of someone'
					width={300}
					height={300}
					className='w-full h-[230px] object-cover'
				/>
				<div className='bg-light-bgSecondary dark:bg-dark-bgSecondary p-2 text-center'>
					<h4 className='font-bold mt-2 text-lg'>John Shwarz</h4>
					<p className='text-light-textSecondary dark:text-dark-textSecondary my-2'>
						<FaHeart
							className='inline-block mr-2 text-lg text-red '
							aria-label='Favorite fishing method'
						/>
						Spinning
					</p>
					<p className='text-light-textSecondary dark:text-dark-textSecondary'>
						Poland
					</p>

					<div className='flex justify-evenly items-center mt-4 text-light-textSecondary dark:text-dark-textSecondary'>
						<p>
							<FaFishFins
								className='inline-block text-lg text-light-accentSecondary dark:text-dark-accentSecondary mr-2'
								aria-label='Number of fish caught'
							/>
							10
						</p>
						<p>
							<FaTrophy
								className='inline-block text-lg text-light-accentSecondary dark:text-dark-accentSecondary mr-2'
								aria-label='Number of competition wins'
							/>
							2
						</p>
						<p>
							<TbFishHook
								className='inline-block text-lg text-light-accentSecondary dark:text-dark-accentSecondary mr-2'
								aria-label='Number of observations'
							/>
							362
						</p>
					</div>
				</div>
			</motion.article>
		</Link>
	);
}
