import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../shared/components/header/header.component';
@Component({
  selector: 'app-monitoring',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './monitoring.component.html',
  standalone: true,
  styleUrl: './monitoring.component.css'
})
export class MonitoringComponent {
  cameras = [
    {
      name: 'Cámara 1',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboPWjpDxS-rWKGHhy6aar1Tx_Cv5n6TULrQ&s',
      location: 'Entrada principal',
      status: 'Operativa',
      description: 'Vigilancia de la entrada principal.'
    },
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
    {
      name: 'Cámara 4',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSu5GsgZQVN4xdIE2UfRYhkuXrbgvMDxQLg&s',
      location: 'Salida trasera',
      status: 'Operativa',
      description: 'Supervisión de la salida posterior del local.'
    },
    {
      name: 'Cámara 4',
      imageUrl: 'https://arteus.pe/cdn/shop/files/dh53_6fa3e147-d3dd-4cc7-be5d-bbed1c0a31e4_400x.png?v=1713565557',
      location: 'Salida trasera',
      status: 'Operativa',
      description: 'Supervisión de la salida posterior del local.'
    },
    {
      name: 'Cámara 4',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnl3NyNl0mZPxUhtAThzSUeQ6tVBxPYhZW_R888MtdzoHc0Cp7',
      location: 'Salida trasera',
      status: 'Operativa',
      description: 'Supervisión de la salida posterior del local.'
    },
    {
      name: 'Cámara 4',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jFldT_37pOnRkXSr4W4uyI9yFKE59nisbHyQ8Lkn6nkL9ytv',
      location: 'Salida trasera',
      status: 'Operativa',
      description: 'Supervisión de la salida posterior del local.'
    },
    {
      name: 'Cámara 4',
      imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTK_R6sqnIE7vRCSrwAfiyqo5P7105ALYchfHMsvmKrb0rCeS37',
      location: 'Salida trasera',
      status: 'Operativa',
      description: 'Supervisión de la salida posterior del local.'
    },
    {
      name: 'Cámara 4',
      imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPy7c5gl_Uegc2dj1Q6xmRcytGp5S3JvqTeSUFdHH57oTD9gN0',
      location: 'Salida trasera',
      status: 'Operativa',
      description: 'Supervisión de la salida posterior del local.'
    }
  ];

  selectedCamera: any = null;

  selectCamera(camera: any): void {
    this.selectedCamera = camera;
  }

  deselectCamera(): void {
    this.selectedCamera = null;
  }


}
