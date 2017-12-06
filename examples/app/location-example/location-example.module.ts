import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { LocationExampleComponent } from './location-example.component';
import { PipLocationModule } from '../pip-webui2-locations';

@NgModule({
  declarations: [
    LocationExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipLocationModule
  ],
  exports: [
    LocationExampleComponent
  ],
  providers: [
    
  ],
})
export class LocationExampleModule { }