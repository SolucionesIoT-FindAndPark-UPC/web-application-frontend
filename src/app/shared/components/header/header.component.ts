import { Component } from '@angular/core';
import {faBell, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  imports: [
    FaIconComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  icons = {
    bell: faBell,
    chevronDown: faChevronDown
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
}
