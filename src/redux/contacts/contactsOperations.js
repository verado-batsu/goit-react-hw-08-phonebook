import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

async function getContacts() {
	const response = await axios.get('/contacts');
	return response.data;
}

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
	try {
		return getContacts();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
})

export const addContact = createAsyncThunk('contacts/addContact',
	async (contact, thunkAPI) => {
	try {
		await axios.post('/contacts', contact);
		return getContacts();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
	})

export const deleteContact = createAsyncThunk('contacts/deleteContact',
	async (id, thunkAPI) => {
		try {
			await axios.delete(`/contacts/${id}`);
			return getContacts();
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
})

// export const fetchContacts = () => async dispatch => {
// 	try {
// 		dispatch(fetchingInProgress());
// 		const response = await axios.get('/contacts');
// 		const contacts = response.data;
// 		dispatch(fetchingSuccess(contacts));
// 	} catch (error) {
// 		dispatch(fetchingError(error.message));
// 	}
// }

// export const addContact = (contact) => async dispatch => {
// 	try {
// 		await axios.post('/contacts', contact);
// 		dispatch(fetchContacts());
// 	} catch (error) {
// 		dispatch(fetchingError(error.message));
// 	}
// }

// export const deleteContact = (id) => async dispatch => {
// 	try {
// 		// dispatch(fetchingInProgress());
// 		await axios.delete(`/contacts/${id}`);
// 		dispatch(fetchContacts());
// 	} catch (error) {
// 		// dispatch(fetchingError(error.message));
// 	}
// }


