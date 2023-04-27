import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
	setAuth(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	clearAuth() {
		axios.defaults.headers.common.Authorization = ``;
	}
}

export const signUp = createAsyncThunk('user/signUp', async (user, thunkAPI) => {
	try {
		const { data } = await axios.post('/users/signup', user);
		token.setAuth(data.token);
		return data;
	} catch (error) {
		Notify.failure(error.response.data.message);
		return thunkAPI.rejectWithValue(error.message);
	}
})

export const logIn = createAsyncThunk('user/login', async (user, thunkAPI) => {
	try {
		const { data } = await axios.post('/users/logIn', user);
		token.setAuth(data.token);
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
})

export const logOut = createAsyncThunk('user/logOut', async (_, thunkAPI) => {
	try {
		await axios.post('/users/logout');
		token.clearAuth();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
})

export const fetchCurrentUser = createAsyncThunk('user/fetchCurrentUser', async (_, thunkAPI) => {
	try {
		const { user } = thunkAPI.getState();
		token.setAuth(user.token);
		const { data } = await axios.get('/users/current');
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
})