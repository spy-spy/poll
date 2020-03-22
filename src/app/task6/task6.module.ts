import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { Task6Component } from './task6.component';
import { routes } from './task6.routes';
import { FEATURE_KEY, featureReducers, FEATURE_REDUCERS } from './state/feature.state';
import { FeatureEffects } from './state/feature.effects';
import { ConversationEffects } from './state/conversation/conversation.effects';
import { FeatureFacade } from './state/feature.facade';
import { ConversationAsyncEffects } from './state/conversation-async/conversation-async.effects';
import { FeatureApiService } from './feature-api.service';
import { MessageEffects } from './state/message/message.effects';
import { MessageAsyncEffects } from './state/message-async/message-async.effects';



@NgModule({
  declarations: [
    Task6Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURE_KEY.FEATURE, FEATURE_REDUCERS),
    EffectsModule.forFeature([
      FeatureEffects,
      ConversationEffects,
      ConversationAsyncEffects,
      MessageEffects,
      MessageAsyncEffects
    ]),
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    FeatureFacade,
    { provide: FEATURE_REDUCERS, useValue: featureReducers },
    FeatureApiService
  ]
})
export class Task6Module { }
