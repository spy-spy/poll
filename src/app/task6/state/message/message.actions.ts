import { Action } from '@ngrx/store';
import { Update, EntityMap, Predicate } from '@ngrx/entity';

import { Message } from '../../interfaces';

export enum MessageActionTypes {
  AddAll = '[Message] Add All',
  Add = '[Message] Add',
  AddMany = '[Message] Add Many',
  Upsert = '[Message] Upsert',
  UpsertMany = '[Message] Upsert Many',
  Update = '[Message] Update',
  UpdateMany = '[Message] Update Many',
  MapMany = '[Message] Map Many',
  Delete = '[Message] Delete',
  DeleteMany = '[Message] Delete Many',
  DeleteManyByPredicate = '[Message] Delete Many By Predicate',
  Clear = '[Message] Clear'
}

// tslint:disable-next-line:no-namespace
export namespace fromMessageActions {
  export class AddAllAction implements Action {
    public readonly type: MessageActionTypes.AddAll = MessageActionTypes.AddAll;

    constructor(public payload: { models: Message[] }) { }
  }

  export class AddAction implements Action {
    public readonly type: MessageActionTypes.Add = MessageActionTypes.Add;

    constructor(public payload: { model: Message }) { }
  }

  export class AddManyAction implements Action {
    public readonly type: MessageActionTypes.AddMany = MessageActionTypes.AddMany;

    constructor(public payload: { models: Message[] }) { }
  }

  export class UpsertAction implements Action {
    public readonly type: MessageActionTypes.Upsert = MessageActionTypes.Upsert;

    constructor(public payload: { model: Message }) { }
  }

  export class UpsertManyAction implements Action {
    public readonly type: MessageActionTypes.UpsertMany = MessageActionTypes.UpsertMany;

    constructor(public payload: { models: Message[] }) { }
  }

  export class UpdateAction implements Action {
    public readonly type: MessageActionTypes.Update = MessageActionTypes.Update;

    constructor(public payload: { change: Update<Message> }) { }
  }

  export class UpdateManyAction implements Action {
    public readonly type: MessageActionTypes.UpdateMany = MessageActionTypes.UpdateMany;

    constructor(public payload: { changes: Array<Update<Message>> }) { }
  }

  export class MapManyAction implements Action {
    public readonly type: MessageActionTypes.MapMany = MessageActionTypes.MapMany;

    constructor(public payload: { entityMap: EntityMap<Message> }) { }
  }

  export class DeleteAction implements Action {
    public readonly type: MessageActionTypes.Delete = MessageActionTypes.Delete;

    constructor(public payload: { id: number }) { }
  }

  export class DeleteManyAction implements Action {
    public readonly type: MessageActionTypes.DeleteMany = MessageActionTypes.DeleteMany;

    constructor(public payload: { ids: number[] }) { }
  }

  export class DeleteManyByPredicateAction implements Action {
    public readonly type: MessageActionTypes.DeleteManyByPredicate = MessageActionTypes.DeleteManyByPredicate;

    constructor(public payload: { predicate: Predicate<Message> }) { }
  }

  export class ClearAction implements Action {
    public readonly type: MessageActionTypes.Clear = MessageActionTypes.Clear;
  }
}

export type MessageActionsType =
  | fromMessageActions.AddAllAction
  | fromMessageActions.AddAction
  | fromMessageActions.AddManyAction
  | fromMessageActions.UpsertAction
  | fromMessageActions.UpsertManyAction
  | fromMessageActions.UpdateAction
  | fromMessageActions.UpdateManyAction
  | fromMessageActions.MapManyAction
  | fromMessageActions.DeleteAction
  | fromMessageActions.DeleteManyAction
  | fromMessageActions.DeleteManyByPredicateAction
  | fromMessageActions.ClearAction;
