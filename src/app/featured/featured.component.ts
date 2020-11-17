import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
