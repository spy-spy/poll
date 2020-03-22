import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task3Component implements OnInit {
  public myNumber$: Observable<number> = timer(0, 500).pipe(
    map(() => Math.random())
  );
  public numbers$: Observable<number[]>;

  constructor() { }

  public ngOnInit(): void {
    this.numbers$ = this.getNumber();
  }

  public getNumber(): Observable<number[]> {
    return this.myNumber$.pipe(
      bufferTime(2000)
    );
  }

}
