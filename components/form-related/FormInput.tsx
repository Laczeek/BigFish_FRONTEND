'use client';

import { ChangeEvent } from 'react';

interface FormInputProps<T extends string | number | readonly string[]> {
	type: 'text' | 'email' | 'password' | 'textarea' | 'number';
	label: string;
	id: string;
	placeholder: string;
	withoutLabel?: true;
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
	withoutLabel,
	onChange,
	value,
}: FormInputProps<T>) {
	if (type === 'textarea') {
		return <textarea></textarea>;
	}

	return (
		<div className='mb-4'>
			{!withoutLabel && (
				<label htmlFor={id} className='block mb-2'>
					{label}
				</label>
			)}
			<input
				type={type}
				name={id}
				id={id}
				value={value}
				placeholder={placeholder}
				className='w-full p-3 border border-light-border dark:border-dark-bgSecondary rounded-md focus:outline-none focus:ring focus:ring-light-accentSecondary dark:focus:ring-dark-accentSecondary'
				onChange={onChange}
			/>
		</div>
	);
}
