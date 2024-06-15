import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalsContainerDirective, RestoreScrollService, SeoService } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ModalsContainerDirective],
  template: `
    <router-outlet></router-outlet>
    <ng-container appModalsContainer></ng-container>
  `,
  styles: [':host{ display: block; }'],
})
export class AppComponent {
  public constructor(readonly seoService: SeoService, readonly restoreScrollService: RestoreScrollService) {
    seoService.listenNavigationEvents();
    restoreScrollService.listenScrollRestoration();
  }
}
