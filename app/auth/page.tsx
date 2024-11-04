'use client';
import { FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

import FormInput from '@/components/form-related/FormInput';
import CustomLink from '@/components/layout-related/CustomLink';
import useForm from '@/hooks/useForm';
import CustomButton from '@/components/layout-related/CustomButton';
import { AppDispatch } from '@/store/store';
import { authActions } from '@/store/auth-slice';

export default function AuthPage() {
	const { inputsState, onInputChangeHandler } = useForm({
		nickname: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const dispatch: AppDispatch = useDispatch();

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

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (action === 'signup') {
			// make request to create the user
		} else {
			// make request to login user
			dispatch(
				authActions.login({
					token: '123456',
					user: {
						nickname: 'Patryk',
						_id: 'dsadasdas',
						role: 'user',
						avatar: 'xd'
					},
				})
			);
		}
	};

	return (
		<section className='border-2 border-light-border dark:border-dark-border rounded-lg  p-8 max-w-2xl w-full mx-auto'>
			<h1 className='text-3xl font-bold mb-6'>
				{action === 'signup' ? 'Create Account' : 'Login'}
			</h1>

			<form onSubmit={submitHandler}>
				{action === 'signup' && (
					<FormInput
						id='nickname'
						label='Nickname:'
						placeholder='Enter your nickname'
						type='text'
						value={inputsState.nickname}
						onChange={onInputChangeHandler}
					/>
				)}
				<FormInput
					id='email'
					label='Email:'
					placeholder='Enter your email'
					type='email'
					value={inputsState.email}
					onChange={onInputChangeHandler}
				/>
				<FormInput
					id='password'
					label='Password:'
					placeholder='Enter your password'
					type='password'
					value={inputsState.password}
					onChange={onInputChangeHandler}
				/>
				{action === 'signup' && (
					<FormInput
						id='confirmPassword'
						label='Confirm Password:'
						placeholder='Confirm your password'
						type='password'
						value={inputsState.confirmPassword}
						onChange={onInputChangeHandler}
					/>
				)}

				<CustomButton
					styleType='primary'
					type='submit'
					additionalClasses='mx-auto block'
					disabled={isButtonDisabled}
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
				<CustomLink
					href={`/auth?action=${
						action === 'signup' ? 'login' : 'signup'
					}`}
					styleType='secondary'
				>
					{action === 'signup' ? 'Login' : 'Create Account'}
				</CustomLink>
			</p>
		</section>
	);
}
