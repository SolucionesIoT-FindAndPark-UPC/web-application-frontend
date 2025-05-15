import { Component, Input } from '@angular/core';
import { Notification } from '../../../models/notification.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications-bar',
  imports: [CommonModule],
  templateUrl: './notifications-bar.component.html',
  styleUrl: './notifications-bar.component.css'
})
export class NotificationsBarComponent {
  @Input() notifications: Notification[] = [];
}