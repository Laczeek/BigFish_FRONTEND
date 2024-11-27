'use client';
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import useForm from '@/hooks/useForm';
import FormInput from '../form-related/FormInput';
import FormSelect from '../form-related/FormSelect';
import FormImage from '../form-related/FormImage';
import CustomButton from '../layout-related/CustomButton';
import { modalActions } from '@/store/modal-slice';
import { AppDispatch } from '@/store/store';

interface IInputsState {
	nickname: string;
	favFishingMethod: string;
	description: string;
	image: null | File;
}

export default function UpdateProfileForm() {
	const { inputsState, onInputChangeHandler } = useForm<IInputsState>({
		nickname: 'Patrick',
		favFishingMethod: 'not specified',
		description: 'This is my not valid description.',
		image: null,
	});
	const dispatch: AppDispatch = useDispatch();

	const initialImgURL =
		'https://hips.hearstapps.com/hmg-prod/images/how-to-tell-if-someone-likes-you-65b7cbdc8aa23.jpg?crop=1.00xw:0.624xh;0,0.257xh&resize=1120:*';

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(
			modalActions.showModal({
				modalType: 'UPDATE_PROFILE',
				modalProps: {},
			})
		);
	};

	return (
		<form onSubmit={submitHandler}>
			<FormImage
				label='Image'
				onChange={onInputChangeHandler}
				initialImgURL={initialImgURL}
				value={inputsState.image}
			/>
			<FormInput
				label='Nickname'
				id='nickname'
				placeholder=''
				type='text'
				onChange={onInputChangeHandler}
				value={inputsState.nickname}
			/>

			<FormSelect
				id='favFishingMethod'
				label='Favorite fishing method'
				onChange={onInputChangeHandler}
				value={inputsState.favFishingMethod}
			>
				<option value='spinning'>Spinning</option>
				<option value='bottom fishing'>Bottom Fishing</option>
				<option value='casting'>Casting</option>
				<option value='jigging'>Jigging</option>
				<option value='popping'>Popping</option>
				<option value='trolling'>Trolling</option>
				<option value='fly fishing'>Fly Fishing</option>
				<option value='ice fishing'>Ice Fishing</option>
			</FormSelect>

			<FormInput
				label='Description'
				id='description'
				placeholder=''
				type='textarea'
				onChange={onInputChangeHandler}
				value={inputsState.description}
			/>

			<CustomButton
				styleType='primary'
				type='submit'
				additionalClasses='mx-auto block mt-2'
			>
				Save
			</CustomButton>
		</form>
	);
}
