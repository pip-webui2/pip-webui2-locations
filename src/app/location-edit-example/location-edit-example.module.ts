import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatSlideToggleModule } from '@angular/material';
import { PipSidenavModule } from 'pip-webui2-layouts';
import { PiplocationEditModule } from 'pip-webui2-locations';
import { PipNavModule } from 'pip-webui2-nav';

import { LocationEditExampleComponent } from './location-edit-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    TranslateModule,
    MatButtonModule, MatIconModule, MatButtonToggleModule, MatSlideToggleModule,
    PiplocationEditModule,
    PipSidenavModule,
    PipNavModule
  ],
  declarations: [LocationEditExampleComponent]
})
export class LocationEditExampleModule { }
