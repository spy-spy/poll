import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MessageAsyncActionTypes, fromMessageAsyncActions } from '../message-async/message-async.actions';
import { fromMessageActions } from './message.actions';

@Injectable()
export class MessageEffects {
  @Effect() public load$: Observable<Action> = this.actions$.pipe(
    ofType(MessageAsyncActionTypes.LoadSuccess),
    map(({ payload: { models } }: fromMessageAsyncActions.LoadSuccess) => {
      return new fromMessageActions.AddAllAction({ models });
    })
  )

  constructor(private actions$: Actions) { }

}
