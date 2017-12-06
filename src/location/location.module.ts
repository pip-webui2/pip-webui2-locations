import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { PipLocationComponent } from './location.component';

@NgModule({
  declarations: [
    PipLocationComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    PipLocationComponent
  ],
  providers: [],
})
export class PipLocationModule { }