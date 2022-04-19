import Hapi from '@hapi/hapi'
import HapiAdapter from '../../adapter/HapiAdapter'
import ParkingLotController from '../../controller/ParkingLotController'

const server = Hapi.server({
  port: 4000,
  host: '0.0.0.0',
})

server.route({
  method: 'GET',
  path: '/parkingLots/{code}',
  handler: HapiAdapter.create(ParkingLotController.getParkingLot),
})

server.start()
