import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipSidenavModule } from 'pip-webui2-layouts-temp';
import { PipLocationModule } from 'pip-webui2-locations';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { LocationsExampleComponent } from './locations-example.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule,
    TranslateModule,

    PipLocationModule,
    PipSidenavModule,
    PipNavModule
  ],
  declarations: [LocationsExampleComponent]
})
export class LocationsExampleModule { }
