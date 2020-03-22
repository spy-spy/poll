import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { ConversationAsyncActionTypes, fromConversationAsyncActions } from '../conversation-async/conversation-async.actions';
import { map } from 'rxjs/operators';
import { fromConversationActions } from './conversation.actions';

@Injectable()
export class ConversationEffects {
  @Effect() public load$: Observable<Action> = this.actions$.pipe(
    ofType(ConversationAsyncActionTypes.LoadSuccess),
    map(({ payload: { models } }: fromConversationAsyncActions.LoadSuccess) => {
      return new fromConversationActions.AddAllAction({ models });
    })
  )

  constructor(private actions$: Actions) { }
}
