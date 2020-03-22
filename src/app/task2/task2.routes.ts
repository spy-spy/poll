import { Routes } from '@angular/router';

import { Task2Component } from './task2.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Task2Component },
  { path: '**', redirectTo: '' }
];
