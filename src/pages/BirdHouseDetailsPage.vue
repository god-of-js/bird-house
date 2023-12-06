<script setup lang="ts">
import { useAppStore } from '~/modules'

const appStore = useAppStore()
const route = useRoute()
const activeTab = ref('overview')

const birdHouse = computed(() => appStore.birdHouse(route.params.id as string))

const tabs = [
  {
    label: 'Overview',
    key: 'overview',
  },
  {
    key: 'graph',
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB')
}
</script>

<template>
  <div class="w-full p-9">
    <header class="rounded-xl bg-gray-700 p-6 pb-0">
      <div class="mb-4 flex items-center justify-between">
        <h1 class="text-2xl">
          {{ birdHouse?.name }}
        </h1>
        <div class="flex gap-2">
          <TheIcon icon="Location" />
          <span>({{ birdHouse?.longitude }}, {{ birdHouse?.latitude }})</span>
        </div>
      </div>
      <TheTabs :tabs="tabs" :active-tab="activeTab">
        <template #graph>
          <span>Graph</span>
        </template>
      </TheTabs>
    </header>

    <ul class="grid max-h-[65vh] gap-4 overflow-y-auto p-0 pt-6">
      <li v-for="(occupant, index) in birdHouse?.occupancy" :key="index" class="flex gap-9 rounded-xl bg-gray-700 px-5 py-6">
        <span>{{ formatDate(occupant.created_at) }}</span>
        <div class="flex gap-2.5 text-base">
          <div class="flex gap-2">
            <TheIcon icon="Paw" />
            <span>{{ occupant.birds }}</span>
          </div>
          <div class="flex gap-2">
            <TheIcon icon="Egg" />
            <span>{{ occupant.eggs }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
