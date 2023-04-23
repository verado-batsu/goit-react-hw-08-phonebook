import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOperations";

const contactsInitialState = {
	items: [],
	isLoading: false,
    error: null
}

const handlePending = state => {
	return {
		...state,
		isLoading: true
	}
};

const handleRejected = (state, action) => {
	return {
		...state,
		isLoading: false,
		error: action.payload,
	}
};

const handleFulfilled = (state, action) => {
	return {
		...state,
		items: [...action.payload],
		isLoading: false,
		error: null,
	}
}

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: contactsInitialState,
	extraReducers: builder => {
		builder
			.addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), handlePending)
			.addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), handleRejected)
			.addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled), handleFulfilled)
	}
})

export const contactsReducer = contactsSlice.reducer;
