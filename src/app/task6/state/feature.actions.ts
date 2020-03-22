import { Action } from '@ngrx/store';

export enum FeatureActionTypes {
  Reset = '[Feature] Reset'
}

// tslint:disable-next-line:no-namespace
export namespace fromFeatureActions {
  export class Reset implements Action {
    public readonly type: FeatureActionTypes.Reset = FeatureActionTypes.Reset;
  }
}

export type FeatureAction = fromFeatureActions.Reset;
