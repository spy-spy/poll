import { MemoizedSelector, createSelector } from '@ngrx/store';
import { FeaturePartialState, FeatureState, FEATURE_STATE_KEY } from '../feature.state';
import { MessageState, messageAdapter } from './message.reducer';
import { fromFeatureQuerySelector } from '../feature.selectors';
import { Message } from '../../interfaces';
import { EntitySelectors } from '@ngrx/entity/src/models';

// tslint:disable-next-line:no-namespace
export namespace messageQuery {
  export const getState: MemoizedSelector<FeaturePartialState, MessageState> = createSelector(
    fromFeatureQuerySelector.getFeature,
    (state: FeatureState) => state[FEATURE_STATE_KEY.MESSAGE_STATE]
  );

  export const {
    selectAll: getAll
  }: EntitySelectors<Message, FeaturePartialState> = messageAdapter.getSelectors(getState);
}
