import { Action } from '@ngrx/store';

import { Message } from '../../interfaces';

export enum MessageAsyncActionTypes {
  Reset = '[Message Async] Reset',
  Load = '[Message Async] Load',
  LoadSuccess = '[Message Async] Load Success',
  LoadError = '[Message Async] Load Error'
}

// tslint:disable-next-line:no-namespace
export namespace fromMessageAsyncActions {
  export class Reset implements Action {
    public readonly type: MessageAsyncActionTypes.Reset = MessageAsyncActionTypes.Reset;
  }

  export class Load implements Action {
    public readonly type: MessageAsyncActionTypes.Load = MessageAsyncActionTypes.Load;

    constructor(public payload: { conversationId: number }) { }
  }

  export class LoadSuccess implements Action {
    public readonly type: MessageAsyncActionTypes.LoadSuccess = MessageAsyncActionTypes.LoadSuccess;

    constructor(public payload: { models: Message[] }) { }
  }

  export class LoadError implements Action {
    public readonly type: MessageAsyncActionTypes.LoadError = MessageAsyncActionTypes.LoadError;
  }
}

export type MessageAsyncActions =
  | fromMessageAsyncActions.Reset
  | fromMessageAsyncActions.Load
  | fromMessageAsyncActions.LoadSuccess
  | fromMessageAsyncActions.LoadError;
