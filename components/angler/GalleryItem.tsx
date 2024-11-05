'use client';
import { motion } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa';
import { MouseEvent } from 'react';

import Modal from '../modals/Modal';
import useModal from '@/hooks/useModal';
import CustomButton from '../layout-related/CustomButton';

interface IGalleryItemProps {
	showRemoveButton?: boolean;
}

export default function GalleryItem({ showRemoveButton }: IGalleryItemProps) {
	const { showModal, hideModal, isModalOpened } = useModal();

	const removeFishHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		console.log('REMOVE IMAGE');
	};

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
							width={600}
							height={400}
							className='w-full h-full rounded-lg'
						/>
					</div>
					<div className='text-center mt-4 bg-light-bgSecondary dark:bg-dark-bgSecondary p-2 rounded-lg shadow shadow-light-border dark:shadow-dark-border'>
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
				className='relative cursor-pointer'
				whileHover={{ scale: 1.025 }}
				transition={{ type: 'spring' }}
			>
				<img
					src='https://static.vecteezy.com/system/resources/thumbnails/025/381/613/small_2x/sea-life-exotic-tropical-coral-reef-copperband-butterfly-fish-neural-network-ai-generated-photo.jpg'
					alt='Some alt'
					className='rounded-lg shadow-md shadow-light-border dark:shadow-dark-border'
				/>
				{showRemoveButton && (
					<CustomButton
						styleType='primary'
						type='button'
						additionalClasses='absolute top-0 right-0'
						onClick={removeFishHandler}
					>
						<FaTrashAlt />
					</CustomButton>
				)}
			</motion.div>
		</>
	);
}
