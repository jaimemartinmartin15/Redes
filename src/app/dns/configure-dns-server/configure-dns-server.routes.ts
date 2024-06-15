import { Routes } from '@angular/router';
import { ConfigureDnsServerComponent } from './configure-dns-server.component';

export const CONFIGURE_DNS_SERVER_ROUTES: Routes = [
  {
    path: '',
    component: ConfigureDnsServerComponent,
    title: 'Configurar un servidor DNS - Redes',
    data: {
      metaTags: {
        description: 'Configuración desde cero de un servidor DNS BIND9.',
        keywords: ['dns', 'servidor', 'configuracion'],
      },
      headerPrint: {
        author: 'Jaime Martín Martín',
        date: '3 de diciembre de 2022',
      },
    },
  },
  { path: '**', redirectTo: '' },
];
