import ParkingLot from '../entity/ParkingLot'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export default interface ParkingLotRepository {
  getParkingLot(code: string): Promise<ParkingLot>
  saveParkedCar(code: string, plate: string, date: Date): void
}
