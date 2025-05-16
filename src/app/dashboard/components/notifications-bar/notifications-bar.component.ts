import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications-bar',
  imports: [CommonModule],
  templateUrl: './notifications-bar.component.html',
  standalone: true,
  styleUrl: './notifications-bar.component.css'
})
export class NotificationsBarComponent {
  @Input() notifications = [
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
}
