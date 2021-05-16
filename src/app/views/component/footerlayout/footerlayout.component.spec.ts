import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlayoutComponent } from './footerlayout.component';

describe('FooterlayoutComponent', () => {
  let component: FooterlayoutComponent;
  let fixture: ComponentFixture<FooterlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
