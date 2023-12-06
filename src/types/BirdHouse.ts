import type Occupancy from './Occupancy'

export default interface BirdHouse {
  lastOccupationUpdate: string
  latitude: number
  longitude: number
  name: string
  ubidValue: string
  occupancy?: Occupancy[]
}
