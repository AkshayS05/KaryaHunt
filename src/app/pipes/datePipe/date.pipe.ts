import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date):string{
    let currentDate= new Date();
    let currenYear = currentDate.getFullYear();
    let today = currentDate.getDate();
    let currentMonth = currentDate.getMonth()+1;
      const month= value.getMonth() ;
      const year= value.getFullYear();
      const date= value.getDate();
   
      if(today === date && currentMonth === month ){
        return 'Posted Today';
      }
      if(today - date ===1 && currentMonth === month){
        return 'Posted Yesterday';
      }
      if(today - date ===2 && currentMonth === month){
        return 'Posted Two days ago'
      }
      if(today - date >2 && currentMonth === month){
        return 'Posted few days ago'
      }
      if(currentMonth - month ===1){
        return "Posted a month ago"
      }
      if(currentMonth - month >1){
        return "Posted few months ago"
      }
     
       return value.toString();

  }

}
