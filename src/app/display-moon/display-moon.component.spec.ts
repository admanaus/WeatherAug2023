import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMoonComponent } from './display-moon.component';

describe('DisplayMoonComponent', () => {
  let component: DisplayMoonComponent;
  let fixture: ComponentFixture<DisplayMoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayMoonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
