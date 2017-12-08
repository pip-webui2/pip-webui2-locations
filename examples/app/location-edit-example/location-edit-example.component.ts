import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'location-edit-example',
	templateUrl: 'location-edit-example.component.html',
	styleUrls: ['./location-edit-example.component.scss']
})
export class LocationEditExampleComponent implements OnInit {

	ngOnInit() { }

	public onChangeLocation(data) {
		console.log('data', data);
	}

	public disabled: boolean = false;
}