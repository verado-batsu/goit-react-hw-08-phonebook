const { createSlice } = require("@reduxjs/toolkit");
const { signUp, logIn, logOut, fetchCurrentUser } = require("./userOperation");

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isFetchingCurrent: false,
}

const logInFulfilled = (state, {payload}) => {
	state.user = payload.user;
	state.token = payload.token;
	state.isLoggedIn = true;
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(signUp.fulfilled, logInFulfilled)
			.addCase(logIn.fulfilled, logInFulfilled)
			.addCase(logOut.fulfilled, (state) => {
				state.user = initialState.user;
				state.token = null;
				state.isLoggedIn = false;
			})
			.addCase(fetchCurrentUser.pending, (state) => {
				state.isFetchingCurrent = true;
			})
			.addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
				state.user = payload;
				state.isLoggedIn = true;
				state.isFetchingCurrent = false;
			})
			.addCase(fetchCurrentUser.rejected, (state, { payload }) => {
				state.isFetchingCurrent = false;
			})
	}
})


		

export const userReducer = userSlice.reducer;