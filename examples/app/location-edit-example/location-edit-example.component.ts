import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'location-edit-example',
	templateUrl: 'location-edit-example.component.html',
	styleUrls: ['./location-edit-example.component.scss']
})
export class LocationEditExampleComponent implements OnInit {

	ngOnInit() { }

	public onChangeLocation(data) {
		this.locationPos.coordinates = data.coordinates;
		this.locationName = data.locationName;
	}

	public disabled: boolean = false;
	public showInput: boolean = true;

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

	public locationPos = this._locations[this.current];

	public locationName: string = 'Donetsk, Kadievskaya st.'
}