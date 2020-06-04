import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';
import { LaunchComponent } from './launches/launch/launch.component';


const routes: Routes = [
  { path: '', redirectTo: '/launches', pathMatch: 'full' },
  { path: 'launches', component: LaunchesComponent },
  { path: 'launch/:flight_number', component: LaunchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
