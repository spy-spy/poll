import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { Task1Component } from './task1.component';
import { routes } from './task1.routes';

@NgModule({
  declarations: [
    Task1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatIconModule
  ]
})
export class Task1Module { }
