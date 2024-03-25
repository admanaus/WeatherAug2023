import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeatherComponent } from './display-weather.component';

describe('DisplayWeatherComponent', () => {
  let component: DisplayWeatherComponent;
  let fixture: ComponentFixture<DisplayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
