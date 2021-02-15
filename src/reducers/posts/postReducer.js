import * as actions from "../../actionCreators/postsActions";

export const initialState = {
  post: {},
  beforeLoading: true,
  loading: false,
  hasErrors: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POST:
      return { ...state, loading: true, beforeLoading: false };
    case actions.GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_POST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
