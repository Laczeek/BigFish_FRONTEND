'use client';

import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/store/store';
import { modalActions } from '@/store/modal-slice';
import CustomButton from '../layout-related/CustomButton';

interface IModalProps {
	label: string;
	header: ReactNode;
	children: ReactNode;
}

export default function Modal({ label, header, children }: IModalProps) {
	const dispatch: AppDispatch = useDispatch();

	const hideModal = () => {
		dispatch(modalActions.hideModal());
	};

	useEffect(() => {
		const handleKeyup = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				hideModal();
			}
		};

		document.addEventListener('keyup', handleKeyup);
		document.body.classList.add('overflow-hidden');

		return () => {
			document.removeEventListener('keyup', handleKeyup);
			document.body.classList.remove('overflow-hidden');
		};
	}, []);

	return (
		<div
			className=' fixed z-40 top-0 bottom-0 left-0 right-0 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 p-6 backdrop-blur-sm'
			aria-modal='true'
			role='dialog'
		>
			<div aria-label={label} className='max-w-[1200px] h-full mx-auto'>
				<header>{header}</header>
				{children}
				<footer className='absolute bottom-10 right-10'>
					<CustomButton
						styleType='primary'
						onClick={hideModal}
						aria-label='Close modal'
					>
						Close
					</CustomButton>
				</footer>
			</div>
		</div>
	);
}
