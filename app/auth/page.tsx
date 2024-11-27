'use client';
import { FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import FormInput from '@/components/form-related/FormInput';
import useForm from '@/hooks/useForm';
import CustomButton from '@/components/layout-related/CustomButton';
import { AppDispatch, RootState } from '@/store/store';
import { signup, login } from '@/store/auth-slice';
import transformToErrorObject from '@/helpers/transformToErrorObject';

const initialInputsState = {
	nickname: '',
	email: '',
	password: '',
	passwordConfirm: '',
};

export default function AuthPage() {
	const { inputsState, onInputChangeHandler, clearInputsState } =
		useForm(initialInputsState);
	const { errors, isLoading } = useSelector((state: RootState) => state.auth);
	const dispatch: AppDispatch = useDispatch();
	const router = useRouter();

	const errorObj = transformToErrorObject(errors || []);

	let action = useSearchParams().get('action');

	if (!action) {
		action = 'login';
	}

	let isButtonDisabled: boolean;

	if (action === 'signup') {
		isButtonDisabled =
			Object.keys(inputsState).filter(
				(key) => inputsState[key as keyof typeof inputsState] === ''
			).length !== 0;
	} else {
		isButtonDisabled =
			inputsState.email === '' || inputsState.password === '';
	}

	const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (action === 'signup') {
			const result = await dispatch(signup(inputsState));
			if (result.meta.requestStatus === 'rejected') return;
			router.push('/home');
		} else {
			const result = await dispatch(
				login({
					email: inputsState.email,
					password: inputsState.password,
				})
			);
			if (result.meta.requestStatus === 'rejected') return;
			router.push('/home');
		}
	};

	return (
		<>
			<header className='mb-6'>
				<h1 className='text-3xl font-bold'>
					{action === 'signup' ? 'Create Account' : 'Login'}
				</h1>
			</header>

			<section className='border-2 border-light-border dark:border-dark-border rounded-lg  p-8 max-w-2xl w-full mx-auto'>
				<form onSubmit={submitHandler}>
					{action === 'signup' && (
						<FormInput
							id='nickname'
							label='Nickname:'
							placeholder='Enter your nickname'
							type='text'
							value={inputsState.nickname}
							onChange={onInputChangeHandler}
							error={errorObj.nickname}
						/>
					)}
					<FormInput
						id='email'
						label='Email:'
						placeholder='Enter your email'
						type='email'
						value={inputsState.email}
						onChange={onInputChangeHandler}
						error={errorObj.email}
					/>
					<FormInput
						id='password'
						label='Password:'
						placeholder='Enter your password'
						type='password'
						value={inputsState.password}
						onChange={onInputChangeHandler}
						error={errorObj.password}
					/>
					{action === 'signup' && (
						<FormInput
							id='passwordConfirm'
							label='Confirm Password:'
							placeholder='Confirm your password'
							type='password'
							value={inputsState.passwordConfirm}
							onChange={onInputChangeHandler}
							error={errorObj.passwordConfirm}
						/>
					)}

					<CustomButton
						styleType='primary'
						type='submit'
						additionalClasses='mx-auto block mt-6'
						isLoading={isLoading}
						isDisabled={isButtonDisabled}
					>
						{action === 'signup' ? 'Create Account' : 'Login'}
					</CustomButton>
				</form>

				<p className='mt-6 text-center'>
					<span className='mb-2 text-light-textSecondary dark:text-dark-textSecondary block'>
						{action === 'signup'
							? 'Already have an account?'
							: "Don't have an account yet?"}
					</span>
					<CustomButton
						onClick={() => {
							router.push(
								`/auth?action=${
									action === 'signup' ? 'login' : 'signup'
								}`
							);
							clearInputsState();
						}}
						styleType='secondary'
					>
						{action === 'signup' ? 'Login' : 'Create Account'}
					</CustomButton>
				</p>
			</section>
		</>
	);
}
