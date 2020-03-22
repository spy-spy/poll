import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Theame } from './enums';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public theame$: Observable<Theame>;

  constructor(private appService: AppService) { }

  public ngOnInit(): void {
    this.theame$ = this.appService.theame$;
  }
}
