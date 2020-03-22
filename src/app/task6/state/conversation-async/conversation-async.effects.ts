import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { ConversationAsyncActionTypes, fromConversationAsyncActions } from './conversation-async.actions';
import { FeatureApiService } from '../../feature-api.service';
import { Conversation } from '../../interfaces';

@Injectable()
export class ConversationAsyncEffects {
  constructor(
    private actions$: Actions,
    private featureApiService: FeatureApiService
  ) { }

  @Effect() public load$: Observable<Action> = this.actions$.pipe(
    ofType(ConversationAsyncActionTypes.Load),
    switchMap(() => {

      return this.featureApiService.getConversations().pipe(
        map((conversations: Conversation[]) => {

          return new fromConversationAsyncActions.LoadSuccess({ models: conversations });
        }),
        catchError(() => {
          return of(new fromConversationAsyncActions.LoadError());
        })
      )
    })
  )

  @Effect({ dispatch: false }) public loadError$: Observable<Action> = this.actions$.pipe(
    ofType(ConversationAsyncActionTypes.LoadError),
    tap(() => {
      alert('Something very bad happened :\'(');
    })
  )

}
