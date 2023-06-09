import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';
import { delay, take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  isFormSubmitted = false;

  constructor(private jobService: JobsService, private router: Router) {}
  onFormSubmit(form: NgForm) {
    this.jobService
      .addNewJob(form.form.value)
      .pipe(
        take(1),
        tap(() => {
          this.isFormSubmitted = true;
          //reset the form inputs
          form.reset();
        }),
        delay(3000),
        tap(() => {
          // //redirect to homepage
          this.router.navigateByUrl('/');
        })
      )
      .subscribe();
  }

  getCurrentDate(): string {
    //get the full date
    const currentDate = new Date();

    //get year
    let year = currentDate.getFullYear();
    //get the month out of the full date and check it's length
    let month = String(currentDate.getMonth() + 1);

    //check length for month less than 10 add 0
    if (month.length === 1) {
      month = '0' + month;
    }
    //get the day out of full date and check its length
    let day = String(currentDate.getDate());

    //check length
    if (day.length === 1) {
      day = '0' + day;
    }
    //return the year month and day
    return `${year}-${month}-${day}`;
  }
}
