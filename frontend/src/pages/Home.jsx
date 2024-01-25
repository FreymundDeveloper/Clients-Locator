import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContainerHome, FormRegister, InputSearch, TableUsers, Loading } from '../components';

const initialState = {
    user: { name: '', email: '', phone: '', latitude: '', longitude: '' }
};

export const Home = () => {
    const [state, setState] = useState({ ...initialState });
    const [userList, setUserList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3001/clients?search=${searchValue}`);
                setUserList(response.data);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
            setLoading(false);
        };

        fetchData();
    }, [searchValue]);

    const save = async () => {
        if (Object.values(state.user).some((value) => value === '')) {
            console.error('Error, all fields must be filled in.');
            return;
        }

        const numericFields = ['latitude', 'longitude'];

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
    
    const updateField = (event) => {
        const user = { ...state.user };
        user[event.target.name] = event.target.value;
        setState({ user });
    };

    const handleSearchChange = (newValue) => {
        setSearchValue(newValue);
    };

    return (
        <ContainerHome>
            <FormRegister user={state.user} updateField={(event) => updateField(event)} save={save} />
            <InputSearch type="text" onSelectionChange={handleSearchChange} />
            {loading ? (
                <Loading />
            ) : (
                <TableUsers list={userList} />
            )}
        </ContainerHome>
    );
};