import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'incident-details', loadComponent: () => import('../incident-details/incident-details.component').then(m => m.IncidentDetailsComponent) }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
