import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderPrintComponent, ResponsiveLayoutComponent, TerminalCodeComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-configure-dns-server',
  standalone: true,
  imports: [CommonModule, RouterLink, ResponsiveLayoutComponent, HeaderPrintComponent, TerminalCodeComponent],
  templateUrl: './configure-dns-server.component.html',
  styleUrls: ['./configure-dns-server.component.scss'],
})
export class ConfigureDnsServerComponent {}
