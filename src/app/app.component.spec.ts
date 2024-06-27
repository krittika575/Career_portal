import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';

@Component({
  selector: 'app-job-listings',
  templateUrl: '../job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {
  jobs: any[] = [];
  countries: string[] = ['New York', 'London', 'Paris', 'Berlin', 'Tokyo', 'Sydney'];
  numJobOffersToShow: number = 5; // Change this to limit the number of job offers

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    // Fetch jobs for each country
    this.countries.forEach(country => {
      const countryJobs = this.jobService.getJobsByLocation(country).slice(0, this.numJobOffersToShow);
      this.jobs.push(...countryJobs);
    });
  }
}
