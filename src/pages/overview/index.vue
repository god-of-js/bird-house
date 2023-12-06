<script setup lang="ts">
import BirdHouse from '~/components/BirdHouse.vue'
import { useAppStore } from '~/modules'

const appStore = useAppStore()

appStore.getBirdHouses()

const birdHouses = computed(() => appStore.birdHouses)
</script>

<template>
  <div class="flex gap-6 p-9">
    <BirdHouse v-for="(house, index) in birdHouses" :key="index" :bird-house="house" />
  </div>
</template>
