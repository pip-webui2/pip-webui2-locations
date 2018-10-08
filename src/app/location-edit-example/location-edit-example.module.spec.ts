import { LocationEditExampleModule } from './location-edit-example.module';

describe('LocationEditExampleModule', () => {
  let locationEditExampleModule: LocationEditExampleModule;

  beforeEach(() => {
    locationEditExampleModule = new LocationEditExampleModule();
  });

  it('should create an instance', () => {
    expect(locationEditExampleModule).toBeTruthy();
  });
});
