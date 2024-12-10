'use client';
import { motion } from 'framer-motion';

import countryCodeToFlag from '@/helpers/countryCodeToFlag';
import { IUser } from '@/interfaces/user';
import { FaHeart, FaTrophy } from 'react-icons/fa';
import { FaFishFins } from 'react-icons/fa6';
import { TbFishHook } from 'react-icons/tb';

interface IAnglerDetailsProps {
	angler: IUser;
}

export default function AnglerDetails({
	angler
}: IAnglerDetailsProps) {
	const flag = countryCodeToFlag(angler.country.name)

	return (
		<section className='mt-4'>
			<h2 className='hidden'>Angler Details</h2>
			<div className=' h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto overflow-hidden rounded-full p-4'>
				<motion.img
					src={angler.avatar.url}
					width={300}
					height={300}
					alt='Angler image'
					className=' w-full h-full object-cover rounded-full'
					initial={{ scale: 1 }}
					animate={{ scale: 1.2 }}
					exit={{ scale: 1 }}
					transition={{
						duration: 3,
						repeat: Infinity,
						type: 'spring',
						repeatType: 'reverse',
					}}
				/>
			</div>

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

				<pre className='mt-6 max-w-[600px] mx-auto'>{angler.description}</pre>
			</div>
		</section>
	);
}
