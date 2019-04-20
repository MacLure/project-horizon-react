const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  token: JSON.parse(localStorage.getItem("jwt")) || null,
  errors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      let obj = Object.assign(state);
      obj.fetching = true;
      return obj;

    case "SET_USER_TOKEN":
      // console.log(action.payload)
      return { ...state, token: action.payload };

    case "FETCH_USERS_ERROR":
      return { ...state, fetching: false, error: action.payload };

    case "RECEIVE_USERS":
      return { ...state, fetching: true, users: action.payload };

    default:
      return state;
  }
};

export default reducer;
