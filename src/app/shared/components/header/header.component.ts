import { Component } from '@angular/core';
import {
  faBell,
  faCamera,
  faChartBar, faChartLine,
  faChevronDown, faGear, faParking,
  faTicketSimple,
} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [
    FaIconComponent,
    NgForOf,
    NgIf
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
  routes = {
    settings: "settings",
  }
  options = [
    { name: 'Feed', icon: faChartBar, route: 'dashboard-page' },
    { name: 'Monitoring', icon: faCamera, route: 'monitoring-page' },
    { name: 'Allotment', icon: faParking, route: 'parking-lots' },
    { name: 'Parking Fee', icon: faTicketSimple, route: 'parking-fees' },
    { name: 'Statistics', icon: faChartLine, route: 'statistics' },
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
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  constructor(private router: Router) {
  }

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

  goTo(route: string) {
    this.router.navigate([route]);
  }

  protected readonly faChartBar = faChartBar;
}
