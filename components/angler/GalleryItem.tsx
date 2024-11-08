'use client';
import { motion } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import { modalActions } from '@/store/modal-slice';
import { AppDispatch } from '@/store/store';
import CustomButton from '../layout-related/CustomButton';

interface IGalleryItemProps {
	showRemoveButton?: boolean;
}

export default function GalleryItem({ showRemoveButton }: IGalleryItemProps) {
	const dispatch: AppDispatch = useDispatch();

	const removeFishHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		dispatch(
			modalActions.showModal({
				modalType: 'REMOVE_FISH',
				modalProps: { fishId: 'fish-id-1' },
			})
		);
	};

	const showFishDetails = () => {
		dispatch(
			modalActions.showModal({
				modalType: 'FISH_DETAILS',
				modalProps: {
					image: 'https://static.vecteezy.com/system/resources/thumbnails/025/381/613/small_2x/sea-life-exotic-tropical-coral-reef-copperband-butterfly-fish-neural-network-ai-generated-photo.jpg',
					name: 'Carp',
					measurement: 10,
					measurementType: 'kg',
					description: 'Awesome fish catched on chu jcie to',
					date: new Date().toLocaleDateString(),
				},
			})
		);
	};

	return (
		<motion.div
			onClick={showFishDetails}
			className='relative cursor-pointer'
			whileHover={{ scale: 1.025 }}
			transition={{ type: 'spring' }}
		>
			<img
				src='https://static.vecteezy.com/system/resources/thumbnails/025/381/613/small_2x/sea-life-exotic-tropical-coral-reef-copperband-butterfly-fish-neural-network-ai-generated-photo.jpg'
				alt='Some alt'
				width={400}
				height={250}
				className='rounded-lg shadow-md shadow-light-border dark:shadow-dark-border mx-auto'
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
	);
}
