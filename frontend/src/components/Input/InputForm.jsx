import React, { useState } from "react";
import styled from "styled-components";

export const InputForm = (props) => {
    const { format, name, value, onChange, placeholder } = props;

    const [isValid, setIsValid] = useState(true);

    const handleChange = (event) => {
        const { value } = event.target;

        if (format === "email") {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value.length === 0) {
                setIsValid(true);
                onChange(event);
            } else {
                setIsValid(false);
            }
        } else {
            onChange(event);
        }
    };

    /*const handleBlur = () => {
        if (format === "email" && !isValid) {
            onChange({ target: { value: "" } });
        }
    };onBlur={handleBlur}*/

    return (
        <>
            <StyledInput type={format} name={name} value={value} onChange={handleChange} placeholder={placeholder} />
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
