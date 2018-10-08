import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEditExampleComponent } from './location-edit-example.component';

describe('LocationEditExampleComponent', () => {
  let component: LocationEditExampleComponent;
  let fixture: ComponentFixture<LocationEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationEditExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationEditExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
