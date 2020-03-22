import { MemoizedSelector, createSelector } from '@ngrx/store';
import { EntitySelectors } from '@ngrx/entity/src/models';

import { FeatureState, FEATURE_STATE_KEY, FeaturePartialState } from '../feature.state';
import { ConversationState, conversationAdapter } from './conversation.reducer';
import { Conversation } from '../../interfaces';
import { fromFeatureQuerySelector } from '../feature.selectors';

// tslint:disable-next-line:no-namespace
export namespace conversationQuery {
  export const getState: MemoizedSelector<FeaturePartialState, ConversationState> = createSelector(
    fromFeatureQuerySelector.getFeature,
    (state: FeatureState) => state[FEATURE_STATE_KEY.CONVERSATION_STATE]
  );

  export const getSelectedId: MemoizedSelector<FeaturePartialState, number> = createSelector(
    getState,
    (state: ConversationState) => state.selectedConversationId
  );

  export const {
    selectAll: getAll
  }: EntitySelectors<Conversation, FeaturePartialState> = conversationAdapter.getSelectors(getState);
}
