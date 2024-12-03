import { Routes } from '@angular/router';
import { TripsListContainerComponent } from './features/trips-list/trips-list-container/trips-list-container.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    loadComponent: () =>
      import(
        './features/trips-list/trips-list-container/trips-list-container.component'
      ).then((c) => c.TripsListContainerComponent),
  },
  {
    path: 'detail/:id',
    title: 'Trip detail',
    loadComponent: () =>
      import(
        './features/trips-detail/trips-detail-container/trips-detail-container.component'
      ).then((c) => c.TripsDetailContainerComponent),
  },
  { path: '**', component: TripsListContainerComponent },
];
