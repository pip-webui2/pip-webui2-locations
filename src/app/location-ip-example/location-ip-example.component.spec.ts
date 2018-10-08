import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationIpExampleComponent } from './location-ip-example.component';

describe('LocationIpExampleComponent', () => {
  let component: LocationIpExampleComponent;
  let fixture: ComponentFixture<LocationIpExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationIpExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationIpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
