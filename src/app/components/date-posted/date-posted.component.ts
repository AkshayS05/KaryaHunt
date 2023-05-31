import { Component, Input } from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from 'src/app/pipes/datePipe/date.pipe';

@Component({
  selector: 'app-date-posted',
  templateUrl: './date-posted.component.html',
  styleUrls: ['./date-posted.component.css'],
  providers: [DatePipe]
})


export class DatePostedComponent {
  @Input() date!: Date;

  get isPostedToday(){
    let today = new Date();
    let todayDate = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let dataDate = this.date.getDate();
    let dataMonth = this.date.getMonth();

    return todayDate === dataDate && month === dataMonth;
  }
  
  faCheck= faCheck;
}
