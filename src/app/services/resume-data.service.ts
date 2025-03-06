import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { resumeData } from './resume-data';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  constructor() { }

  getResumeData$(): Observable<any> {
    // of will make any collection an observable & can simulate the async data
    return of(resumeData).pipe(
      delay(2000)
    )
  }
}
