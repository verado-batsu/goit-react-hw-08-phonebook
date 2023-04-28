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