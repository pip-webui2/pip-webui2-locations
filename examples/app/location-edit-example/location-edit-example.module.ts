import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatSlideToggleModule } from '@angular/material';

import { LocationEditExampleComponent } from './location-edit-example.component';
import { PiplocationEditModule } from '../pip-webui2-locations';

@NgModule({
  declarations: [
    LocationEditExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSlideToggleModule,

    PiplocationEditModule
  ],
  exports: [
    LocationEditExampleComponent
  ],
  providers: [
    
  ],
})
export class LocationEditExampleModule { }