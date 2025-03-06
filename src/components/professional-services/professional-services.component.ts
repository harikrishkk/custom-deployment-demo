import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professional-services',
  templateUrl: './professional-services.component.html',
  styleUrls: ['./professional-services.component.css']
})
export class ProfessionalServicesComponent {
  @Input() serviceData: any;
}
