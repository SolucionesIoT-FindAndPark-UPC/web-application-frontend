import { Component, Input } from '@angular/core';
import { Camera } from '../../../models/camera.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-camera-feed',
  imports: [CommonModule],
  templateUrl: './camera-feed.component.html',
  styleUrls: ['./camera-feed.component.css']
})
export class CameraFeedComponent {
  @Input() cameras: Camera[] = [];
}
