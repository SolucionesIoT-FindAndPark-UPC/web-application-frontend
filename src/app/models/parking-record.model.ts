export class ParkingRecord {
  constructor(
    public id: number,
    public licensePlate: string,
    public parkingLotId: number,
    public entryTime: string,
    public exitTime: string,
    public status: string
  ) {}
}