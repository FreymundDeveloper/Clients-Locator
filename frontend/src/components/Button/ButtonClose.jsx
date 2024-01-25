import React from 'react';
import styled from 'styled-components';

export const ButtonClose = ({ onClose }) => {
    return (
      <CloseButton onClick={onClose}>&times;</CloseButton>
    );
};

const CloseButton = styled.button`
    background-color: ${(props) => props.theme.color.modalColor};
    border: none;
    color: white;
    font-size: 2rem;
    padding: 0px 10px;
    border-radius: 12px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: white;
`;
