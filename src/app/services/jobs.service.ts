import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  //here if we are getting data from the backend
  constructor(private http: HttpClient) {}

  getCardData(): Observable<any> {
    return this.http
      .get('https://karyahunt-add5f-default-rtdb.firebaseio.com/jobs.json')
      .pipe(
        map((responseObj) => {
          const resultArr = [];
          const objResponse = responseObj as Card[];
          for (let item in objResponse) {
            resultArr.push({ ...objResponse[item], id: item });
          }
          return resultArr;
        })
      );
  }

  getAllJobsByCategories(): Observable<any> {
    return this.http
      .get('https://karyahunt-add5f-default-rtdb.firebaseio.com/jobs.json')
      .pipe(
        map((resposneObj) => {
          console.log('inside getall');
          const obj = {} as any;
          const categories: string[] = [];
          const objResponse = resposneObj as Card[];

          for (let item in objResponse) {
            if (categories.indexOf(item) === -1) {
              categories.push(
                objResponse[item].title.toLowerCase().replace(/\s/g, '')
              );
              // [backend, fullstack, frontend]
            }
          }
          //adding jobs which comes uder a particular category
          categories.forEach((category) => {
            obj[category] = [];
            //populate the obj [{},{}]
            for (let item in objResponse) {
              // match if title matches to the particular actegory, group it into that object
              if (
                objResponse[item].title.toLowerCase().replace(/\s/g, '') ===
                category
              ) {
                obj[category].push({ ...objResponse[item], id: item });
              }
            }
          });
          console.log(obj);
          return obj;
        })
      );
  }

  getJobById() {}
}
