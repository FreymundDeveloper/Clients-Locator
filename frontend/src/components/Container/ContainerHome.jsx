import React from 'react';
import styled from 'styled-components';

export const ContainerHome = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0;
`;