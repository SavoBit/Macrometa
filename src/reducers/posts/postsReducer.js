import * as actions from "../../actionCreators/postsActions";

export const initialState = {
  posts: [],
  beforeLoading: true,
  loading: false,
  hasErrors: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true, beforeLoading: false };
    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
