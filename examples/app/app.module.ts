import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipTestModule } from './pip-webui2-locations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PipTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 