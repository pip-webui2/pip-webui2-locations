import { Component, OnInit } from '@angular/core';
import { PipSidenavService } from 'pip-webui2-layouts-temp';
import { PipNavService } from 'pip-webui2-nav-temp';

@Component({
  selector: 'app-locations-example',
  templateUrl: './locations-example.component.html',
  styleUrls: ['./locations-example.component.scss']
})
export class LocationsExampleComponent implements OnInit {

  private current = 0;
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

  public locationName = 'Donetsk, Kadievskaya st.';

  ngOnInit() { }

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
  ) {
    this.sidenav.active = true;
    this.navService.showTitle('Location');
  }

  public changeLocation() {
    this.current = this.current === 0 ? 1 : 0;
    this.locationPos = this._locations[this.current];
  }

}
