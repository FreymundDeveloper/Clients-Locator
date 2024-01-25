import React, { useState } from "react";
import styled from "styled-components";

export const InputForm = (props) => {
    const { format, name, value, onChange, placeholder } = props;

    const [isValid, setIsValid] = useState(true);

    const handleChange = (event) => {
        onChange(event);
    };

    const handleBlur = () => {
        if (format === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (value.length === 0 || emailRegex.test(value)) {
                setIsValid(true);
            } else {
                setIsValid(false);
                onChange({ target: { name, value: '' } });
            }
        }
    };

    return (
        <>
            <StyledInput type={format} name={name} value={value} onChange={handleChange} placeholder={placeholder} onBlur={handleBlur} />
            {!isValid && <ErrorMessage>Invalid Format.</ErrorMessage>}
        </>
    );
}

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 14px;
    box-sizing: border-box;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;
