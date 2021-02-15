export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

export const getComments = (payload) => ({
  type: GET_COMMENTS,
  payload: payload,
});

export const getCommentsSuccess = (comments) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments,
});

export const getCommentsFailure = () => ({
  type: GET_COMMENTS_FAILURE,
});
