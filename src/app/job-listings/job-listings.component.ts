import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs().slice(0, 15);
  }
}
