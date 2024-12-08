'use client';
import { motion } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import { modalActions } from '@/store/modal-slice';
import { AppDispatch } from '@/store/store';
import CustomButton from '../layout-related/CustomButton';
import { IFish } from '@/interfaces/fish';
import Image from 'next/image';

interface IGalleryItemProps {
	fish: IFish;
}

export default function GalleryItem({ fish }: IGalleryItemProps) {
	const dispatch: AppDispatch = useDispatch();

	const removeFishHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		dispatch(
			modalActions.showModal({
				modalType: 'REMOVE_FISH',
				modalProps: { fishId: fish._id },
			})
		);
	};

	const showFishDetails = () => {
		dispatch(
			modalActions.showModal({
				modalType: 'FISH_DETAILS',
				modalProps: {
					...fish,
				},
			})
		);
	};

	return (
		<motion.div
			onClick={showFishDetails}
			className='relative cursor-pointer rounded-lg overflow-hidden h-[180px]'
			whileHover={{ scale: 1.025 }}
			transition={{ type: 'spring' }}
		>
			<Image
				src={fish.image.url}
				alt={`Image of ${fish.name}.`}
				width={300}
				height={300}
				className=' w-full h-full object-cover'
			/>

			<CustomButton
				styleType='primary'
				type='button'
				additionalClasses='absolute top-0 right-0'
				onClick={removeFishHandler}
			>
				<FaTrashAlt />
			</CustomButton>
		</motion.div>
	);
}
