import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi } from '@reduxjs/toolkit/query/react';

const axiosBaseQuery =
	({ baseUrl } = { baseUrl: '' }) =>
	async ({ url, method, data, params }) => {
		try {
			const result = await axios({ url: baseUrl + url, method, data, params })
			return { data: result.data }
    	} catch (axiosError) {
      		let err = axiosError
     		return {
        		error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
        		},
      		}
    	}
  	}

export const contactsApi = createApi({
	reducerPath: 'contactsApi',
	baseQuery: axiosBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
	endpoints: (builder) => ({
		fetchContacts: builder.query({
			query: () => ({url: '/contacts'}),
		}),
		addContact: builder.mutation({
			query: (contact) => {
				console.log(contact)
				return {
					url: '/contacts',
					method: 'POST',
					body: contact,
				}
			}
		}),
		deleteContact: builder.mutation({
			query: (id) => {
				return {
					url: `/contacts/${id}`,
					method: 'DELETE'
				}
			}
		}),
	})
})

export const {
	useFetchContactsQuery,
	useAddContactMutation,
	useDeleteContactMutation,
} = contactsApi;

// !====================================================================

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



