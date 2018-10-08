import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';

import { PiplocationEditComponent } from './location-edit.component';

@NgModule({
    declarations: [
        PiplocationEditComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
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
