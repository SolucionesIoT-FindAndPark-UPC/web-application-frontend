import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CameraFeedComponent } from "../camera-feed/camera-feed.component";
import { NotificationsBarComponent } from "../notifications-bar/notifications-bar.component";
import { CommonModule } from '@angular/common';
import { HttpDataService } from '../../../services/http-data.service';
import { Camera } from '../../../models/camera.model';
import { Notification } from '../../../models/notification.model';
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  imports: [CommonModule, CameraFeedComponent, NotificationsBarComponent, HeaderComponent],
  standalone: true,
  providers: [HttpDataService]
})
export class FeedComponent implements OnInit {
  cameras: Camera[] = [
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

  notifications: Notification[] = [
    { id: 1, message: "Placa ABC-123 ha salido." },
    { id: 2, message: "Placa ABC-123 no ha registrado el pago." },
    { id: 3, message: "Placa XYZ-102 ha pagado con éxito." },
    { id: 4, message: "Placa QRS-321 ha salido." },
    { id: 5, message: "Placa QRS-321 no ha registrado el pago." },
    { id: 6, message: "Placa DEF-456 ha pagado con éxito." },
    { id: 7, message: "Placa MNO-654 ha salido." },
    { id: 8, message: "Placa MNO-654 no ha registrado el pago." },
    { id: 9, message: "Placa GHI-789 ha pagado con éxito." },
    { id: 10, message: "Placa JKL-987 ha salido." },
    { id: 11, message: "Placa JKL-987 no ha registrado el pago." },
    { id: 12, message: "Placa STU-135 ha pagado con éxito." },
    { id: 13, message: "Placa VWX-246 ha salido." },
    { id: 14, message: "Placa VWX-246 no ha registrado el pago." },
    { id: 15, message: "Placa YZA-369 ha pagado con éxito." }
  ];

  ngOnInit(): void {
    console.log(this.cameras);
  }
}
