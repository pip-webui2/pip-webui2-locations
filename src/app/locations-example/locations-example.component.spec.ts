import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsExampleComponent } from './locations-example.component';

describe('LocationsExampleComponent', () => {
  let component: LocationsExampleComponent;
  let fixture: ComponentFixture<LocationsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
