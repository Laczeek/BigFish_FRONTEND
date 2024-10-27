import { ChangeEvent, useState } from "react";

export default function useForm<T extends object>(initialState: T) {
    const [inputsState, setInputsState] = useState(initialState);
    
    const onInputChangeHandler = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setInputsState((prevState) => ({ ...prevState, [name]: value }));
	};

    return {
        inputsState,
        onInputChangeHandler,
        
    }
}