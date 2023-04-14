const selectUser = state => state.auth.user;

const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectIsRefreshing = state => state.auth.isRefreshing;

const selectAuthError = state => state.auth.error;

export { selectUser, selectIsLoggedIn, selectIsRefreshing, selectAuthError };
