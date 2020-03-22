import { Component, AfterViewInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

import { AppService } from '../app.service';
import { Message } from '../interfaces';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task4Component implements AfterViewInit, OnDestroy {
  private destroySource: Subject<void> = new Subject();

  public messages$: Observable<Message[]>;
  public control: FormControl = new FormControl();

  constructor(private appService: AppService) { }

  public ngAfterViewInit(): void {
    this.messages$ = this.control.valueChanges.pipe(
      debounceTime(300),
      map((searchTerm: string) => searchTerm.trim()),
      filter(Boolean),
      distinctUntilChanged(),
      switchMap((searchTerm: string) => {
        return this.appService.searchMessages(searchTerm);
      })
    )
  }

  public ngOnDestroy(): void {
    this.destroySource.next();
    this.destroySource.complete();
  }

  public trackById(index: number, message: Message): number {
    return message.id;
  }

}
