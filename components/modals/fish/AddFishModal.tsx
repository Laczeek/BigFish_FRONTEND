'use client';

import Modal from '../Modal';
import FormInput from '../../form-related/FormInput';
import FormImage from '../../form-related/FormImage';
import FormSelect from '../../form-related/FormSelect';
import useForm from '@/hooks/useForm';
import CustomButton from '../../layout-related/CustomButton';

interface IInputsState {
	name: string;
	measurementType: string;
	measurement: number;
	description: string;
	image: null | File;
	whenCaught: string;
}

export default function AddFishModal() {
	const { inputsState, onInputChangeHandler } = useForm<IInputsState>({
		name: '',
		measurementType: '',
		measurement: 0,
		description: '',
		image: null,
		whenCaught: '',
	});


	const isButtonDisabled =
		Object.keys(inputsState).filter(
			(key) => !Boolean(inputsState[key as keyof typeof inputsState])
		).length !== 0;

	return (
		<Modal
			label='Add fish'
			header={
				<h2 className='text-2xl font-bold mb-6'>
					Add Fish to Your Profile
				</h2>
			}
		>
			<form className='max-w-[600px] mx-auto bg-light-bgSecondary dark:bg-dark-bgSecondary p-4 rounded-lg shadow shadow-light-border dark:shadow-dark-border max-h-[70vh] overflow-y-auto'>
				<FormInput
					label='Fish name'
					type='text'
					id='name'
					placeholder='Enter the name of a fish'
					onChange={onInputChangeHandler}
					value={inputsState.name}
				/>

				<FormInput
					label='When caught'
					type='date'
					id='whenCaught'
					placeholder='Enter when fish was caught'
					onChange={onInputChangeHandler}
					value={inputsState.whenCaught}
					max={new Date().toISOString().split('T')[0]}
					min={'2024-03-01'}
				/>

				<FormSelect
					label='Type of measurement'
					id='measurementType'
					onChange={onInputChangeHandler}
					value={inputsState.measurementType}
				>
					<optgroup label='Weight'>
						<option value='kg'>kg</option>
						<option value='lb'>lb</option>
					</optgroup>

					<optgroup label='Length'>
						<option value='cm'>cm</option>
						<option value='inch'>inch</option>
					</optgroup>
				</FormSelect>
				<FormInput
					label='Measurement'
					type='number'
					id='measurement'
					placeholder='Etner the fish measurement'
					onChange={onInputChangeHandler}
					value={inputsState.measurement}
				/>
				<FormInput
					label='Description'
					type='textarea'
					id='description'
					placeholder='Enter description'
					onChange={onInputChangeHandler}
					value={inputsState.description}
				/>
				<FormImage
					label='Image'
					initialImgURL={null}
					onChange={onInputChangeHandler}
					value={inputsState.image}
				/>

				<CustomButton
					styleType='primary'
					type='submit'
					additionalClasses='block ml-auto'
					disabled={isButtonDisabled}
				>
					Add Fish
				</CustomButton>
			</form>
		</Modal>
	);
}
