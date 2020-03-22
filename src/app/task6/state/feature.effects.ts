import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { FeatureActionTypes } from './feature.actions';
import { switchMapTo } from 'rxjs/operators';
import { fromConversationActions } from './conversation/conversation.actions';
import { fromConversationAsyncActions } from './conversation-async/conversation-async.actions';
import { fromMessageActions } from './message/message.actions';
import { fromMessageAsyncActions } from './message-async/message-async.actions';

@Injectable()
export class FeatureEffects {
  @Effect() public reaset$: Observable<Action> = this.actions$.pipe(
    ofType(FeatureActionTypes.Reset),
    switchMapTo([
      new fromConversationActions.ClearAction(),
      new fromConversationAsyncActions.Reset(),
      new fromMessageActions.ClearAction(),
      new fromMessageAsyncActions.Reset()
    ])
  )


  constructor(private actions$: Actions) { }
}
