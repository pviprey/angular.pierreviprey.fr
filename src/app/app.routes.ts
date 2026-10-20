import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':id',
    loadComponent: () =>
      import('./description/description.component').then(m => m.Description),
  },
];