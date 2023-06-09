import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: Date | string): string {
    if (!value) {
      return '';
    }

    const dateObj = typeof value === 'string' ? new Date(value) : value;

    if (isNaN(dateObj.getTime())) {
      return '';
    }

    const month = dateObj.getMonth();
    const date = dateObj.getDate();

    let currentDate = new Date();
    let today = currentDate.getDate();
    let currentMonth = currentDate.getMonth();

    if (today == date && currentMonth == month) {
      return 'Posted Today';
    }
    if (today - date == 1 && currentMonth == month) {
      return 'Posted Yesterday';
    }
    if (today - date == 2 && currentMonth == month) {
      return 'Posted Two days ago';
    }
    if (today - date > 2 && currentMonth == month) {
      return 'Posted few days ago';
    }
    if (currentMonth - month == 1) {
      return 'Posted a month ago';
    }
    if (currentMonth - month > 1) {
      return 'Posted few months ago';
    }

    return dateObj.toString();
  }
}
