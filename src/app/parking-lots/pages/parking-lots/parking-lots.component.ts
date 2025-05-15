import { Component } from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {faBicycle, faCar, faCheck, faCircleDot, faFilter, faTaxi} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-parking-lots',
  imports: [HeaderComponent, FaIconComponent, NgForOf, NgIf, NgClass],
  templateUrl: './parking-lots.component.html',
  standalone: true,
  styleUrl: './parking-lots.component.css'
})
export class ParkingLotsComponent {
  chunk<T>(arr: T[], size: number): T[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  icons = {
    circleDot: faCircleDot,
    filter: faFilter,
    car: faCar
  }
  drivingOptions = [
    { name: 'Car', icon: faCar },
    { name: 'Bike', icon: faBicycle },
    { name: 'Taxi', icon: faTaxi }
  ]
  parkingLots = [
    { name: 'A', quantity: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0] },
    { name: 'B', quantity: [0, 1, 0, 0, 0, 0, 0, 0, 1, 0] },
    { name: 'C', quantity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
  ]
  chunkedGroups = this.parkingLots.map(group => ({
    name: group.name,
    pairs: this.chunk(
      group.quantity.map((val, i) => ({ idx: i + 1, value: val })), 2
    )
  }));
  maxRows = Math.max(...this.chunkedGroups.map(g => g.pairs.length));
}
