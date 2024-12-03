/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsDetailContainerComponent } from './trips-detail-container.component';

xdescribe('TripsDetailContainerComponent', () => {
  let component: TripsDetailContainerComponent;
  let fixture: ComponentFixture<TripsDetailContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripsDetailContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
