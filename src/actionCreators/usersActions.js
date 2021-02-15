export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = () => ({
  type: GET_USERS_FAILURE,
});

export const getUser = (payload) => ({
  type: GET_USER,
  payload: payload,
});

export const getUserSuccess = (users) => ({
  type: GET_USER_SUCCESS,
  payload: users,
});

export const getUserFailure = () => ({
  type: GET_USER_FAILURE,
});
