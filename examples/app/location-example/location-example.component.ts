import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'location-example',
	templateUrl: 'location-example.component.html'
})
export class LocationExampleComponent implements OnInit {
	private current: number = 0;
	private _locations = [{
		coordinates: [
			48.01976,
			37.85854
		]
	}, {
		coordinates: [
			48.0433,
			37.88854
		]
	}];

	ngOnInit() { }

	public locationPos = this._locations[this.current];

	public locationName: string = 'Donetsk, Kadievskaya st.'

	public changeLocation() {
		this.current = this.current == 0 ? 1 : 0;
		this.locationPos = this._locations[this.current];
	}
}