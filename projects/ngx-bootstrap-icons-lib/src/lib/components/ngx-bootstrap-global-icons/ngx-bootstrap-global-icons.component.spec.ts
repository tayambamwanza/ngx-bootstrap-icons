import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapGlobalIconsComponent } from './ngx-bootstrap-global-icons.component';

describe('NgxBootstrapGlobalIconsComponent', () => {
  let component: NgxBootstrapGlobalIconsComponent;
  let fixture: ComponentFixture<NgxBootstrapGlobalIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBootstrapGlobalIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapGlobalIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
