/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsListContainerComponent } from './trips-list-container.component';

xdescribe('TripsListContainerComponent', () => {
  let component: TripsListContainerComponent;
  let fixture: ComponentFixture<TripsListContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripsListContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
