import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

    transform(value: number, ...args: unknown[]): unknown {
      if(typeof value ==='number' && value<=3){
        return "Entry Level"
      }
      if(typeof value ==='number' && value>3 && value <7){
        return "Intermediate Level"
      }
      if(typeof value ==='number' && value>=7){
        return "Senior Level"
      }
      return value;
    }
  
  }
