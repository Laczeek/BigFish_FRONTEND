'use client';

import { ChangeEvent, FocusEvent } from 'react';

interface FormInputProps<T extends string | number | readonly string[]> {
	type: 'text' | 'email' | 'password' | 'textarea' | 'number';
	label: string;
	id: string;
	placeholder: string;
	onChange: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	value: T;
}

export default function FormInput<
	T extends string | number | readonly string[]
>({
	type,
	label,
	id,
	placeholder,
	onChange,
	value,
}: FormInputProps<T>) {
	if (type === 'textarea') {
		return <textarea></textarea>;
	}

	return (
		<div className='mb-4'>
			<label
				htmlFor={id}
				className='block mb-2 text-light-textPrimary dark:text-dark-textPrimary'
			>
				{label}
			</label>
			<input
				type={type}
				name={id}
				id={id}
				value={value}
				placeholder={placeholder}
				className='w-full p-3 border border-light-primary dark:border-dark-primary rounded-md focus:outline-none focus:ring focus:ring-light-primary dark:focus:ring-dark-primary'
				onChange={onChange}
			/>
			
		</div>
	);
}
