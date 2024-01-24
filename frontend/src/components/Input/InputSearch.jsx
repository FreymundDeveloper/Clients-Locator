import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch, FiMap } from 'react-icons/fi';
import { ButtonAction } from '../../components';

export const InputSearch = ({ onSelectionChange, onClick }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);

        onSelectionChange(`name=${value}`);
    };

    const handleSearchButtonClick = (event) => {
        event.preventDefault();
        onClick(); 
    };

    const handleContainerButtonClick = () => {
    };

    return (
        <SearchContainer>
            <InputContainer>
                <InputSearchStyle type="text" placeholder="Search..." value={searchValue} onChange={handleInputChange} />
                <ButtonSearch onClick={handleSearchButtonClick}>
                    <FiSearch size={20} color='#FFF'/>
                </ButtonSearch>
            </InputContainer>
            <ButtonContainer>
                <ButtonAction variant={"search"} onClick={handleContainerButtonClick}><FiMap /></ButtonAction>
            </ButtonContainer>
        </SearchContainer>
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

const ButtonSearch = styled.button`
    background-color: ${(props) => props.theme.color.formColor};
    border-radius: 0px 14px 14px 0px;
    margin-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s;
    border: 1px solid #ccc;

    &:hover {
        background-color: ${(props) => props.theme.color.buttonActionColor};
    }
`;

const SearchContainer = styled.form`
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