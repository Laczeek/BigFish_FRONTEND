'use client';
import { motion } from 'framer-motion';
import { FaFishFins } from 'react-icons/fa6';
import { TbFishHook } from 'react-icons/tb';
import { FaHeart, FaTrophy } from 'react-icons/fa';

import countryCodeToFlag from '@/helpers/countryCodeToFlag';
import { IUser } from '@/interfaces/user';
import Image from 'next/image';

interface IAnglerDetailsProps {
	angler: IUser;
}

export default function AnglerDetails({ angler }: IAnglerDetailsProps) {
	const flag = countryCodeToFlag(angler.country.name);

	return (
		<section className='mt-4'>
			<h2 className='hidden'>Angler Details</h2>
			<motion.div
				className=' h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto rounded-full overflow-hidden border-2 border-black dark:border-white'
				animate={{ scale: 1.05 }}
				transition={{
					duration: 2,
					repeat: Infinity,
					type: 'spring',
					repeatType: 'reverse',
				}}
			>
				<Image
					src={angler.avatar.url}
					width={300}
					height={300}
					alt={`${angler.nickname} avatar image.`}
					className=' w-full h-full object-cover '
					priority
				/>
			</motion.div>

			<div className='text-center mt-4 '>
				<p className='text-2xl mb-2'>{flag}</p>
				<p className='text-light-textSecondary dark:text-dark-textSecondary my-2'>
					<FaHeart
						className='inline-block mr-2 text-lg text-red '
						aria-label='Favorite fishing method'
					/>
					{angler.favMethod}
				</p>
				<p className='text-light-textSecondary dark:text-dark-textSecondary'>
					Account created:{' '}
					<time datatype={angler.createdAt}>{angler.createdAt}</time>
				</p>
				<div className='flex justify-evenly items-center my-4 text-light-textSecondary dark:text-dark-textSecondary'>
					<p>
						<FaFishFins
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of fish caught'
						/>
						{angler.fishAmount}
					</p>
					<p>
						<FaTrophy
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of competition wins'
						/>
						{angler.competitionWins}
					</p>
					<p>
						<TbFishHook
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of observations'
						/>
						{angler.hooksAmount}
					</p>
				</div>

				<pre className='mt-6 w-full max-w-[600px] mx-auto break-words text-wrap whitespace-normal'>
					{angler.description}
				</pre>
			</div>
		</section>
	);
}
