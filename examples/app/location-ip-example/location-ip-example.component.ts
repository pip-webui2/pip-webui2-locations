import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'location-ip-example',
	templateUrl: 'location-ip-example.component.html'
})

export class LocationIpExampleComponent implements OnInit {
	public ipAddress: string = '109.123.67.37';
	public extraInfo: any;
	public infoKeys: string[];

	ngOnInit() { }

	public getExtraInfo(info) {
		this.infoKeys = Object.keys(info);
		this.extraInfo = info;
	}
}