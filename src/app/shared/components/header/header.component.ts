import { Component } from '@angular/core';
import {
  faBell,
  faCamera,
  faChartBar, faChartLine,
  faChevronDown, faGear, faParking,
  faTicketSimple,
} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    FaIconComponent,
    NgForOf
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  icons = {
    bell: faBell,
    chevronDown: faChevronDown,
    settings: faGear
  }
  options = [
    { name: 'Feed', icon: faChartBar },
    { name: 'Monitoring', icon: faCamera },
    { name: 'Allotment', icon: faParking },
    { name: 'Parking Fee', icon: faTicketSimple },
    { name: 'Statistics', icon: faChartLine },
  ]
  sidebarOptions = {
    feed: 'Feed',
    monitoring: 'Monitoring',
    allotment: 'Allotment',
    parking_fee: 'Parking Fee',
    statistics: 'Statistics',
  }
  usernameCache = null;
  iconCache = null;
  hasUnreadNotifications = false;

  getIconCache() {
    if (this.iconCache) {
      return this.iconCache;
    } else {
      return 'https://picsum.photos/id/237/200/300';
    }
  }

  getUsernameCache() {
    if (this.usernameCache) {
      return this.usernameCache;
    } else {
      return 'John Doe';
    }
  }

  protected readonly faChartBar = faChartBar;
}
