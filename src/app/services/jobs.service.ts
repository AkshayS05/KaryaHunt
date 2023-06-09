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
          //create an empty object
          const obj = {} as any;
          //make an empty array for each categories
          const categories: string[] = [];
          //copy the elements of the data into new array of type Card
          const objResponse = resposneObj as Card[];

          //traverse over the items
          for (let item in objResponse) {
            //if item is not traversed, add it into the array of actegory
            if (categories.indexOf(item) === -1) {
              //push the title as we need to sort according to that
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
          return obj;
        })
      );
  }

  getJobBySkillLevel() {
    //loop through the jobs
    return this.http
      .get('https://karyahunt-add5f-default-rtdb.firebaseio.com/jobs.json')
      .pipe(
        map((resposneObj) => {
          const levelObj = {} as any;
          const experienceLevel: number[] = [];

          const objRes = resposneObj as Card[];

          for (let item in objRes) {
            if (experienceLevel.indexOf(+item) === -1) {
              //push
              experienceLevel.push(objRes[item].experience);
            }
          }

          experienceLevel.forEach((level) => {
            //check if experience level falls under 3, do not create a new object, similalrly check for 4-6 and above 7

            levelObj[level] = [];
            //create an array of objects

            for (let item in objRes) {
              if (objRes[item].experience === level) {
                // push into an object
                levelObj[level].push({ ...objRes[item], id: item });
              }
            }
          });

          return levelObj;
        })
      );
  }
  //geta  single job using id
  getJobById(jobId: string): Observable<any> {
    return this.http.get(
      `https://karyahunt-add5f-default-rtdb.firebaseio.com/jobs/${jobId}.json`
    );
  }

  deleteJobById(jobId: string): Observable<any> {
    return this.http.delete(
      `https://karyahunt-add5f-default-rtdb.firebaseio.com/jobs/${jobId}.json`
    );
  }

  //posting a data to the database
  addNewJob(job: any): Observable<any> {
    return this.http.post(
      'https://karyahunt-add5f-default-rtdb.firebaseio.com/jobs.json',
      job
    );
  }
}
