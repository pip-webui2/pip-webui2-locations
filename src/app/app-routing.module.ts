import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationsExampleComponent } from './locations-example/locations-example.component';
import { LocationIpExampleComponent } from './location-ip-example/location-ip-example.component';
import { LocationEditExampleComponent } from './location-edit-example/location-edit-example.component';

const appRoutes: Routes = [
    { path: 'locations', component: LocationsExampleComponent },
    { path: 'location_ip', component: LocationIpExampleComponent },
    { path: 'location_edit', component: LocationEditExampleComponent },
    { path: '**', redirectTo: 'locations' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
