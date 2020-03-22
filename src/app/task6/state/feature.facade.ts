import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Conversation, Message } from '../interfaces';
import { FeaturePartialState } from './feature.state';
import { conversationQuery } from './conversation/conversation.selectors';
import { conversationAsyncQuery } from './conversation-async/conversation-async.selectors';
import { ModelStatus } from '../enums';
import { fromConversationAsyncActions } from './conversation-async/conversation-async.actions';
import { fromConversationActions } from './conversation/conversation.actions';
import { messageQuery } from './message/message.selectors';
import { messageAsyncQuery } from './message-async/message-async.selectors';
import { fromMessageAsyncActions } from './message-async/message-async.actions';
import { fromFeatureActions } from './feature.actions';

@Injectable()
export class FeatureFacade {
  public readonly conversations$: Observable<Conversation[]> = this.store.pipe(select(conversationQuery.getAll));
  public readonly selectedConversationId$: Observable<number> = this.store.pipe(select(conversationQuery.getSelectedId));

  public readonly conversationLoadingStatus$: Observable<boolean> = this.store.pipe(select(conversationAsyncQuery.getLoadingStatus));
  public readonly conversationStatus$: Observable<ModelStatus> = this.store.pipe(select(conversationAsyncQuery.getStatus));
  public readonly conversationError$: Observable<string> = this.store.pipe(select(conversationAsyncQuery.getError));

  public readonly messages$: Observable<Message[]> = this.store.pipe(select(messageQuery.getAll));

  public readonly messageLoadingStatus$: Observable<boolean> = this.store.pipe(select(messageAsyncQuery.getLoadingStatus));
  public readonly messageStatus$: Observable<ModelStatus> = this.store.pipe(select(messageAsyncQuery.getStatus));
  public readonly messageError$: Observable<string> = this.store.pipe(select(messageAsyncQuery.getError));

  constructor(private store: Store<FeaturePartialState>) { }

  public loadConversations(): void {
    this.store.dispatch(new fromConversationAsyncActions.Load());
  }

  public selectConversation(id: number): void {
    this.store.dispatch(new fromConversationActions.Select({ id }));
  }

  public loadMessages(conversationId: number): void {
    this.store.dispatch(new fromMessageAsyncActions.Load({ conversationId }));
  }

  public reset(): void {
    this.store.dispatch(new fromFeatureActions.Reset());
  }
}
