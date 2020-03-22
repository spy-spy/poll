import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Observable } from 'rxjs';

import { Theame } from '../enums';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task5Component implements OnInit {
  public theames: Theame[] = [Theame.Light, Theame.Dark];
  public theame$: Observable<Theame>;

  constructor(private appService: AppService) { }

  public ngOnInit(): void {
    this.theame$ = this.appService.theame$;
  }

  public onThemeChange(change: MatRadioChange): void {
    this.appService.setTheame(change.value);
  }

}
