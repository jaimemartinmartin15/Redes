import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  HeaderPrintComponent,
  ImageFullScreenModule,
  ResponsiveLayoutComponent,
  TerminalCodeComponent,
} from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { AComponent } from './rr/a/a.component';
import { AAAAComponent } from './rr/aaaa/aaaa.component';
import { CnameComponent } from './rr/cname/cname.component';
import { HinfoComponent } from './rr/hinfo/hinfo.component';
import { MxComponent } from './rr/mx/mx.component';
import { NsComponent } from './rr/ns/ns.component';
import { PtrComponent } from './rr/ptr/ptr.component';
import { SoaComponent } from './rr/soa/soa.component';
import { TxtComponent } from './rr/txt/txt.component';
import { WksComponent } from './rr/wks/wks.component';

@Component({
  selector: 'app-dns',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderPrintComponent,
    TerminalCodeComponent,
    ResponsiveLayoutComponent,
    ImageFullScreenModule,
    SoaComponent,
    NsComponent,
    AComponent,
    AAAAComponent,
    MxComponent,
    CnameComponent,
    PtrComponent,
    WksComponent,
    HinfoComponent,
    TxtComponent,
  ],
  templateUrl: './dns.component.html',
  styleUrls: ['./dns.component.scss'],
})
export class DnsComponent {
  public tab = 'SOA';
  public dnsResolvingDomainStep = 0;
}
