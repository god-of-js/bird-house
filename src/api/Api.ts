import axios from 'axios'
import type BirdHouse from '~/types/BirdHouse'
import type Occupancy from '~/types/Occupancy'

const instance = axios.create({
  baseURL: 'https://be-02-birdhouse-dev-rec.shockbyte.dev',
  timeout: 4000,
})

class Api {
  getBirdHouses(page: number, limit: number) {
    return this.get<{ items: { birdhouse: BirdHouse }[] }>(`/registration?page=${page}&limit=${limit}`).then(({ items }) => items.map(({ birdhouse }) => birdhouse))
  }

  getOccupancy(ubid: string) {
    return this.get<{ items: Occupancy[] }>(`/house/${ubid}/occupancy`).then(({ items }) => items)
  }

  private get<T>(endpoint: string): Promise<T> {
    return instance.get(endpoint).then(({ data }) => data)
  }
}

export default new Api()
