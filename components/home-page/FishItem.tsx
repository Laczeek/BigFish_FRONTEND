'use client';
import { motion } from 'framer-motion';
import { GiWeight } from 'react-icons/gi';
import { TbRulerMeasure } from 'react-icons/tb';

import useModal from '@/hooks/useModal';
import CustomLink from '../layout-related/CustomLink';
import Modal from '../modals/Modal';

export default function FishItem() {
	const { showModal, isModalOpened, hideModal } = useModal();

	return (
		<>
			{isModalOpened && (
				<Modal
					label='Fish image preview'
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

			<article className='rounded-lg overflow-hidden bg-light-bgSecondary dark:bg-dark-bgSecondary shadow shadow-light-border dark:shadow-dark-border'>
				<div className='overflow-hidden'>
					<motion.img
						src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Carpe_miroir_de_17kg.jpg'
						alt='SOME ALT'
						className='w-full cursor-pointer'
						whileHover={{ scale: 1.05 }}
						transition={{
							type: 'spring',
							stiffness: 400,
							damping: 10,
						}}
						onClick={showModal}
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
		</>
	);
}
