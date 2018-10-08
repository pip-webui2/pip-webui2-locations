import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { PipLocationComponent } from './location.component';

@NgModule({
  declarations: [
    PipLocationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    PipLocationComponent
  ],
  providers: [],
})
export class PipLocationModule { }
