import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyMoonTripsComponent } from './honey-moon-trips.component';

describe('HoneyMoonTripsComponent', () => {
  let component: HoneyMoonTripsComponent;
  let fixture: ComponentFixture<HoneyMoonTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoneyMoonTripsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoneyMoonTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
