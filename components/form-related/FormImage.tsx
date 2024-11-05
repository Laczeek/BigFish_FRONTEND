'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';

import CustomButton from '../layout-related/CustomButton';

interface IFormImageProps {
	initialImgURL: string | null;
	label: string;
	value: File | null;
	onChange: (fieldName: string, value: File | null) => void;
}

export default function FormImage({
	label,
	initialImgURL,
	value,
	onChange,
}: IFormImageProps) {
	const [previewURL, setPreviewURL] = useState(initialImgURL);
	const imageInputRef = useRef<null | HTMLInputElement>(null);

	const openFilePicker = () => {
		imageInputRef?.current?.click();
	};

	const changeFileInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files || !event.target.files[0]) {
			setPreviewURL(initialImgURL);
			onChange('image', null);
			return;
		}

		const file = event.target.files[0];

		const fileReader = new FileReader();

		fileReader.onload = () => {
			setPreviewURL(fileReader.result as string);
			onChange('image', file);
		};

		fileReader.readAsDataURL(file);
	};

	const clearInputHandler = () => {
		setPreviewURL(initialImgURL);
		onChange('image', null);
	};

	return (
		<div className='mb-6'>
			{previewURL && (
				<div className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] mx-auto '>
					<img
						src={previewURL}
						alt='Your new image preview.'
						className='block w-full h-full object-cover rounded-full'
					/>
				</div>
			)}

			<label htmlFor='image' className='hidden'>
				{label}
			</label>
			<input
				type='file'
				name='image'
				id='image'
				className='hidden'
				ref={imageInputRef}
				onChange={changeFileInputHandler}
			/>

			<div className='flex justify-center gap-x-2 mt-1'>
				{!value && (
					<CustomButton
						type='button'
						styleType='primary'
						onClick={openFilePicker}
					>
						<RiImageAddFill className='text-lg' />
					</CustomButton>
				)}
				{previewURL !== initialImgURL && (
					<CustomButton
						styleType='secondary'
						type='button'
						onClick={clearInputHandler}
					>
						<FaTrashAlt className='text-lg' />
					</CustomButton>
				)}
			</div>
		</div>
	);
}
