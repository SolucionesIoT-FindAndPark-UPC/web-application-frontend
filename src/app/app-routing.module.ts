import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';
import { FeedComponent } from './dashboard/components/feed/feed.component';
import {ParkingLotsComponent} from './parking-lots/pages/parking-lots/parking-lots.component';
import {StatisticsComponent} from './statistics/page/statistics/statistics.component';
import {ProfileComponent} from './profiles/pages/profile/profile.component';

const routes: Routes = [
  {path: 'dashboard-page', component: FeedComponent},
  {path: 'parking-lots', component: ParkingLotsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: 'dashboard-page', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
