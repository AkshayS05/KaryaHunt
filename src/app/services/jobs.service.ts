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
          console.log(resultArr);
          return resultArr;
        })
      );
  }
}
