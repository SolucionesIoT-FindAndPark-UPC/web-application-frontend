import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CameraFeedComponent } from "../camera-feed/camera-feed.component";
import { NotificationsBarComponent } from "../notifications-bar/notifications-bar.component";
import { CommonModule } from '@angular/common';
import { HttpDataService } from '../../../services/http-data.service';
import { Camera } from '../../../models/camera.model';
import { Notification } from '../../../models/notification.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  imports: [CommonModule, CameraFeedComponent, NotificationsBarComponent],
  providers: [HttpDataService]
})
export class FeedComponent implements OnInit {
  cameras: Camera[] = [];
  notifications: Notification[] = [];

  constructor(private dataService: HttpDataService) {}

  ngOnInit(): void {
    this.loadCameras();
    this.loadNotifications();
  }

  loadCameras(): void {
    this.dataService.getAllCameras().subscribe(cameras => {
      this.cameras = cameras;
    });
  }

  loadNotifications(): void {
    this.dataService.getAllNotifications().subscribe(notifications => {
      this.notifications = notifications;
    });
  }
}