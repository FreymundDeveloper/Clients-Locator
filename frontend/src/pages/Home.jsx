import React from 'react';
//import axios from 'axios';
import { ContainerHome, FormRegister, InputSearch } from '../components';

export const Home = () => {
    return (
        <ContainerHome>
            <FormRegister user={{}} updateField={() => {}} save={() => {}} />
            <InputSearch type="text" onSelectionChange={() => {}} onClick={() => {}} />
        </ContainerHome>
    );
};