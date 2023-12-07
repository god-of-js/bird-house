<script setup lang="ts">
import BirdHouse from '~/components/BirdHouse.vue'
import { useAppStore } from '~/modules'

const appStore = useAppStore()
const activePage = ref(1)

const birdHouses = computed(() => appStore.birdHouses)
function changePage(page: number) {
  activePage.value = page
}

function fetchBirdHouses(page: number) {
  appStore.getBirdHouses(page)
}
watch(() => activePage.value, fetchBirdHouses)
</script>

<template>
  <div>
    <div class="flex gap-6 p-9">
      <RouterLink v-for="(house, index) in birdHouses" :key="index" :to="`/overview/houses/${house.ubidValue}`">
        <BirdHouse :bird-house="house" />
      </RouterLink>
    </div>
    <ThePaginator :current-page="activePage" :total-pages="50" @change-page="changePage" />
  </div>
</template>
