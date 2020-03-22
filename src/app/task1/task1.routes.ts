import { Routes } from '@angular/router';

import { Task1Component } from './task1.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Task1Component },
  { path: '**', redirectTo: '' }
];
