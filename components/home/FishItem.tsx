'use client';

import { motion } from 'framer-motion';

import useModal from '@/hooks/useModal';
import CustomLink from '../layout-related/CustomLink';
import Modal from '../modals/Modal';

export default function FishItem() {
	const { showModal, isModalOpened, hideModal } = useModal();

	return (
		<article className='flex gap-x-2 bg-light-bgSidenav dark:bg-black bg-opacity-50 p-4 rounded-lg  max-h-[200px]'>
			{isModalOpened && (
				<Modal
					label='Image preview.'
					header={
						<p className='text-2xl font-bold mb-6'>
							Preview of fish image
						</p>
					}
					onClose={hideModal}
				>
					<div>
						<img
							src='https://dynamitebaits.com/wp-content/uploads/2018/07/16..jpg'
							alt='Some alt'
							width={150}
							height={150}
							className='w-full h-[80%] object-contain rounded-lg'
						/>
					</div>
				</Modal>
			)}
			<motion.div
				className='w-[40%] cursor-pointer'
				onClick={showModal}
				whileHover={{ scale: 1.05 }}
			>
				<img
					src='https://dynamitebaits.com/wp-content/uploads/2018/07/16..jpg'
					alt='Some alt'
					width={150}
					height={150}
					className='w-full h-full object-cover rounded-lg'
				/>
			</motion.div>
			<div className='w-[60%] p-1 overflow-y-auto max-h-[200px] text-center'>
				<h3 className='text-lg font-bold'>Carp</h3>
				<p>10kg</p>
				<p className='my-2 '>
					Fish caught on very small lake in west California Fish
				</p>
				<time dateTime='2024-11-15' className='block mb-2'>
					2024-11-15
				</time>

				<CustomLink href='#' styleType='primary'>
					Check Angler
				</CustomLink>
			</div>
		</article>
	);
}
