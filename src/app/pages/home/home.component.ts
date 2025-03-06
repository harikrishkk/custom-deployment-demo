import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumeDataService } from 'src/app/services/resume-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  resumeData$!: Observable<any>;
  constructor(private resumeDataService: ResumeDataService) {

  }

  ngOnInit(): void {
    this.resumeData$ = this.resumeDataService.getResumeData$();
  }
}
