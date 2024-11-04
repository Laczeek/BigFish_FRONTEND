'use client';

import { ChangeEvent } from 'react';

interface FormInputProps<T extends string | number | readonly string[]> {
	type: 'text' | 'email' | 'password' | 'textarea' | 'number';
	label: string;
	id: string;
	placeholder: string;
	withoutLabel?: true;
	onChange: (fieldName: string, value: any) => void;
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
	return (
		<div className='mb-4'>
			{!withoutLabel && (
				<label htmlFor={id} className='block mb-2'>
					{label}
				</label>
			)}
			{type !== 'textarea' ? (
				<input
					type={type}
					name={id}
					id={id}
					value={value}
					placeholder={placeholder}
					className='w-full p-3 border border-light-border dark:border-dark-bgSecondary rounded-md focus:outline-none focus:ring focus:ring-light-accentSecondary dark:focus:ring-dark-accentSecondary'
					onChange={event => onChange(event.target.name, event.target.value)}
				/>
			) : (
				<textarea
					name={id}
					id={id}
					value={value}
					className='w-full p-3 border border-light-border dark:border-dark-bgSecondary rounded-md focus:outline-none focus:ring focus:ring-light-accentSecondary dark:focus:ring-dark-accentSecondary'
					onChange={event => onChange(event.target.name, event.target.value)}
				></textarea>
			)}
		</div>
	);
}
