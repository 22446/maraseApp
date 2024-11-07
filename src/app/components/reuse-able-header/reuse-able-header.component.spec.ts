import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseAbleHeaderComponent } from './reuse-able-header.component';

describe('ReuseAbleHeaderComponent', () => {
  let component: ReuseAbleHeaderComponent;
  let fixture: ComponentFixture<ReuseAbleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseAbleHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReuseAbleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
