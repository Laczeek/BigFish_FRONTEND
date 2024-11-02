'use client';

import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

import { RootState } from '@/store/store';

export default function Alert() {
	const alert = useSelector((state: RootState) => state.alert);

	const color =
		alert?.type === 'success'
			? 'bg-successGreen'
			: alert?.type === 'warning'
			? 'bg-warningYellow'
			: 'bg-errorRed';

	return (
		<AnimatePresence>
			{alert && (
				<motion.div
					initial={{ opacity: 0, translateY: 200 }}
					animate={{ opacity: 1, translateY: 0 }}
					exit={{ opacity: 0, translateY: 200 }}
					transition={{ duration: 0.5, type: 'spring' }}
					aria-label='Alert'
					className='fixed bottom-24 right-16 z-50 w-full max-w-72 text-center  rounded-lg overflow-hidden'
				>
					<div
						className={`${color} text-4xl p-4 flex justify-center text-white`}
					>
						{alert.type === 'success' && <FaCheck />}
						{alert.type === 'warning' && <FaExclamationTriangle />}
						{alert.type === 'error' && <FaTimesCircle />}
					</div>
					<div className='dark:bg-dark-bgSidenav bg-light-bgSidenav p-4'>
						<strong className='text-2xl'>
							{alert.type === 'success' && 'Success!'}
							{alert.type === 'warning' && 'Warning!'}
							{alert.type === 'error' && 'Error!'}
						</strong>
						<p>{alert.message}</p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
