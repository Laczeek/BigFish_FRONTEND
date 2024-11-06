'use client';

import { ReactNode } from 'react';

interface IFormSelectProps {
	label: string;
	id: string;
	withoutLabel?: true;
	onChange: (fieldName: string, value: string) => void;
	value: string;
	children: ReactNode;
}

export default function FormSelect({
	label,
	id,
	onChange,
	value,
	withoutLabel,
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
				className='w-full p-3 border border-light-border dark:border-dark-bgSecondary rounded-md focus:outline-none focus:ring focus:ring-light-accentSecondary dark:focus:ring-dark-accentSecondary'
				name={id}
				id={id}
				value={value}
				onChange={(event) =>
					onChange(event.target.name, event.target.value)
				}
			>
				<option value=''>Choose an option</option>
				{children}
			</select>
		</div>
	);
}
