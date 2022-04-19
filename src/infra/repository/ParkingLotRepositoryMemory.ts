import ParkingLotAdapter from '../../adapter/ParkingLotAdapter'
import ParkingLot from '../../core/entity/ParkingLot'
import ParkingLotRepository from '../../core/repository/ParkingLotRepository'

export default class ParkingLotRepositoryMemory
  implements ParkingLotRepository
{
  parkingLots = [
    {
      code: 'shopping',
      capacity: 5,
      openHour: 8,
      closeHour: 22,
      OccupiedSpaces: 0,
    },
  ]
  parkedCars = []

  getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLotData = this.parkingLots.find(
      parkingLot => parkingLot.code == code
    ) // Poderia ser qualquer meio de dado possivel a ser retornado para o método
    const parkingLot = ParkingLotAdapter.create(
      parkingLotData.code,
      parkingLotData.capacity,
      parkingLotData.openHour,
      parkingLotData.closeHour,
      this.parkedCars.length
    )

    return Promise.resolve(parkingLot)
  }

  saveParkedCar(code: string, plate: string, date: Date): void {
    this.parkedCars.push({ code, plate, date })
  }
}
