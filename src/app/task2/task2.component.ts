import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task2Component implements OnInit {
  public isLoggedIng$: Observable<boolean>;
  public isOnlineAndLoggedIn$: Observable<boolean>;
  public loggedInMessage$: Observable<string>;

  constructor(private appService: AppService) { }

  public ngOnInit(): void {
    this.isLoggedIng$ = this.appService.isUserLoggedIn$;

    this.isOnlineAndLoggedIn$ = combineLatest([
      this.appService.getOnlineStatus(),
      this.appService.isUserLoggedIn$
    ]).pipe(
      map(([isOnline, isLoggedIn]: [boolean, boolean]) => {
        return isOnline && isLoggedIn;
      })
    );

    this.loggedInMessage$ = this.isOnlineAndLoggedIn$.pipe(
      tap((isOnlineAndLoggedIn: boolean) => {
        if (isOnlineAndLoggedIn) {
          console.log('User is online and logged in');
        }
      }),
      map((isOnlineAndLoggedIn) => {
        return isOnlineAndLoggedIn
          ? 'User is online and logged in'
          : '';
      })
    );
  }

  public onLogin(): void {
    this.appService.logIn();
  }

  public onLogout(): void {
    this.appService.logout();
  }
}
