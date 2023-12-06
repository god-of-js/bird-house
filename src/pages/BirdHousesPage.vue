<script setup lang="ts">
import BirdHouse from '~/components/BirdHouse.vue'
import { useAppStore } from '~/modules'

const appStore = useAppStore()

const birdHouses = computed(() => appStore.birdHouses)
</script>

<template>
  <div class="flex gap-6 p-9">
    <RouterLink v-for="(house, index) in birdHouses" :key="index" :to="`/overview/houses/${house.ubidValue}`">
      <BirdHouse :bird-house="house" />
    </RouterLink>
  </div>
</template>
