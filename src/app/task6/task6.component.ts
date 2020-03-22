import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FeatureFacade } from './state/feature.facade';
import { Conversation, Message } from './interfaces';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task6Component implements OnInit, OnDestroy {
  public control: FormControl = new FormControl();

  public conversationsLoading$: Observable<boolean> = this.featureFacade.conversationLoadingStatus$;
  public conversations$: Observable<Conversation[]> = this.featureFacade.conversations$;
  public selectedConversationId$: Observable<number> = this.featureFacade.selectedConversationId$;

  public messageLoading$: Observable<boolean> = this.featureFacade.messageLoadingStatus$;
  public messages$: Observable<Message[]> = this.featureFacade.messages$;

  private destroySource: Subject<void> = new Subject();

  constructor(
    private featureFacade: FeatureFacade
  ) { }

  public ngOnInit(): void {
    this.featureFacade.loadConversations();

    this.control.valueChanges.pipe(
      takeUntil(this.destroySource)
    ).subscribe((id: number) => {
      this.featureFacade.selectConversation(id);
    });
  }

  public ngOnDestroy(): void {
    this.destroySource.next();
    this.destroySource.complete();
    this.featureFacade.reset();
  }

  public trackById(index: number, message: Message): number {
    return message.id;
  }
}
