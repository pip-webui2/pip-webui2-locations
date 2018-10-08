import { Component, OnInit } from '@angular/core';
import { PipSidenavService } from 'pip-webui2-layouts-temp';
import { PipNavService } from 'pip-webui2-nav-temp';

@Component({
  selector: 'app-location-edit-example',
  templateUrl: './location-edit-example.component.html',
  styleUrls: ['./location-edit-example.component.scss']
})
export class LocationEditExampleComponent implements OnInit {

  public disabled = false;
  public showInput = true;

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

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
  ) {
    this.sidenav.active = true;
    this.navService.showTitle('Location edit');
  }

  ngOnInit() {
  }

  public onChangeLocation(data) {
    this.locationPos.coordinates = data.coordinates;
    this.locationName = data.locationName;
  }
}
