import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, timer } from 'rxjs';
import { Post } from '../interfaces';
import { withLatestFrom, filter, switchMapTo } from 'rxjs/operators';

export const INTERVAL: number = 3000;

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task1Component implements OnInit {
  public poll$: Observable<Post[]>;

  constructor(private appService: AppService) { }

  public ngOnInit(): void {
    this.poll$ = timer(0, INTERVAL).pipe(
      withLatestFrom(this.appService.getOnlineStatus()),
      filter(([_, isOnline]: [number, boolean]) => {
        return isOnline;
      }),
      switchMapTo(this.appService.getPosts())
    );
  }

  public trackById(index: number, post: Post): number {
    return post.id;
  }

}
