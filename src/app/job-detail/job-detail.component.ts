// job-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: any;

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id')!);
    this.job = this.jobService.getJob(id);
  }
}
