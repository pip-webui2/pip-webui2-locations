import { LocationsExampleModule } from './locations-example.module';

describe('LocationsExampleModule', () => {
  let locationsExampleModule: LocationsExampleModule;

  beforeEach(() => {
    locationsExampleModule = new LocationsExampleModule();
  });

  it('should create an instance', () => {
    expect(locationsExampleModule).toBeTruthy();
  });
});
