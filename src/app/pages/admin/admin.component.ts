import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private jobService: JobsService) {}
  onFormSubmit(form: NgForm) {
    console.log(form.form.value);
    this.jobService.addNewJob(form.form.value).pipe(take(1)).subscribe();
  }
}
