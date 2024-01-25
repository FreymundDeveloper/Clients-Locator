import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMap } from 'react-icons/fi';
import { ButtonAction, ContainerSearch, ButtonSearch, Modal } from '../../components';

export const InputSearch = ({ onSelectionChange, onClick }) => {
    const [searchValue, setSearchValue] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);

        onSelectionChange(`name=${value}`);
    };

    const handleSearchButtonClick = (event) => {
        event.preventDefault();
        onClick(); 
    };

    const openModal = (event) => {
        event.preventDefault();
        setModalOpen(true);
    };

    const closeModal = (event) => {
        event.preventDefault();
        setModalOpen(false);
    };

    return (
        <ContainerSearch>
            <InputContainer>
                <InputSearchStyle type="text" placeholder="Search..." value={searchValue} onChange={handleInputChange} />
                <ButtonSearch onClick={handleSearchButtonClick} />
            </InputContainer>
            <ButtonContainer>
                <ButtonAction variant={"search"} onClick={openModal} disabled={false}><FiMap /></ButtonAction>
            </ButtonContainer>
            <Modal isOpen={modalOpen} onClose={closeModal} />
        </ContainerSearch>
    );
};

const InputSearchStyle = styled.input`
    flex: 1;
    padding: 8px;
    font-size: 14px;
    border-radius: 14px 0px 0px 14px;
    max-width: 40%;
    border: 1px solid #ccc;
`;

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 96vh;
    margin: 0 auto;
    margin-left: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;