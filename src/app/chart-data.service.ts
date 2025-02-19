import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor() { }

  getData(): Observable<Record<string, any>> {
    const data = {
      incidentTeams: {
        labels: ['Network Team', 'Database Team', 'Security Team'],
        data: [15, 12, 18],
        nextLevel: {
          'Network Team': 'networkTeamIncidents',
          'Database Team': 'databaseTeamIncidents',
          'Security Team': 'securityTeamIncidents'
        }
      },

      networkTeamIncidents: {
        labels: ['Critical', 'Warning', 'Normal'],
        data: [5, 7, 3],
        // nextLevel: {
        //   'Critical': 'networkCriticalIncidents',
        //   'Warning': 'networkWarningIncidents',
        //   'Normal': 'networkNormalIncidents'
        // }
      },

      databaseTeamIncidents: {
        labels: ['Critical', 'Warning', 'Normal'],
        data: [4, 6, 2],
        // nextLevel: {
        //   'Critical': 'databaseCriticalIncidents',
        //   'Warning': 'databaseWarningIncidents',
        //   'Normal': 'databaseNormalIncidents'
        // }
      },

      securityTeamIncidents: {
        labels: ['Critical', 'Warning', 'Normal'],
        data: [6, 9, 3],
        // nextLevel: {
        //   'Critical': 'securityCriticalIncidents',
        //   'Warning': 'securityWarningIncidents',
        //   'Normal': 'securityNormalIncidents'
        // }
      },

      networkCriticalIncidents: {
        labels: ['Incident A', 'Incident B', 'Incident C'],
        data: [2, 2, 1]
      },

      networkWarningIncidents: {
        labels: ['Incident D', 'Incident E'],
        data: [4, 3]
      },

      networkNormalIncidents: {
        labels: ['Incident F'],
        data: [3]
      },

      databaseCriticalIncidents: {
        labels: ['Incident G', 'Incident H'],
        data: [2, 2]
      },

      databaseWarningIncidents: {
        labels: ['Incident I', 'Incident J'],
        data: [3, 3]
      },

      databaseNormalIncidents: {
        labels: ['Incident K'],
        data: [2]
      },

      securityCriticalIncidents: {
        labels: ['Incident L', 'Incident M', 'Incident N'],
        data: [3, 2, 1]
      },

      securityWarningIncidents: {
        labels: ['Incident O', 'Incident P'],
        data: [5, 4]
      },

      securityNormalIncidents: {
        labels: ['Incident Q'],
        data: [3]
      }
    };

    return of(data); // Simulating an API call using Observable
  }
}
