import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'task1' },
  { path: 'task1', loadChildren: () => import('./task1/task1.module').then(module => module.Task1Module) },
  { path: 'task2', loadChildren: () => import('./task2/task2.module').then(module => module.Task2Module) },
  { path: 'task3', loadChildren: () => import('./task3/task3.module').then(module => module.Task3Module) },
  { path: 'task4', loadChildren: () => import('./task4/task4.module').then(module => module.Task4Module) },
  { path: 'task5', loadChildren: () => import('./task5/task5.module').then(module => module.Task5Module) },
  { path: 'task6', loadChildren: () => import('./task6/task6.module').then(module => module.Task6Module) },
  { path: '**', redirectTo: '' }
];
