import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { routes } from './task2.routes';
import { Task2Component } from './task2.component';

@NgModule({
  declarations: [
    Task2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class Task2Module { }
