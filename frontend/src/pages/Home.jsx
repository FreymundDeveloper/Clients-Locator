import React from 'react';
//import axios from 'axios';
import { ContainerHome, FormRegister, InputSearch, TableUsers } from '../components';

export const Home = () => {
    const Test = [
        {
            id: 1,
            name: "Baile Val",
            email: "blv@mail.com",
            latitude: -32.788447,
            longitude: -54.654066,
            phone: "+56995086469"
        },
        {
            id: 2,
            name: "Jovarrals Vallindiwovh",
            email: "jv@mail.com",
            latitude: -32.788447,
            longitude: -54.654066,
            phone: "+56995086469"
        }
    ]

    return (
        <ContainerHome>
            <FormRegister user={{}} updateField={() => {}} save={() => {}} />
            <InputSearch type="text" onSelectionChange={() => {}} onClick={() => {}} />
            <TableUsers list={Test} />
        </ContainerHome>
    );
};