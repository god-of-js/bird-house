<script setup lang="ts">
import type BirdHouse from '~/types/BirdHouse'

interface Props {
  birdHouse: BirdHouse
}
const props = defineProps<Props>()

const numOfOccupants = computed(() => {
  return props.birdHouse.occupancy?.reduce((acc, curr) => {
    acc += (curr.birds || 0)

    return acc
  }, 0)
})
const numOfEggs = computed(() => {
  return props.birdHouse.occupancy?.reduce((acc, curr) => {
    acc += (curr.eggs || 0)

    return acc
  }, 0)
})
</script>

<template>
  <div class="h-fit rounded-lg bg-gray-700 p-6">
    <div class="mb-4 text-2xl font-semibold">
      {{ props.birdHouse.name }}
    </div>
    <div class="mb-2.5 flex gap-2 text-base font-medium">
      <TheIcon icon="Location" />
      <span>({{ props.birdHouse.longitude }}, {{ props.birdHouse.latitude }})</span>
    </div>
    <div class="flex gap-2.5 text-base">
      <div class="flex gap-2">
        <TheIcon icon="Paw" />
        <span>{{ numOfOccupants }}</span>
      </div>
      <div class="flex gap-2">
        <TheIcon icon="Egg" />
        <span>{{ numOfEggs }}</span>
      </div>
    </div>
  </div>
</template>
