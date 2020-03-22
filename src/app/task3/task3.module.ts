import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Task3Component } from './task3.component';
import { routes } from './task3.routes';



@NgModule({
  declarations: [
    Task3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Task3Module { }
