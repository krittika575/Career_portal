// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
  }
}
