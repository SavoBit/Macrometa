import { ajax } from "rxjs/ajax";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs";

import {
  GET_POSTS,
  getPostsSuccess,
  getPostsFailure,
} from "../actionCreators/postsActions";

export const postsEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_POSTS),
    mergeMap((action) =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`)
    ),
    map((response) => getPostsSuccess(response)),
    catchError(() => of(getPostsFailure()))
  );
