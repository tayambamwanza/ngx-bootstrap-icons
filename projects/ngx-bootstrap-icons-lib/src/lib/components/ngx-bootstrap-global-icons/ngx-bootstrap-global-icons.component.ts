import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-icon',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxBootstrapGlobalIconsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
