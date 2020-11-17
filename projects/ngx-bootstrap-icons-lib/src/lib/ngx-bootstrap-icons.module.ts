import { ModuleWithProviders, NgModule, Optional } from '@angular/core';

import { NgxBootstrapIconsLibComponent } from './components/ngx-bootstrap-icons/ngx-bootstrap-icons.component';
import { Icons } from './providers/icon.provider';
import { NgxGlobalBootstrapIconsComponent } from './components/ngx-global-bootstrap-icons/ngx-global-bootstrap-icons.component';

@NgModule({
  declarations: [NgxBootstrapIconsLibComponent, NgxGlobalBootstrapIconsComponent],
  exports: [NgxBootstrapIconsLibComponent, NgxGlobalBootstrapIconsComponent],
})
export class NgxBootstrapIconsModule {
  constructor(@Optional() private icons: Icons) {
    if (!this.icons) throw new Error('No icon provided. Make sure to use \'NgxBootstrapIconsModule.pick({ ... })\' when importing the module\n');
  }

  static pick(icons: { [key: string]: string }): ModuleWithProviders<NgxBootstrapIconsModule> {
    return {
      ngModule: NgxBootstrapIconsModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons },
      ],
    };
  }
}
