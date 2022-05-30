import { useState } from "react";


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const resetValues = () => {
        setValues(initialState);
    }

    const handleChage = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }


    return [values, handleChage, resetValues];
}