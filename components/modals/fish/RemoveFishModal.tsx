'use client';
import { useDispatch } from 'react-redux';

import CustomButton from '@/components/layout-related/CustomButton';
import Modal from '../Modal';
import useAuthRequest from '@/hooks/useAuthRequest';
import { AppDispatch } from '@/store/store';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { modalActions } from '@/store/modal-slice';
import { authActions } from '@/store/auth-slice';

interface IRemoveFishModalProps {
	modalProps: {
		fishId: string;
	};
}

export default function RemoveFishModal({ modalProps }: IRemoveFishModalProps) {
	const { isLoading, sendAuthRequest } = useAuthRequest();

	const dispatch: AppDispatch = useDispatch();

	const removeFishHandler = async () => {
		try {
			const data = await sendAuthRequest(`/fish/${modalProps.fishId}`, {
				method: 'DELETE',
			});

			dispatch(
				setAlertWithTimeout({ type: 'success', message: data.msg })
			);
			dispatch(authActions.decrementFishAmount());
			dispatch(modalActions.hideModal());
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	return (
		<Modal
			label='Remove the chosen fish'
			header={
				<h2 className='mt-6 text-2xl font-bold mb-6 text-center'>
					Are you sure you want to remove this fish?
				</h2>
			}
		>
			<div>
				<CustomButton
					styleType='primary'
					additionalClasses='bg-red dark:bg-red dark:text-white block mx-auto'
					type='button'
					isLoading={isLoading}
					onClick={removeFishHandler}
				>
					Remove the fish from my profile
				</CustomButton>
			</div>
		</Modal>
	);
}
