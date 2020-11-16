import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxBootstrapGlobalIconsComponent } from './components/ngx-bootstrap-global-icons/ngx-bootstrap-global-icons.component';
import { NgxBootstrapIconsLibComponent } from './components/ngx-bootstrap-icons.component';
import { Icons } from './providers/icon.provider';

@NgModule({
  declarations: [
    NgxBootstrapIconsLibComponent,
    NgxBootstrapGlobalIconsComponent,
  ],
  exports: [NgxBootstrapIconsLibComponent, NgxBootstrapGlobalIconsComponent],
})
export class NgxBootstrapIconsModule {
  /*   constructor(@Optional() private icons: Icons) {
    if (!this.icons) {
      throw new Error(
        "No icon provided. Make sure to use 'NgxBootstrapIconsModule.pick({ ... })' when importing the module\n"
      );
    }
  } */

  static pick(icons: {
    [key: string]: string;
  }): ModuleWithProviders<NgxBootstrapIconsModule> {
    return {
      ngModule: NgxBootstrapIconsModule,
      providers: [{ provide: Icons, multi: true, useValue: icons }],
    };
  }
}
