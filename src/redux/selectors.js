export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const userSelector = {
	selectUser(state) {
		return state.user.user;
	},
	selectUserIsLoggedIn(state) {
		return state.user.isLoggedIn;
	},
	selectUserIsFetchingCurrent(state) {
		return state.user.isFetchingCurrent;
	}
}