import React from 'react';
import styled from 'styled-components';

export const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
    );
};

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

const LoadingText = styled.p`
    font-size: 16px;
    color: white;
`;