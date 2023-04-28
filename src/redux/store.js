import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { filterReducer } from "./filterSlice";
import { userReducer } from "./user/userSlice";
import { contactsApi } from "./contacts/contactsApi";

const persistConfigUser = {
	key: 'user',
	storage,
	whitelist: ['token'],
}

const persistedUser = persistReducer(persistConfigUser, userReducer)

export const store = configureStore({
	reducer: {
		user: persistedUser,
		filter: filterReducer,
		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
})

export const persistor = persistStore(store);
