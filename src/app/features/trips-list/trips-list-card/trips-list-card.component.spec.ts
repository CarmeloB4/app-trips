/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsListCardComponent } from './trips-list-card.component';

xdescribe('TripsListCardComponent', () => {
  let component: TripsListCardComponent;
  let fixture: ComponentFixture<TripsListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripsListCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
