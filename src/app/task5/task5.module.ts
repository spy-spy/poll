import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';

import { Task5Component } from './task5.component';
import { routes } from './task5.routes';

@NgModule({
  declarations: [
    Task5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatRadioModule
  ]
})
export class Task5Module { }
