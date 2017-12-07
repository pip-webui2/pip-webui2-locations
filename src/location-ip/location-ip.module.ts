import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { PipLocationIpComponent } from './location-ip.component';

@NgModule({
    declarations: [
        PipLocationIpComponent
    ],
    imports: [
        BrowserModule,
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