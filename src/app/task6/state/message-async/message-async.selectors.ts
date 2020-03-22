import { MemoizedSelector, createSelector } from '@ngrx/store';

import { FeaturePartialState, FeatureState, FEATURE_STATE_KEY } from '../feature.state';
import { AsyncState } from '../../interfaces';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { ModelStatus } from '../../enums';

// tslint:disable-next-line:no-namespace
export namespace messageAsyncQuery {
  export const getState: MemoizedSelector<FeaturePartialState, AsyncState> = createSelector(
    fromFeatureQuerySelector.getFeature,
    (state: FeatureState) => state[FEATURE_STATE_KEY.MESSAGE_ASYNC_STATE]
  );

  export const getLoadingStatus: MemoizedSelector<FeaturePartialState, boolean> = createSelector(
    getState,
    (state: AsyncState) => state.loading
  );

  export const getStatus: MemoizedSelector<FeaturePartialState, ModelStatus> = createSelector(
    getState,
    (state: AsyncState) => state.status
  );

  export const getError: MemoizedSelector<FeaturePartialState, string> = createSelector(
    getState,
    (state: AsyncState) => state.error
  );
}
