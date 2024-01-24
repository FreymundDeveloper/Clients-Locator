import React from "react";
import styled from "styled-components";

export const ButtonAction = ({ onClick, children }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.color.buttonColor};
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 14px;
    cursor: pointer;
`;