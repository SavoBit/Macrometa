import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

import { postsEpic } from "../epics/postsEpic";
import { postEpic } from "../epics/postEpic";
import { usersEpic } from "../epics/usersEpic";
import { userEpic } from "../epics/userEpic";

import { commentsEpic } from "../epics/commentsEpic";

import postsReducer from "./posts/postsReducer";
import postReducer from "./posts/postReducer";
import commentsReducer from "./comments/commentsReducer";
import rotateReducer from "./rotateReducer";
import usersReducer from "./users/usersReducer";
import userReducer from "./users/userReducer";

export const rootEpic = combineEpics(
  postsEpic,
  postEpic,
  commentsEpic,
  usersEpic,
  userEpic
);

export const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  users: usersReducer,
  user: userReducer,
  comments: commentsReducer,
  rotate: rotateReducer,
});
