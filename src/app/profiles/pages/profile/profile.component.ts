import { Component } from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent],
  templateUrl: './profile.component.html',
  standalone: true,
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  iconCache: string | null = null;

  getIconCache(): string {
    if (this.iconCache) {
      return this.iconCache;
    } else {
      // The dog image
      return 'https://picsum.photos/id/237/200/300';
    }
  }
}
