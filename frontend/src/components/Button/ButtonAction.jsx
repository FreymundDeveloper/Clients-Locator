import React from "react";
import styled from "styled-components";

export const ButtonAction = ({ onClick, children, variant }) => {
    return <StyledButton variant={variant} onClick={onClick}><ContentContainer>{children}</ContentContainer></StyledButton>;
}

const StyledButton = styled.button`
    background-color: ${(props) => props.variant === 'search' ? props.theme.color.buttonMapColor : props.theme.color.buttonActionColor};
    color: white;
    border: none;
    padding: ${(props) => props.variant === 'search' ? '10px' : '10px 20px'};
    font-size: 16px;
    margin-right: 10px;
    border-radius: ${(props) => props.variant === 'search' ? '18px' : '14px'};
    cursor: pointer;
`;

const ContentContainer = styled.div`
    display: flex;
`;