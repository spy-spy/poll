import { Routes } from '@angular/router';

import { Task6Component } from './task6.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Task6Component },
  { path: '**', redirectTo: '' }
];
