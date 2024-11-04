'use client';
import { motion } from 'framer-motion';

import Modal from '../modals/Modal';
import useModal from '@/hooks/useModal';

export default function GalleryItem() {
	const { showModal, hideModal, isModalOpened } = useModal();

	return (
		<>
			{isModalOpened && (
				<Modal
					onClose={hideModal}
					label='Fish details'
					header={
						<p className='text-2xl font-bold mb-6'>Fish details</p>
					}
				>
					<div className='max-w-[600px] max-h-[400px] mx-auto'>
						<img
							src='https://static.vecteezy.com/system/resources/thumbnails/025/381/613/small_2x/sea-life-exotic-tropical-coral-reef-copperband-butterfly-fish-neural-network-ai-generated-photo.jpg'
							alt='Some alt'
							className='w-full h-full rounded-lg'
						/>
					</div>
					<div className='text-center mt-4 bg-white dark:bg-black p-4 rounded-lg dark:bg-opacity-60 bg-opacity-60'>
						<p className='text-xl font-bold'>Carp</p>
						<p>10kg</p>
						<p className='my-2 '>
							Fish caught on very small lake in west California
							Fish
						</p>
						<time dateTime='2024-11-15' className='block mb-2'>
							2024-11-15
						</time>
					</div>
				</Modal>
			)}
			<motion.div
				onClick={showModal}
				className='cursor-pointer'
				whileHover={{ scale: 1.05 }}
				transition={{ type: 'spring' }}
			>
				<img
					src='https://static.vecteezy.com/system/resources/thumbnails/025/381/613/small_2x/sea-life-exotic-tropical-coral-reef-copperband-butterfly-fish-neural-network-ai-generated-photo.jpg'
					alt='Some alt'
					className='rounded-lg shadow-md shadow-light-primary'
				/>
			</motion.div>
		</>
	);
}
