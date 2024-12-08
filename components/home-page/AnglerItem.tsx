'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFishFins } from 'react-icons/fa6';
import { TbFishHook } from 'react-icons/tb';
import { FaTrophy } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { IUser } from '@/interfaces/user';

interface IAnglerItemProps {
	angler: IUser;
}

export default function AnglerItem({ angler }: IAnglerItemProps) {
	return (
		<Link href={`/angler/${angler._id}`}>
			<motion.article
				className='rounded-lg overflow-hidden shadow shadow-light-border dark:shadow-dark-border'
				whileHover={{ scale: 1.03 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			>
				<img
					src={angler.avatar.url}
					alt='Image of someone'
					width={300}
					height={300}
					className='w-full h-[230px] object-cover'
				/>
				<div className='bg-light-bgSecondary dark:bg-dark-bgSecondary p-2 text-center'>
					<h4 className='font-bold mt-2 text-lg'>
						{angler.nickname}
					</h4>
					<p className='text-light-textSecondary dark:text-dark-textSecondary my-2'>
						<FaHeart
							className='inline-block mr-2 text-lg text-red '
							aria-label='Favorite fishing method'
						/>
						{angler.favMethod}
					</p>
					<p className='text-light-textSecondary dark:text-dark-textSecondary'>
						{angler.country}
					</p>

					<div className='flex justify-evenly items-center mt-4 text-light-textSecondary dark:text-dark-textSecondary'>
						<p>
							<FaFishFins
								className='inline-block text-lg text-light-accentSecondary dark:text-dark-accentSecondary mr-2'
								aria-label='Number of fish caught'
							/>
							{angler.fishAmount}
						</p>
						<p>
							<FaTrophy
								className='inline-block text-lg text-light-accentSecondary dark:text-dark-accentSecondary mr-2'
								aria-label='Number of competition wins'
							/>
							{angler.competitionWins}
						</p>
						<p>
							<TbFishHook
								className='inline-block text-lg text-light-accentSecondary dark:text-dark-accentSecondary mr-2'
								aria-label='Number of observations'
							/>
							{angler.hooksAmount}
						</p>
					</div>
				</div>
			</motion.article>
		</Link>
	);
}
