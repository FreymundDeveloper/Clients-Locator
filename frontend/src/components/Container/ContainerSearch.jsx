import React from 'react';
import styled from 'styled-components';

export const ContainerSearch = ({ children }) => {
    return (
        <StyledSearchContainer>{children}</StyledSearchContainer>
    );
};

const StyledSearchContainer = styled.form`
    background-color: ${(props) => props.theme.color.formColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 96vh;
    margin: 0 auto;
    margin-top: 5px;
    padding: 10px;
    border: 1px solid #ccc;
`;
