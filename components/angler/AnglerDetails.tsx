'use client';

import { motion } from 'framer-motion';

export default function AnglerDetails() {
	return (
		<section className='mt-6'>
			<h2 className='hidden'>Angler Details</h2>
			<div className='  h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto overflow-hidden rounded-full  border-2 border-light-primary p-4'>
				<motion.img
					src='https://content.osgnetworks.tv/infisherman/content/photos/Old-Guys-Fishing-Support-4.jpg'
					width={300}
					height={300}
					alt='Angler image'
					className=' w-full h-full object-cover rounded-full'
					whileInView={{ scale: 1.1 }}
					transition={{ type: 'spring', duration: 2 }}
				/>
			</div>

			<div className='text-center mt-4 '>
				<p className='text-lg mb-2'>Country: Poland</p>
				<p>
					Account created:{' '}
					<time dateTime='2012-02-15'>2012-02-15</time>
				</p>
				<p className='my-2'>Fish caught: 15</p>
				<p>Hi everyone!!! Welcome on my profile.</p>
			</div>
		</section>
	);
}
