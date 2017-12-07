import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule,MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PipThemesModule } from 'pip-webui2-themes';
//import { PipTestModule } from './pip-webui2-buttons';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

import { LocationIpExampleModule } from './location-ip-example/location-ip-example.module';
import { LocationExampleModule } from './location-example/location-example.module';
import { ToggleButtonsExampleModule } from './toggle-buttons-example/toggle-buttons-example.module';

import { LocationExampleComponent } from './location-example/location-example.component';
import { LocationIpExampleComponent } from './location-ip-example/location-ip-example.component';
import { ToggleButtonsExampleComponent } from './toggle-buttons-example/toggle-buttons-example.component';

const appRoutes: Routes = [
  { path: 'location', component: LocationExampleComponent },
  { path: 'location_ip', component: LocationIpExampleComponent },
  { path: 'toggle_buttons', component: ToggleButtonsExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'location' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    
    PipThemesModule,

    ExampleListModule,
    LocationIpExampleModule,
    LocationExampleModule,
    ToggleButtonsExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 