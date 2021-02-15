import * as actions from "../../actionCreators/usersActions";

export const initialState = {
  users: [],
  loading: false,
  beforeLoading: true,
  hasErrors: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USERS:
      return { ...state, loading: true, beforeLoading: false };
    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_USERS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
