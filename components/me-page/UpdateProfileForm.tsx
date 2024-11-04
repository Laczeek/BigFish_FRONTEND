'use client';

import useForm from '@/hooks/useForm';
import FormInput from '../form-related/FormInput';
import FormImage from '../form-related/FormImage';
import CustomButton from '../layout-related/CustomButton';

interface IInputsState {
	nickname: string;
	description: string;
	image: null | File;
}

export default function UpdateProfileForm() {
	const { inputsState, onInputChangeHandler } = useForm<IInputsState>({
		nickname: 'Patrick',
		description: 'This is my not valid description.',
		image: null,
	});

	const initialImgURL =
		'https://hips.hearstapps.com/hmg-prod/images/how-to-tell-if-someone-likes-you-65b7cbdc8aa23.jpg?crop=1.00xw:0.624xh;0,0.257xh&resize=1120:*';

	return (
		<section
			aria-label='There you can change your profile data'
			className='mt-4'
		>
			<h2 className='hidden'>Update your profile</h2>
			<form className='max-w-[400px] mx-auto'>
				<FormImage
					label='Image'
					value={inputsState.image}
					onChange={onInputChangeHandler}
					initialImgURL={initialImgURL}
				/>
				<FormInput
					label='Nickname'
					id='nickname'
					placeholder=''
					type='text'
					onChange={onInputChangeHandler}
					value={inputsState.nickname}
				/>

				<FormInput
					label='Description'
					id='description'
					placeholder=''
					type='textarea'
					onChange={onInputChangeHandler}
					value={inputsState.description}
				/>

				<CustomButton
					styleType='primary'
					additionalClasses='mx-auto block'
				>
					Save
				</CustomButton>
			</form>
		</section>
	);
}
