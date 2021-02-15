import { ajax } from "rxjs/ajax";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs";

import {
  GET_USERS,
  getUsersSuccess,
  getUsersFailure,
} from "../actionCreators/usersActions";

export const usersEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_USERS),
    mergeMap((action) => {
      return ajax.getJSON(`https://jsonplaceholder.typicode.com/users`);
    }),
    map((response) => getUsersSuccess(response)),
    catchError(() => of(getUsersFailure()))
  );
