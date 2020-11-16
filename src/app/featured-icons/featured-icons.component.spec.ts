import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedIconsComponent } from './featured-icons.component';

describe('FeaturedIconsComponent', () => {
  let component: FeaturedIconsComponent;
  let fixture: ComponentFixture<FeaturedIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
