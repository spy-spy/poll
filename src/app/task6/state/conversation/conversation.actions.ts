import { Action } from '@ngrx/store';
import { EntityMap, Update, Predicate } from '@ngrx/entity';

import { Conversation } from '../../interfaces';

export enum ConversationActionTypes {
  AddAll = '[Conversation] Add All',
  Add = '[Conversation] Add',
  AddMany = '[Conversation] Add Many',
  Upsert = '[Conversation] Upsert',
  UpsertMany = '[Conversation] Upsert Many',
  Update = '[Conversation] Update',
  UpdateMany = '[Conversation] Update Many',
  MapMany = '[Conversation] Map Many',
  Delete = '[Conversation] Delete',
  DeleteMany = '[Conversation] Delete Many',
  DeleteManyByPredicate = '[Conversation] Delete Many By Predicate',
  Clear = '[Conversation] Clear',
  Select = '[Conversation] Select'
}

// tslint:disable-next-line: no-namespace
export namespace fromConversationActions {
  export class AddAllAction implements Action {
    public readonly type: ConversationActionTypes.AddAll = ConversationActionTypes.AddAll;

    constructor(public payload: { models: Conversation[] }) { }
  }

  export class AddAction implements Action {
    public readonly type: ConversationActionTypes.Add = ConversationActionTypes.Add;

    constructor(public payload: { model: Conversation }) { }
  }

  export class AddManyAction implements Action {
    public readonly type: ConversationActionTypes.AddMany = ConversationActionTypes.AddMany;

    constructor(public payload: { models: Conversation[] }) { }
  }

  export class UpsertAction implements Action {
    public readonly type: ConversationActionTypes.Upsert = ConversationActionTypes.Upsert;

    constructor(public payload: { model: Conversation }) { }
  }

  export class UpsertManyAction implements Action {
    public readonly type: ConversationActionTypes.UpsertMany = ConversationActionTypes.UpsertMany;

    constructor(public payload: { models: Conversation[] }) { }
  }

  export class UpdateAction implements Action {
    public readonly type: ConversationActionTypes.Update = ConversationActionTypes.Update;

    constructor(public payload: { change: Update<Conversation> }) { }
  }

  export class UpdateManyAction implements Action {
    public readonly type: ConversationActionTypes.UpdateMany = ConversationActionTypes.UpdateMany;

    constructor(public payload: { changes: Array<Update<Conversation>> }) { }
  }

  export class MapManyAction implements Action {
    public readonly type: ConversationActionTypes.MapMany = ConversationActionTypes.MapMany;

    constructor(public payload: { entityMap: EntityMap<Conversation> }) { }
  }

  export class DeleteAction implements Action {
    public readonly type: ConversationActionTypes.Delete = ConversationActionTypes.Delete;

    constructor(public payload: { id: number }) { }
  }

  export class DeleteManyAction implements Action {
    public readonly type: ConversationActionTypes.DeleteMany = ConversationActionTypes.DeleteMany;

    constructor(public payload: { ids: number[] }) { }
  }

  export class DeleteManyByPredicateAction implements Action {
    public readonly type: ConversationActionTypes.DeleteManyByPredicate = ConversationActionTypes.DeleteManyByPredicate;

    constructor(public payload: { predicate: Predicate<Conversation> }) { }
  }

  export class ClearAction implements Action {
    public readonly type: ConversationActionTypes.Clear = ConversationActionTypes.Clear;
  }

  export class Select implements Action {
    public readonly type: ConversationActionTypes.Select = ConversationActionTypes.Select;

    constructor(public payload: { id: number }) { }
  }
}

export type ConversationActionsType =
  | fromConversationActions.AddAllAction
  | fromConversationActions.AddAction
  | fromConversationActions.AddManyAction
  | fromConversationActions.UpsertAction
  | fromConversationActions.UpsertManyAction
  | fromConversationActions.UpdateAction
  | fromConversationActions.UpdateManyAction
  | fromConversationActions.MapManyAction
  | fromConversationActions.DeleteAction
  | fromConversationActions.DeleteManyAction
  | fromConversationActions.DeleteManyByPredicateAction
  | fromConversationActions.ClearAction
  | fromConversationActions.Select;
