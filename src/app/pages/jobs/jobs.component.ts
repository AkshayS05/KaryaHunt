import { Component } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent {
  jobs$!: Observable<any>;
  constructor(private jobService: JobsService) {}

  ngOnInit(): void {
    this.jobs$ = this.jobService.getAllJobsByCategories();
  }

  getCategories(jobs: any) {
    console.log(jobs);
    return Object.keys(jobs);
  }
}
