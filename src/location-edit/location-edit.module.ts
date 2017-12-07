import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';

import { PiplocationEditComponent } from './location-edit.component';

@NgModule({
    declarations: [
        PiplocationEditComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [
        PiplocationEditComponent
    ],
    providers: [],
})
export class PiplocationEditModule { }