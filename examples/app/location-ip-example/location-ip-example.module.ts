import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';

import { LocationIpExampleComponent } from './location-ip-example.component';
import { PipLocationIpModule } from '../pip-webui2-locations';

@NgModule({
  declarations: [
    LocationIpExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,

    PipLocationIpModule
  ],
  exports: [
    LocationIpExampleComponent
  ],
  providers: [
    
  ],
})
export class LocationIpExampleModule { }