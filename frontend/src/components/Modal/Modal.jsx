import React from 'react';
import styled from 'styled-components';
import { ButtonClose, Title, TableRoute } from '../../components';

export const Modal = ({ isOpen, onClose }) => {
    const Test = {
        "optimizedRoute": [
            {
                "id": 15,
                "name": "Goid Val",
                "latitude": -32.788447,
                "longitude": -54.654066
            },
            {
                "id": 16,
                "name": "Baile Val",
                "latitude": -32.788447,
                "longitude": -54.654066
            }
        ],
        "minDistance": 4022.822803401694
    }
    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalContent>
                <ButtonClose onClose={onClose}></ButtonClose>
                <Title size={"form"}>Shortest Service Route</Title>
                <AboutContent>Travelled distance: {Test.minDistance.toFixed(2)} Km</AboutContent>
                <TableRoute list={Test.optimizedRoute}></TableRoute>
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
    border-radius: 14px;
`;

const AboutContent = styled.label`
    display: block;
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: 10px;
    color: white;
    text-align: left;
`;