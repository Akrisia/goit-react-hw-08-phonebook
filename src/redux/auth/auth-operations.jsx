import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
    'auth/register',
    async credentials => {
        try {
            const { data } = await axios.post(`${BASE_URL}/users/signup`, credentials);
            return data;
        } catch (error) {
            console.log(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async credentials => {
        try {
            const { data } = await axios.post(`${BASE_URL}/users/login`, credentials);
            return data;
        } catch (error) {
            console.log(error.message);
        }
    }
);