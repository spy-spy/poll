import { Routes } from '@angular/router';

import { Task3Component } from './task3.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Task3Component },
  { path: '**', redirectTo: '' }
];
