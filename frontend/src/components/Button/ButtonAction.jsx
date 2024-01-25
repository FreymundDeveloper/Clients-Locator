import React from "react";
import styled from "styled-components";

export const ButtonAction = ({ onClick, children, variant, disabled }) => {
    return <StyledButton variant={variant} onClick={onClick} disabled={disabled}><ContentContainer>{children}</ContentContainer></StyledButton>;
}

const StyledButton = styled.button`
    background-color: ${(props) => props.variant === 'search' ? props.theme.color.buttonMapColor : props.theme.color.buttonActionColor};
    color: white;
    border: none;
    padding: ${(props) => props.variant === 'search' ? '10px' : '10px 20px'};
    font-size: 16px;
    margin-right: 10px;
    border-radius: ${(props) => props.variant === 'search' ? '18px' : '14px'};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const ContentContainer = styled.div`
    display: flex;
`;