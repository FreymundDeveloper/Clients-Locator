import React from "react";
import styled from "styled-components";

export const InputForm = (props) => {
    const { name, value, onChange, placeholder } = props;
    return <StyledInput type={"text"} name={name} value={value} onChange={onChange} placeholder={placeholder} />;
}

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 14px;
    box-sizing: border-box;
`;