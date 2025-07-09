import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../shared/components/header/header.component';
import { CameraFeedService } from '../services/camera-feed.service';

@Component({
  selector: 'app-monitoring',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './monitoring.component.html',
  standalone: true,
  styleUrl: './monitoring.component.css'
})
export class MonitoringComponent implements OnInit {
  cameras: any[] = [];
  selectedCamera: any = null;

  constructor(private cameraFeedService: CameraFeedService) {}

  ngOnInit(): void {
    // Obtener video en vivo solo para la primera cámara
    this.cameraFeedService.getVideoRecordsByParkingLot(1).subscribe(videoRecords => {
      const iotCamera = videoRecords.length > 0
        ? {
            name: 'Cámara de la entrada',
            imageUrl: videoRecords[0].videoUrl, // MJPEG stream
            location: 'Entrada',
            status: 'Operativa',
            description: 'Video en vivo desde la cámara de la entrada.'
          }
        : {
            name: 'Cámara de la entrada (offline)',
            imageUrl: 'https://media.licdn.com/dms/image/v2/C4E12AQEHncNrCIkqNA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520095517517?e=2147483647&v=beta&t=uV_huUri0E0Yib_a6NBG_-j4koK7Q2x9uJmB5gseakc',
            location: 'Entrada principal',
            status: 'Sin conexión',
            description: 'No se pudo cargar el stream de la cámara IoT.'
          };

      this.cameras = [
        iotCamera,
        {
          name: 'Cámara 2',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQht6tSUzKcpHugSOpTa8bFUw-wwUI2Ew9_GA&s',
          location: 'Zona A - Estacionamiento',
          status: 'Sin conexión',
          description: 'Vista panorámica del estacionamiento A.'
        },
        {
          name: 'Cámara 3',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ_Z3F8arY3D8oFkgxwWNNnkGDqhqVz6CHA&s',
          location: 'Zona B - Sombra',
          status: 'Operativa',
          description: 'Monitoreo de espacios bajo sombra.'
        },
        {
          name: 'Cámara 4',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yDwu34UdZPZV6Lz19lXbi3a0OChrW3E2Lg&s',
          location: 'Salida trasera',
          status: 'Operativa',
          description: 'Supervisión de la salida posterior del local.'
        },
      ];
    });
  }

  selectCamera(camera: any): void {
    this.selectedCamera = camera;
  }

  deselectCamera(): void {
    this.selectedCamera = null;
  }
}
