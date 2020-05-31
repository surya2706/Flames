import { mergeMap, map, catchError } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

import { SUBMIT_INPUT, SUBMIT_FAILED, showResponse } from '../actions/actions';
import { of } from 'rxjs';

const submitInputEpic = (action$) =>
  action$.pipe(
    ofType(SUBMIT_INPUT),
    mergeMap((action) =>
      ajax({
        url: `/getResult`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name_1: action.name_1,
          name_2: action.name_2,
        }),
      }).pipe(
        map(({ response }) =>
          showResponse(action.name_1, action.name_2, response.letter)
        ),
        catchError((err) =>
          of({
            type: SUBMIT_FAILED,
            error: true,
            payload: err.xhr.response,
          })
        )
      )
    )
  );

const rootEpic = combineEpics(submitInputEpic);

export default rootEpic;
