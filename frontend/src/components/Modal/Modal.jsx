import React from 'react';
import styled from 'styled-components';
import { ButtonClose, Title } from '../../components';

export const Modal = ({ isOpen, onClose }) => {
    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalContent>
                <ButtonClose onClose={onClose}></ButtonClose>
                <Title size={"form"}>Shortest Route</Title>
                <AboutContent>Travelled distance: {"000.00"}</AboutContent>
            </ModalContent>
        </ModalWrapper>
    );
};

const ModalWrapper = styled.div`
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    background: ${(props) => props.theme.color.modalColor};
    width: 50%;
    max-width: 70vh;
    padding: 20px;
    position: relative;
    border-radius: 12px;
`;

const AboutContent = styled.h5`
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: 10px;
    color: white;
    text-align: left;
`;