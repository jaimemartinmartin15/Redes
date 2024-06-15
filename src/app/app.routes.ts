import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dns',
    loadChildren: () => import('./dns/dns.routes').then((m) => m.DNS_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'dns',
  },
];
