import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { MessageAsyncActionTypes, fromMessageAsyncActions } from './message-async.actions';
import { FeatureApiService } from '../../feature-api.service';
import { Message } from '../../interfaces';
import { ConversationActionTypes, fromConversationActions } from '../conversation/conversation.actions';
import { fromMessageActions } from '../message/message.actions';

@Injectable()
export class MessageAsyncEffects {
  constructor(
    private actions$: Actions,
    private featureApiService: FeatureApiService
  ) { }

  @Effect() public select$: Observable<Action> = this.actions$.pipe(
    ofType(ConversationActionTypes.Select),
    map(({ payload: { id: conversationId } }: fromConversationActions.Select) => {
      return new fromMessageAsyncActions.Load({ conversationId });
    })
  )

  @Effect() public laod$: Observable<Action> = this.actions$.pipe(
    ofType(MessageAsyncActionTypes.Load),
    switchMap(({ payload: { conversationId } }: fromMessageAsyncActions.Load) => {
      return this.featureApiService.getMessages(conversationId).pipe(
        map((messages: Message[]) => {
          return new fromMessageAsyncActions.LoadSuccess({ models: messages });
        }),
        catchError(() => {
          return of(new fromMessageAsyncActions.LoadError());
        })
      )
    })
  )

  @Effect({ dispatch: false }) public loadError$: Observable<Action> = this.actions$.pipe(
    ofType(MessageAsyncActionTypes.LoadError),
    map(() => {
      alert('Something bad happened :\'(');
      return new fromMessageActions.ClearAction();
    })
  )
}
