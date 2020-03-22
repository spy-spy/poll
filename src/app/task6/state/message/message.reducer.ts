import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { IdSelectorNum, ComparerNum, EntityAdapter } from '@ngrx/entity/src/models';

import { Message } from '../../interfaces';
import { MessageActionsType, MessageActionTypes } from './message.actions';

export interface MessageState extends EntityState<Message> { }

export const selectMessageId: IdSelectorNum<Message> = (model: Message) => model.id;

export const sortMessage: ComparerNum<Message> = (
  a: Message,
  b: Message
): number => { return a.id - b.id; };

export const messageAdapter: EntityAdapter<Message> = createEntityAdapter<Message>({
  selectId: selectMessageId,
  sortComparer: sortMessage
});

export const messageInitialState: MessageState = messageAdapter.getInitialState({});

export function messageReducer(
  state: MessageState = messageInitialState,
  action: MessageActionsType
): MessageState {
  switch (action.type) {
    case MessageActionTypes.AddAll: {
      return messageAdapter.setAll(action.payload.models, state);
    }
    case MessageActionTypes.Add: {
      return messageAdapter.addOne(action.payload.model, state);
    }
    case MessageActionTypes.AddMany: {
      return messageAdapter.addMany(action.payload.models, state);
    }
    case MessageActionTypes.Upsert: {
      return messageAdapter.upsertOne(action.payload.model, state);
    }
    case MessageActionTypes.UpsertMany: {
      return messageAdapter.upsertMany(action.payload.models, state);
    }
    case MessageActionTypes.Update: {
      return messageAdapter.updateOne(action.payload.change, state);
    }
    case MessageActionTypes.UpdateMany: {
      return messageAdapter.updateMany(action.payload.changes, state);
    }
    case MessageActionTypes.MapMany: {
      return messageAdapter.map(action.payload.entityMap, state);
    }
    case MessageActionTypes.Delete: {
      return messageAdapter.removeOne(action.payload.id, state);
    }
    case MessageActionTypes.DeleteMany: {
      return messageAdapter.removeMany(action.payload.ids, state);
    }
    case MessageActionTypes.DeleteManyByPredicate: {
      return messageAdapter.removeMany(action.payload.predicate, state);
    }
    case MessageActionTypes.Clear: {
      return messageAdapter.removeAll(state);
    }
    default: {
      return state;
    }
  }
}
