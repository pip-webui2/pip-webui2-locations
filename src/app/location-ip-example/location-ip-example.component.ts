import { Component, OnInit } from '@angular/core';
import { PipSidenavService } from 'pip-webui2-layouts';
import { PipNavService } from 'pip-webui2-nav';

@Component({
  selector: 'app-location-ip-example',
  templateUrl: './location-ip-example.component.html',
  styleUrls: ['./location-ip-example.component.scss']
})
export class LocationIpExampleComponent implements OnInit {

  public ipAddress = '109.123.67.37';
  public extraInfo: any;
  public infoKeys: string[];

    constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
  ) {
    this.sidenav.active = true;
    this.navService.showTitle('Location IP');
  }

  ngOnInit() { }

  public getExtraInfo(info) {
    this.infoKeys = Object.keys(info);
    this.extraInfo = info;
  }

}
