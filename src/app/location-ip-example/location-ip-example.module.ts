import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { PipSidenavModule } from 'pip-webui2-layouts-temp';
import { PipLocationIpModule } from 'pip-webui2-locations';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { LocationIpExampleComponent } from './location-ip-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    TranslateModule,
    MatButtonModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
    PipLocationIpModule,
    PipSidenavModule,
    PipNavModule
  ],
  declarations: [LocationIpExampleComponent]
})
export class LocationIpExampleModule { }
