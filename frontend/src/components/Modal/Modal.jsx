import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ButtonClose, Title, TableRoute } from '../../components';

export const Modal = ({ isOpen, onClose }) => {
    const [routeData, setRouteData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/clients/route');
                setRouteData(response.data);
            } catch (error) {
                console.error('Error to found data:', error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalContent>
                <ButtonClose onClose={onClose}></ButtonClose>
                <Title size={"form"}>Shortest Service Route</Title>
                <AboutContent>Travelled distance: {routeData?.minDistance ? routeData.minDistance.toFixed(2) : 'Not Found'} Km</AboutContent>
                <TableContainer>
                    <TableRoute list={routeData?.optimizedRoute || []}></TableRoute>
                </TableContainer>
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

const TableContainer = styled.div`
    max-height: 30vh; 
    overflow-y: auto; 
`;