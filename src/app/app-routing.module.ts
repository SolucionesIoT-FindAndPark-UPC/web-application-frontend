import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';
import { FeedComponent } from './dashboard/components/feed/feed.component';
import {ParkingLotsComponent} from './parking-lots/pages/parking-lots/parking-lots.component';
import {MonitoringComponent} from './monitoring/monitoring.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidationComponent } from './validation/validation.component';
import {StatisticsComponent} from './statistics/page/statistics/statistics.component';
import {ProfileComponent} from './profiles/pages/profile/profile.component';
import { ParkingFeesComponent } from './parking-fees/parking-fees/parking-fees.component';
import { ParkingFeesEditComponent } from './parking-fees/parking-fees-edit/parking-fees-edit.component';
import { PhotoUploadComponent } from './profiles/pages/photo-upload/photo-upload.component';

const routes: Routes = [
  {path: 'monitoring-page', component: MonitoringComponent},
  {path: 'dashboard-page', component: FeedComponent},
  {path: 'parking-lots', component: ParkingLotsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'validation', component: ValidationComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'settings', component: ProfileComponent},
  {path: 'photo-upload', component: PhotoUploadComponent},
  {path: 'parking-fees', component: ParkingFeesComponent},
  {path: 'parking-fees-edit', component: ParkingFeesEditComponent},
  {path: '', redirectTo: 'photo-upload', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
