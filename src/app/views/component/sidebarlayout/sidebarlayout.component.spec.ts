import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarlayoutComponent } from './sidebarlayout.component';

describe('SidebarlayoutComponent', () => {
  let component: SidebarlayoutComponent;
  let fixture: ComponentFixture<SidebarlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
