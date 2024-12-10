'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFishFins } from 'react-icons/fa6';
import { TbFishHook } from 'react-icons/tb';
import { FaTrophy } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

import { IUser } from '@/interfaces/user';
import Image from 'next/image';
import countryCodeToFlag from '@/helpers/countryCodeToFlag';

interface IAnglerItemProps {
	angler: IUser;
}

export default function AnglerItem({ angler }: IAnglerItemProps) {
	const flag = countryCodeToFlag(angler.country.name);

	console.log('IM RENDERED KURWA JEGO MAC');

	return (
		<Link href={`/angler/${angler._id}`}>
			<motion.article
				className='rounded-lg overflow-hidden shadow shadow-light-border dark:shadow-dark-border flex gap-x-2 p-2  h-[148px]'
				whileHover={{ scale: 1.03 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			>
				<Image
					src={angler.avatar.url}
					width={100}
					height={100}
					alt={`${angler.nickname} image.`}
					className='w-[100px] h-[100px] rounded-full object-cover self-center'
				/>
				<div className=' w-full text-center'>
					<h4 className='font-bold text-md'>{angler.nickname}</h4>
					<p className='text-light-textSecondary dark:text-dark-textSecondary my-2'>
						<FaHeart
							className='inline-block mr-2 text-lg text-red '
							aria-label='Favorite fishing method'
						/>
						{angler.favMethod}
					</p>
					<p className='text-light-textSecondary dark:text-dark-textSecondary text-2xl'>
						{flag}
					</p>

					<div className='flex justify-evenly items-center mt-2 text-light-textSecondary dark:text-dark-textSecondary'>
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
