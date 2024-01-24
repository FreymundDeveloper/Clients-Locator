import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const ButtonSearch = ({ onClick }) => {
    return (
        <StyledButtonSearch onClick={onClick}>
            <FiSearch size={20} color='#FFF'/>
        </StyledButtonSearch>
    );
};

const StyledButtonSearch = styled.button`
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
