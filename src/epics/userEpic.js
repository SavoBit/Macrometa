import { ajax } from "rxjs/ajax";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs";

import {
  GET_USER,
  getUserSuccess,
  getUserFailure,
} from "../actionCreators/usersActions";

export const userEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_USER),
    mergeMap((action) =>
      ajax.getJSON(
        `https://jsonplaceholder.typicode.com/users/${action.payload}`
      )
    ),
    map((response) => getUserSuccess(response)),
    catchError(() => of(getUserFailure()))
  );
