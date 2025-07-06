import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Camera } from '../../../models/camera.model';

@Component({
  selector: 'app-camera-feed',
  imports: [CommonModule],
  templateUrl: './camera-feed.component.html',
  standalone: true,
  styleUrls: ['./camera-feed.component.css']
})
export class CameraFeedComponent {
  @Input() cameras: Camera[] = [];
}
