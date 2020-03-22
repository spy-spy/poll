import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { IdSelectorNum, ComparerNum, EntityAdapter } from '@ngrx/entity/src/models';

import { Conversation } from '../../interfaces';
import { ConversationActionsType, ConversationActionTypes } from './conversation.actions';

export interface ConversationState extends EntityState<Conversation> {
  selectedConversationId: number;
}

export const selectContactId: IdSelectorNum<Conversation> = (model: Conversation) => {
  return model.id;
};

export const sortConversation: ComparerNum<Conversation> = (
  a: Conversation,
  b: Conversation
): number => { return a.id - b.id; };

export const conversationAdapter: EntityAdapter<Conversation> = createEntityAdapter<Conversation>({
  selectId: selectContactId,
  sortComparer: sortConversation
});

export const conversationInitialState: ConversationState = conversationAdapter.getInitialState({
  selectedConversationId: null
});

export function conversationReducer(
  state: ConversationState = conversationInitialState,
  action: ConversationActionsType
): ConversationState {
  switch (action.type) {
    case ConversationActionTypes.AddAll: {
      return conversationAdapter.setAll(action.payload.models, state);
    }
    case ConversationActionTypes.Add: {
      return conversationAdapter.addOne(action.payload.model, state);
    }
    case ConversationActionTypes.AddMany: {
      return conversationAdapter.addMany(action.payload.models, state);
    }
    case ConversationActionTypes.Upsert: {
      return conversationAdapter.upsertOne(action.payload.model, state);
    }
    case ConversationActionTypes.UpsertMany: {
      return conversationAdapter.upsertMany(action.payload.models, state);
    }
    case ConversationActionTypes.Update: {
      return conversationAdapter.updateOne(action.payload.change, state);
    }
    case ConversationActionTypes.UpdateMany: {
      return conversationAdapter.updateMany(action.payload.changes, state);
    }
    case ConversationActionTypes.MapMany: {
      return conversationAdapter.map(action.payload.entityMap, state);
    }
    case ConversationActionTypes.Delete: {
      return conversationAdapter.removeOne(action.payload.id, state);
    }
    case ConversationActionTypes.DeleteMany: {
      return conversationAdapter.removeMany(action.payload.ids, state);
    }
    case ConversationActionTypes.DeleteManyByPredicate: {
      return conversationAdapter.removeMany(action.payload.predicate, state);
    }
    case ConversationActionTypes.Clear: {
      return conversationAdapter.removeAll({ ...state, selectedConversationId: null });
    }
    case ConversationActionTypes.Select: {
      return {
        ...state,
        selectedConversationId: action.payload.id
      }
    }
    default: {
      return state;
    }
  }
}
