'use client';
import {
	useRef,
	forwardRef,
	useImperativeHandle,
	ReactNode,
	useState,
	useEffect,
} from 'react';

import { createPortal } from 'react-dom';
import CustomButton from '../layout-related/CustomButton';

const Modal = forwardRef<
	{
		showModal: () => void;
		closeModal: () => void;
	},
	{ children: ReactNode }
>((props, ref) => {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [isMounted, setIsMounted] = useState(false);
	const [showContent, setShowContent] = useState(false);

	useImperativeHandle(
		ref,
		() => {
			return {
				showModal() {
					dialogRef.current?.showModal();
					setShowContent(true);
				},
				closeModal() {
					dialogRef.current?.close();
					setShowContent(false);
				},
			};
		},
		[]
	);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const dialogElement = (
		<dialog
			ref={dialogRef}
			className='backdrop:bg-white backdrop:dark:bg-black backdrop:opacity-90 bg-transparent w-full h-full p-2'
			onClose={() => {
				setShowContent(false);
			}}
		>
			{showContent && props.children}
			<CustomButton
				styleType='secondary'
				additionalClasses='absolute bottom-0 right-0'
				onClick={() => {
					dialogRef.current?.close();
					setShowContent(false);
				}}
			>
				Close
			</CustomButton>
		</dialog>
	);

	if (!isMounted) return null;

	return createPortal(dialogElement, document.body);
});
export default Modal;
