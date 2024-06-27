import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs = [
    { id: 1, title: 'Software Engineer', description: 'Develop software solutions', location: 'New York' },
    { id: 2, title: 'Project Manager', description: 'Manage projects and teams', location: 'London' },
    { id: 3, title: 'Web Developer', description: 'Frontend development', location: 'Paris' },
    // ... more job entries up to at least 15
    { id: 4, title: 'Data Scientist', description: 'Analyze big data', location: 'Berlin' },
    { id: 5, title: 'UX/UI Designer', description: 'Design user interfaces', location: 'Tokyo' },
    { id: 6, title: 'Marketing Specialist', description: 'Marketing campaigns', location: 'Sydney' },
    { id: 7, title: 'Backend Developer', description: 'Server-side development', location: 'Toronto' },
    { id: 8, title: 'DevOps Engineer', description: 'Manage infrastructure', location: 'San Francisco' },
    { id: 9, title: 'Product Manager', description: 'Product development', location: 'Austin' },
    { id: 10, title: 'HR Manager', description: 'Human resources management', location: 'Chicago' },
    { id: 11, title: 'Business Analyst', description: 'Business analysis', location: 'Miami' },
    { id: 12, title: 'Cybersecurity Specialist', description: 'Security solutions', location: 'Boston' },
    { id: 13, title: 'Network Engineer', description: 'Network management', location: 'Seattle' },
    { id: 14, title: 'Content Writer', description: 'Write and edit content', location: 'Los Angeles' },
    { id: 15, title: 'Graphic Designer', description: 'Design graphics', location: 'Atlanta' }
  ];

  constructor() { }

  getJobs() {
    return this.jobs;
  }

  getJobsByLocation(location: string) {
    return this.jobs.filter(job => job.location === location);
  }

  getJob(id: number) {
    return this.jobs.find(job => job.id === id);
  }
}
