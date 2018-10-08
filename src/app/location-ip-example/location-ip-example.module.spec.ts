import { LocationIpExampleModule } from './location-ip-example.module';

describe('LocationIpExampleModule', () => {
  let locationIpExampleModule: LocationIpExampleModule;

  beforeEach(() => {
    locationIpExampleModule = new LocationIpExampleModule();
  });

  it('should create an instance', () => {
    expect(locationIpExampleModule).toBeTruthy();
  });
});
