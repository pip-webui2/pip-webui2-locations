import { TestBed, inject } from '@angular/core/testing';

import { LocationIpExampleComponent } from './location-ip-example.component';

describe('a location-ip-example component', () => {
	let component: LocationIpExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LocationIpExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LocationIpExampleComponent], (LocationIpExampleComponent) => {
		component = LocationIpExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});