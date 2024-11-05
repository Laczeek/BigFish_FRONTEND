'use client';
import { motion } from 'framer-motion';
import { FaHeart, FaTrophy } from 'react-icons/fa';
import { FaFishFins } from 'react-icons/fa6';
import { TbFishHook } from 'react-icons/tb';

export default function AnglerDetails() {
	return (
		<section className='mt-4'>
			<h2 className='hidden'>Angler Details</h2>
			<div className=' h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto overflow-hidden rounded-full p-4'>
				<motion.img
					src='https://content.osgnetworks.tv/infisherman/content/photos/Old-Guys-Fishing-Support-4.jpg'
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
				<p className='text-lg mb-2 font-bold'>Poland</p>
				<p className='text-light-textSecondary dark:text-dark-textSecondary my-2'>
					<FaHeart
						className='inline-block mr-2 text-lg text-red '
						aria-label='Favorite fishing method'
					/>
					Spinning
				</p>
				<p className='text-light-textSecondary dark:text-dark-textSecondary'>
					Account created:{' '}
					<time dateTime='2012-02-15'>2012-02-15</time>
				</p>
				<div className='flex justify-evenly items-center my-4 text-light-textSecondary dark:text-dark-textSecondary'>
					<p>
						<FaFishFins
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of fish caught'
						/>
						10
					</p>
					<p>
						<FaTrophy
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of competition wins'
						/>
						2
					</p>
					<p>
						<TbFishHook
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of observations'
						/>
						362
					</p>
				</div>
				<p className='mt-6 max-w-[600px] mx-auto'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Numquam optio et a unde totam quia voluptas quas, recusandae
					soluta possimus quis aspernatur quibusdam doloribus magni
					modi velit maxime illo ex. Architecto, minus ex maiores
					illum, quibusdam cumque est sunt cum iusto quae beatae
					doloremque. Voluptatem mollitia perspiciatis ipsa ex ipsam!
				</p>
			</div>
		</section>
	);
}
