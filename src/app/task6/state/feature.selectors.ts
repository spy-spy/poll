import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { FeaturePartialState, FeatureState, FEATURE_KEY } from './feature.state';

// tslint:disable-next-line:no-namespace
export namespace fromFeatureQuerySelector {
  export const getFeature: MemoizedSelector<FeaturePartialState, FeatureState> = createFeatureSelector<FeatureState>(
    FEATURE_KEY.FEATURE
  );
}
