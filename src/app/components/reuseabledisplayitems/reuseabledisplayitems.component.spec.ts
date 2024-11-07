import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseabledisplayitemsComponent } from './reuseabledisplayitems.component';

describe('ReuseabledisplayitemsComponent', () => {
  let component: ReuseabledisplayitemsComponent;
  let fixture: ComponentFixture<ReuseabledisplayitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseabledisplayitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReuseabledisplayitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
