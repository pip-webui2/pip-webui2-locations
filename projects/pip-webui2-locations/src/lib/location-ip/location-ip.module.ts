import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { PipLocationIpComponent } from './location-ip.component';

@NgModule({
    declarations: [
        PipLocationIpComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        PipLocationIpComponent
    ],
    providers: [],
})
export class PipLocationIpModule { }
