'use client';
import { useDispatch } from 'react-redux';

import Modal from '../Modal';
import FormInput from '@/components/form-related/FormInput';
import useForm from '@/hooks/useForm';
import CustomButton from '@/components/layout-related/CustomButton';
import useAuthRequest from '@/hooks/useAuthRequest';
import { AppDispatch } from '@/store/store';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { modalActions } from '@/store/modal-slice';
import { FormEvent } from 'react';

interface IReportModalProps {
	modalProps: {
		nickname: string;
		userId: string;
	};
}

export default function ReportModal({ modalProps }: IReportModalProps) {
	const { inputsState, onInputChangeHandler } = useForm({ description: '' });
	const { isLoading, errorsObject, sendAuthRequest } = useAuthRequest();
	const dispatch: AppDispatch = useDispatch();

	const reportUserHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const data = await sendAuthRequest(
				`/reports/${modalProps.userId}`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						description: inputsState.description,
					}),
				}
			);

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
			label={`Report ${modalProps.nickname}`}
			header={
				<h2 className='text-2xl font-bold mb-6'>
					Report {modalProps.nickname}
				</h2>
			}
		>
			<form
				className='max-w-[600px] mx-auto bg-light-bgSecondary dark:bg-dark-bgSecondary p-4 rounded-lg shadow shadow-light-border dark:shadow-dark-border'
				onSubmit={reportUserHandler}
			>
				<FormInput
					label='Report description'
					type='text'
					id='description'
					placeholder='Enter a description of report'
					value={inputsState.description}
					onChange={onInputChangeHandler}
					error={errorsObject.description}
				/>
				<CustomButton
					type='submit'
					styleType='primary'
					additionalClasses='mt-4 block mx-auto bg-red dark:bg-red text-white dark:text-white'
					isLoading={isLoading}
				>
					Report
				</CustomButton>
			</form>
		</Modal>
	);
}
