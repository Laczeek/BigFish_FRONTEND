'use client';
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import useForm from '@/hooks/useForm';
import FormInput from '../form-related/FormInput';
import FormSelect from '../form-related/FormSelect';
import FormImage from '../form-related/FormImage';
import CustomButton from '../layout-related/CustomButton';
import { AppDispatch } from '@/store/store';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { IUser } from '@/interfaces/user';
import useAuthRequest from '@/hooks/useAuthRequest';
import { authActions } from '@/store/auth-slice';

interface IUpdateProfileFormProps {
	angler: IUser;
}

interface IInputsState {
	nickname: string;
	favMethod: string;
	description: string;
	image: null | File;
}

export default function UpdateProfileForm({ angler }: IUpdateProfileFormProps) {
	const { inputsState, onInputChangeHandler } = useForm<IInputsState>({
		nickname: angler.nickname,
		favMethod: angler.favMethod,
		description: angler.description,
		image: null,
	});
	const { sendAuthRequest, isLoading, errorsObject } = useAuthRequest();

	const isBtnDisabled = Object.keys(inputsState).find((key) => {
		if (key === 'image') {
			return inputsState.image !== null;
		} else {
			return (
				inputsState[key as keyof typeof inputsState] !==
				angler[key as keyof typeof angler]
			);
		}
	});

	const dispatch: AppDispatch = useDispatch();

	const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData();
		formData.set('nickname', inputsState.nickname);
		formData.set('favMethod', inputsState.favMethod);
		formData.set('description', inputsState.description);
		formData.set('image', inputsState.image!);

		try {
			const data = await sendAuthRequest('/users/me', {
				method: 'PATCH',
				body: formData,
			});
			dispatch(authActions.updateUser(data.user));
			dispatch(
				setAlertWithTimeout({
					type: 'success',
					message: 'Your data has been updated.',
				})
			);
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<FormImage
				label='Image'
				onChange={onInputChangeHandler}
				initialImgURL={angler.avatar.url}
				value={inputsState.image}
			/>
			<FormInput
				label='Nickname'
				id='nickname'
				placeholder=''
				type='text'
				onChange={onInputChangeHandler}
				value={inputsState.nickname}
				error={errorsObject.nickname}
			/>

			<FormSelect
				id='favMethod'
				label='Favorite fishing method'
				onChange={onInputChangeHandler}
				value={inputsState.favMethod}
				error={errorsObject.favMethod}
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
				error={errorsObject.description}
			/>

			<CustomButton
				styleType='primary'
				type='submit'
				additionalClasses='mx-auto block mt-2'
				isLoading={isLoading}
				isDisabled={!Boolean(isBtnDisabled)}
			>
				Save
			</CustomButton>
		</form>
	);
}
