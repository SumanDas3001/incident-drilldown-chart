import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incident-details',
  standalone: true,
  imports: [CommonModule], // <-- Add this
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css']
})
export class IncidentDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Query Params received in IncidentDetailsComponent:', params);
      if (params['incident']) {
        console.log('Navigated successfully! Incident:', params['incident']);
      } else {
        console.log('Navigation failed: No incident in query params');
      }
      this.cdRef.detectChanges();
    });
  }
}
