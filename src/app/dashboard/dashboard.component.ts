import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartDataService } from '../chart-data.service'; // Import service
import { NgxChartsModule } from '@swimlane/ngx-charts';

type DrillDownLevel = {
  labels: string[];
  data: number[];
  nextLevel?: Record<string, string>;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  private router = inject(Router);
  private dataService = inject(ChartDataService); // Inject service

  currentLevel: string = 'incidentTeams';
  previousLevels: string[] = [];
  dataLevels: Record<string, DrillDownLevel> = {}; // Stores hierarchical data
  chartData: any[] = []; // Stores data for ngx-charts

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe((response) => {
      this.dataLevels = response;
      this.updateChartData(); // Update chart with fetched data
    });
  }

  updateChartData() {
    if (!this.dataLevels[this.currentLevel]) return;

    this.chartData = this.dataLevels[this.currentLevel].labels.map((label, index) => ({
      name: label,
      value: this.dataLevels[this.currentLevel].data[index]
    }));
  }

  onChartClick(event: any) {
    const clickedLabel = event.name; // ngx-charts emits an event with 'name' property
    const nextLevel = this.dataLevels[this.currentLevel]?.nextLevel?.[clickedLabel];

    if (nextLevel) {
      this.previousLevels.push(this.currentLevel);
      this.currentLevel = nextLevel;
      this.updateChartData();
    } else {
      this.router.navigate(['/incident-details'], { queryParams: { incident: clickedLabel } });
    }
  }

  goBack() {
    if (this.previousLevels.length > 0) {
      this.currentLevel = this.previousLevels.pop()!;
      this.updateChartData();
    }
  }
}
