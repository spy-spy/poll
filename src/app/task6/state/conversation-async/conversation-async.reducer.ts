import { AsyncState } from '../../interfaces';
import { ModelStatus } from '../../enums';
import { ConversationAsyncActions, ConversationAsyncActionTypes } from './conversation-async.actions';

export const conversationAsyncInitialState: AsyncState = {
  loading: false,
  status: ModelStatus.Init
};

export function conversationAsyncReducer(
  state: AsyncState = conversationAsyncInitialState,
  action: ConversationAsyncActions
): AsyncState {
  switch (action.type) {
    case ConversationAsyncActionTypes.Reset: {
      return {
        ...conversationAsyncInitialState
      };
    }
    case ConversationAsyncActionTypes.Load: {
      return {
        ...state,
        loading: true,
        status: state.status === ModelStatus.Init ? ModelStatus.Init : ModelStatus.Pending
      };
    }
    case ConversationAsyncActionTypes.LoadSuccess: {
      return {
        ...state,
        loading: false,
        status: ModelStatus.Success
      };
    }
    case ConversationAsyncActionTypes.LoadError: {
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
