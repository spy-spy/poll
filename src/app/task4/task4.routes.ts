import { Routes } from '@angular/router';

import { Task4Component } from './task4.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Task4Component },
  { path: '**', redirectTo: '' }
];
