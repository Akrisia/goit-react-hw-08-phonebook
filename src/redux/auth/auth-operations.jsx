import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://connections-api.herokuapp.com/';

export const addUser = createAsyncThunk(
    'users/addUser',
    async ({ name, email, password }) => {
        const { data } = await axios.post(`${BASE_URL}/users/signup`, { name, email, password });
        return data;
    }
);

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async ({email, password}) => {
        const { data } = await axios.post(`${BASE_URL}/users/login`, { email, password });
        return data;
    }
);