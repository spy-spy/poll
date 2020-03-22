import { AsyncState } from '../../interfaces';
import { ModelStatus } from '../../enums';
import { MessageAsyncActions, MessageAsyncActionTypes } from './message-async.actions';

export const messageAsyncInitialState: AsyncState = {
  loading: false,
  status: ModelStatus.Init
};

export function messageAsyncReducer(
  state: AsyncState = messageAsyncInitialState,
  action: MessageAsyncActions
): AsyncState {
  switch (action.type) {
    case MessageAsyncActionTypes.Reset: {
      return {
        ...messageAsyncInitialState
      };
    }
    case MessageAsyncActionTypes.Load: {
      return {
        ...state,
        loading: true,
        status: state.status === ModelStatus.Init ? ModelStatus.Init : ModelStatus.Pending
      };
    }
    case MessageAsyncActionTypes.LoadSuccess: {
      return {
        ...state,
        loading: false,
        status: ModelStatus.Success
      };
    }
    case MessageAsyncActionTypes.LoadError: {
      return {
        ...state,
        loading: false,
        status: ModelStatus.Error
      };
    }
    default: {
      return state;
    }
  }
}
