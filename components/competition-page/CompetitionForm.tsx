import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';


import useForm from '@/hooks/useForm';
import FormInput from '../form-related/FormInput';
import FormSelect from '../form-related/FormSelect';
import CustomButton from '../layout-related/CustomButton';
import useAuthRequest from '@/hooks/useAuthRequest';
import { AppDispatch } from '@/store/store';
import { authActions } from '@/store/auth-slice';

export default function CompetitionForm() {
	const { inputsState, onInputChangeHandler } = useForm({
		name: '',
		measurementType: 'not defined',
		endDate: '',
	});
	const { sendAuthRequest, errorsObject, isLoading } = useAuthRequest();

	const dispatch: AppDispatch = useDispatch();

	const isBtnDisabled = Object.keys(inputsState).find((key) => {
		if (key === 'measurementType') {
			return (
				inputsState[key] === 'not defined' || inputsState[key] === ''
			);
		}
		return inputsState[key as keyof typeof inputsState] === '';
	});

	const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const data = await sendAuthRequest('/competitions', {
				method: 'POST',
				body: JSON.stringify(inputsState),
				headers: {
					'Content-type': 'application/json',
				},
			});

			dispatch(authActions.updateCompetitionId(data.competition._id));
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	return (
		<form className='max-w-[600px] mx-auto' onSubmit={submitHandler}>
			<FormInput
				id='name'
				label='Competition name'
				placeholder='Enter competition name'
				type='text'
				value={inputsState.name}
				onChange={onInputChangeHandler}
				error={errorsObject.name}
			/>
			<FormSelect
				id='measurementType'
				label='Type of measurement'
				value={inputsState.measurementType}
				onChange={onInputChangeHandler}
				error={errorsObject.measurementType}
			>
				<option value='weight'>Weight</option>
				<option value='length'>Length</option>
			</FormSelect>
			<FormInput
				id='endDate'
				label='End date'
				placeholder='Enter end date of the competition'
				type='date'
				value={inputsState.endDate}
				onChange={onInputChangeHandler}
				error={errorsObject.endDate}
			/>
			<CustomButton
				type='submit'
				styleType='primary'
				additionalClasses='block mx-auto mt-4'
				isDisabled={Boolean(isBtnDisabled)}
				isLoading={isLoading}
			>
				Create Competition
			</CustomButton>
		</form>
	);
}
