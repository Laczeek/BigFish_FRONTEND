import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import FormInput from '@/components/form-related/FormInput';
import Modal from '../Modal';
import CustomButton from '@/components/layout-related/CustomButton';
import useForm from '@/hooks/useForm';
import useAuthRequest from '@/hooks/useAuthRequest';
import { AppDispatch } from '@/store/store';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { authActions } from '@/store/auth-slice';
import useRequest from '@/hooks/useRequest';
import { modalActions } from '@/store/modal-slice';

interface IDeleteModalProps {
	modalProps: {
		nickname: string;
	};
}

export default function DeleteAccountModal({ modalProps }: IDeleteModalProps) {
	const { inputsState, onInputChangeHandler } = useForm({ nickname: '' });
	const { isLoading: isLoadingAuth, sendAuthRequest } = useAuthRequest();
	const { isLoading, sendRequest } = useRequest();
	const dispatch: AppDispatch = useDispatch();
	const router = useRouter();

	const isUserAllowedToDelete = inputsState.nickname === modalProps.nickname;

	const deleteUserAccountHandler = async (
		event: FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		try {
			const data = await sendAuthRequest('/users/me', {
				method: 'DELETE',
			});
            
			await sendRequest('/auth/logout', {
				method: 'GET',
				credentials: 'include',
			});

			dispatch(modalActions.hideModal());
			dispatch(authActions.logout());
			dispatch(
				setAlertWithTimeout({ type: 'success', message: data.msg })
			);
			router.push('/auth?action=login');
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	return (
		<Modal
			label={'Delete account'}
			header={<h2 className='text-2xl font-bold mb-6'>Delete account</h2>}
		>
			<form
				className='max-w-[600px] mx-auto bg-light-bgSecondary dark:bg-dark-bgSecondary p-4 rounded-lg shadow shadow-light-border dark:shadow-dark-border'
				onSubmit={deleteUserAccountHandler}
			>
				<FormInput
					label='Enter your nickname'
					type='text'
					id='nickname'
					placeholder='Enter a nickname'
					value={inputsState.nickname}
					onChange={onInputChangeHandler}
				/>

				<CustomButton
					type='submit'
					styleType='primary'
					additionalClasses='block mx-auto mt-4 bg-red dark:bg-red text-white dark:text-white'
					isDisabled={!isUserAllowedToDelete}
					isLoading={isLoadingAuth || isLoading}
				>
					Delete Account
				</CustomButton>
			</form>
		</Modal>
	);
}
