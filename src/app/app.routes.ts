import { Routes } from '@angular/router';
import { informationResolver } from '../resolvers/information.resolver';

export const routes: Routes = [
  {
    path: ':id',
    resolve: { information: informationResolver },
    loadComponent: () =>
      import('./description/description.component').then(m => m.Description),
  },
  { path: '', pathMatch: 'full', children: [] },  // accueil : colonne de droite vide
  { path: '**', redirectTo: '' },
];