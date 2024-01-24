import React from 'react';
import styled from 'styled-components';

export const ContainerHome = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100vh;
    height: 100vh;
    margin: 20px 0 0 0;
`;