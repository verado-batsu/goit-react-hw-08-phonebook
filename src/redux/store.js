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

import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filterSlice";
import { userReducer } from "./user/userSlice";

const persistConfigUser = {
	key: 'user',
	storage,
	whitelist: ['token'],
}

const persistedUser = persistReducer(persistConfigUser, userReducer)

export const store = configureStore({
	reducer: {
		user: persistedUser,
		contacts: contactsReducer,
		filter: filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
