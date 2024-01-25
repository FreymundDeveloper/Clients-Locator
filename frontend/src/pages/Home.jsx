import React, { useState } from 'react';
import axios from 'axios';
import { ContainerHome, FormRegister, InputSearch, TableUsers } from '../components';

const initialState = {
    user: { name: '', email: '', phone: '', latitude: '', longitude: '' }
};

export const Home = () => {
    const [state, setState] = useState({ ...initialState });

    const Test = [
        {
            id: 1,
            name: "Baile Val",
            email: "blv@mail.com",
            latitude: -32.788447,
            longitude: -54.654066,
            phone: "+56995086469"
        }
    ]


    const updateField = (event) => {
        const user = { ...state.user };
        user[event.target.name] = event.target.value;
        setState({ user });
    };

    const save = async () => {
        if (Object.values(state.user).some((value) => value === '')) {
            console.error('Error, all fields must be filled in.');
            return;
        }

        const numericFields = ['phone', 'latitude', 'longitude'];

        numericFields.forEach((field) => {
            if (state.user[field] !== '') {
                const numericValue = Number(state.user[field]);

                if (!isNaN(numericValue)) state.user[field] = numericValue;
            }
        });

        try {
            const response = await axios.post('http://localhost:3001/clients', state.user);
            console.log('User created: ', response.data);
            window.location.reload();
        } catch (error) {
            console.error('Error to created user: ', error);
        }
    };



    return (
        <ContainerHome>
            <FormRegister user={state.user} updateField={(event) => updateField(event)} save={save} />
            <InputSearch type="text" onSelectionChange={() => {}} onClick={() => {}} />
            <TableUsers list={Test} />
        </ContainerHome>
    );
};