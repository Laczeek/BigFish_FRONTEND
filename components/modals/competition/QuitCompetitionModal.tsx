'use client';
import { useDispatch } from 'react-redux';

import CustomButton from '@/components/layout-related/CustomButton';
import Modal from '../Modal';
import useAuthRequest from '@/hooks/useAuthRequest';
import { AppDispatch } from '@/store/store';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { modalActions } from '@/store/modal-slice';
import { authActions } from '@/store/auth-slice';

export default function QuitCompetitionModal() {
	const { isLoading, sendAuthRequest } = useAuthRequest();
	const dispatch: AppDispatch = useDispatch();

	const quitCompetitionHandler = async () => {
		try {
			const data = await sendAuthRequest('/competitions/quit', {
				method: 'DELETE',
			});
			dispatch(authActions.updateCompetitionId(undefined));
			dispatch(
				setAlertWithTimeout({ type: 'success', message: data.msg })
			);
			dispatch(modalActions.hideModal());
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	return (
		<Modal
			label='Quit the competition'
			header={
				<h2 className='mt-6 text-2xl font-bold mb-6 text-center'>
					Are you sure you want to leave the competition?
				</h2>
			}
		>
			<div>
				<CustomButton
					styleType='primary'
					additionalClasses='bg-red dark:bg-red dark:text-white block mx-auto'
					type='button'
					isLoading={isLoading}
					onClick={quitCompetitionHandler}
				>
					Quit Competition
				</CustomButton>
			</div>
		</Modal>
	);
}
