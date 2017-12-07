import { TestBed, inject } from '@angular/core/testing';

import { LocationEditExampleComponent } from './location-edit-example.component';

describe('a location-edit-example component', () => {
	let component: LocationEditExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LocationEditExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LocationEditExampleComponent], (LocationEditExampleComponent) => {
		component = LocationEditExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});