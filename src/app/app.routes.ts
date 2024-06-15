import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sql',
    loadChildren: () => import('./dns/dns.routes').then((m) => m.DNS_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'sql',
  },
];
