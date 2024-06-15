import { Routes } from '@angular/router';

export const DNS_ROUTES: Routes = [
  {
    path: 'configurar-un-servidor',
    loadChildren: () => import('./configure-dns-server/configure-dns-server.routes').then((m) => m.CONFIGURE_DNS_SERVER_ROUTES),
  },
  {
    path: '',
    loadComponent: () => import('./dns.component').then((m) => m.DnsComponent),
    title: 'El servicio DNS - Redes',
    data: {
      metaTags: {
        description: 'Explicación desde cero del sistema de nombres de dominio. Aprende todo sobre este servicio tan usado en internet.',
        keywords: ['dns', 'sistema de nombres de dominio', 'dominio'],
      },
      headerPrint: {
        author: 'Jaime Martín Martín',
        date: '3 de noviembre de 2022',
      },
    },
  },
  { path: '**', redirectTo: '' },
];
