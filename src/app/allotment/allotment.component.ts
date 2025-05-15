import { Component } from '@angular/core';
import {HeaderComponent} from '../shared/components/header/header.component';

@Component({
  selector: 'app-allotment',
  imports: [HeaderComponent],
  templateUrl: './allotment.component.html',
  styleUrls: ['./allotment.component.css']
})
export class AllotmentComponent {
  occupiedCount: number = 50;
  freeCount: number = 150;

  selectedVehicle: string = 'All';
  filteredOccupiedCount: number = this.occupiedCount;
  filteredFreeCount: number = this.freeCount;

  filterByVehicle(vehicle: string): void {
    this.selectedVehicle = vehicle;

    // Example logic for filtering
    if (vehicle === 'car') {
      this.filteredOccupiedCount = 30;
      this.filteredFreeCount = 70;
    } else if (vehicle === 'bike') {
      this.filteredOccupiedCount = 10;
      this.filteredFreeCount = 20;
    } else if (vehicle === 'taxi') {
      this.filteredOccupiedCount = 10;
      this.filteredFreeCount = 60;
    } else {
      this.filteredOccupiedCount = this.occupiedCount;
      this.filteredFreeCount = this.freeCount;
    }
  }
}
