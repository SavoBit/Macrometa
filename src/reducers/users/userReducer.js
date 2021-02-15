import * as actions from "../../actionCreators/usersActions";

export const initialState = {
  user: {},
  beforeLoading: true,
  loading: false,
  hasErrors: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER:
      return { ...state, loading: true, beforeLoading: false };
    case actions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_USER_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
