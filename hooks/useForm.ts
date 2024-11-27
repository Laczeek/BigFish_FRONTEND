import { useState } from 'react';

export default function useForm<T extends object>(initialState: T) {
	const [inputsState, setInputsState] = useState(initialState);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onInputChangeHandler = (fieldName: string, value: any) => {
		setInputsState((prevState) => ({ ...prevState, [fieldName]: value }));
	};

	const clearInputsState = () => {
		setInputsState(initialState);
	}

	return {
		inputsState,
		onInputChangeHandler,
		clearInputsState
	};
}
