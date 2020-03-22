import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { ConversationState, conversationReducer } from './conversation/conversation.reducer';
import { AsyncState } from '../interfaces';
import { conversationAsyncReducer } from './conversation-async/conversation-async.reducer';
import { MessageState, messageReducer } from './message/message.reducer';
import { messageAsyncReducer } from './message-async/message-async.reducer';

export enum FEATURE_KEY {
  FEATURE = 'conversations'
}

export enum FEATURE_STATE_KEY {
  CONVERSATION_STATE = 'conversationState',
  CONVERSATION_ASYNC_STATE = 'conversationAsyncState',
  MESSAGE_STATE = 'messageState',
  MESSAGE_ASYNC_STATE = 'messageAsyncState'
}

export interface FeatureState {
  [FEATURE_STATE_KEY.CONVERSATION_STATE]: ConversationState;
  [FEATURE_STATE_KEY.CONVERSATION_ASYNC_STATE]: AsyncState;
  [FEATURE_STATE_KEY.MESSAGE_STATE]: MessageState;
  [FEATURE_STATE_KEY.MESSAGE_ASYNC_STATE]: AsyncState;
}

export interface FeaturePartialState {
  readonly [FEATURE_KEY.FEATURE]: FeatureState;
}

export const featureReducers: ActionReducerMap<FeatureState> = {
  [FEATURE_STATE_KEY.CONVERSATION_STATE]: conversationReducer,
  [FEATURE_STATE_KEY.CONVERSATION_ASYNC_STATE]: conversationAsyncReducer,
  [FEATURE_STATE_KEY.MESSAGE_STATE]: messageReducer,
  [FEATURE_STATE_KEY.MESSAGE_ASYNC_STATE]: messageAsyncReducer
};

export const FEATURE_REDUCERS: InjectionToken<ActionReducerMap<FeatureState>> = new InjectionToken<ActionReducerMap<FeatureState>>(
  'FEATURE_REDUCERS'
);
