import { Action } from '@ngrx/store';

import { Conversation } from '../../interfaces';

export enum ConversationAsyncActionTypes {
  Reset = '[Conversation Async] Reset',
  Load = '[Conversation Async] Load',
  LoadSuccess = '[Conversation Async] Load Success',
  LoadError = '[Conversation Async] Load Error'
}

// tslint:disable-next-line:no-namespace
export namespace fromConversationAsyncActions {
  export class Reset implements Action {
    public readonly type: ConversationAsyncActionTypes.Reset = ConversationAsyncActionTypes.Reset;
  }

  export class Load implements Action {
    public readonly type: ConversationAsyncActionTypes.Load = ConversationAsyncActionTypes.Load;
  }

  export class LoadSuccess implements Action {
    public readonly type: ConversationAsyncActionTypes.LoadSuccess = ConversationAsyncActionTypes.LoadSuccess;

    constructor(public payload: { models: Conversation[] }) { }
  }

  export class LoadError implements Action {
    public readonly type: ConversationAsyncActionTypes.LoadError = ConversationAsyncActionTypes.LoadError;
  }
}

export type ConversationAsyncActions =
  | fromConversationAsyncActions.Reset
  | fromConversationAsyncActions.Load
  | fromConversationAsyncActions.LoadSuccess
  | fromConversationAsyncActions.LoadError;
