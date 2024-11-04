'use client';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

import FormInput from '@/components/form-related/FormInput';
import CustomLink from '@/components/layout-related/CustomLink';
import useForm from '@/hooks/useForm';
import CustomButton from '@/components/layout-related/CustomButton';
import { FormEvent } from 'react';
import { AppDispatch } from '@/store/store';
import { authActions } from '@/store/auth-slice';

export default function LoginPage() {
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
					},
				})
			);
		}
	};

	return (
		<section className='bg-white dark:bg-dark-accent rounded-lg shadow-lg p-8 max-w-2xl w-full mx-auto'>
			<h1 className='text-2xl lg:text-4xl font-bold mb-6 text-light-primary dark:text-dark-primary'>
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

			<p className='mt-4 text-center text-light-textSecondary dark:text-dark-textSecondary'>
				<span className='mr-2 '>
					{action === 'signup'
						? 'Already have an account?'
						: "Don't have an account yet?"}
				</span>
				<CustomLink
					href={`/login?action=${
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
