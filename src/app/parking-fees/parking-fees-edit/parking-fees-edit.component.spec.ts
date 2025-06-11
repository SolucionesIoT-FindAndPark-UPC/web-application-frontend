import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingFeesEditComponent } from './parking-fees-edit.component';

describe('ParkingFeesEditComponent', () => {
  let component: ParkingFeesEditComponent;
  let fixture: ComponentFixture<ParkingFeesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingFeesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingFeesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
