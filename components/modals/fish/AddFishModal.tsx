'use client';
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../Modal';
import FormInput from '../../form-related/FormInput';
import FormImage from '../../form-related/FormImage';
import FormSelect from '../../form-related/FormSelect';
import useForm from '@/hooks/useForm';
import CustomButton from '../../layout-related/CustomButton';
import useAuthRequest from '@/hooks/useAuthRequest';
import { AppDispatch } from '@/store/store';
import { modalActions } from '@/store/modal-slice';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { authActions } from '@/store/auth-slice';

interface IInputsState {
	name: string;
	measurementUnit: string;
	measurementValue: number | string;
	description: string;
	image: null | File;
	whenCaught: string;
	address: string;
}

export default function AddFishModal() {
	const { inputsState, onInputChangeHandler } = useForm<IInputsState>({
		name: '',
		measurementUnit: 'not defined',
		measurementValue: '',
		description: '',
		image: null,
		whenCaught: '',
		address: '',
	});

	const dispatch: AppDispatch = useDispatch();

	const { isLoading, errorsObject, sendAuthRequest } = useAuthRequest();

	const isButtonDisabled = Object.keys(inputsState).find((key) => {
		if (key === 'description') return false;
		if (key === 'measurementUnit') {
			return (
				inputsState[key as keyof typeof inputsState] === 'not defined'
			);
		}
		return Boolean(inputsState[key as keyof typeof inputsState]) === false;
	});

	const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const measurementType =
			inputsState.measurementUnit === 'kg' ||
			inputsState.measurementUnit === 'lb'
				? 'weight'
				: 'length';

		const formData = new FormData();
		formData.set('name', inputsState.name);
		formData.set('measurementUnit', inputsState.measurementUnit);
		formData.set('measurementType', measurementType);
		formData.set('measurementValue', inputsState.measurementValue + '');
		formData.set('description', inputsState.description);
		formData.set('whenCaught', inputsState.whenCaught);
		formData.set('address', inputsState.address);
		formData.set('image', inputsState.image!);

		try {
			const data = await sendAuthRequest('/fish', {
				method: 'POST',
				body: formData,
			});
			dispatch(
				setAlertWithTimeout({
					type: 'success',
					message: `${data.fish.name} was added.`,
				})
			);
			dispatch(authActions.incrementFishAmount());
			dispatch(modalActions.hideModal());
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	return (
		<Modal
			label='Add fish'
			header={
				<h2 className='text-2xl font-bold mb-6'>
					Add Fish to Your Profile
				</h2>
			}
		>
			<form
				className='max-w-[600px] mx-auto bg-light-bgSecondary dark:bg-dark-bgSecondary p-4 rounded-lg shadow shadow-light-border dark:shadow-dark-border max-h-[70vh] overflow-y-auto'
				onSubmit={submitHandler}
			>
				<FormInput
					label='Fish name'
					type='text'
					id='name'
					placeholder='Enter the name of a fish'
					onChange={onInputChangeHandler}
					value={inputsState.name}
					error={errorsObject.name}
				/>

				<FormInput
					label='When caught'
					type='date'
					id='whenCaught'
					placeholder='Enter when fish was caught'
					onChange={onInputChangeHandler}
					value={inputsState.whenCaught}
					error={errorsObject.whenCaught}
				/>

				<FormSelect
					label='Type of measurement'
					id='measurementUnit'
					onChange={onInputChangeHandler}
					value={inputsState.measurementUnit}
					error={errorsObject['measurement.unit']}
				>
					<optgroup label='Weight'>
						<option value='kg'>kg</option>
						<option value='lb'>lb</option>
					</optgroup>

					<optgroup label='Length'>
						<option value='cm'>cm</option>
						<option value='inch'>inch</option>
					</optgroup>
				</FormSelect>
				<FormInput
					label='Measurement'
					type='number'
					id='measurementValue'
					placeholder='Etner the fish measurement'
					onChange={onInputChangeHandler}
					value={inputsState.measurementValue}
					error={errorsObject['measurement.value']}
				/>

				<FormInput
					label='Address'
					type='text'
					id='address'
					placeholder='Enter the address'
					onChange={onInputChangeHandler}
					value={inputsState.address}
					error={errorsObject.address}
				/>

				<FormInput
					label='Description'
					type='textarea'
					id='description'
					placeholder='Enter the description'
					onChange={onInputChangeHandler}
					value={inputsState.description}
					error={errorsObject.description}
				/>

				<FormImage
					label='Image'
					initialImgURL={null}
					onChange={onInputChangeHandler}
					value={inputsState.image}
				/>

				<CustomButton
					styleType='primary'
					type='submit'
					additionalClasses='block ml-auto'
					isDisabled={Boolean(isButtonDisabled)}
					isLoading={isLoading}
				>
					Add Fish
				</CustomButton>
			</form>
		</Modal>
	);
}
