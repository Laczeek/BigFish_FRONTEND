'use client';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { GiWeight } from 'react-icons/gi';
import { TbRulerMeasure } from 'react-icons/tb';

import { modalActions } from '@/store/modal-slice';
import { AppDispatch } from '@/store/store';
import CustomLink from '../layout-related/CustomLink';

export default function FishItem() {
	const dispatch: AppDispatch = useDispatch();

	const showPreviewModal = () => {
		dispatch(
			modalActions.showModal({
				modalType: 'FISH_IMAGE_PREVIEW',
				modalProps: {
					image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Carpe_miroir_de_17kg.jpg',
				},
			})
		);
	};

	return (
		<article className='rounded-lg overflow-hidden bg-light-bgSecondary dark:bg-dark-bgSecondary shadow shadow-light-border dark:shadow-dark-border'>
			<div
				className='overflow-hidden'
				onClick={showPreviewModal}
				role='button'
			>
				<motion.img
					src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Carpe_miroir_de_17kg.jpg'
					alt='SOME ALT'
					className='w-full cursor-pointer'
					whileHover={{ scale: 1.05 }}
					transition={{
						type: 'tween',
					}}
				/>
			</div>

			<div className='p-2 text-center max-h-[200px] overflow-y-auto'>
				<h4 className='text-lg font-bold'>Skinny Carp</h4>
				<p className='mt-2 flex items-center justify-center text-light-textSecondary dark:text-dark-textSecondary'>
					<GiWeight className='text-xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2' />
					10kg
				</p>
				<p className='text-light-textSecondary dark:text-dark-textSecondary my-2'>
					Fish caught on very small lake in west California!!!
				</p>
				<CustomLink styleType='secondary' href='#'>
					Check Angler
				</CustomLink>
			</div>
		</article>
	);
}
