import { defineStore } from 'pinia'
import Api from '~/api'
import type BirdHouse from '~/types/BirdHouse'

interface State {
  birdHouses: BirdHouse[]
}
const state: State = {
  birdHouses: [],
}
export const useAppStore = defineStore({
  id: 'AppStore',
  state: () => (state),
  getters: {
    birdHouse: (state: State) => {
      return (ubid: string) => state.birdHouses.find(({ ubidValue }) => ubid === ubidValue)
    },
  },
  actions: {
    getBirdHouses() {
      return Api.getBirdHouses().then(async (birdHouses) => {
        this.birdHouses = await Promise.all(birdHouses.map(async (house) => {
          const occupancy = await this.getOccupancy(house.ubidValue)
          return { ...house, occupancy }
        }))
      })
    },
    getOccupancy(ubid: string) {
      return Api.getOccupancy(ubid)
    },
  },
})
