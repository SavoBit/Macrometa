import * as actions from "../../actionCreators/commentsAction";

export const initialState = {
  comments: [],
  loading: false,
  beforeLoading: true,
  hasErrors: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return { ...state, loading: true, beforeLoading: false };
    case actions.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_COMMENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
