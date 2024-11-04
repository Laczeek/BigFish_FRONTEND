import { ChangeEvent, useState } from 'react';

export default function useForm<T extends object>(initialState: T) {
	const [inputsState, setInputsState] = useState(initialState);

	const onInputChangeHandler = (fieldName: string, value: any) => {
		setInputsState((prevState) => ({ ...prevState, [fieldName]: value }));
	};

	return {
		inputsState,
		onInputChangeHandler,
	};
}
