import { ajax } from "rxjs/ajax";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs";

import {
  GET_POST,
  getPostSuccess,
  getPostFailure,
} from "../actionCreators/postsActions";

export const postEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_POST),
    mergeMap((action) =>
      ajax.getJSON(
        `https://jsonplaceholder.typicode.com/posts/${action.payload}`
      )
    ),
    map((response) => getPostSuccess(response)),
    catchError(() => of(getPostFailure()))
  );
