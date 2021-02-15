import { ajax } from "rxjs/ajax";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs";

import {
  GET_COMMENTS,
  getCommentsSuccess,
  getCommentsFailure,
} from "../actionCreators/commentsAction";

export const commentsEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_COMMENTS),
    mergeMap((action) =>
      ajax.getJSON(
        `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`
      )
    ),
    map((response) => getCommentsSuccess(response)),
    catchError(() => of(getCommentsFailure()))
  );
