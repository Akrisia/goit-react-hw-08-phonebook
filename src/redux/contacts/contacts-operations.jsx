import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async () => {
        const {data} = await axios.get(`/contacts`);
        return data;
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }) => {
        const { data } = await axios.post(`/contacts`, { name, number });
        return data;
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        await axios.delete(`/contacts/${id}`);
        return id;
    }
);


