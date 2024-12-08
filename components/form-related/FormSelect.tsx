'use client';

import { ReactNode } from 'react';

interface IFormSelectProps {
	label: string;
	id: string;
	withoutLabel?: true;
	onChange: (fieldName: string, value: string) => void;
	value: string;
	error?: string;
	children: ReactNode;
}

export default function FormSelect({
	label,
	id,
	onChange,
	value,
	withoutLabel,
	error,
	children,
}: IFormSelectProps) {
	return (
		<div className='mt-4 '>
			{!withoutLabel && (
				<label htmlFor={id} className='block mb-2'>
					{label}
				</label>
			)}
			<select
				className='appearance-none w-full  p-3  border border-light-border dark:border-dark-bgSecondary rounded-md focus:outline-none focus:ring focus:ring-light-accentSecondary dark:focus:ring-dark-accentSecondary '
				name={id}
				id={id}
				value={value}
				onChange={(event) =>
					onChange(event.target.name, event.target.value)
				}
			>
				<option value='not defined' disabled>
					Choose an option
				</option>
				{children}
			</select>
			<p className='text-sm ml-2 mt-1 text-red'>{error}</p>
		</div>
	);
}
