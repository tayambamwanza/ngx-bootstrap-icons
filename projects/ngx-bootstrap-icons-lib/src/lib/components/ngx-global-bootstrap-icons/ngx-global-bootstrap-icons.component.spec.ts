import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGlobalBootstrapIconsComponent } from './ngx-global-bootstrap-icons.component';

describe('NgxGlobalBootstrapIconsComponent', () => {
  let component: NgxGlobalBootstrapIconsComponent;
  let fixture: ComponentFixture<NgxGlobalBootstrapIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGlobalBootstrapIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGlobalBootstrapIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
