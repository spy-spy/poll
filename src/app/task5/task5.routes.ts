import { Routes } from '@angular/router';

import { Task5Component } from './task5.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Task5Component },
  { path: '**', redirectTo: '' }
];
