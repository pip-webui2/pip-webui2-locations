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
import { LocationEditExampleModule } from './location-edit-example/location-edit-example.module';

import { LocationExampleComponent } from './location-example/location-example.component';
import { LocationIpExampleComponent } from './location-ip-example/location-ip-example.component';
import { LocationEditExampleComponent } from './location-edit-example/location-edit-example.component';

const appRoutes: Routes = [
  { path: 'location', component: LocationExampleComponent },
  { path: 'location_ip', component: LocationIpExampleComponent },
  { path: 'location_edit', component: LocationEditExampleComponent },
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
    LocationEditExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 