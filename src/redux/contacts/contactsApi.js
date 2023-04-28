import axios from "axios";
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
	baseQuery: axiosBaseQuery({
		baseUrl: 'https://connections-api.herokuapp.com',
	}),
	tagTypes: ['Contacts'],
	endpoints: (builder) => ({
		fetchContacts: builder.query({
			query: () => ({ url: '/contacts' }),
			providesTags: ['Contacts'],
		}),
		addContact: builder.mutation({
			query: (contact) => ({
				url: `/contacts`,
				method: 'POST',
				data: contact,
			}),
			invalidatesTags: ['Contacts'],
		}),
		deleteContact: builder.mutation({
			query: (id) => {
				return {
					url: `/contacts/${id}`,
					method: 'DELETE'
				}
			},
			invalidatesTags: ['Contacts'],
		}),
		fetchCurrentUser: builder.mutation({
			query: () => ({
				url: '/users/current',
				method: 'GET'
			}),
			invalidatesTags: ['Contacts'],
		}),
	}),
})

export const {
	useFetchContactsQuery,
	useAddContactMutation,
	useDeleteContactMutation,
	useFetchCurrentUserMutation,
} = contactsApi;




