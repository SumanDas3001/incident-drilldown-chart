import { Routes } from '@angular/router';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'incident-details', component: IncidentDetailsComponent }, // Ensure this exists
  // { path: '**', redirectTo: '' } // Wildcard route to catch invalid paths
];
