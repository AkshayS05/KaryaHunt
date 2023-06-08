import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobsbylevel',
  templateUrl: './jobsbylevel.component.html',
  styleUrls: ['./jobsbylevel.component.css'],
})
export class JobsbylevelComponent {
  jobs$!: Observable<any>;
  constructor(private jobService: JobsService) {}

  ngOnInit(): void {
    this.jobs$ = this.jobService.getJobBySkillLevel();
  }

  getjobBySkillLevel(jobs: any) {
    console.log(jobs);
    return Object.keys(jobs);
  }
}
