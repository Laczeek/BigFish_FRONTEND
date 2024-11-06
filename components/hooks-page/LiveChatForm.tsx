'use client';
import { IoSend } from 'react-icons/io5';

import useForm from '@/hooks/useForm';
import FormInput from '../form-related/FormInput';
import CustomButton from '../layout-related/CustomButton';

export default function LiveChatForm() {
	const { inputsState, onInputChangeHandler } = useForm({ message: '' });

	return (
		<form>
			<div className='flex gap-x-1'>
				<div className='grow'>
					<FormInput
						label='Message'
						id='message'
						type='text'
						withoutLabel
						placeholder='Enter a message'
						value={inputsState.message}
						onChange={onInputChangeHandler}
					/>
				</div>
				<CustomButton
					type='submit'
					styleType='primary'
					additionalClasses='mt-4'
				>
					<IoSend />
				</CustomButton>
			</div>
		</form>
	);
}
