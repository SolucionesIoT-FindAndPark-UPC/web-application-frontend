import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-camera-feed',
  imports: [CommonModule],
  templateUrl: './camera-feed.component.html',
  standalone: true,
  styleUrls: ['./camera-feed.component.css']
})
export class CameraFeedComponent {
  @Input() cameras = [
    {
      id: 1,
      name: "Cámara #1",
      lastUpdate: "Mar 09, 2025 10:22 AM",
      lastDetection: "Mar 09, 2025 10:27 AM",
      status: "Online",
      imageUrl: "https://www.arqhys.com/wp-content/uploads/2012/12/Diseno-de-estacionamientos-13-768x432.jpg"
    },
    {
      id: 2,
      name: "Cámara #2",
      lastUpdate: "Mar 09, 2025 10:22 AM",
      lastDetection: "Mar 09, 2025 10:27 AM",
      status: "Online",
      imageUrl: "https://th.bing.com/th/id/R.c5188b603d234704614d15e863610b48?rik=7He8ywBvZbg1jQ&pid=ImgRaw&r=0"
    },
    {
      id: 3,
      name: "Cámara #3",
      lastUpdate: "Mar 09, 2025 10:22 AM",
      lastDetection: "Mar 09, 2025 10:27 AM",
      status: "Offline",
      imageUrl: "https://www.arqhys.com/wp-content/uploads/2012/12/Diseno-de-estacionamientos-13-768x432.jpg"
    },
    {
      id: 4,
      name: "Cámara #4",
      lastUpdate: "Mar 09, 2025 10:22 AM",
      lastDetection: "Mar 09, 2025 10:27 AM",
      status: "Online",
      imageUrl: "https://th.bing.com/th/id/R.c5188b603d234704614d15e863610b48?rik=7He8ywBvZbg1jQ&pid=ImgRaw&r=0"
    },
    {
      id: 5,
      name: "Cámara #5",
      lastUpdate: "Mar 09, 2025 10:22 AM",
      lastDetection: "Mar 09, 2025 10:27 AM",
      status: "Offline",
      imageUrl: "https://th.bing.com/th/id/R.c5188b603d234704614d15e863610b48?rik=7He8ywBvZbg1jQ&pid=ImgRaw&r=0"
    }
  ];
}
