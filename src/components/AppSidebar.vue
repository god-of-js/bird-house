<script setup lang="ts">
import type { Icons } from './UiIcon.vue'
import UiIcon from './UiIcon.vue'

const currentRoute = useRoute()
const routes: { icon: Icons; path: string }[] = [
  {
    path: '/',
    icon: 'Home',
  },
  {
    path: '/overview',
    icon: 'Grid',
  },

]
</script>

<template>
  <ul class="flex flex-col gap-3 bg-gray-700 px-4 py-5">
    <li v-for="route in routes" :key="route.path" class="rounded-lg hover:bg-primary hover:fill-white" :class="route.path === currentRoute.path ? 'bg-primary fill-white stroke-white' : 'stroke-gray-500 fill-gray-500'">
      <router-link class="block h-full w-full p-3" :to="route.path">
        <UiIcon :icon="route.icon" />
      </router-link>
    </li>
  </ul>
</template>
