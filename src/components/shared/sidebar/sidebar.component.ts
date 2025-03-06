import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sideBarData: any;

  get user() {
    return this.sideBarData.user;
  }

  get socialMedia() {
    return this.sideBarData.socialMedia
  }
}
