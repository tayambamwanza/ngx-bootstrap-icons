import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "bootstrap-icon",
  template: ` <p>ngx-global-bootstrap-icons works!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxGlobalBootstrapIconsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
